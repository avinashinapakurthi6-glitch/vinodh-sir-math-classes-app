import React from 'react';
import { ShieldCheck, Smartphone, ArrowUp } from 'lucide-react';
import { APK_VERSION } from '../config';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-blue-950 font-black text-lg flex items-center justify-center shadow-xs">
                VMC
              </div>
              <div>
                <h3 className="text-white font-black text-lg sm:text-xl tracking-tight leading-tight">
                  VINODH SIR MATHS CLASSES
                </h3>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Mathematics Preparation Platform
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Mathematics aspirants for APPSC Junior Lecturer, Degree Lecturer, Polytechnic, RGUKT, APSET, and CSIR-NET examinations with structured, conceptual preparation.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Android APK Distribution Portal</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#download-apk" className="hover:text-white transition-colors">
                  Download App
                </a>
              </li>
              <li>
                <a href="#premium-plans" className="hover:text-white transition-colors">
                  Premium Plans
                </a>
              </li>
              <li>
                <a href="#how-to-install" className="hover:text-white transition-colors">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Policies & Quick Actions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              Policies &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('refund')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <span className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 font-semibold text-xs px-3.5 py-2 rounded-lg border border-slate-700">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>Android App {APK_VERSION}</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Vinodh Sir Maths Classes. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Official Educational Platform</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
