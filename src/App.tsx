/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { EnquiryModal } from './components/EnquiryModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { FinancialHubPage } from './pages/FinancialHubPage';
import { RtoHubPage } from './pages/RtoHubPage';
import { CareerHubPage } from './pages/CareerHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Data
import { ALL_SERVICES } from './data/servicesData';

const AppContent: React.FC = () => {
  const { currentPath, navigate } = useApp();

  // Scroll to top whenever currentPath changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Route matching logic
  const renderCurrentPage = () => {
    // 1. Root
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    // 2. Services Index
    if (currentPath === '/services') {
      return <ServicesIndexPage />;
    }

    // 3. Hub Pages
    if (currentPath === '/financial') {
      return <FinancialHubPage />;
    }
    if (currentPath === '/rto-documentation') {
      return <RtoHubPage />;
    }
    if (currentPath === '/career') {
      return <CareerHubPage />;
    }

    // 4. Static Pages
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // 5. Dynamic Service Detail Match
    const matchedService = ALL_SERVICES.find(
      s => s.route === currentPath || currentPath.endsWith(`/${s.slug}`)
    );

    if (matchedService) {
      return <ServiceDetailPage service={matchedService} />;
    }

    // Fallback if not found: render ServicesIndexPage
    return <ServicesIndexPage />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-[#1A261E]">
      {/* Sticky Header with Mega Menu */}
      <Header />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Dark Footer with Disclaimers */}
      <Footer />

      {/* Mobile Fixed Bottom Nav & Desktop Floating Button */}
      <MobileBottomNav />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal />

      {/* Toast Notification */}
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
