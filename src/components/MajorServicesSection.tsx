import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, Landmark, FileCheck2, GraduationCap, Fingerprint } from 'lucide-react';

export const MajorServicesSection: React.FC = () => {
  const { navigate } = useApp();

  const servicePanels = [
    {
      id: 'financial',
      num: '01',
      category: 'FINANCIAL SERVICES',
      title: 'Financial Assistance & Guidance',
      tagline: 'Financial assistance made structured and simple.',
      description:
        'Navigating loans and statutory compliance requires accurate preparation. We assist you with document verification, procedural guidance, and liaison support across banks and statutory authorities.',
      items: [
        'Gold Loan Assistance',
        'Home Loan Assistance',
        'Mortgage Loan (LAP) Assistance',
        'GST Registration & Return Filing',
        'ITR Preparation & Assessment',
        'Legal Consultancy & Documentation'
      ],
      route: '/financial',
      ctaText: 'Explore Financial Services',
      theme: {
        numColor: 'text-[#7A1F2B]/30',
        categoryColor: 'text-[#7A1F2B]',
        tagBg: 'bg-[#7A1F2B] text-white',
        titleColor: 'text-[#7A1F2B]',
        btnBg: 'bg-[#7A1F2B] hover:bg-[#5A141E] text-white',
        bulletIconColor: 'text-[#7A1F2B]',
        borderColor: 'border-[#7A1F2B]/20',
        hoverBorder: 'hover:border-[#7A1F2B]',
        accentCardBg: 'bg-white'
      },
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Financial assistance and business advisory at Omkaar Associates',
      reverse: false
    },
    {
      id: 'rto-documentation',
      num: '02',
      category: 'RTO SERVICES',
      title: 'RTO Services & Vehicle Facilitation',
      tagline: 'Official RTO paperwork made hassle-free.',
      description:
        'Motor Vehicle department processes involve stringent checklists and statutory portals. We guide you through driving licence applications, vehicle registration changes, fitness certificates, and ownership transfers.',
      items: [
        'Driving Licence (Learner & Permanent)',
        'Licence Renewal & Address Updates',
        'Vehicle RC Transfer & Duplicate RC',
        'No Objection Certificate (NOC)',
        'Hypothecation Add / Cancel (HP)',
        'Fitness & Commercial Permits'
      ],
      route: '/rto-documentation',
      ctaText: 'Explore RTO Services',
      theme: {
        numColor: 'text-[#176B3A]/30',
        categoryColor: 'text-[#176B3A]',
        tagBg: 'bg-[#176B3A] text-white',
        titleColor: 'text-[#176B3A]',
        btnBg: 'bg-[#176B3A] hover:bg-[#0F4726] text-white',
        bulletIconColor: 'text-[#176B3A]',
        borderColor: 'border-[#176B3A]/20',
        hoverBorder: 'hover:border-[#176B3A]',
        accentCardBg: 'bg-[#FAF9F6]'
      },
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'RTO and official documentation support at Omkaar Associates',
      reverse: true
    },
    {
      id: 'career',
      num: '03',
      category: 'CAREER SERVICES',
      title: 'Career Support & Practical Skill Training',
      tagline: 'Practical training and career placement guidance.',
      description:
        'Gain real-world competencies in accounting, direct taxation, and office software, combined with verified job placement assistance for fresh graduates and experienced candidates.',
      items: [
        'Verified Job Placement Assistance',
        'Computerized Accounting (Tally Prime)',
        'Practical GST & Direct Tax Basics',
        'Advanced MS Excel & Office Skills',
        'Resume Preparation & Interview Prep',
        'Workplace Readiness Coaching'
      ],
      route: '/career',
      ctaText: 'Explore Career Services',
      theme: {
        numColor: 'text-[#F28C28]/30',
        categoryColor: 'text-[#D97718]',
        tagBg: 'bg-[#F28C28] text-white',
        titleColor: 'text-[#7A1F2B]',
        btnBg: 'bg-[#F28C28] hover:bg-[#D97718] text-white',
        bulletIconColor: 'text-[#176B3A]',
        borderColor: 'border-[#F28C28]/20',
        hoverBorder: 'hover:border-[#F28C28]',
        accentCardBg: 'bg-white'
      },
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Career coaching and skill training at Omkaar Associates',
      reverse: false
    },
    {
      id: 'aadhaar-pan',
      num: '04',
      category: 'AADHAAR & PAN SERVICES',
      title: 'Aadhaar Seva & PAN Card Assistance',
      tagline: 'Identity document processing and updates.',
      description:
        'Official government tax and identity cards require precise document alignment. We assist with Aadhaar appointment slot bookings, 10-year document updates, new PAN applications, and PAN corrections.',
      items: [
        'Aadhaar Demographic Updates (Address/Name)',
        'Aadhaar Seva Kendra Appointment Booking',
        'Mandatory 10-Year Aadhaar Re-validation',
        'New PAN Card Applications (Form 49A)',
        'PAN Corrections (Name/DOB/Photo)',
        'Aadhaar-to-PAN Linking Assistance'
      ],
      route: '/rto-documentation/aadhaar',
      ctaText: 'Explore Aadhaar & PAN',
      theme: {
        numColor: 'text-[#D4A017]/30',
        categoryColor: 'text-[#B8860B]',
        tagBg: 'bg-[#D4A017] text-white',
        titleColor: 'text-[#7A1F2B]',
        btnBg: 'bg-[#D4A017] hover:bg-[#B8860B] text-white',
        bulletIconColor: 'text-[#D4A017]',
        borderColor: 'border-[#D4A017]/30',
        hoverBorder: 'hover:border-[#D4A017]',
        accentCardBg: 'bg-[#FAF9F6]'
      },
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Aadhaar and PAN documentation services',
      reverse: true
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F8F4EA]" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-white text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40 shadow-2xs">
            OUR DIVISIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A1F2B] tracking-tight">
            Services Designed <span className="text-[#D4A017]">Around Your Needs</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Professional assistance across Financial, RTO, Career, and Identity requirements — with step-by-step clarity.
          </p>
        </div>

        {/* 4 Alternating Editorial Panels */}
        <div className="space-y-12">
          {servicePanels.map((panel) => {
            return (
              <div
                key={panel.id}
                className={`${panel.theme.accentCardBg} rounded-3xl border ${panel.theme.borderColor} ${panel.theme.hoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10">
                  
                  {/* TEXT CONTENT */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      panel.reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Number & Eyebrow */}
                    <div className="flex items-baseline gap-4">
                      <span className={`text-4xl sm:text-5xl font-extrabold font-mono ${panel.theme.numColor}`}>
                        {panel.num}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${panel.theme.tagBg}`}>
                        {panel.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className={`text-2xl sm:text-3xl font-extrabold ${panel.theme.titleColor} tracking-tight group-hover:translate-x-1 transition-transform`}>
                        {panel.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-slate-800 mt-1">
                        {panel.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {panel.description}
                    </p>

                    {/* 2-Column Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {panel.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle2 className={`w-4 h-4 ${panel.theme.bulletIconColor} shrink-0 mt-0.5`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action CTA Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => navigate(panel.route)}
                        className={`px-6 py-3 ${panel.theme.btnBg} font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-2xs transition-all duration-200 inline-flex items-center gap-2 group-hover:gap-3`}
                      >
                        <span>{panel.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                  </div>

                  {/* IMAGE SIDE */}
                  <div
                    className={`lg:col-span-5 ${
                      panel.reverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4A017]/60 shadow-md">
                      <img
                        src={panel.image}
                        alt={panel.imageAlt}
                        className="w-full h-64 sm:h-80 lg:h-84 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
