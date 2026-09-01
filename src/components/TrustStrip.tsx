import React from 'react';
import { useApp } from '../context/AppContext';
import { Landmark, FileCheck2, GraduationCap, CheckCircle2, Layers } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { navigate } = useApp();

  const trustItems = [
    {
      num: '01',
      title: 'Financial Assistance',
      icon: Landmark,
      route: '/financial'
    },
    {
      num: '02',
      title: 'RTO & Documentation',
      icon: FileCheck2,
      route: '/rto-documentation'
    },
    {
      num: '03',
      title: 'Career Support',
      icon: GraduationCap,
      route: '/career'
    },
    {
      num: '04',
      title: 'Step-by-Step Guidance',
      icon: CheckCircle2,
      route: '/about'
    },
    {
      num: '05',
      title: 'Multiple Services',
      icon: Layers,
      route: '/services'
    }
  ];

  return (
    <section className="bg-white border-y border-[#D4A017]/30 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF3E0] text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-2 border border-[#D4A017]/40">
            INTEGRATED CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A1F2B] tracking-tight">
            Professional Assistance, All Under One Roof
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Structured consultancy across key personal, legal, automotive, and career milestones.
          </p>
        </div>

        {/* Horizontal scrollable row on mobile, 5 equal items on desktop */}
        <div className="flex items-center lg:justify-between gap-6 overflow-x-auto no-scrollbar py-2">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => navigate(item.route)}
                className="flex items-center gap-3 shrink-0 text-left hover:text-[#7A1F2B] transition-all group cursor-pointer p-2 rounded-xl hover:bg-[#F8F4EA]"
              >
                <span className="font-mono text-sm font-bold text-[#D4A017] group-hover:text-[#7A1F2B] transition-colors">
                  {item.num}
                </span>

                <div className="w-9 h-9 rounded-xl bg-[#F8F4EA] border border-[#D4A017]/40 group-hover:border-[#7A1F2B] group-hover:bg-[#FDF2F4] flex items-center justify-center text-[#7A1F2B] transition-all shrink-0">
                  <Icon className="w-4 h-4 text-[#7A1F2B] group-hover:text-[#176B3A] transition-colors" />
                </div>

                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#7A1F2B] whitespace-nowrap transition-colors">
                  {item.title}
                </span>

                {idx < trustItems.length - 1 && (
                  <span className="hidden lg:inline-block ml-4 text-[#D4A017]/40 text-sm font-light">
                    /
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
