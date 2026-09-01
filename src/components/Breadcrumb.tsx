import React from 'react';
import { useApp } from '../context/AppContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { navigate } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-[#FAF9F6] border-b border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto flex items-center space-x-1.5 text-slate-600 overflow-x-auto no-scrollbar">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 hover:text-[#7A1F2B] transition-colors shrink-0 font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-bold text-[#7A1F2B] shrink-0 truncate max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-[#7A1F2B] hover:underline transition-colors shrink-0 font-medium"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};


