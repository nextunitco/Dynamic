export type PageId = 'home' | 'about' | 'services' | 'knowledge' | 'loyalty' | 'contact' | 'book';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'servicing' | 'tyres' | 'brakes' | 'diagnostics' | 'battery' | 'ac' | 'suspension' | 'mot';
  shortDesc: string;
  iconName: string;
  fullDesc: string;
  features: string[];
  recommendedInterval?: string;
  pricingNote?: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  shortDesc: string;
  content: string[];
  keyTakeaway: string;
  warningSymptoms?: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleReg: string;
  vehicleType: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage: string;
}

export interface LoyaltyMember {
  name: string;
  phone: string;
  email: string;
  memberId: string;
  tier: string;
  joinedDate: string;
  pointsBalance: number;
}
