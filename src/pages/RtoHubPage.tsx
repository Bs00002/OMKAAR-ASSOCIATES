import React from 'react';
import { useApp } from '../context/AppContext';
import { RTO_SERVICES, MANDATORY_RTO_DISCLAIMER } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceIcon } from '../components/ServiceIcon';
import { RtoSection } from '../components/RtoSection';
import { AadhaarPanSection } from '../components/AadhaarPanSection';
import { FileCheck2, ArrowRight, Send, ShieldCheck } from 'lucide-react';

export const RtoHubPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      <Breadcrumb items={[{ label: 'RTO & Documentation' }]} />

      {/* Hero */}
      <section className="bg-[#7A1F2B] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>PILLAR 2 • RTO & CITIZEN DOCUMENTATION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              RTO Services & Essential Documentation
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">
              Comprehensive assistance for driving licences, vehicle RC transfers, Aadhaar demographic updates, and PAN card processing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Major 3 Pillars inside RTO: RTO Services, Aadhaar, PAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RTO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#D4A017] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] group-hover:bg-[#7A1F2B] group-hover:text-white text-[#7A1F2B] flex items-center justify-center transition-colors">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A1F2B] bg-[#FDF2F4] px-2 py-0.5 rounded border border-[#7A1F2B]/20">
                    Documentation
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#7A1F2B] group-hover:text-[#5A141E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => navigate(service.route)}
                  className="text-xs font-bold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Detailed Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openEnquiryModal(service.title, 'RTO & Documentation')}
                  className="px-3.5 py-1.5 bg-[#F28C28] hover:bg-[#D97718] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Modern RTO Breakdown */}
        <RtoSection />

        {/* Aadhaar & PAN Section */}
        <AadhaarPanSection />

        {/* Disclaimer */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
          <div className="flex items-center gap-2 font-bold text-[#7A1F2B]">
            <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
            <span>Important Statutory Disclaimer</span>
          </div>
          <p>{MANDATORY_RTO_DISCLAIMER}</p>
        </div>

      </div>
    </div>
  );
};
