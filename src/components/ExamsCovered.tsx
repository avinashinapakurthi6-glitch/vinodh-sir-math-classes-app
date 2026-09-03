import React from 'react';
import { EXAM_CATEGORIES } from '../config';
import { GraduationCap, Award, Cpu, Building2, CheckCircle2, TrendingUp, BookOpen, Sigma } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-blue-400" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
  Building2: <Building2 className="w-6 h-6 text-emerald-400" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-teal-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-400" />,
  Sigma: <Sigma className="w-6 h-6 text-amber-400" />,
};

export const ExamsCovered: React.FC = () => {
  return (
    <section id="exams-covered" className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Targeted Examination Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Exams Covered in VMC
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 leading-relaxed">
            Specialized coaching syllabus strictly mapped to state and national competitive examinations.
          </p>
        </div>

        {/* 7 Exam Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {EXAM_CATEGORIES.map((exam) => (
            <div
              key={exam.id}
              className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 transition-all duration-200 shadow-sm hover:border-slate-600 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {ICON_MAP[exam.iconName] || <BookOpen className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                    {exam.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {exam.title}
                </h3>
                <div className="text-xs text-amber-400 font-semibold mt-0.5 uppercase tracking-wide">
                  {exam.shortTitle}
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {exam.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="text-blue-300 font-semibold">
                  ✓ Full Syllabus Notes
                </span>
                <span className="text-slate-500 font-medium text-[11px]">VMC Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
