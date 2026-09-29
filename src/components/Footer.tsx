import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  FINANCIAL_SERVICES, 
  RTO_SERVICES, 
  CAREER_SERVICES,
  MANDATORY_FINANCIAL_DISCLAIMER,
  MANDATORY_RTO_DISCLAIMER
} from '../data/servicesData';
import { Phone, MessageCircle, Mail, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  return (
    <footer className="bg-[#4A121A] text-slate-200 pt-16 pb-24 lg:pb-12 border-t border-[#D4A017]/30 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#7A1F2B]/60">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D4A017] flex items-center justify-center text-[#4A121A] font-bold text-lg">
                Ω
              </div>
              <div className="font-cinzel font-bold text-xl text-white tracking-tight">
                OMKAAR <span className="text-[#D4A017]">ASSOCIATES</span>
              </div>
            </div>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              A trusted multi-service consultancy and assistance centre in India. Providing dedicated guidance across Financial Solutions, RTO & Essential Documentation, and Career Development.
            </p>
            
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-white/90">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>Helpline: +91 98200 00000 / +91 22 2800 0000</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <MessageCircle className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>WhatsApp: +91 98200 00000 (Mon–Sat, 10 AM – 7 PM)</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href="mailto:omkaarassociates9@gmail.com" className="hover:text-[#D4A017] transition-colors">
                  Email: omkaarassociates9@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-white/90">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>Branch Consultation Centre, Main Commercial Complex, India</span>
              </div>
            </div>
          </div>

          {/* Pillar 1: Financial */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#D4A017] border-b border-[#7A1F2B]/60 pb-2">
              Financial Solutions
            </h3>
            <ul className="space-y-1.5 text-xs text-white/80">
              {FINANCIAL_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => navigate(s.route)}
                    className="hover:text-[#D4A017] transition-colors text-left flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-[#D4A017]">›</span> {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2 & 3: RTO & Career */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#D4A017] border-b border-[#7A1F2B]/60 pb-2 mb-2">
                RTO & Documentation
              </h3>
              <ul className="space-y-1.5 text-xs text-white/80">
                {RTO_SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => navigate(s.route)}
                      className="hover:text-[#D4A017] transition-colors text-left flex items-center gap-1.5 py-0.5"
                    >
                      <span className="text-[#D4A017]">›</span> {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#D4A017] border-b border-[#7A1F2B]/60 pb-2 mb-2">
                Career & Training
              </h3>
              <ul className="space-y-1.5 text-xs text-white/80">
                {CAREER_SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => navigate(s.route)}
                      className="hover:text-[#D4A017] transition-colors text-left flex items-center gap-1.5 py-0.5"
                    >
                      <span className="text-[#D4A017]">›</span> {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#D4A017] border-b border-[#7A1F2B]/60 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-[#D4A017] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-[#D4A017] transition-colors">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-[#D4A017] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-[#D4A017] transition-colors">
                  Contact & Enquiries
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal()}
                className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider bg-[#F28C28] hover:bg-[#D97718] text-white rounded-lg transition-colors text-center block shadow-sm"
              >
                Instant Enquiry
              </button>
            </div>
          </div>

        </div>

        {/* Statutory Disclaimers Section */}
        <div className="py-6 border-b border-[#7A1F2B]/60 text-[11px] text-white/70 space-y-2 leading-relaxed">
          <div className="flex items-start gap-2">
            <Shield className="w-3.5 h-3.5 text-[#D4A017] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Financial Disclaimer:</strong> {MANDATORY_FINANCIAL_DISCLAIMER}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="w-3.5 h-3.5 text-[#D4A017] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Documentation & Authority Disclaimer:</strong> {MANDATORY_RTO_DISCLAIMER}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <div>
            © {new Date().getFullYear()} OMKAAR ASSOCIATES. All Rights Reserved. Multi-Service Assistance & Consultancy.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/60">Privacy & Terms Policy</span>
            <span className="text-white/60">Service Transparency</span>
          </div>
        </div>

      </div>
    </footer>
  );
};


