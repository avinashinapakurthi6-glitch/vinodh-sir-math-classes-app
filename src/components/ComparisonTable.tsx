import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { COMPARISON_DATA, PLANS_DATA } from '../config';
import { PricingPlan } from '../types';

interface ComparisonTableProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectPlan }) => {
  const appscPlan = PLANS_DATA.find((p) => p.id === 'appsc-premium')!;
  const completePlan = PLANS_DATA.find((p) => p.id === 'complete-mentorship')!;
  const apsetPlan = PLANS_DATA.find((p) => p.id === 'apset-csirnet')!;

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex justify-center">
          <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
            ✓
          </span>
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center font-bold text-xs">
            –
          </span>
        </div>
      );
    }
    return (
      <span className="font-semibold text-slate-800 text-xs sm:text-sm text-center block">
        {value}
      </span>
    );
  };

  return (
    <section id="comparison-table" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Features Matrix
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Detailed Plan Comparison
          </h3>
          <p className="mt-1 text-sm sm:text-base text-slate-500">
            Compare all features across our courses to pick the right preparation track for your competitive examinations.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              
              {/* Table Head */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-900 text-white">
                  <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider w-1/4 text-slate-300">
                    Course Features
                  </th>
                  
                  {/* APPSC Pack */}
                  <th className="py-4 px-4 text-center w-1/4 bg-slate-900">
                    <div className="text-sm font-bold text-white">APPSC Pack</div>
                    <div className="text-xs text-slate-300 font-semibold mt-0.5">₹10,000 / Year</div>
                  </th>
                  
                  {/* Complete Pack (Highlighted) */}
                  <th className="py-4 px-4 text-center w-1/4 bg-blue-900 relative border-x-2 border-amber-400">
                    <div className="inline-flex items-center gap-1 bg-amber-400 text-blue-900 text-[9px] font-black uppercase px-2 py-0.5 rounded-full mb-1">
                      <Star className="w-2.5 h-2.5 fill-current" /> Best Value
                    </div>
                    <div className="text-sm font-bold text-white">Complete Pack</div>
                    <div className="text-xs text-amber-300 font-semibold mt-0.5">₹15,000 / Year</div>
                  </th>
                  
                  {/* APSET / CSIR NET */}
                  <th className="py-4 px-4 text-center w-1/4 bg-slate-900">
                    <div className="text-sm font-bold text-white">APSET / CSIR NET</div>
                    <div className="text-xs text-slate-300 font-semibold mt-0.5">₹12,000 / Year</div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-sm">
                {COMPARISON_DATA.map((row, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <tr
                      key={row.feature}
                      className={`hover:bg-slate-50 transition-colors ${
                        isEven ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      {/* Feature Name */}
                      <td className="py-3.5 px-6 font-medium text-slate-800 text-xs sm:text-sm">
                        {row.feature}
                      </td>

                      {/* APPSC Pack Cell */}
                      <td className="py-3.5 px-4 text-center">
                        {renderCell(row.appsc)}
                      </td>

                      {/* Complete Pack Cell (Highlighted Column) */}
                      <td className="py-3.5 px-4 text-center bg-blue-50/50 font-semibold border-x-2 border-blue-900/20">
                        {renderCell(row.complete)}
                      </td>

                      {/* APSET / CSIR NET Cell */}
                      <td className="py-3.5 px-4 text-center">
                        {renderCell(row.apset)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              {/* Table Footer with Subscribe Action buttons */}
              <tfoot>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="py-4 px-6 text-xs text-slate-500 font-medium">
                    365 Days Access • Instant Activation
                  </td>
                  
                  <td className="py-4 px-4 text-center">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(appscPlan)}
                      className="text-xs font-bold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-lg shadow-xs w-full uppercase tracking-tight"
                    >
                      Choose APPSC
                    </button>
                  </td>

                  <td className="py-4 px-4 text-center bg-blue-50/80 border-x-2 border-blue-900/20">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(completePlan)}
                      className="text-xs font-black text-blue-900 bg-amber-400 hover:bg-amber-300 px-3 py-2 rounded-lg shadow-xs w-full uppercase tracking-tight"
                    >
                      Get Complete Pack
                    </button>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(apsetPlan)}
                      className="text-xs font-bold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-lg shadow-xs w-full uppercase tracking-tight"
                    >
                      Choose APSET
                    </button>
                  </td>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
