
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks: { label: string; page: Page }[] = [
    { label: 'About', page: Page.ABOUT },
    { label: 'What We Build', page: Page.WHAT_WE_BUILD },
    { label: 'App Investment', page: Page.INVESTMENT },
    { label: 'Careers', page: Page.CAREERS },
    { label: 'Contact', page: Page.CONTACT },
  ];

  return (
    <footer className="mt-auto px-6 pb-12 w-full max-w-7xl mx-auto">
      <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col items-center gap-6">
        {/* Logo */}
        <button onClick={() => onNavigate(Page.HOME)} className="flex justify-center items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 overflow-hidden rounded flex items-center justify-center">
            <img src="/images/logo.png" alt="MVP Labs" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-sm">MVP Labs</span>
        </button>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
          {footerLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                onNavigate(link.page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Positioning Statement */}
        <p className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-md italic leading-relaxed">
          "Where ideas become systems, and systems become global impact — with capital, technology, and vision."
        </p>

        <p className="text-xs text-slate-500 dark:text-slate-600 text-center">
          © 2026 MVP Labs Systems Innovation. Scaling global impact.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-xl">description</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
