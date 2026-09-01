import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_SERVICES, RTO_SUB_SERVICES } from '../data/servicesData';
import { Search, ArrowRight, X, Sparkles, Car } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';

interface ServiceSearchProps {
  variant?: 'hero' | 'compact' | 'standalone';
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({ variant = 'hero' }) => {
  const { navigate, openEnquiryModal } = useApp();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const filteredServices = ALL_SERVICES.filter(service => {
    const q = query.toLowerCase().trim();
    if (!q) return false;
    return (
      service.title.toLowerCase().includes(q) ||
      service.shortDesc.toLowerCase().includes(q) ||
      service.overview.toLowerCase().includes(q) ||
      service.pillarId.toLowerCase().includes(q) ||
      (service.tag && service.tag.toLowerCase().includes(q))
    );
  });

  const filteredRtoSub = RTO_SUB_SERVICES.filter(r => {
    const q = query.toLowerCase().trim();
    if (!q) return false;
    return r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
  });

  const hasResults = filteredServices.length > 0 || filteredRtoSub.length > 0;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectService = (route: string) => {
    navigate(route);
    setIsOpen(false);
    setQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredServices.length > 0) {
      handleSelectService(filteredServices[0].route);
    } else if (filteredRtoSub.length > 0) {
      handleSelectService('/rto-documentation/rto-services');
    } else {
      navigate('/services');
    }
  };

  return (
    <div ref={searchContainerRef} className="relative w-full max-w-2xl mx-auto">
      {variant === 'hero' && (
        <label className="block text-xs font-bold text-[#D4A017] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
          <span>What service are you looking for?</span>
        </label>
      )}

      {/* Input Bar */}
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search Gold Loan, RTO, GST, PAN, Jobs..."
            className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 rounded-l-lg sm:rounded-l-xl border-y border-l border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-3 sm:py-3.5 rounded-r-lg sm:rounded-r-xl border border-[#F28C28] transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
        >
          <span>SEARCH</span>
          <ArrowRight className="w-4 h-4 hidden sm:inline" />
        </button>
      </form>

      {/* Suggested Quick Filter Pills under search in hero */}
      {variant === 'hero' && !isOpen && (
        <div className="mt-2.5 flex items-center flex-wrap gap-1.5 text-xs text-white/80">
          <span className="text-[11px] text-[#D4A017] font-semibold">Popular:</span>
          {['Gold Loan', 'RTO Licence', 'GST Filing', 'PAN Card', 'Job Placement'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setQuery(tag);
                setIsOpen(true);
              }}
              className="px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[11px] font-medium transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Autocomplete / Live Dropdown Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          {query.trim().length === 0 ? (
            <div className="p-4 text-xs text-slate-500">
              <div className="font-bold text-[#7A1F2B] uppercase tracking-wider mb-2">
                Frequently Requested Services:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { name: 'Gold Loan Assistance', route: '/financial/gold-loan-assistance' },
                  { name: 'RTO & Driving Licence', route: '/rto-documentation/rto-services' },
                  { name: 'GST & ITR Services', route: '/financial/gst' },
                  { name: 'Job Placement', route: '/career/job-placement' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSelectService(item.route)}
                    className="p-2 text-left rounded-lg bg-[#FAF9F6] hover:bg-[#FDF2F4] flex items-center justify-between text-slate-800 text-xs font-semibold group transition-colors border border-slate-100"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7A1F2B] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ) : hasResults ? (
            <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 p-2">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(service.route)}
                  className="w-full text-left p-3 hover:bg-[#FAF9F6] rounded-lg flex items-start gap-3 transition-colors group"
                >
                  <div className="p-2 rounded bg-[#FAF9F6] text-[#176B3A] group-hover:bg-[#176B3A] group-hover:text-white transition-colors shrink-0">
                    <ServiceIcon name={service.iconName} className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#7A1F2B]">
                        {service.title}
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#FAF9F6] text-[#176B3A] border border-[#176B3A]/20">
                        {service.pillarId.replace('-', ' & ')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {service.shortDesc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#7A1F2B] shrink-0 self-center" />
                </button>
              ))}

              {filteredRtoSub.map((rtoItem) => (
                <button
                  key={rtoItem.code}
                  onClick={() => handleSelectService('/rto-documentation/rto-services')}
                  className="w-full text-left p-3 hover:bg-[#FAF3E0] rounded-lg flex items-start gap-3 transition-colors group"
                >
                  <div className="p-2 rounded bg-[#FAF3E0] text-[#D4A017] group-hover:bg-[#7A1F2B] group-hover:text-white transition-colors shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#7A1F2B]">
                        {rtoItem.title}
                      </span>
                      <span className="text-[10px] font-bold text-[#D4A017] bg-[#FAF3E0] px-1.5 py-0.5 rounded border border-[#D4A017]/30">
                        RTO Service
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                      {rtoItem.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm font-semibold text-slate-700">
                No exact match for "{query}"
              </p>
              <p className="text-xs text-slate-500 mt-1">
                You can browse all services or connect with our assistance team.
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <button
                  onClick={() => handleSelectService('/services')}
                  className="px-3.5 py-1.5 bg-[#176B3A] text-white rounded text-xs font-semibold hover:bg-[#0F4726]"
                >
                  View All Services
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openEnquiryModal(query);
                  }}
                  className="px-3.5 py-1.5 bg-[#F28C28] text-white rounded text-xs font-semibold hover:bg-[#D97718]"
                >
                  Enquire About "{query}"
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

