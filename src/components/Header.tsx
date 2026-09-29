import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { FINANCIAL_SERVICES, RTO_SERVICES, CAREER_SERVICES } from '../data/servicesData';
import { ServiceIcon } from './ServiceIcon';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck2,
  GraduationCap
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate, openEnquiryModal, isMegaMenuOpen, setIsMegaMenuOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsMegaMenuOpen]);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F8F4EA]/95 backdrop-blur-md border-b border-[#D4A017]/25 ${
          isScrolled
            ? 'py-2.5 shadow-sm'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-11">
            
            {/* ZONE 1: BRAND TITLE */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('/')}
                className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-md px-1 py-0.5"
                aria-label="Omkaar Associates Home"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7A1F2B] border border-[#D4A017] flex items-center justify-center text-[#D4A017] font-bold text-base shadow-xs group-hover:scale-105 transition-transform shrink-0">
                  Ω
                </div>
                <div className="whitespace-nowrap font-bold tracking-tight text-lg sm:text-xl font-cinzel">
                  <span className="text-[#7A1F2B]">OMKAAR</span>{' '}
                  <span className="text-[#D4A017]">ASSOCIATES</span>
                </div>
              </button>
            </div>

            {/* ZONE 2: 4-6 NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3" aria-label="Main Navigation">
              <button
                onClick={() => handleNavClick('/')}
                className={`px-3.5 py-2 text-xs uppercase tracking-widest font-bold transition-colors rounded-md whitespace-nowrap shrink-0 relative ${
                  currentPath === '/'
                    ? 'text-[#7A1F2B]'
                    : 'text-slate-700 hover:text-[#7A1F2B] hover:bg-white/60'
                }`}
              >
                <span>Home</span>
                {currentPath === '/' && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4A017] rounded-full"></span>
                )}
              </button>

              {/* SERVICES DROPDOWN TRIGGER */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <button
                  ref={triggerRef}
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  aria-expanded={isMegaMenuOpen}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-bold transition-colors rounded-md flex items-center gap-1.5 whitespace-nowrap shrink-0 relative ${
                    currentPath.startsWith('/financial') ||
                    currentPath.startsWith('/rto-documentation') ||
                    currentPath.startsWith('/career') ||
                    currentPath === '/services'
                      ? 'text-[#7A1F2B]'
                      : 'text-slate-700 hover:text-[#7A1F2B] hover:bg-white/60'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isMegaMenuOpen ? 'rotate-180 text-[#D4A017]' : 'text-slate-400'
                    }`}
                  />
                  {(currentPath.startsWith('/financial') ||
                    currentPath.startsWith('/rto-documentation') ||
                    currentPath.startsWith('/career') ||
                    currentPath === '/services') && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4A017] rounded-full"></span>
                  )}
                </button>
              </div>

              <button
                onClick={() => handleNavClick('/about')}
                className={`px-3.5 py-2 text-xs uppercase tracking-widest font-bold transition-colors rounded-md whitespace-nowrap shrink-0 relative ${
                  currentPath === '/about'
                    ? 'text-[#7A1F2B]'
                    : 'text-slate-700 hover:text-[#7A1F2B] hover:bg-white/60'
                }`}
              >
                <span>About Us</span>
                {currentPath === '/about' && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4A017] rounded-full"></span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('/contact')}
                className={`px-3.5 py-2 text-xs uppercase tracking-widest font-bold transition-colors rounded-md whitespace-nowrap shrink-0 relative ${
                  currentPath === '/contact'
                    ? 'text-[#7A1F2B]'
                    : 'text-slate-700 hover:text-[#7A1F2B] hover:bg-white/60'
                }`}
              >
                <span>Contact Us</span>
                {currentPath === '/contact' && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4A017] rounded-full"></span>
                )}
              </button>
            </nav>

            {/* ZONE 3: 1-2 PRIMARY ACTIONS */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              <a
                href="mailto:omkaarassociates9@gmail.com"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-[#7A1F2B]/30 text-[#7A1F2B] bg-white/80 hover:bg-[#7A1F2B] hover:text-white transition-all whitespace-nowrap shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>Email Us</span>
              </a>

              <button
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#F28C28] hover:bg-[#D97718] text-white shadow-2xs hover:shadow-xs transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28C28]"
              >
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => openEnquiryModal()}
                className="px-3 py-1.5 text-xs font-bold uppercase bg-[#F28C28] hover:bg-[#D97718] text-white rounded-md whitespace-nowrap shadow-2xs"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-[#7A1F2B] hover:bg-white/60 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP MEGA MENU PANEL                                                   */}
        {/* ========================================================================= */}
        {isMegaMenuOpen && (
          <div
            ref={megaMenuRef}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="hidden lg:block absolute top-full left-0 right-0 bg-[#FAF7F0] border-b border-[#D4A017]/30 shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-top-2"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-12 gap-8">
                
                {/* COLUMN 1: FINANCIAL SERVICES */}
                <div className="col-span-4 border-r border-[#D4A017]/20 pr-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#176B3A]/20">
                    <button
                      onClick={() => handleNavClick('/financial')}
                      className="flex items-center gap-2 text-[#176B3A] font-bold text-sm hover:text-[#D4A017] transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-[#176B3A] group-hover:text-[#D4A017]" />
                      <span className="uppercase tracking-wider">FINANCIAL SERVICES</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/financial')}
                      className="text-xs font-semibold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-0.5"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <ul className="space-y-1.5">
                    {FINANCIAL_SERVICES.map((s) => (
                      <li key={s.id}>
                        <button
                          onClick={() => handleNavClick(s.route)}
                          className="w-full text-left p-2 rounded-md hover:bg-white/80 transition-colors flex items-start gap-2.5 group"
                        >
                          <div className="p-1 rounded bg-[#F0F7F2] text-[#176B3A] group-hover:bg-[#176B3A] group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <ServiceIcon name={s.iconName} className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#176B3A] transition-colors">
                              {s.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {s.shortDesc}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLUMN 2: RTO & DOCUMENTATION */}
                <div className="col-span-5 border-r border-[#D4A017]/20 pr-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#7A1F2B]/20">
                    <button
                      onClick={() => handleNavClick('/rto-documentation')}
                      className="flex items-center gap-2 text-[#7A1F2B] font-bold text-sm hover:text-[#D4A017] transition-colors group"
                    >
                      <FileCheck2 className="w-4 h-4 text-[#7A1F2B] group-hover:text-[#D4A017]" />
                      <span className="uppercase tracking-wider">RTO & DOCUMENTATION</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/rto-documentation')}
                      className="text-xs font-semibold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-0.5"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2 p-2.5 bg-white/70 rounded-lg border border-[#7A1F2B]/15 mb-1">
                      <button
                        onClick={() => handleNavClick('/rto-documentation/rto-services')}
                        className="w-full text-left group"
                      >
                        <div className="text-xs font-bold text-[#7A1F2B] uppercase tracking-wider flex items-center justify-between">
                          <span>Complete RTO Services</span>
                          <span className="text-[10px] bg-[#7A1F2B] text-white px-1.5 py-0.5 rounded font-semibold">DL & RC</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1">
                          New DL, Learner Licence, Renewal, Address Change, Duplicate DL, Vehicle Transfer & NOC.
                        </p>
                      </button>
                    </div>

                    <button
                      onClick={() => handleNavClick('/rto-documentation/aadhaar')}
                      className="text-left p-2.5 rounded-md hover:bg-white/90 border border-[#D4A017]/25 transition-colors group bg-white/50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-[#FAF3E0] text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white transition-colors">
                          <ServiceIcon name="Fingerprint" className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#7A1F2B]">Aadhaar Seva</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Demographic updates & appointment assistance</p>
                    </button>

                    <button
                      onClick={() => handleNavClick('/rto-documentation/pan')}
                      className="text-left p-2.5 rounded-md hover:bg-white/90 border border-[#F28C28]/25 transition-colors group bg-white/50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-[#FFF5EC] text-[#F28C28] group-hover:bg-[#F28C28] group-hover:text-white transition-colors">
                          <ServiceIcon name="CreditCard" className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#7A1F2B]">PAN Services</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">New PAN, corrections & Aadhaar linking</p>
                    </button>
                  </div>
                </div>

                {/* COLUMN 3: CAREER SERVICES */}
                <div className="col-span-3">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F28C28]/20">
                    <button
                      onClick={() => handleNavClick('/career')}
                      className="flex items-center gap-2 text-[#7A1F2B] font-bold text-sm hover:text-[#D4A017] transition-colors group"
                    >
                      <GraduationCap className="w-4 h-4 text-[#F28C28] group-hover:text-[#D4A017]" />
                      <span className="uppercase tracking-wider">CAREER SERVICES</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/career')}
                      className="text-xs font-semibold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-0.5"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {CAREER_SERVICES.map((s) => (
                      <li key={s.id}>
                        <button
                          onClick={() => handleNavClick(s.route)}
                          className="w-full text-left p-2 rounded-md hover:bg-white/80 border border-[#F28C28]/15 transition-colors flex items-start gap-2 group bg-white/40"
                        >
                          <div className="p-1 rounded bg-[#FFF5EC] text-[#F28C28] group-hover:bg-[#F28C28] group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <ServiceIcon name={s.iconName} className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#7A1F2B] transition-colors">
                              {s.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {s.shortDesc}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Dedicated Consultation box */}
                  <div className="mt-4 p-3 rounded-lg bg-white/80 border border-[#D4A017]/30 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#7A1F2B] mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#176B3A]" />
                      <span>Dedicated Consultancy</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Structured guidance, document auditing and application support across all services.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Strip inside Mega Menu */}
              <div className="mt-6 pt-4 border-t border-[#D4A017]/20 flex items-center justify-between text-xs text-slate-600">
                <p>
                  <span className="font-semibold text-[#7A1F2B]">Assistance Disclosure:</span> Omkaar Associates is a private service consultancy providing procedural support.
                </p>
                <button
                  onClick={() => handleNavClick('/services')}
                  className="font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1 shrink-0 ml-4"
                >
                  Explore Complete Service Catalog <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER NAVIGATION                                                  */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-[#F8F4EA] h-full overflow-y-auto flex flex-col justify-between shadow-2xl p-5">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D4A017]/25">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-[#7A1F2B] text-[#D4A017] border border-[#D4A017] flex items-center justify-center font-bold text-sm">
                    Ω
                  </div>
                  <span className="font-cinzel font-bold text-sm text-[#7A1F2B]">
                    OMKAAR ASSOCIATES
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="mt-4 space-y-1">
                <button
                  onClick={() => handleNavClick('/')}
                  className="w-full text-left px-3 py-2.5 font-semibold text-sm text-[#1A261E] hover:bg-white/60 rounded-md"
                >
                  Home
                </button>

                {/* Accordion for Services */}
                <div>
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="w-full text-left px-3 py-2.5 font-semibold text-sm text-[#1A261E] hover:bg-white/60 rounded-md flex items-center justify-between"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesExpanded ? 'rotate-180 text-[#D4A017]' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {mobileServicesExpanded && (
                    <div className="pl-4 pr-1 py-2 space-y-3 bg-white/70 rounded-lg my-1 text-xs border border-[#D4A017]/25">
                      <div>
                        <div className="font-bold text-[#176B3A] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>1. Financial Solutions</span>
                          <button
                            onClick={() => handleNavClick('/financial')}
                            className="text-[11px] text-[#176B3A] underline font-semibold"
                          >
                            Hub
                          </button>
                        </div>
                        <div className="space-y-1 pl-2">
                          {FINANCIAL_SERVICES.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => handleNavClick(s.route)}
                              className="block w-full text-left py-1 text-slate-700 hover:text-[#176B3A]"
                            >
                              • {s.title}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <div className="font-bold text-[#7A1F2B] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>2. RTO & Documentation</span>
                          <button
                            onClick={() => handleNavClick('/rto-documentation')}
                            className="text-[11px] text-[#7A1F2B] underline font-semibold"
                          >
                            Hub
                          </button>
                        </div>
                        <div className="space-y-1 pl-2">
                          {RTO_SERVICES.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => handleNavClick(s.route)}
                              className="block w-full text-left py-1 text-slate-700 hover:text-[#7A1F2B]"
                            >
                              • {s.title}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <div className="font-bold text-[#F28C28] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>3. Career</span>
                          <button
                            onClick={() => handleNavClick('/career')}
                            className="text-[11px] text-[#F28C28] underline font-semibold"
                          >
                            Hub
                          </button>
                        </div>
                        <div className="space-y-1 pl-2">
                          {CAREER_SERVICES.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => handleNavClick(s.route)}
                              className="block w-full text-left py-1 text-slate-700 hover:text-[#F28C28]"
                            >
                              • {s.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('/about')}
                  className="w-full text-left px-3 py-2.5 font-semibold text-sm text-[#1A261E] hover:bg-white/60 rounded-md"
                >
                  About Us
                </button>

                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full text-left px-3 py-2.5 font-semibold text-sm text-[#1A261E] hover:bg-white/60 rounded-md"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile Drawer Bottom CTAs */}
            <div className="pt-4 border-t border-[#D4A017]/25 space-y-2">
              <a
                href="mailto:omkaarassociates9@gmail.com"
                className="w-full py-2.5 px-4 bg-[#7A1F2B] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D4A017]" />
                <span>Email Us</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full py-2.5 px-4 bg-[#F28C28] text-white rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Submit Quick Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
