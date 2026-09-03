import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onDownloadClick?: () => void;
  onOpenPlans?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Download App', href: '#download-apk' },
    { label: 'Premium Plans', href: '#premium-plans' },
    { label: 'Features', href: '#app-features' },
    { label: 'How to Install', href: '#how-to-install' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 bg-white border-b border-slate-200 ${
        isScrolled ? 'shadow-sm py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: VMC Logo & Brand */}
          <a
            href="#hero"
            id="header-brand-logo"
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-xs group-hover:bg-blue-800 transition-colors">
              <span className="tracking-tight">VMC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-900 font-extrabold text-sm leading-tight tracking-tight uppercase">
                VINODH SIR
              </span>
              <span className="text-blue-700 font-semibold text-xs tracking-widest uppercase">
                MATHS CLASSES
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: View Plans CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-plans-btn"
              href="#premium-plans"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-xs hover:shadow-sm transition-colors cursor-pointer"
            >
              <span>VIEW PLANS</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="header-mobile-plans-btn"
              href="#premium-plans"
              className="inline-flex sm:hidden items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-md"
            >
              <span>PLANS</span>
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-plans-btn"
              href="#premium-plans"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-xs"
            >
              <span>VIEW COURSE PLANS</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
