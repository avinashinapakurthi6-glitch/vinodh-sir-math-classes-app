import React from 'react';
import { PLANS_DATA } from '../config';
import { PricingPlan } from '../types';
import { PricingCard } from './PricingCard';
import { ShieldCheck, Award } from 'lucide-react';

interface PremiumPlansProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PremiumPlans: React.FC<PremiumPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="premium-plans" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 max-w-6xl mx-auto gap-4">
          <div>
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
              Course Enrollments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Premium Plan
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-500">
              Structured Mathematics preparation for serious competitive aspirants.
            </p>
          </div>
          <a
            href="#comparison-table"
            className="text-blue-700 text-xs font-bold border-b-2 border-blue-700 pb-0.5 uppercase tracking-wider hover:text-blue-900 hover:border-blue-900 transition-colors w-fit"
          >
            Compare All Features →
          </a>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS_DATA.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>

        {/* Trust points footer under plans */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-blue-700" /> 365 Days Unrestricted Access
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <Award className="w-4 h-4 text-amber-600" /> Complete Mathematics Syllabus
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Instant Mobile Activation
          </span>
        </div>

      </div>
    </section>
  );
};
