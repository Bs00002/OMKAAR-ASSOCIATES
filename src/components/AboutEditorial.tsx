import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

export const AboutEditorial: React.FC = () => {
  const { navigate } = useApp();

  const benefits = [
    { title: 'Clear Guidance', desc: 'Practical, step-by-step direction tailored to your exact case.' },
    { title: 'Simple Process', desc: 'Uncomplicated paperwork filing with upfront checklists.' },
    { title: 'Personal Assistance', desc: 'Direct support from experienced consultants who care.' },
    { title: 'Multiple Services', desc: 'Financial, transport, ID, and career solutions under one roof.' }
  ];

  return (
    <section className="py-24 bg-white border-y border-[#D4A017]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Authentic Photograph Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Subtle Offset Architectural Frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-[#D4A017]/40 translate-x-2 translate-y-2 pointer-events-none" />
              
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#7A1F2B] shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                  alt="Omkaar Associates Consultation & Assistance Desk"
                  className="w-full h-80 sm:h-[440px] lg:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F2B]/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF3E0] border border-[#D4A017]/50 text-[#7A1F2B] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>ABOUT OMKAAR ASSOCIATES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A1F2B] tracking-tight leading-[1.14]">
              Assistance That Makes <br className="hidden sm:inline" />
              <span className="text-[#D4A017]">Things Simple.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Omkaar Associates helps individuals and businesses navigate financial assistance, RTO & documentation, career services, and Aadhaar/PAN with clear, step-by-step guidance.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Instead of running between different offices, banks, and complicated statutory portals, our dedicated team provides straightforward guidance, organizes your paperwork, and coordinates every step with complete transparency.
            </p>

            {/* 4 Points with Golden Check Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {benefits.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F4EA] border border-[#D4A017]/25">
                  <div className="w-5 h-5 rounded-full bg-[#D4A017] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#7A1F2B]">
                      {point.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-[#7A1F2B] hover:bg-[#5A141E] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>About Omkaar</span>
                <ArrowRight className="w-4 h-4 text-[#D4A017]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
