import React from 'react';
import { Download, CreditCard, ShieldCheck, CheckCircle2, Smartphone, Sparkles, ChevronRight, Check } from 'lucide-react';
import { APK_FILE_URL, APK_FILE_NAME, APK_VERSION, APK_SIZE } from '../config';
import { trackEvent } from '../utils/analytics';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  onDownloadClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const handleDownload = () => {
    trackEvent('download_apk', 'Hero Download Button');
    if (onDownloadClick) onDownloadClick();
  };

  return (
    <section id="hero" className="relative bg-white text-slate-900 overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      
      {/* Subtle clean background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headings & Direct Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Academic badge */}
            <div>
              <span className="inline-block px-3.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200/80 rounded-full text-xs font-bold tracking-widest uppercase shadow-xs">
                Official Education Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Master<br className="hidden sm:inline" /> Mathematics.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Complete Mathematics preparation for <strong className="text-slate-800 font-semibold">APPSC JL, DL, Polytechnic Lecturer, RGUKT, APSET, CSIR-NET</strong> and competitive maths aspirants.
            </p>

            {/* Download App Container Card (Primary Download Button #1) */}
            <div id="download-apk" className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 max-w-xl mx-auto lg:mx-0 text-left shadow-xs scroll-mt-24">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-blue-700 shadow-xs flex-shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">VMC Android App</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Version {APK_VERSION} • Official APK • {APK_SIZE}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="hero-download-apk-btn"
                  href={APK_FILE_URL}
                  download={APK_FILE_NAME}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDownload}
                  className="w-full sm:flex-1 bg-blue-900 hover:bg-black text-white py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all text-sm uppercase tracking-wide cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>DOWNLOAD APK ({APK_SIZE})</span>
                </a>

                <a
                  id="hero-view-plans-btn"
                  href="#premium-plans"
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-200 hover:border-slate-300 py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm uppercase tracking-tight"
                >
                  <CreditCard className="w-4 h-4 text-blue-700" />
                  <span>VIEW PLANS</span>
                </a>
              </div>

              {/* Checkmarks under button */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] text-slate-500 font-medium uppercase tracking-tight">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-700 stroke-[2.5]" /> Secure Download
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-700 stroke-[2.5]" /> Latest 2026 Version
                </div>
              </div>
            </div>

            {/* Quick exam tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-tight shadow-xs">
                APPSC JL/DL
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-tight shadow-xs">
                POLYTECHNIC
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-tight shadow-xs">
                APSET
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-tight shadow-xs">
                CSIR NET
              </span>
            </div>

          </div>

          {/* Right Column: Android Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
