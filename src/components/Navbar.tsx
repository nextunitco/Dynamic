import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'knowledge', label: 'Knowledge Hub' },
    { id: 'loyalty', label: 'Loyalty Program' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Utility Top Ribbon for quick contact & location info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              Isolo, Lagos Workshop &amp; Mobile Fitting
            </span>
            <span className="hidden md:inline text-slate-600" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-400">
              Oyemat House, 45 Alhaja Kudirat Adenekan Rd
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+2349126983699"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-medium tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>+234 912 698 3699</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span className="text-slate-400 hidden sm:inline">Mon–Sat: 8am – 6pm</span>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <img
              src={logoImg}
              alt="Dynamic Auto & Tyre Centre Logo"
              className="h-12 w-auto max-w-[170px] object-contain rounded-md"
            />
            <div className="hidden sm:block">
              <span className="block font-display text-lg sm:text-xl font-bold tracking-tight text-blue-950 leading-tight">
                Dynamic Auto
              </span>
              <span className="block text-xs uppercase tracking-wider text-orange-600 font-bold">
                &amp; Tyre Centre
              </span>
            </div>
          </button>

          {/* Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer relative py-2 whitespace-nowrap ${
                    isActive
                      ? 'text-blue-900 font-bold'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Service</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-orange-600 text-white font-semibold text-sm shadow-xs hover:bg-orange-700"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Service Online</span>
              </button>

              <a
                href="tel:+2349126983699"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-200 text-slate-800 font-medium text-sm hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Call +234 912 698 3699</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
