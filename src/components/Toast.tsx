import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm bg-[#0F4726] text-white px-4 py-3 rounded-lg shadow-xl border border-[#D4A017]/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
      <CheckCircle className="w-5 h-5 text-[#D4A017] shrink-0" />
      <p className="text-xs sm:text-sm font-medium text-white">{toastMessage}</p>
    </div>
  );
};

