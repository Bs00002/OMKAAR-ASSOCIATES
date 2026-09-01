import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ServiceItem } from '../types';
import { ALL_SERVICES } from '../data/servicesData';

interface AppContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isEnquiryModalOpen: boolean;
  openEnquiryModal: (serviceName?: string, category?: string) => void;
  closeEnquiryModal: (clearSelected?: boolean) => void;
  selectedServiceForModal: { name: string; category: string } | null;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (open: boolean) => void;
  getServiceBySlug: (slug: string) => ServiceItem | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<{ name: string; category: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (currentPath !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openEnquiryModal = (serviceName?: string, category?: string) => {
    if (serviceName) {
      setSelectedServiceForModal({
        name: serviceName,
        category: category || 'Financial Solutions'
      });
    } else {
      setSelectedServiceForModal(null);
    }
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const getServiceBySlug = (slug: string) => {
    return ALL_SERVICES.find(s => s.slug === slug || s.route.endsWith(`/${slug}`));
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        isEnquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal,
        selectedServiceForModal,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
        isMegaMenuOpen,
        setIsMegaMenuOpen,
        getServiceBySlug
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
