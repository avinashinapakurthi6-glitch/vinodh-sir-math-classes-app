import React from 'react';
import { Download, ShieldCheck, CheckCircle2, HelpCircle, Smartphone, FileCode2, HardDrive } from 'lucide-react';
import { APK_FILE_URL, APK_FILE_NAME, APK_VERSION, APK_SIZE, APK_MIN_ANDROID, APK_LAST_UPDATED } from '../config';
import { trackEvent } from '../utils/analytics';

interface APKDownloadProps {
  onDownloadClick?: () => void;
}

export const APKDownload: React.FC<APKDownloadProps> = ({ onDownloadClick }) => {
  const handleDownload = () => {
    trackEvent('download_apk', 'Main APK Section Download Clicked');
    if (onDownloadClick) onDownloadClick();
  };

  return (
    <section id="download-apk" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Official Android Application
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Download Vinodh Sir Maths Classes App
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
            Access premium Mathematics video lectures, PDF notes, tests, PYQs, and formula sheets directly on your Android device.
          </p>
        </div>

        {/* Large APK Download Card */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="bg-blue-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-xl bg-amber-400 text-blue-950 font-black text-2xl flex items-center justify-center shadow-xs flex-shrink-0">
                VMC
              </div>
              <div>
                <span className="text-amber-300 font-bold text-[10px] uppercase tracking-widest block">
                  Official Android Package
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  VINODH SIR MATHS CLASSES
                </h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  Latest Build: <span className="font-semibold text-white">{APK_VERSION}</span> • {APK_SIZE}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-blue-800/80 border border-blue-700 text-blue-100 px-3 py-1.5 rounded-full text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Release</span>
            </div>
          </div>

          {/* Card Specs Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 border-b border-slate-100 text-center">
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Platform</span>
                <span className="text-slate-900 font-bold text-sm sm:text-base mt-1 flex items-center justify-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-blue-700" /> Android
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">File Type</span>
                <span className="text-slate-900 font-bold text-sm sm:text-base mt-1 flex items-center justify-center gap-1.5">
                  <FileCode2 className="w-4 h-4 text-blue-700" /> APK Package
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">File Size</span>
                <span className="text-slate-900 font-bold text-sm sm:text-base mt-1 flex items-center justify-center gap-1.5">
                  <HardDrive className="w-4 h-4 text-blue-700" /> {APK_SIZE}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Status</span>
                <span className="text-emerald-700 font-bold text-sm sm:text-base mt-1 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official Release
                </span>
              </div>

            </div>

            {/* Action Buttons inside Card */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              {/* Main Download Button */}
              <a
                id="main-apk-download-btn"
                href={APK_FILE_URL}
                download={APK_FILE_NAME}
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-black text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xs hover:shadow-md transition-all uppercase tracking-wide cursor-pointer"
              >
                <Download className="w-5 h-5 text-amber-400" />
                <span>DOWNLOAD APK ({APK_SIZE})</span>
              </a>

              {/* Secondary Button */}
              <a
                id="apk-how-to-install-btn"
                href="#how-to-install"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-colors uppercase tracking-tight"
              >
                <HelpCircle className="w-4 h-4 text-blue-700" />
                <span>HOW TO INSTALL</span>
              </a>

            </div>

            {/* Safety and Compatibility info */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Requires: <strong>{APK_MIN_ANDROID}</strong></span>
              </div>
              <div>
                <span>Updated: <strong>{APK_LAST_UPDATED}</strong></span>
              </div>
              <div className="text-slate-600 font-medium">
                🔒 Safe Verified APK
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
