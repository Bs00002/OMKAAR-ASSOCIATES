import React from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, GraduationCap, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export const CareerSection: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FFF5EC] text-[#D97718] font-bold text-xs uppercase tracking-widest mb-3 border border-[#F28C28]/25">
            CAREER & SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7A1F2B] tracking-tight">
            Build Your Next Opportunity
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Support for your career journey through job placement and practical training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. JOB PLACEMENT */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#F28C28] transition-all duration-300">
            <div>
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[#5A141E]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                  alt="Job placement guidance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F2B] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-6 right-6 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#F28C28] text-white border border-white/10">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-white">JOB PLACEMENT</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] bg-[#7A1F2B]/90 border border-white/10 px-2.5 py-1 rounded">
                    Employment
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Explore suitable opportunities and get assistance through the placement process. We assist candidates in resume enhancement, interview readiness, and employer matching.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A1F2B]">What We Offer:</div>
                  {[
                    'Resume evaluation & professional restructuring',
                    'Direct profile matching with verified hiring businesses',
                    'Interview preparation and feedback sessions',
                    'Guidance for Accounts, GST/Tally, Admin, and Sales roles'
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3">
              <button
                onClick={() => navigate('/career/job-placement')}
                className="text-xs font-bold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-1"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openEnquiryModal('Job Placement Assistance', 'Career')}
                className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Find a Job</span>
              </button>
            </div>
          </div>

          {/* 2. TRAINING */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#176B3A] transition-all duration-300">
            <div>
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[#0A331B]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Practical skill training classes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4726] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-6 right-6 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#176B3A] text-[#D4A017] border border-white/10">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-white">TRAINING</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] bg-[#0F4726]/80 border border-white/10 px-2.5 py-1 rounded">
                    Practical Skills
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Build practical skills and prepare for better opportunities. Learn computerized accounting, GST basics, office software, and corporate workplace ethics.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A1F2B]">Course Highlights:</div>
                  {[
                    'Tally Prime with real-world accounting entries & vouchers',
                    'GST & ITR practical filing workflows and invoice structuring',
                    'Advanced Excel: Formulas, Pivot tables, VLOOKUP & Data Validation',
                    'Office Communication, Email etiquette, and interview confidence'
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3">
              <button
                onClick={() => navigate('/career/training')}
                className="text-xs font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openEnquiryModal('Practical Skill Training', 'Career')}
                className="px-5 py-2.5 bg-[#176B3A] hover:bg-[#0F4726] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Explore Training</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


