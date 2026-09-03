import React from 'react';
import { Download, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { APK_FILE_URL, APK_FILE_NAME, APK_SIZE } from '../config';
import { trackEvent } from '../utils/analytics';

interface FinalDownloadCTAProps {
  onDownloadClick?: () => void;
}

export const FinalDownloadCTA: React.FC<FinalDownloadCTAProps> = ({ onDownloadClick }) => {
  const handleDownload = () => {
    trackEvent('download_apk', 'Final CTA Download Clicked');
    if (onDownloadClick) onDownloadClick();
  };

  return (
    <section id="final-cta" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-2">
          Transform Your Mathematics Preparation
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Start Your Mathematics Preparation Today
        </h2>

        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Download the Vinodh Sir Maths Classes App and get access to structured preparation designed for serious Mathematics aspirants.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-cta-download-btn"
            href={APK_FILE_URL}
            download={APK_FILE_NAME}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <Download className="w-5 h-5 text-slate-950" />
            <span>DOWNLOAD APK ({APK_SIZE})</span>
          </a>

          <a
            id="final-cta-plans-btn"
            href="#premium-plans"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl border border-slate-700 shadow-xs transition-colors"
          >
            <CreditCard className="w-4 h-4 text-blue-400" />
            <span>EXPLORE PREMIUM PLANS</span>
          </a>
        </div>

        {/* Small trust checklist */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Free to Install &amp; Explore
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> 100% Virus &amp; Ad Free
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Direct Expert Guidance
          </span>
        </div>

      </div>
    </section>
  );
};
