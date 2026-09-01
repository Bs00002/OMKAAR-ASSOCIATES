import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const { openEnquiryModal } = useApp();

  return (
    <section className="py-24 bg-[#7A1F2B] text-white relative overflow-hidden">
      {/* Subtle Background Golden Glow & Architectural line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-6 border border-[#D4A017]/40">
          <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
          <span>OMKAAR ASSOCIATES</span>
        </div>

        {/* Large Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#D4A017] font-cinzel tracking-tight leading-tight">
          Need Assistance With Something?
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need and our team will guide you through the next steps.
        </p>

        {/* Action Buttons: Saffron primary + Green WhatsApp + Phone */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          
          {/* Primary Saffron Button: Enquire Now */}
          <button
            onClick={() => openEnquiryModal()}
            className="px-8 py-4 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>ENQUIRE NOW</span>
          </button>

          {/* Green WhatsApp Button */}
          <a
            href="https://wa.me/919820000000?text=Hello%20Omkaar%20Associates,%20I%20need%20guidance%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#176B3A] hover:bg-[#0F4726] border border-[#D4A017]/40 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#D4A017]" />
            <span>WHATSAPP US</span>
          </a>

          {/* Call Now */}
          <a
            href="tel:+919820000000"
            className="px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#D4A017]" />
            <span>CALL: +91 98200 00000</span>
          </a>

        </div>

        {/* Operating Hours */}
        <div className="mt-10 text-xs text-white/70">
          Consultation Desk: Monday to Saturday, 10:00 AM – 7:00 PM IST
        </div>

      </div>
    </section>
  );
};
