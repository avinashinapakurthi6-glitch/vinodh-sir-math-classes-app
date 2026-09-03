import React from 'react';
import { CheckCircle2, Smartphone, Play, FileText, CheckSquare, BookOpen, Layers, ShieldCheck, Lock, RefreshCw, Zap } from 'lucide-react';
import { APP_FEATURES_LIST } from '../config';

interface AppFeaturesProps {
  onDownloadClick?: () => void;
}

const FEATURE_ICONS: Record<number, React.ReactNode> = {
  0: <Play className="w-5 h-5 text-blue-700" />,
  1: <FileText className="w-5 h-5 text-blue-700" />,
  2: <CheckSquare className="w-5 h-5 text-blue-700" />,
  3: <BookOpen className="w-5 h-5 text-blue-700" />,
  4: <Layers className="w-5 h-5 text-blue-700" />,
  5: <RefreshCw className="w-5 h-5 text-blue-700" />,
  6: <ShieldCheck className="w-5 h-5 text-blue-700" />,
  7: <Lock className="w-5 h-5 text-blue-700" />,
  8: <Zap className="w-5 h-5 text-blue-700" />,
  9: <CheckCircle2 className="w-5 h-5 text-blue-700" />,
};

export const AppFeatures: React.FC<AppFeaturesProps> = () => {

  return (
    <section id="app-features" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Android Learning Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Learn Anywhere with the VMC App
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 leading-relaxed">
            Designed specifically for serious Mathematics aspirants, our mobile application delivers a distraction-free, high-speed learning environment directly to your Android device.
          </p>
        </div>

        {/* 10 App Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {APP_FEATURES_LIST.map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-slate-100/80 p-5 rounded-xl border border-slate-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-4">
                {FEATURE_ICONS[idx] || <CheckCircle2 className="w-5 h-5 text-blue-700" />}
              </div>
              <div>
                <div className="text-blue-700 text-[10px] font-black uppercase tracking-wider mb-1">
                  ✓ Included
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {feature}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
