import React from 'react';
import { Check, Star, Lock } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  const isFeatured = plan.isFeatured;

  return (
    <div
      id={`pricing-card-${plan.id}`}
      className={`relative flex flex-col justify-between rounded-2xl transition-all duration-200 ${
        isFeatured
          ? 'bg-blue-900 text-white border-4 border-amber-400 shadow-xl lg:scale-105 z-10'
          : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Top Banner Tag for Featured Plan */}
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-amber-400 text-blue-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
          <Star className="w-3 h-3 fill-current" />
          <span>BEST VALUE • MOST POPULAR</span>
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        
        {/* Top Badges */}
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              isFeatured ? 'text-blue-200' : 'text-slate-400'
            }`}
          >
            {plan.badge}
          </span>
          {plan.secondaryBadge && (
            <span
              className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                isFeatured ? 'bg-blue-800 text-amber-300' : 'bg-blue-50 text-blue-800'
              }`}
            >
              {plan.secondaryBadge}
            </span>
          )}
        </div>

        {/* Plan Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
            isFeatured ? 'text-white' : 'text-slate-900'
          }`}
        >
          {plan.name}
        </h3>

        {/* Price display */}
        <div className={`mb-4 pb-4 border-b ${isFeatured ? 'border-blue-800/80' : 'border-slate-100'}`}>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span
              className={`text-3xl sm:text-4xl font-black tracking-tight ${
                isFeatured ? 'text-white' : 'text-blue-900'
              }`}
            >
              ₹{plan.price.toLocaleString('en-IN')}
            </span>
            <span
              className={`text-xs font-medium ${
                isFeatured ? 'text-blue-200' : 'text-slate-400'
              }`}
            >
              / {plan.durationDays} Days
            </span>
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded ml-auto ${
                isFeatured
                  ? 'bg-blue-800 text-amber-300'
                  : 'bg-blue-50 text-blue-700 border border-blue-100'
              }`}
            >
              ₹{plan.perDayPrice} / day
            </span>
          </div>
          {plan.originalPrice && (
            <div className={`mt-1 text-xs ${isFeatured ? 'text-blue-300' : 'text-slate-400'}`}>
              Original: <span className="line-through">₹{plan.originalPrice.toLocaleString('en-IN')}</span>{' '}
              <span className={`font-bold ml-1 ${isFeatured ? 'text-amber-300' : 'text-emerald-600'}`}>
                Save ₹{(plan.originalPrice - plan.price).toLocaleString('en-IN')}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-xs sm:text-sm leading-relaxed mb-6 ${
            isFeatured ? 'text-blue-100' : 'text-slate-500'
          }`}
        >
          {plan.description}
        </p>

        {/* Benefits Section */}
        <div className="flex-1">
          <ul className={`space-y-3 text-xs sm:text-sm ${isFeatured ? 'text-blue-50' : 'text-slate-600'}`}>
            {plan.benefits.map((benefit, index) => {
              const isHighlight = isFeatured && index === 0;
              return (
                <li
                  key={index}
                  className={`flex items-start gap-2.5 ${
                    isHighlight ? 'text-white font-semibold' : ''
                  }`}
                >
                  <span
                    className={`flex-shrink-0 mt-0.5 ${
                      isHighlight
                        ? 'text-amber-400 font-bold'
                        : isFeatured
                        ? 'text-blue-300'
                        : 'text-blue-700'
                    }`}
                  >
                    {isHighlight ? '★' : '✓'}
                  </span>
                  <span>{benefit}</span>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      {/* Button Action Bar */}
      <div className="p-6 sm:p-7 pt-0">
        <button
          id={`subscribe-btn-${plan.id}`}
          type="button"
          onClick={() => onSelectPlan(plan)}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
            isFeatured
              ? 'bg-amber-400 hover:bg-amber-300 text-blue-900 font-black shadow-md'
              : 'border-2 border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>{plan.buttonText}</span>
        </button>
      </div>

    </div>
  );
};
