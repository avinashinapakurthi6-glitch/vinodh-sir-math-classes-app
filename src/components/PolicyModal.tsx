import React from 'react';
import { X, ShieldCheck, FileText, RefreshCcw } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'refund' | null;

interface PolicyModalProps {
  policyType: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  const getPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <ShieldCheck className="w-5 h-5 text-blue-700" />,
          content: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Vinodh Sir Maths Classes (VMC)</strong> is dedicated to protecting student privacy and account integrity. This policy explains how we collect, store, and secure your personal details.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Information We Collect</h4>
              <p>
                When you download our official application or register for a course, we collect your name, mobile number, email address, and device identifier (Android device ID) to provide secure single-device access.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. How Information is Used</h4>
              <p>
                Your information is used strictly to grant course access, send syllabus updates, provide 1-on-1 mentorship, and ensure video lecture security. We <strong className="text-slate-900">never sell or share</strong> your data with third-party advertisers.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Application Permissions</h4>
              <p>
                The official VMC APK only requires basic storage permissions for offline PDF caching and network connectivity for streaming HD video lectures. No unnecessary permissions (contacts, camera, SMS) are requested.
              </p>
            </div>
          ),
        };
      case 'terms':
        return {
          title: 'Terms & Conditions',
          icon: <FileText className="w-5 h-5 text-blue-700" />,
          content: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                By downloading our APK or enrolling in any premium plan on <strong className="text-slate-900">Vinodh Sir Maths Classes</strong>, you agree to the following terms and conditions:
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Course Validity &amp; Access</h4>
              <p>
                All premium subscriptions are valid for 365 Days (1 Full Year) from the date of enrollment. Access is tied to the registered student and a single Android smartphone.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. Intellectual Property</h4>
              <p>
                All video lectures, PDF notes, test series questions, and formula sheets are proprietary educational assets of Vinodh Sir Maths Classes. Screen recording, unauthorized sharing, public redistribution, or commercial copying is strictly prohibited.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Account Security</h4>
              <p>
                Sharing login credentials with multiple users is not permitted and will result in automated account lockout by our single-device security system.
              </p>
            </div>
          ),
        };
      case 'refund':
        return {
          title: 'Refund & Cancellation Policy',
          icon: <RefreshCcw className="w-5 h-5 text-blue-700" />,
          content: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                At <strong className="text-slate-900">Vinodh Sir Maths Classes</strong>, we believe in complete transparency and providing high-quality competitive mathematics preparation.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Digital Course Access</h4>
              <p>
                Since our premium courses grant immediate, unrestricted access to downloadable PDF notes, formula sheets, and proprietary recorded video lectures upon enrollment, standard refunds are processed on a case-by-case review basis within 48 hours of purchase if there is a verified technical issue preventing access.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. Double Payment / Transaction Failures</h4>
              <p>
                In the rare event of a duplicate payment or transaction debit without course activation, full refunds are credited back to the original payment method within 5–7 business days.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Support Assistance</h4>
              <p>
                For any payment inquiries or activation assistance, reach out directly to our support desk via WhatsApp or email at support@vinodhsirmathsclasses.com.
              </p>
            </div>
          ),
        };
    }
  };

  const policy = getPolicyContent();
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
              {policy.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
              {policy.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {policy.content}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
