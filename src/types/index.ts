export type ServicePillarId = 'financial' | 'rto-documentation' | 'career';

export interface ServiceItem {
  id: string;
  slug: string;
  pillarId: ServicePillarId;
  title: string;
  shortDesc: string;
  iconName: string;
  tag?: string;
  highlightText?: string;
  route: string;
  overview: string;
  whatWeAssistWith: string[];
  requiredDocuments: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export interface PillarInfo {
  id: ServicePillarId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  route: string;
  badge: string;
  gradient: string;
  services: ServiceItem[];
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  specificService: string;
  city: string;
  message: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'financial' | 'rto' | 'career';
  question: string;
  answer: string;
}
