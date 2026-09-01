import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquareText, SearchCheck, FileCheck, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { openEnquiryModal } = useApp();

  const steps = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Submit your requirement online or visit our office to discuss your goal.',
      icon: MessageSquareText
    },
    {
      num: '02',
      title: 'Understand the Process',
      desc: 'Our specialist reviews the exact statutory criteria, eligibility, and timeline.',
      icon: SearchCheck
    },
    {
      num: '03',
      title: 'Submit Required Documents',
      desc: 'We verify your paperwork against the required checklist to prevent delays.',
      icon: FileCheck
    },
    {
      num: '04',
      title: 'Complete Your Service',
      desc: 'We handle the submission, tracking, and coordination until successful completion.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-[#D4A017]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#FAF3E0] text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40 shadow-2xs">
            STEP-BY-STEP PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A1F2B] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A transparent and structured approach designed to eliminate confusion and save your time.
          </p>
        </div>

        {/* Desktop 4-Step Horizontal Timeline with Golden connecting line */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          
          {/* Golden Connecting Line behind circles */}
          <div className="absolute top-10 left-16 right-16 h-0.5 bg-[#D4A017] -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Step Circle with Golden frame */}
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#D4A017] shadow-sm flex items-center justify-center text-[#7A1F2B] group-hover:bg-[#7A1F2B] group-hover:text-[#D4A017] group-hover:border-[#7A1F2B] transition-all duration-300 mb-6">
                  <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                </div>

                <span className="text-xs font-mono font-bold text-[#D4A017] uppercase tracking-wider mb-2">
                  STEP {step.num}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#7A1F2B] group-hover:text-[#176B3A] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-[#D4A017] ml-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative pl-6 group">
                {/* Node on line */}
                <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-xl bg-[#7A1F2B] border border-[#D4A017] text-[#D4A017] flex items-center justify-center font-bold text-xs shadow-xs">
                  {step.num}
                </div>

                <div className="bg-[#F8F4EA] p-5 rounded-2xl border border-[#D4A017]/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-5 h-5 text-[#176B3A]" />
                    <h3 className="text-base font-bold text-[#7A1F2B]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>Start Step 01: Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
