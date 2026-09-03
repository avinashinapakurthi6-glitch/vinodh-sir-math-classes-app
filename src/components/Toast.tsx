import React, { useEffect } from 'react';
import { Download, CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'download' | 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'download', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm w-full bg-slate-900 text-white rounded-xl p-4 shadow-lg border border-slate-700 flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold shadow-xs">
        {type === 'download' ? <Download className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
      </div>
      <div className="flex-1 text-xs">
        <p className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Action Confirmed</p>
        <p className="text-slate-300 mt-0.5 leading-snug">{message}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
