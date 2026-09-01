import React from 'react';
import { useApp } from '../context/AppContext';
import { FINANCIAL_SERVICES, MANDATORY_FINANCIAL_DISCLAIMER } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceIcon } from '../components/ServiceIcon';
import { LoanCalculator } from '../components/LoanCalculator';
import { BusinessTaxLegalTabs } from '../components/BusinessTaxLegalTabs';
import { ArrowRight, Send, ShieldCheck, Building2 } from 'lucide-react';

export const FinancialHubPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      <Breadcrumb items={[{ label: 'Financial Solutions' }]} />

      {/* Hero */}
      <section className="bg-[#176B3A] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40">
              <Building2 className="w-3.5 h-3.5" />
              <span>PILLAR 1 • FINANCIAL ASSISTANCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Financial Solutions & Guidance
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">
              Assistance with personal, gold, home, and mortgage loans, alongside complete GST filing, ITR compliance, and legal documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Loan Calculator */}
        <div>
          <LoanCalculator />
        </div>

        {/* 7 Services Grid */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#176B3A]">
              All Financial Assistance Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select a service below to view detailed requirements, eligibility checklists, and steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINANCIAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#D4A017] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF9F6] group-hover:bg-[#176B3A] group-hover:text-white text-[#176B3A] flex items-center justify-center transition-colors">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B3A] bg-[#F0F7F2] px-2 py-0.5 rounded border border-[#176B3A]/20">
                      Financial
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#176B3A] group-hover:text-[#0F4726] transition-colors">
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
                    <span>View Checklist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openEnquiryModal(service.title, 'Financial Solutions')}
                    className="px-3.5 py-1.5 bg-[#F28C28] hover:bg-[#D97718] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <Send className="w-3 h-3" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business, Tax & Legal editorial section */}
        <BusinessTaxLegalTabs />

        {/* Mandatory Disclaimer */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
          <div className="flex items-center gap-2 font-bold text-[#7A1F2B]">
            <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
            <span>Important Statutory Disclaimer</span>
          </div>
          <p>{MANDATORY_FINANCIAL_DISCLAIMER}</p>
        </div>

      </div>
    </div>
  );
};
