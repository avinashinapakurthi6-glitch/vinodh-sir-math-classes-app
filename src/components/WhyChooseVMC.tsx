import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../config';
import { PlayCircle, FileText, CheckSquare, History, BookOpen, Users } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  PlayCircle: <PlayCircle className="w-6 h-6 text-blue-700" />,
  FileText: <FileText className="w-6 h-6 text-blue-700" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-blue-700" />,
  History: <History className="w-6 h-6 text-blue-700" />,
  BookOpen: <BookOpen className="w-6 h-6 text-blue-700" />,
  Users: <Users className="w-6 h-6 text-blue-700" />,
};

export const WhyChooseVMC: React.FC = () => {
  return (
    <section id="why-choose-vmc" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Academic Excellence &amp; Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need for Mathematics Preparation
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 leading-relaxed">
            Our comprehensive teaching pedagogy combines deep conceptual clarity with high-speed problem-solving techniques.
          </p>
        </div>

        {/* 6 Clean Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs mb-5">
                  {ICON_MAP[item.iconName] || <PlayCircle className="w-6 h-6 text-blue-700" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
                <span>Exam Oriented Resource</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
