import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { CareerSection } from '../components/CareerSection';
import { GraduationCap, Send } from 'lucide-react';

export const CareerHubPage: React.FC = () => {
  const { openEnquiryModal } = useApp();

  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      <Breadcrumb items={[{ label: 'Career Services' }]} />

      {/* Hero */}
      <section className="bg-[#176B3A] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F28C28]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>PILLAR 3 • CAREER & PRACTICAL TRAINING</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Job Placement & Practical Skill Training
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">
              Assisting job aspirants in finding verified employment opportunities and gaining hands-on job skills in accounting, Tally Prime, GST, and office management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Career Section Component */}
        <CareerSection />

        {/* Training Modules Breakdown */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
              Course Syllabus Preview
            </span>
            <h2 className="text-2xl font-bold text-[#176B3A] mt-1">
              Practical Business Skills Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Designed specifically for freshers and working executives wanting immediate workplace proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200">
              <h3 className="font-bold text-sm text-[#176B3A] mb-2">
                1. Computerized Accounting (Tally Prime)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ledger creation, voucher entries, bank reconciliations, inventory management, purchase/sales registers, and balance sheet finalization.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200">
              <h3 className="font-bold text-sm text-[#176B3A] mb-2">
                2. Applied GST & Direct Taxation Basics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tax invoice rules, HSN codes, GSTR-1 sales compilation, GSTR-3B return overview, ITC verification, and Form 16 collation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200">
              <h3 className="font-bold text-sm text-[#176B3A] mb-2">
                3. Office Productivity & Communication
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advanced Excel formulas (VLOOKUP, XLOOKUP, Pivot Tables), business email drafting, and interview confidence coaching.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-600">
              Batch timings: Weekday & Weekend slots available.
            </div>
            <button
              onClick={() => openEnquiryModal('Practical Training Course', 'Career')}
              className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire for Next Batch</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
