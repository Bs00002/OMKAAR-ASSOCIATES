import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ServiceFinderSection } from '../components/ServiceFinderSection';
import { MajorServicesSection } from '../components/MajorServicesSection';
import { AboutEditorial } from '../components/AboutEditorial';
import { HowItWorks } from '../components/HowItWorks';
import { WhyOmkaar } from '../components/WhyOmkaar';
import { FaqSection } from '../components/FaqSection';
import { FinalCta } from '../components/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Split-Screen Hero Section */}
      <Hero />

      {/* 2. Horizontal Trust Strip (01 to 05) */}
      <TrustStrip />

      {/* 3. Service Finder ("How Can We Help You?") */}
      <ServiceFinderSection />

      {/* 4. Three Major Services (Large Editorial Horizontal Panels) */}
      <MajorServicesSection />

      {/* 5. Editorial About Omkaar Section */}
      <AboutEditorial />

      {/* 6. Clean 4-Step Timeline Workflow */}
      <HowItWorks />

      {/* 7. Why Choose Omkaar Associates */}
      <WhyOmkaar />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Final CTA */}
      <FinalCta />
    </div>
  );
};
