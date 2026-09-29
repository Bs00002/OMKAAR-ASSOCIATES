import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { MANDATORY_FINANCIAL_DISCLAIMER } from '../data/servicesData';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Personal Loan Assistance');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Please enter your contact number';
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!city.trim()) errs.city = 'Please enter your city / location';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    showToast('Enquiry received! Our team will connect with you shortly.');
  };



  return (
    <div className="pt-16 min-h-screen bg-[#FAF9F6]">
      
      <Breadcrumb items={[{ label: 'Contact Us & Enquiries' }]} />

      {/* Hero */}
      <section className="bg-[#7A1F2B] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D4A017] font-bold text-xs uppercase tracking-widest mb-3 border border-[#D4A017]/40">
            GET IN TOUCH
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Talk About What You Need
          </h1>
          <p className="mt-3 text-base text-white/90">
            Have a question about loans, RTO documents, GST returns, or training? Our assistance desk is here to guide you.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#7A1F2B]">
                  Consultation Desk
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Reach out directly via phone, WhatsApp, or email.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-[#D4A017]/30">
                  <div className="p-2.5 rounded-lg bg-[#7A1F2B] text-white shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#7A1F2B] uppercase tracking-wider">Official Email Helpdesk</div>
                    <a href="mailto:omkaarassociates9@gmail.com" className="font-bold text-slate-900 text-sm mt-0.5 block hover:text-[#7A1F2B] transition-colors underline underline-offset-4 decoration-[#D4A017]/40">
                      omkaarassociates9@gmail.com
                    </a>
                    <div className="text-xs text-slate-500 mt-1">Direct communication for enquiries, document reviews & updates</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F0F7F2] border border-[#176B3A]/30">
                  <div className="p-2.5 rounded-lg bg-[#176B3A] text-white shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#176B3A] uppercase tracking-wider">Online Consultation</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">Procedural Service Support Across India</div>
                    <div className="text-xs text-slate-600 mt-1">Online file verification, slot scheduling & application tracking</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-[#7A1F2B] text-white shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#7A1F2B] uppercase tracking-wider">Consultation Hours</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">Monday to Saturday: 10:00 AM – 7:00 PM</div>
                    <div className="text-xs text-slate-500 mt-1">Sunday: Closed • Enquiries submitted outside hours reviewed next business day</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Note Box */}
            <div className="p-5 rounded-2xl bg-[#7A1F2B] text-white space-y-2 text-xs">
              <div className="font-bold text-[#D4A017] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Service Guarantee & Privacy</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                All client enquiries and documents are handled with strict professional discretion. We never share your contact details with unauthorized third parties.
              </p>
            </div>

          </div>

          {/* Right Column: Working Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-md">
              
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-2xl font-bold text-[#7A1F2B]">
                  Send an Online Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out your details below and our service specialist will contact you with relevant document requirements.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-[#F0F7F2] text-[#176B3A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#7A1F2B]">Thank You, {name}!</h4>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                      Your enquiry for <strong>{service}</strong> has been assigned to our consultancy desk. We will reach out to you on <strong>+91 {phone}</strong> within 1–2 business hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href="mailto:omkaarassociates9@gmail.com"
                      className="px-5 py-3 bg-[#7A1F2B] hover:bg-[#5A141E] text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#D4A017]" />
                      <span>Send Direct Email</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setPhone('');
                        setCity('');
                        setMessage('');
                      }}
                      className="px-5 py-3 bg-[#FAF9F6] hover:bg-[#FDF2F4] text-[#7A1F2B] rounded-lg text-xs font-semibold border border-slate-200"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#F28C28]">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Deshmukh"
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
                        errors.name ? 'border-[#F28C28] bg-[#FFF5EC]' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent`}
                    />
                    {errors.name && <p className="text-[11px] text-[#F28C28] mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Phone & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                        Mobile Number <span className="text-[#F28C28]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-400">+91</span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className={`w-full pl-11 pr-3 py-2.5 text-sm rounded-lg border ${
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
                        placeholder="e.g. Ahmedabad, Surat, Vadodara"
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
                          errors.city ? 'border-[#F28C28] bg-[#FFF5EC]' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent`}
                      />
                      {errors.city && <p className="text-[11px] text-[#F28C28] mt-0.5">{errors.city}</p>}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                      Service Required <span className="text-[#F28C28]">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent"
                    >
                      <option value="Financial Solutions">Financial Solutions (General)</option>
                      <option value="Financial Guidance & Assistance">Financial Guidance & Assistance</option>
                      <option value="Gold Loan Assistance">Gold Loan Assistance</option>
                      <option value="Home Loan Assistance">Home Loan Assistance</option>
                      <option value="Mortgage Loan (LAP) Assistance">Mortgage Loan (LAP) Assistance</option>
                      <option value="GST Services & Assistance">GST Services & Assistance</option>
                      <option value="ITR Filing Assistance">ITR Filing Assistance</option>
                      <option value="Legal Consultancy & Documentation">Legal Consultancy & Documentation</option>
                      <option value="RTO Services & Driving Licence">RTO Services & Driving Licence</option>
                      <option value="Aadhaar Seva Assistance">Aadhaar Seva Assistance</option>
                      <option value="PAN Card Services">PAN Card Services</option>
                      <option value="Job Placement Assistance">Job Placement Assistance</option>
                      <option value="Practical Skill Training">Practical Skill Training</option>
                      <option value="Other Consultation">Other Requirement</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#7A1F2B] uppercase tracking-wider mb-1">
                      Message / Requirement Details <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Briefly describe your requirements or preferred time to connect..."
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] focus:border-transparent"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-5 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Service Enquiry</span>
                    </button>

                    <a
                      href="mailto:omkaarassociates9@gmail.com"
                      className="py-3.5 px-5 bg-[#FAF9F6] hover:bg-[#FDF2F4] border border-[#7A1F2B]/30 text-[#7A1F2B] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#7A1F2B]" />
                      <span>Or Email Us Directly</span>
                    </a>
                  </div>

                  {/* Form Disclaimer */}
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 italic">
                    * {MANDATORY_FINANCIAL_DISCLAIMER}
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
