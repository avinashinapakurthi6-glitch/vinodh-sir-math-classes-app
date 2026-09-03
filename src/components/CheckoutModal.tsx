import React, { useState } from 'react';
import { PricingPlan } from '../types';
import { X, CheckCircle2, ShieldCheck, CreditCard, AlertCircle } from 'lucide-react';
import { PAYMENT_URL_MAP, WHATSAPP_NUMBER } from '../config';
import { trackEvent } from '../utils/analytics';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!plan) return null;

  const paymentUrl = PAYMENT_URL_MAP[plan.paymentUrlKey] || '';
  const isCustomUrlConfigured = paymentUrl && !paymentUrl.includes('ADD_PAYMENT_LINK_HERE');

  const handleProceedToPayment = () => {
    trackEvent('begin_checkout', `Plan: ${plan.name} (₹${plan.price})`);
    setIsProcessing(true);

    if (isCustomUrlConfigured) {
      window.location.href = paymentUrl;
    } else {
      // If placeholder, guide student to instant WhatsApp enrollment with payment instruction
      const cleanPhone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
      const msg = encodeURIComponent(
        `Hello Vinodh Sir Maths Classes,\nI want to subscribe to:\n*${plan.name}*\nPrice: ₹${plan.price} (365 Days Access)\nPlease share the payment QR / UPI / Gateway link.`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
        setIsProcessing(false);
        onClose();
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Course Enrollment Checkout
          </span>
          <h3 className="text-xl font-black text-white tracking-tight">
            Checkout Confirmation
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Instant activation for the Vinodh Sir Maths Classes Android App.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          
          {/* Selected Plan Summary Box */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest block">
              Selected Plan
            </span>
            
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug uppercase tracking-tight">
              {plan.name}
            </h4>

            <div className="mt-3 pt-3 border-t border-slate-200 flex items-baseline justify-between flex-wrap gap-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  ₹{plan.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  / {plan.durationDays} Days
                </span>
              </div>
              <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
                ₹{plan.perDayPrice} / day
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              Included with your subscription:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>365 Days Unlimited Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Full HD Video Lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Subject-wise PDF Notes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Mock Tests &amp; PYQs</span>
              </div>
            </div>
          </div>

          {/* Payment gateway architecture notice */}
          {!isCustomUrlConfigured && (
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Direct Subscription:</strong> Click "Proceed to Payment" to connect with our official enrollment desk for instant UPI / Gateway link / Razorpay enrollment.
              </div>
            </div>
          )}

          {/* Security Guarantee */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-bit SSL Encrypted • Single-Device Protected Login</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 flex flex-col sm:flex-row items-center gap-3">
          <button
            id="modal-proceed-payment-btn"
            type="button"
            disabled={isProcessing}
            onClick={handleProceedToPayment}
            className="w-full sm:w-2/3 flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-75"
          >
            {isProcessing ? (
              <span>Connecting Gateway...</span>
            ) : (
              <>
                <CreditCard className="w-4 h-4 text-amber-400" />
                <span>PROCEED TO PAYMENT</span>
              </>
            )}
          </button>

          <button
            id="modal-cancel-btn"
            type="button"
            onClick={onClose}
            className="w-full sm:w-1/3 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
          >
            CANCEL
          </button>
        </div>

      </div>
    </div>
  );
};
