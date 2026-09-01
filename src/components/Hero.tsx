import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, PhoneCall, UserCheck, ClipboardCheck, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/hero-banner.png';

export const Hero: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-10 lg:pb-14 min-h-[500px] lg:min-h-[560px] xl:min-h-[600px] flex items-center border-b border-[#D4A017]/25">
      
      {/* ========================================================================= */}
      {/* FULL-WIDTH HORIZONTAL BACKGROUND IMAGE WITH SUBTLE FADE ON LEFT           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroImg}
          alt="Omkaar Associates Professional Multi-Service Team"
          className="w-full h-full object-cover object-right"
        />
        {/* Subtle warm ivory fade on the left so text is 100% crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 via-35% lg:via-30% to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* HERO CONTENT CONTAINER                                                    */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT CONTENT (60% width on desktop) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6">
            
            {/* SMALL LABEL PILL BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#D4A017]/40 shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              <span className="text-[#7A1F2B] font-bold text-xs uppercase tracking-widest">
                OMKAAR ASSOCIATES
              </span>
              <span className="text-[#D4A017] font-bold">•</span>
              <span className="text-[#176B3A] font-bold text-xs uppercase tracking-widest">
                MULTI-SERVICE CONSULTANCY
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="block font-serif text-[#7A1F2B]">One Place.</span>
                <span className="block font-sans uppercase font-black text-[#D4A017] tracking-tight">
                  MULTIPLE
                </span>
                <span className="block font-sans uppercase font-black text-[#D4A017] tracking-tight">
                  SOLUTIONS.
                </span>
              </h1>

              {/* GREEN SUPPORTING HEADLINE */}
              <p className="text-xl sm:text-2xl font-bold text-[#176B3A] pt-2">
                Your Trusted Partner for Everyday Services
              </p>
            </div>

            {/* DESCRIPTION PARAGRAPH */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-xl">
              Professional assistance for Financial Services, RTO & Documentation, Career Support and more — with clear, step-by-step guidance.
            </p>

            {/* CTA BUTTONS */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/services')}
                className="px-7 py-3.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[#F28C28]"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openEnquiryModal()}
                className="px-7 py-3.5 bg-white/90 hover:bg-white border-2 border-[#7A1F2B] text-[#7A1F2B] font-bold text-sm uppercase tracking-wider rounded-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-2xs hover:shadow-xs focus-visible:ring-2 focus-visible:ring-[#7A1F2B]"
              >
                <PhoneCall className="w-4 h-4 text-[#7A1F2B]" />
                <span>CONTACT US</span>
              </button>
            </div>

            {/* BOTTOM SUBTLE TRUST STRIP */}
            <div className="pt-4 border-t border-[#D4A017]/30 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#D4A017]" />
                <span>Simple Guidance</span>
              </div>
              <span className="text-[#D4A017] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ClipboardCheck className="w-4 h-4 text-[#176B3A]" />
                <span>Clear Process</span>
              </div>
              <span className="text-[#D4A017] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
                <span>Personal Assistance</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
