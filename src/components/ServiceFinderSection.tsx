import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceSearch } from './ServiceSearch';
import { Sparkles } from 'lucide-react';

export const ServiceFinderSection: React.FC = () => {
  const { navigate } = useApp();

  const quickShortcuts = [
    { label: 'Gold Loan Assistance', route: '/financial/gold-loan-assistance' },
    { label: 'Driving Licence Services', route: '/rto-documentation/rto-services' },
    { label: 'GST Return Filing', route: '/financial/gst' },
    { label: 'PAN Card Support', route: '/rto-documentation/pan' },
    { label: 'Aadhaar Seva', route: '/rto-documentation/aadhaar' },
    { label: 'Job & Practical Training', route: '/career' }
  ];

  return (
    <section className="py-16 bg-[#F8F4EA] border-b border-[#D4A017]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Section Heading */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D4A017]/40 text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-2 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#D4A017]" />
            <span>SERVICE FINDER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7A1F2B] tracking-tight">
            How Can We Help You Today?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Search our comprehensive catalog of financial guidance, citizen documentation, and career assistance.
          </p>
        </div>

        {/* Dedicated Search Input Container */}
        <div className="max-w-2xl mx-auto">
          <ServiceSearch variant="hero" />
        </div>

        {/* Quick Service Shortcuts */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600">
          <span className="font-bold text-[#176B3A] mr-1">Popular Assistance:</span>
          {quickShortcuts.map((sc, idx) => (
            <button
              key={idx}
              onClick={() => navigate(sc.route)}
              className="px-3.5 py-1.5 bg-white hover:bg-[#FDF2F4] border border-[#D4A017]/30 hover:border-[#7A1F2B] text-slate-700 hover:text-[#7A1F2B] font-medium rounded-full transition-all shadow-2xs"
            >
              {sc.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
