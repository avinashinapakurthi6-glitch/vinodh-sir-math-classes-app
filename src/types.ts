export type PlanId = 'appsc-premium' | 'complete-mentorship' | 'apset-csirnet';

export interface PlanBenefit {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: PlanId;
  name: string;
  badge: string;
  badgeColor: 'orange' | 'navy' | 'teal';
  secondaryBadge?: string;
  price: number;
  originalPrice?: number;
  durationDays: number;
  perDayPrice: number;
  description: string;
  benefits: string[];
  buttonText: string;
  isFeatured?: boolean;
  paymentUrlKey: 'APPSC_PAYMENT_URL' | 'MENTORSHIP_PAYMENT_URL' | 'APSET_PAYMENT_URL';
}

export interface ComparisonRow {
  feature: string;
  appsc: boolean | string;
  complete: boolean | string;
  apset: boolean | string;
  category?: string;
}

export interface ExamCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export type AnalyticsEvent = 
  | 'download_apk'
  | 'select_appsc_plan'
  | 'select_complete_pack'
  | 'select_apset_plan'
  | 'begin_checkout';
