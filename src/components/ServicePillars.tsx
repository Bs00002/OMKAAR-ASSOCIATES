import React from 'react';
import { useApp } from '../context/AppContext';
import { Landmark, FileCheck2, GraduationCap, Fingerprint, ArrowRight } from 'lucide-react';

export const ServicePillars: React.FC = () => {
  const { navigate } = useApp();

  const pillars = [
    {
      id: 'financial',
      title: 'FINANCIAL SERVICES',
      desc: 'Gold Loan, Home Loan, Mortgage Loan, GST, ITR, Legal Consultancy & More',
      icon: Landmark,
      route: '/financial',
      color: 'border-[#7A1F2B] text-[#7A1F2B]',
      iconBg: 'bg-[#FDF2F4] text-[#7A1F2B]',
      accentBg: 'hover:border-[#7A1F2B]'
    },
    {
      id: 'rto',
      title: 'RTO SERVICES',
      desc: 'Driving Licence, Learning Licence, RC, NOC, Vehicle Transfer & More',
      icon: FileCheck2,
      route: '/rto-documentation',
      color: 'border-[#176B3A] text-[#176B3A]',
      iconBg: 'bg-[#F0F7F2] text-[#176B3A]',
      accentBg: 'hover:border-[#176B3A]'
    },
    {
      id: 'career',
      title: 'CAREER SERVICES',
      desc: 'Job Placement, Training, Career Guidance & More',
      icon: GraduationCap,
      route: '/career',
      color: 'border-[#F28C28] text-[#F28C28]',
      iconBg: 'bg-[#FFF5EC] text-[#F28C28]',
      accentBg: 'hover:border-[#F28C28]'
    },
    {
      id: 'aadhaar-pan',
      title: 'AADHAAR & PAN SERVICES',
      desc: 'Aadhaar Seva, PAN Card, Documentation Assistance',
      icon: Fingerprint,
      route: '/rto-documentation/aadhaar',
      color: 'border-[#D4A017] text-[#D4A017]',
      iconBg: 'bg-[#FAF3E0] text-[#D4A017]',
      accentBg: 'hover:border-[#D4A017]'
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-10 border-b border-[#D4A017]/20 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => navigate(p.route)}
                className={`text-left p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 ${p.accentBg} hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Top Icon & Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${p.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 group-hover:text-[#7A1F2B] transition-colors">
                    {p.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#D4A017] transition-colors">
                  <span>Explore Guidance</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};


