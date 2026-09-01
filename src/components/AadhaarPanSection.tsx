import React from 'react';
import { useApp } from '../context/AppContext';
import { Fingerprint, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AadhaarPanSection: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FDF2F4] text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-3 border border-[#7A1F2B]/20">
            CITIZEN IDENTITY & TAX ID
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7A1F2B] tracking-tight">
            Essential Documentation Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Guidance for valid demographic updates, mandatory re-validations, and PAN-Aadhaar linking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* AADHAAR SEVA CARD */}
          <div className="bg-[#FAF9F6] rounded-2xl p-8 border border-slate-200/80 hover:border-[#7A1F2B] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-[#7A1F2B]/20 text-[#7A1F2B] flex items-center justify-center group-hover:bg-[#7A1F2B] group-hover:text-white transition-colors shadow-xs">
                  <Fingerprint className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A1F2B] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#7A1F2B]/20">
                  UIDAI Assistance
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#7A1F2B] group-hover:text-[#5A141E] transition-colors">
                AADHAAR SEVA
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Aadhaar-related service assistance and documentation support.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-[#7A1F2B]/10">
                {[
                  'Guidance on approved Proof of Address (PoA) & Identity (PoI)',
                  'Assistance with appointment booking at authorized Seva Kendras',
                  'Mandatory 10-year Aadhaar document re-validation support',
                  'Child biometric update guidance (ages 5 & 15)'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => navigate('/rto-documentation/aadhaar')}
                className="text-xs font-bold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-1"
              >
                <span>Read Full Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openEnquiryModal('Aadhaar Seva Assistance', 'RTO & Documentation')}
                className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Get Assistance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PAN SERVICES CARD */}
          <div className="bg-[#FAF9F6] rounded-2xl p-8 border border-slate-200/80 hover:border-[#7A1F2B] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-[#7A1F2B]/20 text-[#7A1F2B] flex items-center justify-center group-hover:bg-[#7A1F2B] group-hover:text-white transition-colors shadow-xs">
                  <CreditCard className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A1F2B] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#7A1F2B]/20">
                  Tax Identification
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#7A1F2B] group-hover:text-[#5A141E] transition-colors">
                PAN SERVICES
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                PAN-related service and documentation assistance.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-[#7A1F2B]/10">
                {[
                  'New PAN Card applications (Form 49A / 49AA) for Individuals & Firms',
                  'Corrections in Name, Date of Birth, Father’s Name, or Signature',
                  'Reprint of lost / damaged physical PAN cards',
                  'Aadhaar-PAN linking status verification and guidance'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => navigate('/rto-documentation/pan')}
                className="text-xs font-bold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-1"
              >
                <span>Read Full Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openEnquiryModal('PAN Card Assistance', 'RTO & Documentation')}
                className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Get Assistance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


