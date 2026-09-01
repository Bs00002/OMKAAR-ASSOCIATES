import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhyOmkaar } from '../components/WhyOmkaar';
import { HowItWorks } from '../components/HowItWorks';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  FileCheck2,
  Landmark,
  GraduationCap
} from 'lucide-react';
import { MANDATORY_FINANCIAL_DISCLAIMER, MANDATORY_RTO_DISCLAIMER } from '../data/servicesData';

export const AboutPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="bg-[#7A1F2B] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-4 border border-[#D4A017]/40">
              <span>ABOUT OMKAAR ASSOCIATES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Dedicated Multi-Service Assistance & Consultancy Centre
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              We bridge the procedural gap for individuals, families, and growing enterprises by providing structured documentation, application guidance, and step-by-step service support.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section with Authentic Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7A1F2B] pb-1 border-b-2 border-[#D4A017] inline-block">
                Our Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A1F2B] tracking-tight">
                Clear Guidance in a Complex Procedural Landscape
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether applying for an essential personal or home loan, updating an RTO driving licence, regularizing GST returns, or searching for a respectable job opportunity — citizens often face confusing paperwork, changing portal guidelines, and unnecessary processing delays.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Omkaar Associates</strong> was established with a singular objective: to provide transparent, procedural, and dependable service assistance under one roof. We do not make false promises of guaranteed approvals; instead, we ensure your files, applications, and documents are 100% compliant with standard requirements.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FAF9F6] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0" />
                  <span className="font-bold text-[#7A1F2B]">Document-First Approach</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FAF9F6] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#176B3A] shrink-0" />
                  <span className="font-bold text-[#7A1F2B]">Honest & Fair Consultation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#4A121A]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Omkaar Associates Consultation Centre"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A121A] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs bg-[#7A1F2B]/90 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                  <div className="font-bold text-[#D4A017] uppercase tracking-wider mb-1">
                    Multi-Service Assistance Centre
                  </div>
                  <p className="text-white/90">
                    Committed to client confidentiality, meticulous document audit, and reliable service follow-up.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars Summary on About Page */}
      <section className="py-16 bg-[#FAF9F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A1F2B]">
              What We Do
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our service infrastructure is organized across three primary wings:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#F0F7F2] text-[#176B3A] flex items-center justify-center">
                <Landmark className="w-6 h-6 text-[#176B3A]" />
              </div>
              <h3 className="font-bold text-base text-[#176B3A]">1. Financial Assistance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assistance with Personal, Gold, Home, and Mortgage Loans, GST registration and returns, ITR tax filings, and legal agreements.
              </p>
              <button
                onClick={() => navigate('/financial')}
                className="text-xs font-bold text-[#176B3A] hover:text-[#D4A017] flex items-center gap-1 pt-2"
              >
                <span>Explore Financial</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#FDF2F4] text-[#7A1F2B] flex items-center justify-center">
                <FileCheck2 className="w-6 h-6 text-[#7A1F2B]" />
              </div>
              <h3 className="font-bold text-base text-[#7A1F2B]">2. RTO & Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assistance with Driving Licences, Learner Licences, RC transfers, NOCs, Aadhaar demographic updates, and PAN card services.
              </p>
              <button
                onClick={() => navigate('/rto-documentation')}
                className="text-xs font-bold text-[#7A1F2B] hover:text-[#D4A017] flex items-center gap-1 pt-2"
              >
                <span>Explore RTO & Docs</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#FFF5EC] text-[#F28C28] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h3 className="font-bold text-base text-[#F28C28]">3. Career & Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Resume building, interview matching for job seekers, and hands-on practical skill training in computerized accounting (Tally & GST).
              </p>
              <button
                onClick={() => navigate('/career')}
                className="text-xs font-bold text-[#F28C28] hover:text-[#D97718] flex items-center gap-1 pt-2"
              >
                <span>Explore Career</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* How We Help & Workflow */}
      <HowItWorks />

      {/* Why Omkaar */}
      <WhyOmkaar />

      {/* Disclaimers & Ethics */}
      <section className="py-12 bg-[#FAF9F6] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-600 space-y-3">
          <div className="flex items-center gap-2 font-bold text-[#7A1F2B] text-sm">
            <ShieldCheck className="w-5 h-5 text-[#D4A017]" />
            <span>Our Service Transparency & Compliance Policy</span>
          </div>
          <p>
            <strong>Financial Disclaimer:</strong> {MANDATORY_FINANCIAL_DISCLAIMER}
          </p>
          <p>
            <strong>Government Authorities Disclaimer:</strong> {MANDATORY_RTO_DISCLAIMER}
          </p>
          <p>
            We strictly respect citizen privacy and maintain secure handling of all client documentation solely for the purpose of the requested assistance.
          </p>
        </div>
      </section>

    </div>
  );
};
