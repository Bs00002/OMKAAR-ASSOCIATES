import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, Landmark, FileCheck2, PhoneCall, ArrowRight } from 'lucide-react';

export const QuickActionCards: React.FC = () => {
  const { navigate } = useApp();

  const cards = [
    {
      title: 'FIND A SERVICE',
      subtitle: 'Browse full catalog & guide',
      icon: Search,
      action: () => navigate('/services'),
      badge: 'Directory',
      theme: {
        iconBg: 'bg-[#FAF3E0]',
        iconColor: 'text-[#D4A017]',
        badgeBg: 'bg-[#FAF3E0]',
        badgeText: 'text-[#B8860B]',
        badgeBorder: 'border-[#D4A017]/30',
        hoverBorder: 'hover:border-[#D4A017]',
        hoverText: 'group-hover:text-[#D4A017]',
        ctaColor: 'text-[#D4A017]'
      }
    },
    {
      title: 'FINANCIAL SOLUTIONS',
      subtitle: 'Loans, GST, ITR & Legal guidance',
      icon: Landmark,
      action: () => navigate('/financial'),
      badge: 'Pillar 1',
      theme: {
        iconBg: 'bg-[#F0F7F2]',
        iconColor: 'text-[#176B3A]',
        badgeBg: 'bg-[#F0F7F2]',
        badgeText: 'text-[#176B3A]',
        badgeBorder: 'border-[#176B3A]/30',
        hoverBorder: 'hover:border-[#176B3A]',
        hoverText: 'group-hover:text-[#176B3A]',
        ctaColor: 'text-[#176B3A]'
      }
    },
    {
      title: 'RTO & DOCUMENTATION',
      subtitle: 'Licence, RC, Aadhaar & PAN',
      icon: FileCheck2,
      action: () => navigate('/rto-documentation'),
      badge: 'Pillar 2',
      theme: {
        iconBg: 'bg-[#FDF2F4]',
        iconColor: 'text-[#7A1F2B]',
        badgeBg: 'bg-[#FDF2F4]',
        badgeText: 'text-[#7A1F2B]',
        badgeBorder: 'border-[#7A1F2B]/30',
        hoverBorder: 'hover:border-[#7A1F2B]',
        hoverText: 'group-hover:text-[#7A1F2B]',
        ctaColor: 'text-[#7A1F2B]'
      }
    },
    {
      title: 'CONTACT US',
      subtitle: 'Speak with our consultants',
      icon: PhoneCall,
      action: () => navigate('/contact'),
      badge: 'Assistance',
      theme: {
        iconBg: 'bg-[#FFF5EC]',
        iconColor: 'text-[#F28C28]',
        badgeBg: 'bg-[#FFF5EC]',
        badgeText: 'text-[#D97718]',
        badgeBorder: 'border-[#F28C28]/30',
        hoverBorder: 'hover:border-[#F28C28]',
        hoverText: 'group-hover:text-[#F28C28]',
        ctaColor: 'text-[#F28C28]'
      }
    }
  ];

  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <button
              key={idx}
              onClick={card.action}
              className={`text-left bg-white rounded-xl p-5 shadow-md hover:shadow-xl border border-[#176B3A]/15 ${card.theme.hoverBorder} transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-lg ${card.theme.iconBg} ${card.theme.iconColor} transition-colors`}>
                    <IconComponent className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${card.theme.badgeText} ${card.theme.badgeBg} px-2 py-0.5 rounded border ${card.theme.badgeBorder}`}>
                    {card.badge}
                  </span>
                </div>
                <h3 className={`font-bold text-sm sm:text-base text-slate-900 ${card.theme.hoverText} transition-colors tracking-tight`}>
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold ${card.theme.ctaColor} transition-colors`}>
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};


