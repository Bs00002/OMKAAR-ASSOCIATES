import React from 'react';

export const WhyOmkaar: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'PERSONAL GUIDANCE',
      desc: 'Direct consultation from specialists who take time to understand your exact situation rather than giving generic automated answers.',
      accent: 'border-[#D4A017]'
    },
    {
      num: '02',
      title: 'CLEAR PROCESS',
      desc: 'Transparent procedural walkthroughs, honest timelines, and pre-verified fee structures so you never encounter unexpected hurdles.',
      accent: 'border-[#7A1F2B]'
    },
    {
      num: '03',
      title: 'DOCUMENTATION SUPPORT',
      desc: 'Meticulous verification of application forms, proofs, affidavits, and submissions to prevent errors and regulatory rejections.',
      accent: 'border-[#176B3A]'
    },
    {
      num: '04',
      title: 'MULTIPLE SERVICES',
      desc: 'Coordinated assistance spanning banking, tax compliance, RTO licensing, identity updates, and career training under one unified roof.',
      accent: 'border-[#F28C28]'
    }
  ];

  return (
    <section className="py-24 bg-[#F8F4EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous whitespace */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-block px-3.5 py-1 rounded-full bg-white text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40 shadow-2xs">
            WHY OMKAAR
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A1F2B] tracking-tight">
            Why People Choose <span className="text-[#D4A017]">Omkaar</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            A reliable consultancy built on procedural clarity, personal attention, and transparent guidance.
          </p>
        </div>

        {/* 4 Large Typographic Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 sm:p-10 border-t-4 ${item.accent} border-x border-b border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-4xl sm:text-5xl font-black text-[#D4A017]/50 group-hover:text-[#7A1F2B] transition-colors">
                  {item.num}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  PILLAR {item.num}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#7A1F2B] tracking-tight group-hover:text-[#176B3A] transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
