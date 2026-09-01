import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calculator, Send } from 'lucide-react';

export const LoanCalculator: React.FC = () => {
  const { openEnquiryModal } = useApp();
  
  const [loanType, setLoanType] = useState<'personal' | 'home' | 'mortgage' | 'gold'>('personal');
  const [amount, setAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [interestRate, setInterestRate] = useState<number>(11.5);

  // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - amount;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleTypeChange = (type: 'personal' | 'home' | 'mortgage' | 'gold') => {
    setLoanType(type);
    if (type === 'personal') {
      setAmount(300000);
      setTenureYears(3);
      setInterestRate(11.5);
    } else if (type === 'home') {
      setAmount(3500000);
      setTenureYears(20);
      setInterestRate(8.5);
    } else if (type === 'mortgage') {
      setAmount(2500000);
      setTenureYears(10);
      setInterestRate(9.5);
    } else if (type === 'gold') {
      setAmount(150000);
      setTenureYears(1);
      setInterestRate(9.0);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#176B3A]/20 shadow-md p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#176B3A] text-white">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#7A1F2B]">
              Loan EMI & Eligibility Estimator
            </h3>
            <p className="text-xs text-slate-500">
              Calculate indicative monthly installments and total interest
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-[#176B3A] bg-[#F0F7F2] px-2.5 py-1 rounded border border-[#176B3A]/20">
          Guidance Tool
        </span>
      </div>

      {/* Loan Type Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'gold', label: 'Gold Loan' },
          { id: 'home', label: 'Home Loan' },
          { id: 'mortgage', label: 'Mortgage / LAP' },
          { id: 'gold', label: 'Gold Loan' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => handleTypeChange(t.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              loanType === t.id
                ? 'bg-[#176B3A] text-white shadow-xs'
                : 'bg-[#FAF9F6] text-[#1A261E] hover:bg-[#F0F7F2] border border-slate-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Loan Amount Slider */}
          <div>
            <div className="flex justify-between text-xs font-bold text-[#1A261E] mb-2">
              <span className="uppercase tracking-wider">Required Loan Amount</span>
              <span className="text-[#176B3A] text-sm font-extrabold">{formatINR(amount)}</span>
            </div>
            <input
              type="range"
              min={loanType === 'gold' ? 25000 : 50000}
              max={loanType === 'home' || loanType === 'mortgage' ? 20000000 : 4000000}
              step={loanType === 'gold' ? 10000 : 25000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-[#176B3A] h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>{formatINR(loanType === 'gold' ? 25000 : 50000)}</span>
              <span>{formatINR(loanType === 'home' || loanType === 'mortgage' ? 20000000 : 4000000)}</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between text-xs font-bold text-[#1A261E] mb-2">
              <span className="uppercase tracking-wider">Tenure</span>
              <span className="text-[#176B3A] text-sm font-extrabold">{tenureYears} Year{tenureYears > 1 ? 's' : ''} ({totalMonths} Mos)</span>
            </div>
            <input
              type="range"
              min={1}
              max={loanType === 'home' ? 30 : loanType === 'mortgage' ? 15 : 5}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#176B3A] h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1 Year</span>
              <span>{loanType === 'home' ? '30 Years' : loanType === 'mortgage' ? '15 Years' : '5 Years'}</span>
            </div>
          </div>

          {/* Indicative Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-bold text-[#1A261E] mb-2">
              <span className="uppercase tracking-wider">Indicative Interest Rate (p.a.)</span>
              <span className="text-[#176B3A] text-sm font-extrabold">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={7.0}
              max={22.0}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#176B3A] h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>7.0%</span>
              <span>22.0%</span>
            </div>
          </div>

        </div>

        {/* Calculation Result Card */}
        <div className="lg:col-span-5 bg-[#0F4726] text-white rounded-xl p-6 flex flex-col justify-between shadow-md border border-[#D4A017]/20">
          <div>
            <div className="text-[11px] font-bold text-[#D4A017] uppercase tracking-wider">
              Indicative Monthly EMI
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              {formatINR(emi)}
              <span className="text-xs font-normal text-white/80"> / month</span>
            </div>

            <div className="mt-6 space-y-2.5 pt-4 border-t border-white/10 text-xs">
              <div className="flex justify-between text-white/80">
                <span>Principal Amount:</span>
                <span className="font-semibold text-white">{formatINR(amount)}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Total Interest Payable:</span>
                <span className="font-semibold text-[#D4A017]">{formatINR(totalInterest)}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Total Repayment (P + I):</span>
                <span className="font-semibold text-white">{formatINR(totalPayment)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => openEnquiryModal(`${loanType.toUpperCase()} Loan Assistance (${formatINR(amount)})`, 'Financial Solutions')}
              className="w-full py-3 px-4 bg-[#F28C28] hover:bg-[#D97718] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get Application Assistance</span>
            </button>
            <p className="text-[10px] text-white/70 mt-2 text-center italic">
              * Indicative calculation only. Subject to lender approval.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};


