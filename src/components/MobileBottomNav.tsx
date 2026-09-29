import React from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Send } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { openEnquiryModal } = useApp();

  return (
    <>
      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#7A1F2B] text-white border-t border-[#D4A017]/30 shadow-2xl px-3 py-2 safe-area-bottom">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {/* EMAIL */}
          <a
            href="mailto:omkaarassociates9@gmail.com"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors"
            aria-label="Email Omkaar Associates"
          >
            <Mail className="w-4 h-4 text-[#D4A017]" />
            <span className="text-xs font-bold tracking-wider uppercase">EMAIL US</span>
          </a>

          {/* ENQUIRE */}
          <button
            onClick={() => openEnquiryModal()}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#F28C28] hover:bg-[#D97718] active:bg-[#B85E0A] text-white transition-colors shadow-sm"
            aria-label="Submit Service Enquiry"
          >
            <Send className="w-4 h-4 text-white" />
            <span className="text-xs font-bold tracking-wider uppercase">ENQUIRE NOW</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Action Button */}
      <aside aria-label="Quick contact" className="hidden lg:block fixed bottom-6 right-6 z-40">
        <button
          onClick={() => openEnquiryModal()}
          className="flex items-center gap-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group border border-white/20 cursor-pointer"
          aria-label="Instant Online Enquiry"
        >
          <div className="p-1.5 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
            <Send className="w-4 h-4 text-white" />
          </div>
          <div className="text-left pr-1">
            <div className="text-[10px] uppercase font-bold text-white/80 tracking-wider">Need Assistance?</div>
            <div className="text-xs font-bold whitespace-nowrap">Instant Enquiry</div>
          </div>
        </button>
      </aside>
    </>
  );
};


