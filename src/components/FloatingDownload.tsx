import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { APK_FILE_URL, APK_FILE_NAME, APK_SIZE } from '../config';
import { trackEvent } from '../utils/analytics';

interface FloatingDownloadProps {
  onDownloadClick?: () => void;
}

export const FloatingDownload: React.FC<FloatingDownloadProps> = ({ onDownloadClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissDesktop, setDismissDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleDownload = (source: string) => {
    trackEvent('download_apk', `Floating Download Button (${source})`);
    if (onDownloadClick) onDownloadClick();
  };

  return (
    <>
      {/* 1. Mobile Sticky Bottom Bar (Only visible on small screens) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-slate-900 border-t border-slate-800 p-3 shadow-lg">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            id="mobile-sticky-download-btn"
            href={APK_FILE_URL}
            download={APK_FILE_NAME}
            onClick={() => handleDownload('Mobile Sticky Bar')}
            className="flex-1 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-xs active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD APP ({APK_SIZE})</span>
          </a>
          
          <a
            href="#premium-plans"
            className="bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-3.5 rounded-xl border border-slate-700 whitespace-nowrap"
          >
            Plans
          </a>
        </div>
      </div>

      {/* 2. Desktop Floating Widget (Lower Right) */}
      {!dismissDesktop && (
        <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
          <div className="relative">
            {/* Dismiss button */}
            <button
              type="button"
              onClick={() => setDismissDesktop(true)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center shadow-xs z-10 border border-slate-700 cursor-pointer"
              title="Dismiss floating badge"
            >
              <X className="w-3 h-3" />
            </button>

            <a
              id="desktop-floating-download-btn"
              href={APK_FILE_URL}
              download={APK_FILE_NAME}
              onClick={() => handleDownload('Desktop Floating')}
              className="flex items-center gap-3 bg-slate-900 hover:bg-black text-white p-3 pr-4 rounded-xl shadow-lg border border-slate-700 transition-all cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-blue-950 font-black text-xs flex items-center justify-center shadow-xs flex-shrink-0">
                <Download className="w-4 h-4 text-blue-950" />
              </div>
              <div className="text-left">
                <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
                  <Smartphone className="w-3 h-3" /> Official APK
                </div>
                <div className="text-xs font-bold text-white tracking-tight">
                  Download VMC App ({APK_SIZE})
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
