
import React from 'react';
import { Page, NavItem } from '../types';

interface BottomNavProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onPageChange }) => {
  const navItems: NavItem[] = [
    { id: Page.HOME, label: 'Home', icon: 'home' },
    { id: Page.INVESTMENT, label: 'App Invest', icon: 'rocket_launch' },
    { id: Page.WHAT_WE_BUILD, label: 'Build', icon: 'construction' },
    { id: Page.CONTACT, label: 'Contact', icon: 'mail' },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200/10 dark:border-white/5 pb-8 pt-3 px-10 flex justify-between z-50 md:hidden">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            onPageChange(item.id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 transition-colors ${activePage === item.id ? 'text-primary' : 'text-slate-400'
            }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
