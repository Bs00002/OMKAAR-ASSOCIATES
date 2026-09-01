import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FileSpreadsheet, Receipt, Scale, CheckCircle2, ArrowRight, Send } from 'lucide-react';

export const BusinessTaxLegalTabs: React.FC = () => {
  const { navigate, openEnquiryModal } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'gst' | 'itr' | 'legal'>('gst');

  const content = {
    gst: {
      title: 'GST Services',
      subtitle: 'Goods & Services Tax Registration & Return Support',
      tag: 'Business Tax',
      route: '/financial/gst',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      description: 'Streamlined GST compliance for proprietorships, partnerships, LLPs, and enterprises. Avoid penalties with timely filing and input tax credit reconciliations.',
      points: [
        'New GST Registration & Composition Scheme applications',
        'Monthly & Quarterly GSTR-1, GSTR-3B return compilation',
        'Input Tax Credit (ITC) verification against GSTR-2B',
        'Assistance with GST notices, LUT for exports & amendments'
      ]
    },
    itr: {
      title: 'ITR Services',
      subtitle: 'Direct Income Tax Return Filing & Computation',
      tag: 'Direct Tax',
      route: '/financial/itr',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
      description: 'Expert income tax return preparation for salaried employees, business entities, professionals, and capital gains investors ensuring optimal regime selection.',
      points: [
        'Old vs New Tax Regime comparative tax liability computation',
        'Form 16, AIS / TIS data collation and TDS cross-verification',
        'ITR-1, ITR-2, ITR-3 & ITR-4 filing assistance',
        'Capital Gains tax calculations on property, stocks, & mutual funds'
      ]
    },
    legal: {
      title: 'Legal Consultancy',
      subtitle: 'Agreements, Property Vetting & Commercial Contracts',
      tag: 'Legal Advisory',
      route: '/financial/legal-consultancy',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      description: 'Structured assistance for drafting legally sound agreements, contracts, deeds, and organizing professional legal consultations.',
      points: [
        'Drafting & review of Residential & Commercial Rent Agreements',
        'Partnership Deeds, MOUs, SLAs, and NDA agreements',
        'Power of Attorney (POA), Indemnity Bonds, and general affidavits',
        'Property title search assistance and documentation verification'
      ]
    }
  };

  const current = content[activeSubTab];

  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-3 border border-[#7A1F2B]/20 shadow-xs">
            EDITORIAL SHOWCASE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7A1F2B] tracking-tight">
            Business & Professional Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dedicated assistance for statutory tax compliance and legal agreements.
          </p>

          {/* 3 Interactive Tabs */}
          <div className="mt-8 inline-flex p-1 bg-white rounded-xl border border-slate-200/90 shadow-sm">
            <button
              onClick={() => setActiveSubTab('gst')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeSubTab === 'gst'
                  ? 'bg-[#176B3A] text-white shadow-sm'
                  : 'text-[#1A261E] hover:text-[#176B3A]'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>GST</span>
            </button>

            <button
              onClick={() => setActiveSubTab('itr')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeSubTab === 'itr'
                  ? 'bg-[#176B3A] text-white shadow-sm'
                  : 'text-[#1A261E] hover:text-[#176B3A]'
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>ITR</span>
            </button>

            <button
              onClick={() => setActiveSubTab('legal')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeSubTab === 'legal'
                  ? 'bg-[#7A1F2B] text-white shadow-sm'
                  : 'text-[#1A261E] hover:text-[#7A1F2B]'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>LEGAL CONSULTANCY</span>
            </button>
          </div>
        </div>

        {/* Editorial Split Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative bg-[#5A141E] min-h-[320px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center min-h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F2B] via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017] bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                {current.tag}
              </span>
              <h3 className="text-xl font-bold mt-2 text-white">{current.title}</h3>
              <p className="text-xs text-white/90 mt-0.5">{current.subtitle}</p>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#176B3A] mb-1">
                  Assistance Overview
                </div>
                <h3 className="text-2xl font-bold text-[#7A1F2B]">
                  {current.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#7A1F2B]">
                  What We Assist With:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1A261E] bg-[#FAF9F6] p-3 rounded-lg border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => navigate(current.route)}
                className="text-xs font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1.5"
              >
                <span>Read Comprehensive {current.title} Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openEnquiryModal(current.title, 'Financial Solutions')}
                className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


