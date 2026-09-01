import React from 'react';
import {
  UserCheck,
  Coins,
  Home,
  Building,
  FileSpreadsheet,
  Receipt,
  Scale,
  Car,
  Fingerprint,
  CreditCard,
  Briefcase,
  GraduationCap,
  Landmark,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  FileText,
  HelpCircle,
  Clock,
  Sparkles,
  Search,
  LucideProps
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'UserCheck':
      return <UserCheck {...props} />;
    case 'Coins':
      return <Coins {...props} />;
    case 'Home':
      return <Home {...props} />;
    case 'Building':
      return <Building {...props} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet {...props} />;
    case 'Receipt':
      return <Receipt {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'Car':
      return <Car {...props} />;
    case 'Fingerprint':
      return <Fingerprint {...props} />;
    case 'CreditCard':
      return <CreditCard {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'GraduationCap':
      return <GraduationCap {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'FileCheck':
      return <FileCheck {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Search':
      return <Search {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
