import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageCircle, Send } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { openEnquiryModal } = useApp();

  return (
    <>
      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#7A1F2B] text-white border-t border-[#D4A017]/30 shadow-2xl px-2 py-2 safe-area-bottom">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* CALL */}
          <a
            href="tel:+919820000000"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors"
            aria-label="Call Omkaar Associates"
          >
            <Phone className="w-4 h-4 text-[#D4A017] mb-1" />
            <span className="text-[11px] font-bold tracking-wider uppercase">CALL</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919820000000?text=Hello%20Omkaar%20Associates,%20I%20need%20assistance%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#176B3A] hover:bg-[#0F4726] active:bg-[#062010] text-white transition-colors border border-white/10"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 mb-1 text-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-wider uppercase">WHATSAPP</span>
          </a>

          {/* ENQUIRE */}
          <button
            onClick={() => openEnquiryModal()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#F28C28] hover:bg-[#D97718] active:bg-[#B85E0A] text-white transition-colors shadow-sm"
            aria-label="Submit Service Enquiry"
          >
            <Send className="w-4 h-4 mb-1 text-white" />
            <span className="text-[11px] font-bold tracking-wider uppercase">ENQUIRE</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Quick contact" className="hidden lg:block fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919820000000?text=Hello%20Omkaar%20Associates,%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#176B3A] hover:bg-[#0F4726] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group border border-[#D4A017]/40"
          aria-label="Direct WhatsApp Consultation"
        >
          <div className="p-1 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 text-[#D4A017]" />
          </div>
          <div className="text-left pr-1">
            <div className="text-[10px] uppercase font-bold text-[#D4A017] tracking-wider">Quick Help</div>
            <div className="text-xs font-bold whitespace-nowrap">Chat on WhatsApp</div>
          </div>
        </a>
      </aside>
    </>
  );
};


