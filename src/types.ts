export interface InternetPackage {
  id: string;
  name: string;
  category: 'home' | 'smart' | 'corporate' | 'gaming';
  speedMbps: number;
  uploadMbps: number;
  bdixSpeedMbps: number;
  youtubeSpeedMbps: number;
  ftpSpeedMbps: number;
  priceMonthly: number;
  popular?: boolean;
  badge?: string;
  targetAudience: string;
  features: string[];
  hasRealIP: boolean;
  freeInstallation: boolean;
}

export interface CoverageArea {
  id: string;
  district: string;
  thana: string;
  areaName: string;
  status: 'available' | 'expanding' | 'planned';
  fiberType: string;
  hotline: string;
  estimatedSetupHours: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlightText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  packageUsed: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'connection' | 'billing' | 'technical' | 'package';
}

export interface ConnectionFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  area: string;
  packageId: string;
  notes?: string;
}
