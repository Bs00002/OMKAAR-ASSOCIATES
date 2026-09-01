import React from 'react';
import { useApp } from '../context/AppContext';
import { RTO_SUB_SERVICES, MANDATORY_RTO_DISCLAIMER } from '../data/servicesData';
import { 
  Car, 
  FileText, 
  RefreshCw, 
  MapPin, 
  Smartphone, 
  Copy, 
  CheckCircle, 
  Send,
  ArrowRight
} from 'lucide-react';

export const RtoSection: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  const getRtoIcon = (code: string) => {
    switch (code) {
      case 'DL-01': return Car;
      case 'LL-02': return FileText;
      case 'DL-03': return RefreshCw;
      case 'MOD-04': return MapPin;
      case 'MOD-05': return Smartphone;
      case 'DUP-06': return Copy;
      case 'TEST-07': return CheckCircle;
      case 'RC-08': return Car;
      default: return FileText;
    }
  };

  return (
    <section className="py-20 bg-[#7A1F2B] text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#176B3A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40">
            RTO & DOCUMENTATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            RTO Work Made Simpler.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
            Get assistance with your RTO-related documentation and service requirements. Avoid lengthy queues, portal errors, and procedural rejection.
          </p>
        </div>

        {/* 11+ RTO Services Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {RTO_SUB_SERVICES.map((item) => {
            const Icon = getRtoIcon(item.code);
            return (
              <div
                key={item.code}
                className="bg-white/10 hover:bg-white/15 rounded-xl p-5 border border-white/15 hover:border-[#D4A017] transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-[#D4A017] group-hover:text-[#7A1F2B] text-[#D4A017] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-white/70 group-hover:text-[#D4A017]">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-[#D4A017] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => openEnquiryModal(item.title, 'RTO & Documentation')}
                    className="text-[11px] font-bold text-[#D4A017] hover:underline flex items-center gap-1"
                  >
                    <span>Get Guidance</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick RTO Consultation Card in Grid */}
          <div className="bg-[#D4A017] text-[#7A1F2B] rounded-xl p-5 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-8 h-8 rounded-lg bg-[#7A1F2B] text-[#D4A017] flex items-center justify-center font-bold text-sm mb-3">
                Ω
              </div>
              <h3 className="font-bold text-base text-[#7A1F2B] leading-snug">
                Have a customized RTO requirement?
              </h3>
              <p className="text-xs text-[#7A1F2B]/90 mt-1">
                Commercial permits, state tax clearance, or lost RC FIR paperwork.
              </p>
            </div>

            <button
              onClick={() => openEnquiryModal('Custom RTO Assistance', 'RTO & Documentation')}
              className="mt-4 w-full py-2 px-3 bg-[#7A1F2B] hover:bg-[#5A141E] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Specialist</span>
            </button>
          </div>
        </div>

        {/* Bottom CTA Bar & Statutory Disclaimer */}
        <div className="mt-12 p-6 rounded-2xl bg-white/10 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-white">
              Ready to submit your RTO file or book a test slot?
            </h3>
            <p className="text-xs text-white/80">
              Our consultants will audit your identity papers and prepare your Sarathi/Vahan application file.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/rto-documentation/rto-services')}
              className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-white/20"
            >
              Full RTO Hub
            </button>
            <button
              onClick={() => openEnquiryModal('RTO Work Assistance', 'RTO & Documentation')}
              className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Get RTO Assistance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[11px] text-white/70 max-w-3xl mx-auto italic">
            * {MANDATORY_RTO_DISCLAIMER}
          </p>
        </div>

      </div>
    </section>
  );
};
