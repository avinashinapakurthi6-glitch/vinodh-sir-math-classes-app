import React from 'react';
import { Play, FileText, CheckCircle2, Award, BookOpen, Clock, ShieldCheck, Wifi, Battery, Sparkles } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[310px] sm:max-w-[340px] drop-shadow-2xl">
      {/* Glow effect behind device */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-amber-500/20 rounded-[48px] blur-xl opacity-75"></div>
      
      {/* Phone Outer Chassis */}
      <div className="relative bg-slate-950 rounded-[44px] p-3 ring-1 ring-slate-800 shadow-[0_25px_60px_-15px_rgba(30,58,138,0.35)]">
        {/* Phone Speaker & Camera Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
          </div>
          <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
        </div>

        {/* Screen Bezel */}
        <div className="relative bg-slate-900 rounded-[34px] overflow-hidden border border-slate-800 text-slate-100 select-none">
          
          {/* Status Bar */}
          <div className="pt-2.5 px-5 pb-1 flex justify-between items-center text-[10px] font-medium text-slate-400 bg-slate-950">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-blue-400">5G</span>
              <Wifi className="w-3 h-3 text-slate-400" />
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* App Top Bar */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-4 pt-3 pb-3 border-b border-blue-800/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400 text-blue-950 font-black text-xs flex items-center justify-center shadow-md font-sans">
                  VMC
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white tracking-tight leading-tight">VINODH SIR MATHS</h4>
                  <p className="text-[8px] text-blue-200">APPSC • APSET • CSIR NET</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-blue-800/60 border border-blue-700/50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[8px] text-emerald-300 font-medium">PREMIUM</span>
              </div>
            </div>
          </div>

          {/* App Content Body */}
          <div className="p-3.5 space-y-3 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 max-h-[460px] overflow-hidden text-xs">
            
            {/* Banner Card */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl p-3 text-white shadow-md relative overflow-hidden border border-blue-600/50">
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
              <div className="flex items-center gap-1 text-[9px] font-semibold text-amber-300 mb-1 uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" /> Complete Pack 2026
              </div>
              <p className="font-bold text-[12px] leading-snug">APPSC JL / DL &amp; CSIR NET Mathematics</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] text-blue-100 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" /> 365 Days Access
                </span>
                <span className="text-[9px] bg-amber-400 text-blue-950 font-bold px-2 py-0.5 rounded-md">
                  Active
                </span>
              </div>
            </div>

            {/* Quick Grid Action Shortcuts */}
            <div className="grid grid-cols-4 gap-1.5 text-center">
              <div className="bg-slate-800/80 hover:bg-slate-800 p-2 rounded-lg border border-slate-700/60 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-1">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                <span className="text-[8px] font-medium text-slate-200">Lectures</span>
              </div>
              <div className="bg-slate-800/80 hover:bg-slate-800 p-2 rounded-lg border border-slate-700/60 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1">
                  <FileText className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-medium text-slate-200">PDF Notes</span>
              </div>
              <div className="bg-slate-800/80 hover:bg-slate-800 p-2 rounded-lg border border-slate-700/60 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-medium text-slate-200">Mock Tests</span>
              </div>
              <div className="bg-slate-800/80 hover:bg-slate-800 p-2 rounded-lg border border-slate-700/60 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-1">
                  <BookOpen className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-medium text-slate-200">PYQs</span>
              </div>
            </div>

            {/* Lecture list in progress */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Continue Learning</span>
                <span className="text-[9px] text-blue-400 font-semibold">View All</span>
              </div>

              <div className="space-y-1.5">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-blue-900/60 text-blue-300 flex items-center justify-center flex-shrink-0">
                      <Play className="w-3 h-3 fill-current" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-white truncate max-w-[150px]">Real Analysis - Metric Spaces</h5>
                      <p className="text-[8px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-2 h-2" /> 58 mins • Full HD
                      </p>
                    </div>
                  </div>
                  <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                    92%
                  </span>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-indigo-900/60 text-indigo-300 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-3 h-3" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-white truncate max-w-[150px]">Abstract Algebra Formula Bank</h5>
                      <p className="text-[8px] text-slate-400">PDF • 42 Pages</p>
                    </div>
                  </div>
                  <span className="text-[8px] font-semibold text-blue-300 bg-blue-950 px-1.5 py-0.5 rounded border border-blue-800">
                    PDF
                  </span>
                </div>
              </div>
            </div>

            {/* Trust badge inside app mockup */}
            <div className="bg-blue-950/60 border border-blue-800/40 rounded-lg p-2 text-center">
              <p className="text-[8px] text-blue-200">
                🔒 Single Device Secure Student Authentication Active
              </p>
            </div>
          </div>

          {/* App Bottom Navigation */}
          <div className="bg-slate-950 border-t border-slate-800 px-4 py-2 flex justify-around items-center text-slate-400">
            <div className="flex flex-col items-center text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span className="text-[7px] font-bold mt-0.5">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <Play className="w-3.5 h-3.5" />
              <span className="text-[7px] mt-0.5">Courses</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="text-[7px] mt-0.5">Tests</span>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="w-3.5 h-3.5" />
              <span className="text-[7px] mt-0.5">Notes</span>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="py-1 bg-slate-950 flex justify-center">
            <div className="w-20 h-0.5 bg-slate-600 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
};
