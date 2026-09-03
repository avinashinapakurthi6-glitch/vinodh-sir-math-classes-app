import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PremiumPlans } from './components/PremiumPlans';
import { ComparisonTable } from './components/ComparisonTable';
import { AppFeatures } from './components/AppFeatures';
import { ExamsCovered } from './components/ExamsCovered';
import { InstallationSteps } from './components/InstallationSteps';
import { WhyChooseVMC } from './components/WhyChooseVMC';
import { FAQ } from './components/FAQ';
import { FinalDownloadCTA } from './components/FinalDownloadCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { Toast } from './components/Toast';
import { PricingPlan } from './types';
import { APK_FILE_NAME, APK_SIZE } from './config';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownloadNotification = () => {
    setToastMessage(`Downloading official APK (${APK_FILE_NAME}, ${APK_SIZE}). Follow the 4-step installation guide below!`);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    // Track specific plan event
    if (plan.id === 'appsc-premium') {
      trackEvent('select_appsc_plan', plan.name);
    } else if (plan.id === 'complete-mentorship') {
      trackEvent('select_complete_pack', plan.name);
    } else if (plan.id === 'apset-csirnet') {
      trackEvent('select_apset_plan', plan.name);
    }

    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header (Navigation & View Plans) */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero (Contains Primary Download Button #1) */}
        <Hero onDownloadClick={handleDownloadNotification} />

        {/* 3. Premium Plans */}
        <PremiumPlans onSelectPlan={handleSelectPlan} />

        {/* 4. Premium Plan Comparison */}
        <ComparisonTable onSelectPlan={handleSelectPlan} />

        {/* 5. App Features */}
        <AppFeatures />

        {/* 6. Exams Covered */}
        <ExamsCovered />

        {/* 7. How to Install APK */}
        <InstallationSteps />

        {/* 8. Why Choose VMC */}
        <WhyChooseVMC />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Final Download CTA (Contains Closing Download Button #2) */}
        <FinalDownloadCTA onDownloadClick={handleDownloadNotification} />

        {/* 11. Contact / Support */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Checkout Confirmation Modal */}
      <CheckoutModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />

      {/* Policy Modal (Privacy / Terms / Refund) */}
      <PolicyModal
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}
