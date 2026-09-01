import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ServicePillarId } from '../types';
import { FINANCIAL_SERVICES, RTO_SERVICES, CAREER_SERVICES } from '../data/servicesData';
import { ServiceIcon } from './ServiceIcon';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Send, 
  Building2, 
  FileCheck2, 
  GraduationCap
} from 'lucide-react';

export const InteractiveExplorer: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();
  const [activeTab, setActiveTab] = useState<ServicePillarId>('financial');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-[#FAF9F6] border-y border-slate-200" id="explore-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-2 border border-[#7A1F2B]/20">
              Interactive Explorer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7A1F2B] tracking-tight">
              Explore Our Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Select a pillar below to browse detailed assistance options and requirements.
            </p>
          </div>

          {/* Pillar Navigation Tabs */}
          <div className="flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-xs self-start md:self-auto overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setActiveTab('financial')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shrink-0 ${
                activeTab === 'financial'
                  ? 'bg-[#176B3A] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#176B3A] hover:bg-[#F0F7F2]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>FINANCIAL</span>
            </button>

            <button
              onClick={() => setActiveTab('rto-documentation')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shrink-0 ${
                activeTab === 'rto-documentation'
                  ? 'bg-[#7A1F2B] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#7A1F2B] hover:bg-[#FDF2F4]'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>RTO & DOCUMENTATION</span>
            </button>

            <button
              onClick={() => setActiveTab('career')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shrink-0 ${
                activeTab === 'career'
                  ? 'bg-[#F28C28] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#F28C28] hover:bg-[#FFF5EC]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>CAREER</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: FINANCIAL SERVICES CAROUSEL (Horizontal scrolling with navigation) */}
        {/* ========================================================================= */}
        {activeTab === 'financial' && (
          <div className="space-y-6">
            
            {/* Carousel Top Controls */}
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-slate-500">
                Swipe or use arrows to view all 7 financial assistance areas:
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-[#F0F7F2] hover:text-[#176B3A] transition-colors shadow-xs"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-[#F0F7F2] hover:text-[#176B3A] transition-colors shadow-xs"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Track */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
              {FINANCIAL_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#D4A017] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#F0F7F2] group-hover:bg-[#176B3A] group-hover:text-white text-[#176B3A] flex items-center justify-center transition-colors">
                        <ServiceIcon name={service.iconName} className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B3A] bg-[#F0F7F2] px-2 py-0.5 rounded border border-[#176B3A]/20">
                        Assistance
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-[#176B3A] group-hover:text-[#0F4726] transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => navigate(service.route)}
                      className="text-xs font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => openEnquiryModal(service.title, 'Financial Solutions')}
                      className="px-3 py-1.5 bg-[#F28C28] hover:bg-[#D97718] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <Send className="w-3 h-3" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto bg-slate-200 h-1 rounded-full overflow-hidden">
              <div
                className="bg-[#176B3A] h-full transition-all duration-150"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: RTO & DOCUMENTATION GRID                                           */}
        {/* ========================================================================= */}
        {activeTab === 'rto-documentation' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {RTO_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#D4A017] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FDF2F4] group-hover:bg-[#7A1F2B] group-hover:text-white text-[#7A1F2B] flex items-center justify-center transition-colors">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A1F2B] bg-[#FDF2F4] px-2 py-0.5 rounded border border-[#7A1F2B]/20">
                      Documentation
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#7A1F2B] group-hover:text-[#5A141E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => navigate(service.route)}
                    className="text-xs font-bold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openEnquiryModal(service.title, 'RTO & Documentation')}
                    className="px-3 py-1.5 bg-[#F28C28] hover:bg-[#D97718] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <Send className="w-3 h-3" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CAREER GRID                                                        */}
        {/* ========================================================================= */}
        {activeTab === 'career' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-200">
            {CAREER_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#D4A017] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#FFF5EC] group-hover:bg-[#F28C28] group-hover:text-white text-[#F28C28] flex items-center justify-center transition-colors">
                      <ServiceIcon name={service.iconName} className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28] bg-[#FFF5EC] border border-[#F28C28]/20 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F28C28] group-hover:text-[#D97718] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.overview}
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-bold uppercase text-slate-500">Key Support Areas:</div>
                    {service.whatWeAssistWith.slice(0, 3).map((item, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-[#176B3A] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => navigate(service.route)}
                    className="text-xs font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1.5"
                  >
                    <span>Read Full Program Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openEnquiryModal(service.title, 'Career')}
                    className="px-4 py-2 bg-[#F28C28] hover:bg-[#D97718] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Apply / Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
