import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { MANDATORY_FINANCIAL_DISCLAIMER } from '../data/servicesData';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, selectedServiceForModal, showToast } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedServiceForModal) {
      setService(selectedServiceForModal.name);
    } else {
      setService('Personal Loan Assistance');
    }
    setIsSubmitted(false);
    setErrors({});
  }, [selectedServiceForModal, isEnquiryModalOpen]);

  if (!isEnquiryModalOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Please enter your contact number';
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!service) errs.service = 'Please select a required service';
    if (!city.trim()) errs.city = 'Please enter your city / location';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    showToast('Enquiry received! Our team will contact you shortly.');
  };

  const handleWhatsAppDirect = () => {
    if (!name.trim() || !phone.trim()) {
      validate();
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    const encodedText = encodeURIComponent(
      `*New Service Enquiry - Omkaar Associates*\n` +
      `*Name:* ${name}\n` +
      `*Mobile:* ${cleanPhone}\n` +
      `*Service:* ${service}\n` +
      `*City:* ${city || 'Not specified'}\n` +
      `*Requirement:* ${message || 'Need assistance with this service.'}`
    );
    window.open(`https://wa.me/919820000000?text=${encodedText}`, '_blank');
    closeEnquiryModal();
    showToast('Redirected to WhatsApp. We look forward to assisting you!');
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setCity('');
    setMessage('');
    setIsSubmitted(false);
    closeEnquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl border border-[#176B3A]/20 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="bg-[#7A1F2B] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#D4A017] flex items-center justify-center text-[#7A1F2B] font-bold text-xs">
              Ω
            </div>
            <div>
              <h3 className="font-bold text-base text-white tracking-tight">
                Service Enquiry & Guidance
              </h3>
              <p className="text-xs text-white/80">
                Omkaar Associates Consultation Request
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#F0F7F2] text-[#176B3A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#7A1F2B]">Enquiry Submitted Successfully</h4>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#7A1F2B]">{name}</strong>. Our service specialist for <strong>{service}</strong> has received your request and will connect with you on <strong>+91 {phone}</strong> shortly.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-4 py-2.5 bg-[#176B3A] hover:bg-[#0F4726] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue on WhatsApp Now</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="px-4 py-2.5 bg-[#FAF9F6] hover:bg-[#FDF2F4] text-[#7A1F2B] rounded-lg text-xs font-semibold border border-slate-200"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                  Full Name <span className="text-[#F28C28]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Sharma"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                    errors.name ? 'border-[#F28C28] bg-[#FFF5EC]' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent`}
                />
                {errors.name && <p className="text-[11px] text-[#F28C28] mt-0.5">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-[#F28C28]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-xs font-semibold text-slate-400">+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98200 12345"
                      className={`w-full pl-11 pr-3 py-2 text-sm rounded-lg border ${
                        errors.phone ? 'border-[#F28C28] bg-[#FFF5EC]' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-[#F28C28] mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                    City / Location <span className="text-[#F28C28]">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Ahmedabad / Surat"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.city ? 'border-[#F28C28] bg-[#FFF5EC]' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent`}
                  />
                  {errors.city && <p className="text-[11px] text-[#F28C28] mt-0.5">{errors.city}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                  Service Required <span className="text-[#F28C28]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent"
                >
                  <optgroup label="Financial Solutions">
                    <option value="Financial Guidance & Assistance">Financial Guidance & Assistance</option>
                    <option value="Gold Loan Assistance">Gold Loan Assistance</option>
                    <option value="Home Loan Assistance">Home Loan Assistance</option>
                    <option value="Mortgage Loan (LAP) Assistance">Mortgage Loan (LAP) Assistance</option>
                    <option value="GST Services & Assistance">GST Services & Assistance</option>
                    <option value="ITR Filing Assistance">ITR Filing Assistance</option>
                    <option value="Legal Consultancy & Documentation">Legal Consultancy & Documentation</option>
                  </optgroup>
                  <optgroup label="RTO & Documentation">
                    <option value="RTO Services & Driving Licence">RTO Services & Driving Licence</option>
                    <option value="Learner Licence / DL Renewal">Learner Licence / DL Renewal</option>
                    <option value="Vehicle RC Transfer & NOC">Vehicle RC Transfer & NOC</option>
                    <option value="Aadhaar Seva Assistance">Aadhaar Seva Assistance</option>
                    <option value="PAN Card Services">PAN Card Services</option>
                  </optgroup>
                  <optgroup label="Career">
                    <option value="Job Placement Assistance">Job Placement Assistance</option>
                    <option value="Practical Skill Training">Practical Skill Training</option>
                  </optgroup>
                  <option value="Other Assistance">Other Consultancy Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                  Specific Details / Message <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  placeholder="Tell us a little about your requirement or preferred time for a call..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 bg-[#F0F7F2] border border-[#176B3A] text-[#176B3A] hover:bg-[#E0EFE6] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#176B3A]" />
                  <span>Or Send via WhatsApp Directly</span>
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-start gap-1.5 text-[10px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#176B3A] shrink-0 mt-0.5" />
                <span>
                  {MANDATORY_FINANCIAL_DISCLAIMER} Your contact information is kept strictly confidential.
                </span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};


