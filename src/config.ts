import { PricingPlan, ComparisonRow, ExamCategory, FAQItem, WhyChooseItem } from './types';

// ==========================================
// CONFIGURATION VARIABLES (EASILY CUSTOMIZABLE)
// ==========================================

// Official APK Download Configuration
export const APK_FILE_URL = "https://drive.google.com/uc?export=download&id=179mQtX-3gYxJ5yJBYM9i_ZoFlBbhYLj2";
export const APK_FILE_NAME = "vmc-maths-classes.apk";
export const APK_VERSION = "v2.4.0 (Build 108)";
export const APK_SIZE = "31 MB";
export const APK_MIN_ANDROID = "Android 7.0 (Nougat) or higher";
export const APK_LAST_UPDATED = "August 2026 (Latest Stable)";

// Payment URLs (Update these when payment links are ready)
export const APPSC_PAYMENT_URL = "ADD_PAYMENT_LINK_HERE";
export const MENTORSHIP_PAYMENT_URL = "ADD_PAYMENT_LINK_HERE";
export const APSET_PAYMENT_URL = "ADD_PAYMENT_LINK_HERE";

// Contact Details
export const WHATSAPP_NUMBER = "+919381254805"; // Update with actual number
export const PHONE_NUMBER = "+919381254805";     // Update with actual number
export const EMAIL_ADDRESS = "rvinodh5028@gmail.com";
export const YOUTUBE_URL = "https://youtube.com/@vinodhr951?si=VpjFbfDmvAWDsL8L";

// Helper map to retrieve payment URL by key
export const PAYMENT_URL_MAP: Record<string, string> = {
  APPSC_PAYMENT_URL,
  MENTORSHIP_PAYMENT_URL,
  APSET_PAYMENT_URL,
};

// ==========================================
// PRICING PLANS DATA
// ==========================================
export const PLANS_DATA: PricingPlan[] = [
  {
    id: 'appsc-premium',
    name: 'APPSC JL/DL/PL/RGUKT Lectures',
    badge: 'APPSC JL / DL / Polytechnic / RGUKT',
    badgeColor: 'orange',
    price: 10000,
    originalPrice: 15000,
    durationDays: 365,
    perDayPrice: 27,
    description: 'Complete video lectures and study materials specially designed for APPSC JL, DL, PL and RGUKT examinations.',
    benefits: [
      'Full Video Lectures',
      'Complete Subject-wise PDFs',
      'Mock Tests',
      'PYQs',
      'Formula Sheets',
      'Secure View Only Access'
    ],
    buttonText: 'SUBSCRIBE NOW',
    isFeatured: false,
    paymentUrlKey: 'APPSC_PAYMENT_URL',
  },
  {
    id: 'complete-mentorship',
    name: 'Complete Pack with Mentorship',
    badge: 'COMPLETE PACK',
    badgeColor: 'navy',
    secondaryBadge: 'MOST POPULAR',
    price: 15000,
    originalPrice: 22000,
    durationDays: 365,
    perDayPrice: 41,
    description: 'Complete preparation package including all premium video lectures, study materials, doubt clarification, mentorship, mock tests, previous papers, PDFs and regular updates.',
    benefits: [
      'Complete Course Access',
      'Personal Mentorship',
      'Daily Practice Tests',
      'Weekly Grand Tests',
      'PDF Notes',
      'Previous Year Questions',
      'Doubt Support',
      'Single Device Secure Access'
    ],
    buttonText: 'GET COMPLETE PACK',
    isFeatured: true,
    paymentUrlKey: 'MENTORSHIP_PAYMENT_URL',
  },
  {
    id: 'apset-csirnet',
    name: 'APSET/CSIR NET',
    badge: 'APSET / CSIR NET',
    badgeColor: 'teal',
    price: 12000,
    originalPrice: 18000,
    durationDays: 365,
    perDayPrice: 32,
    description: 'Complete preparation course for APSET and CSIR NET Mathematics examinations.',
    benefits: [
      'Complete Recorded Lectures',
      'Advanced Notes',
      'Practice Tests',
      'PYQs',
      'Formula Book',
      'Secure Access'
    ],
    buttonText: 'SUBSCRIBE NOW',
    isFeatured: false,
    paymentUrlKey: 'APSET_PAYMENT_URL',
  }
];

