import React from 'react';
import { useApp } from '../context/AppContext';
import { MANDATORY_FINANCIAL_DISCLAIMER } from '../data/servicesData';
import { 
  CheckCircle2, 
  FileText, 
  Compass, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Send
} from 'lucide-react';

export const FinancialFeature: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  const benefits = [
    {
      title: 'Clear Guidance',
      desc: 'Understand options, eligibility factors, and loan criteria without confusion.',
      icon: Compass
    },
    {
      title: 'Document Support',
      desc: 'Organized compilation of KYC, ITRs, bank statements, and title papers.',
      icon: FileText
    },
    {
      title: 'Application Assistance',
      desc: 'Accurate form completion to minimize rejections and processing delays.',
      icon: CheckCircle2
    },
    {
      title: 'Process Support',
      desc: 'Continuous follow-up and verification assistance until final completion.',
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Large Professional Financial Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#176B3A]/20 bg-[#0A331B]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
                  alt="Financial guidance and document review at Omkaar Associates"
                  className="w-full h-[460px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4726] via-transparent to-transparent opacity-75" />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#176B3A]/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#176B3A] text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F4726] uppercase tracking-wider">
                      Transparent Facilitation
                    </div>
                    <div className="text-xs text-slate-600">
                      Zero false promises. Legitimate, procedural assistance tailored to your profile.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#F0F7F2] text-[#176B3A] font-bold text-xs uppercase tracking-widest border border-[#176B3A]/20">
              FINANCIAL SOLUTIONS
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7A1F2B] tracking-tight leading-tight">
              Guidance for the Financial Solution You Need
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Get assistance with financial applications, documentation and related processes. From personal and gold loans to mortgage finance and tax compliance, we structure your paperwork properly.
            </p>

            {/* 4 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80 hover:border-[#D4A017] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1 rounded bg-[#176B3A] text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#7A1F2B]">{b.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openEnquiryModal('Financial Solutions Assistance', 'Financial Solutions')}
                className="px-6 py-3.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enquire About Financial Solutions</span>
              </button>

              <button
                onClick={() => navigate('/financial')}
                className="px-5 py-3.5 bg-[#F0F7F2] hover:bg-[#E0EFE6] text-[#176B3A] font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-1.5 border border-[#176B3A]/20"
              >
                <span>View All 7 Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Required Disclaimer */}
            <div className="pt-3 border-t border-slate-200">
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                <strong className="not-italic text-slate-700">Disclaimer:</strong> {MANDATORY_FINANCIAL_DISCLAIMER}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


