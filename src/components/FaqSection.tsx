import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GENERAL_FAQS } from '../data/servicesData';
import { ChevronDown, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { openEnquiryModal } = useApp();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = GENERAL_FAQS.filter(faq => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FDF2F4] text-[#7A1F2B] font-bold text-xs uppercase tracking-widest mb-3 border border-[#7A1F2B]/20">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7A1F2B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Clear answers about our consultation, documentation processes, and service policies.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'financial', label: 'Financial & Loans' },
              { id: 'rto', label: 'RTO & Documents' },
              { id: 'career', label: 'Career & Training' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#176B3A] text-white shadow-xs'
                    : 'bg-[#FAF9F6] text-[#1A261E] hover:bg-[#F0F7F2] border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#7A1F2B] bg-[#FDF2F4]/40 shadow-xs' : 'border-slate-200 bg-white hover:border-[#7A1F2B]/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1F2B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#7A1F2B]">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-[#FAF9F6] text-[#7A1F2B] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#7A1F2B] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#7A1F2B]/10 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 text-center space-y-3">
          <div className="text-sm font-bold text-[#7A1F2B]">
            Have a specific requirement not covered here?
          </div>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our team is available to assist you with document verification and specific service details.
          </p>
          <button
            onClick={() => openEnquiryModal()}
            className="px-5 py-2.5 bg-[#F28C28] hover:bg-[#D97718] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask Our Consultant</span>
          </button>
        </div>

      </div>
    </section>
  );
};


