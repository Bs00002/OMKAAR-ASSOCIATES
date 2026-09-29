import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceIcon } from '../components/ServiceIcon';
import { LoanCalculator } from '../components/LoanCalculator';
import { 
  CheckCircle2, 
  FileText, 
  Send, 
  Mail, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { MANDATORY_FINANCIAL_DISCLAIMER, MANDATORY_RTO_DISCLAIMER } from '../data/servicesData';

interface ServiceDetailPageProps {
  service: ServiceItem;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const { openEnquiryModal } = useApp();

  const isLoanService = service.slug.includes('loan');
  const isFinancial = service.pillarId === 'financial';
  const isRto = service.pillarId === 'rto-documentation';

  const pillarBreadcrumb = {
    financial: { label: 'Financial Solutions', path: '/financial' },
    'rto-documentation': { label: 'RTO & Documentation', path: '/rto-documentation' },
    career: { label: 'Career Services', path: '/career' }
  }[service.pillarId];

  const heroBg = isRto ? 'bg-[#7A1F2B]' : 'bg-[#176B3A]';
  const headingColor = isRto ? 'text-[#7A1F2B]' : 'text-[#176B3A]';
  const tagColor = isRto ? 'text-[#7A1F2B]' : 'text-[#176B3A]';

  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          pillarBreadcrumb,
          { label: service.title }
        ]}
      />

      {/* Service Detail Hero */}
      <section className={`${heroBg} text-white py-14 sm:py-18 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-4 border border-[#D4A017]/40">
              <ServiceIcon name={service.iconName} className="w-3.5 h-3.5" />
              <span>{service.tag || 'Assistance & Consultancy'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => openEnquiryModal(service.title, pillarBreadcrumb.label)}
                className="px-6 py-3 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enquire About {service.title}</span>
              </button>

              <a
                href={`mailto:omkaarassociates9@gmail.com?subject=${encodeURIComponent(`Enquiry: ${service.title}`)}`}
                className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2 border border-white/20"
              >
                <Mail className="w-4 h-4 text-[#D4A017]" />
                <span>Email Enquiry</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Main Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Overview */}
            <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className={`inline-block text-xs font-bold uppercase tracking-wider ${tagColor} pb-1 border-b-2 border-[#D4A017]`}>
                Service Overview
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold ${headingColor}`}>
                How Omkaar Associates Assists You
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.overview}
              </p>
            </section>

            {/* Optional Loan Calculator for Loan Services */}
            {isLoanService && (
              <section>
                <LoanCalculator />
              </section>
            )}

            {/* 2. What We Assist With */}
            <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <div className={`inline-block text-xs font-bold uppercase tracking-wider ${tagColor} pb-1 border-b-2 border-[#D4A017]`}>
                Scope of Assistance
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold ${headingColor}`}>
                What We Assist With
              </h2>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {service.whatWeAssistWith.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#176B3A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Required Documents / Information */}
            <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <div className={`inline-block text-xs font-bold uppercase tracking-wider ${tagColor} pb-1 border-b-2 border-[#D4A017]`}>
                Documentation Checklist
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold ${headingColor}`}>
                Required Documents & Information
              </h2>
              <div className="space-y-2.5">
                {service.requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <FileText className="w-4 h-4 text-[#176B3A] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#D4A017]/40 flex items-start gap-2.5 text-xs text-slate-800 mt-4">
                <AlertCircle className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Required documents may vary based on applicant profile, specific financial institution policies, or statutory portal updates.
                </span>
              </div>
            </section>

            {/* 4. Step-by-Step Process */}
            <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className={`inline-block text-xs font-bold uppercase tracking-wider ${tagColor} pb-1 border-b-2 border-[#D4A017]`}>
                Workflow
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold ${headingColor}`}>
                Assistance Process
              </h2>
              <div className="space-y-4">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-slate-200">
                    <div className={`w-9 h-9 rounded-lg ${isRto ? 'bg-[#7A1F2B]' : 'bg-[#176B3A]'} text-[#D4A017] flex items-center justify-center font-bold text-xs shrink-0`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm ${headingColor}`}>{step.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <div className={`inline-block text-xs font-bold uppercase tracking-wider ${tagColor} pb-1 border-b-2 border-[#D4A017]`}>
                  FAQs
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${headingColor}`}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3 pt-2">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200">
                      <h3 className={`font-bold text-sm ${headingColor} flex items-start gap-2`}>
                        <HelpCircle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                        <span>{faq.q}</span>
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 pl-6 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Statutory Disclaimer Box */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#7A1F2B]">
                <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
                <span>Statutory Disclaimer</span>
              </div>
              <p>
                {isFinancial ? MANDATORY_FINANCIAL_DISCLAIMER : MANDATORY_RTO_DISCLAIMER}
              </p>
            </div>

          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Enquiry Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-24 space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A017]">
                  Consultation
                </span>
                <h3 className={`text-lg font-bold ${headingColor} mt-0.5`}>
                  Need Help With {service.title}?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect with our dedicated service consultant today.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openEnquiryModal(service.title, pillarBreadcrumb.label)}
                  className="w-full py-3 px-4 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Callback</span>
                </button>

                <a
                  href={`mailto:omkaarassociates9@gmail.com?subject=${encodeURIComponent(`Service Request: ${service.title}`)}`}
                  className="w-full py-2.5 px-4 bg-[#FAF9F6] hover:bg-[#FDF2F4] text-[#7A1F2B] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-200"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7A1F2B]" />
                  <span>Email Helpdesk Directly</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Office: Mon–Sat, 10 AM – 7 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#176B3A]" />
                  <span>Direct procedural assistance</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