// ==========================================
// COMPARISON TABLE DATA
// ==========================================
export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Video Lectures', appsc: true, complete: true, apset: true },
  { feature: 'PDF Notes', appsc: true, complete: true, apset: true },
  { feature: 'Mock Tests', appsc: true, complete: true, apset: true },
  { feature: 'PYQs (Previous Year Questions)', appsc: true, complete: true, apset: true },
  { feature: 'Formula Material & Sheets', appsc: true, complete: true, apset: true },
  { feature: 'Daily Practice Tests', appsc: false, complete: true, apset: false },
  { feature: 'Weekly Grand Tests', appsc: false, complete: true, apset: true },
  { feature: 'Mentorship', appsc: false, complete: true, apset: false },
  { feature: 'Doubt Support', appsc: 'Standard', complete: 'Priority 1-on-1', apset: 'Standard' },
  { feature: 'Duration', appsc: '365 Days', complete: '365 Days', apset: '365 Days' },
  { feature: 'Secure Access', appsc: 'Single Device', complete: 'Single Device', apset: 'Single Device' },
];

// ==========================================
// APP FEATURES DATA
// ==========================================
export const APP_FEATURES_LIST: string[] = [
  'Premium Video Lectures',
  'Mathematics PDF Notes',
  'Online Mock Tests',
  'Previous Year Questions',
  'Formula Sheets',
  'Course Updates',
  'Secure Student Login',
  'Single Device Security',
  'Structured Preparation',
  'Regular Practice Material'
];

// ==========================================
// EXAM CATEGORIES DATA
// ==========================================
export const EXAM_CATEGORIES: ExamCategory[] = [
  {
    id: 'appsc-jl',
    title: 'APPSC JL',
    shortTitle: 'Junior Lecturer',
    description: 'Specialized syllabus coverage for Andhra Pradesh Junior College Lecturer posts in Mathematics.',
    badge: 'State Govt Post',
    iconName: 'GraduationCap'
  },
  {
    id: 'appsc-dl',
    title: 'APPSC DL',
    shortTitle: 'Degree Lecturer',
    description: 'In-depth advanced mathematics modules targeted for AP Degree College Lecturer selection.',
    badge: 'Gazetted Cadre',
    iconName: 'Award'
  },
  {
    id: 'polytechnic-lecturer',
    title: 'POLYTECHNIC LECTURER',
    shortTitle: 'Polytechnic Engineering Maths',
    description: 'Comprehensive applied and pure mathematics curriculum tailored for APPSC PL entrance.',
    badge: 'Technical Education',
    iconName: 'Cpu'
  },
  {
    id: 'rgukt-lecturer',
    title: 'RGUKT LECTURER',
    shortTitle: 'IIIT RGUKT Faculty',
    description: 'Curated university standard mathematical disciplines for RGUKT Lecturer recruitment.',
    badge: 'University Level',
    iconName: 'Building2'
  },
  {
    id: 'apset',
    title: 'APSET',
    shortTitle: 'State Eligibility Test',
    description: 'Mathematical Sciences Paper II & III comprehensive prep for APSET qualification.',
    badge: 'State Eligibility',
    iconName: 'CheckCircle2'
  },
  {
    id: 'csir-net',
    title: 'CSIR-NET',
    shortTitle: 'JRF & Assistant Professor',
    description: 'National-level rigorous preparation for CSIR UGC NET Mathematical Sciences.',
    badge: 'National Exam',
    iconName: 'TrendingUp'
  },
  {
    id: 'competitive-mathematics',
    title: 'MATHEMATICS',
    shortTitle: 'Competitive Mathematics Aspirants',
    description: 'Fundamental to Olympiad & competitive state/central mathematics recruitment test suites.',
    badge: 'All Aspirants',
    iconName: 'Sigma'
  }
];

