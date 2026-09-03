import React from 'react';
import { Download, Settings, Smartphone, LogIn, ShieldAlert } from 'lucide-react';

interface InstallationStepsProps {
  onDownloadClick?: () => void;
}

export const InstallationSteps: React.FC<InstallationStepsProps> = () => {
  const steps = [
    {
      step: 'STEP 1',
      title: 'Download APK',
      desc: 'Click the Download APK button on this website to save the official setup package to your Android device.',
      icon: <Download className="w-5 h-5 text-blue-700" />,
      highlight: 'Official v2.4.0 APK',
    },
    {
      step: 'STEP 2',
      title: 'Allow Installation',
      desc: 'If Android asks permission to install apps from your browser, allow "Install Unknown Apps" for the browser temporarily.',
      icon: <Settings className="w-5 h-5 text-blue-700" />,
      highlight: 'Standard Android Step',
    },
    {
      step: 'STEP 3',
      title: 'Install App',
      desc: 'Open the downloaded APK from your notification bar or Downloads folder and tap "Install". It takes under 5 seconds.',
      icon: <Smartphone className="w-5 h-5 text-blue-700" />,
      highlight: 'Fast Lightweight Package',
    },
    {
      step: 'STEP 4',
      title: 'Login & Learn',
      desc: 'Open Vinodh Sir Maths Classes App and login using your registered mobile number / account credentials.',
      icon: <LogIn className="w-5 h-5 text-blue-700" />,
      highlight: 'Instant Video & PDF Access',
    },
  ];

  return (
    <section id="how-to-install" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Setup Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How to Install the App
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 leading-relaxed">
            Follow these quick instructions to install the official Android APK on your phone in less than a minute.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              {/* Step indicator tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black tracking-widest text-blue-900 bg-white border border-slate-200 px-2.5 py-1 rounded-full uppercase">
                  {item.step}
                </span>
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-semibold text-blue-700">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Security Note Box */}
        <div className="mt-10 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-xs flex items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-950">
              Official Security Notice
            </h4>
            <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
              For security, always download the Vinodh Sir Maths Classes APK <strong>only from this official website</strong>. Never download from unverified third-party message forwards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
