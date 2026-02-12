
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { id: Page; label: string; icon: string }[] = [
  { id: Page.HOME, label: 'Home', icon: 'home' },
  { id: Page.ABOUT, label: 'About', icon: 'groups' },
  { id: Page.WHAT_WE_BUILD, label: 'What We Build', icon: 'construction' },
  { id: Page.INSIGHTS, label: 'Insight', icon: 'cases' },
  { id: Page.INVESTMENT, label: 'App Investment', icon: 'rocket_launch' },
  { id: Page.PARTNERS, label: 'Partners', icon: 'handshake' },
  { id: Page.CAREERS, label: 'Careers', icon: 'work' },
  { id: Page.CONTACT, label: 'Contact', icon: 'mail' },
];

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200/10 dark:border-white/5 bg-white/70 dark:bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav(Page.HOME)} className="flex items-center gap-2 group">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all group-hover:scale-105">
              <img src="/images/logo.png" alt="MVP Labs" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">MVP LABS</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${activePage === link.id
                  ? 'text-primary bg-primary/10'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/5'
                  } ${link.id === Page.INVESTMENT ? 'text-primary font-semibold' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[45] bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-2 animate-fade-in pt-20">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full max-w-sm px-8 py-4 rounded-2xl text-lg font-display font-semibold transition-all flex items-center justify-between group ${activePage === link.id
                ? 'text-primary bg-primary/10 border border-primary/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                } ${link.id === Page.INVESTMENT ? 'text-primary' : ''}`}
            >
              <span className="flex items-center gap-4">
                <span className={`material-symbols-outlined ${activePage === link.id ? 'text-primary' : 'text-slate-500 group-hover:text-primary transition-colors'}`}>
                  {link.icon}
                </span>
                {link.label}
              </span>
              <span className="material-symbols-outlined text-slate-700 group-hover:text-primary text-sm transition-all transform group-hover:translate-x-1">arrow_forward_ios</span>
            </button>
          ))}
          <div className="mt-6 text-xs text-slate-600 font-medium tracking-widest uppercase">
            MVP Labs © 2026
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