// ==========================================
// WHY CHOOSE VMC DATA
// ==========================================
export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: 'VIDEO LECTURES',
    description: 'Concept-oriented Mathematics lectures from fundamentals to advanced competitive level with step-by-step derivations and problem-solving techniques.',
    iconName: 'PlayCircle'
  },
  {
    title: 'PREMIUM PDF NOTES',
    description: 'Well-structured subject-wise Mathematics study materials designed for quick chapter revision and formula memorization.',
    iconName: 'FileText'
  },
  {
    title: 'MOCK TESTS',
    description: 'Exam-oriented online practice tests modeled on the real examination interface with time limits and detailed performance analytics.',
    iconName: 'CheckSquare'
  },
  {
    title: 'PREVIOUS YEAR QUESTIONS',
    description: 'Important PYQs with detailed analytical solutions for APPSC, APSET, CSIR-NET and related competitive examinations.',
    iconName: 'History'
  },
  {
    title: 'FORMULA SHEETS',
    description: 'Quick revision material and important Mathematics formulas categorized topic-wise for rapid recall before examination day.',
    iconName: 'BookOpen'
  },
  {
    title: 'PERSONAL MENTORSHIP',
    description: 'Available in the Complete Pack for structured preparation, personalized study schedules, doubt clarification, and strategic guidance from Vinodh Sir.',
    iconName: 'Users'
  }
];

// ==========================================
// FAQ DATA
// ==========================================
export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "How can I download Vinodh Sir Maths Classes App?",
    answer: "You can directly download the official APK by clicking the 'Download APK' button on this official website. Once downloaded, tap the file on your Android smartphone and follow the simple on-screen installation steps."
  },
  {
    id: 2,
    question: "Is the APK safe to install?",
    answer: "Yes, 100% safe. This is the official, verified release directly from Vinodh Sir Maths Classes. It contains no malware or third-party ads. When Android asks for 'Install Unknown Apps' permission, allow it for your browser to proceed with the official setup."
  },
  {
    id: 3,
    question: "How long is the premium subscription valid?",
    answer: "All our premium plans come with a full 365 Days (1 Year) validity from the date of activation. This ensures continuous access throughout your examination lifecycle."
  },
  {
    id: 4,
    question: "What is included in the APPSC ₹10,000 plan?",
    answer: "The APPSC JL/DL/PL/RGUKT plan includes full video lectures covering the complete syllabus, subject-wise PDF notes, regular mock tests, previous year questions (PYQs) with solutions, formula sheets, and secure view-only access for 365 days."
  },
  {
    id: 5,
    question: "What is included in the Complete Pack ₹15,000 plan?",
    answer: "The Complete Pack is our all-inclusive flagship course. It includes complete video lectures, direct personal mentorship from Vinodh Sir, daily practice tests, weekly grand tests, all PDF notes, extensive PYQ discussions, priority 1-on-1 doubt resolution, and single-device secure access for 365 days."
  },
  {
    id: 6,
    question: "What is included in the APSET/CSIR NET ₹12,000 plan?",
    answer: "The APSET / CSIR NET course includes complete recorded lectures on higher mathematical sciences (Real Analysis, Complex Analysis, Linear Algebra, Abstract Algebra, ODE/PDE, Calculus of Variations), advanced notes, practice tests, PYQs, and formula books."
  },
  {
    id: 7,
    question: "Can I access PDF notes in the app?",
    answer: "Yes! All enrolled students can read and study subject-wise PDF notes directly within the secure in-app viewer anytime with smooth zooming and page navigation."
  },
  {
    id: 8,
    question: "Are mock tests included?",
    answer: "Yes, mock tests with detailed timer, section-wise marking, and answer explanations are included in all premium plans to help you master time management and exam temperament."
  },
  {
    id: 9,
    question: "Does the Complete Pack include mentorship?",
    answer: "Yes! The ₹15,000 Complete Pack includes direct personal mentorship, strategy sessions, preparation roadmap planning, and priority doubt support throughout your 365-day validity period."
  },
  {
    id: 10,
    question: "Can I use my premium account on multiple devices?",
    answer: "To protect proprietary lectures and maintain system integrity, each account is linked to a single registered Android smartphone device with high-grade security."
  },
  {
    id: 11,
    question: "How can I contact support?",
    answer: "You can reach our support team directly via WhatsApp (+91 94948 83344), Phone Call, Email (support@vinodhsirmathsclasses.com), or through our official YouTube channel."
  }
];
