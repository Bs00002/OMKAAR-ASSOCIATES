import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_SERVICES, PILLARS, MANDATORY_FINANCIAL_DISCLAIMER } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceIcon } from '../components/ServiceIcon';
import { ServiceSearch } from '../components/ServiceSearch';
import { ArrowRight, Send, Filter, ShieldCheck } from 'lucide-react';

export const ServicesIndexPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();
  const [selectedPillar, setSelectedPillar] = useState<string>('all');

  const filtered = selectedPillar === 'all'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.pillarId === selectedPillar);

  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'All Services Catalog' }]} />

      {/* Hero Header */}
      <section className="bg-[#7A1F2B] text-white py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40">
              SERVICE DIRECTORY
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Complete Services Catalog
            </h1>
            <p className="mt-3 text-base text-white/90">
              Explore our structured assistance offerings across Financial Solutions, RTO & Documentation, and Career Development.
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <ServiceSearch variant="compact" />
          </div>
        </div>
      </section>

      {/* Main Catalog View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#7A1F2B]" />
            <span className="text-xs font-bold text-[#7A1F2B] uppercase tracking-wider">Filter By Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPillar('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                selectedPillar === 'all'
                  ? 'bg-[#7A1F2B] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-[#FDF2F4] border border-slate-200'
              }`}
            >
              All Services ({ALL_SERVICES.length})
            </button>
            {PILLARS.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedPillar === p.id
                    ? 'bg-[#7A1F2B] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-[#FDF2F4] border border-slate-200'
                }`}
              >
                {p.title} ({p.services.length})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#D4A017] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FAF9F6] group-hover:bg-[#7A1F2B] group-hover:text-white text-[#7A1F2B] flex items-center justify-center transition-colors">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A1F2B] bg-[#FDF2F4] px-2 py-0.5 rounded border border-[#7A1F2B]/20">
                    {service.pillarId.replace('-', ' & ')}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#7A1F2B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => navigate(service.route)}
                  className="text-xs font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openEnquiryModal(service.title)}
                  className="px-3.5 py-1.5 bg-[#F28C28] hover:bg-[#D97718] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#7A1F2B]">Assistance Disclosure:</strong> {MANDATORY_FINANCIAL_DISCLAIMER} Omkaar Associates provides procedural guidance, paperwork support, and coordination.
          </div>
        </div>

      </div>
    </div>
  );
};
