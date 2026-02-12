
import React from 'react';

const BrowserMockup: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col group hover:border-primary/30 transition-colors">
      <div className="h-10 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 px-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50"></div>
        </div>
        <div className="w-24 h-2 bg-slate-200 dark:bg-white/10 rounded-full"></div>
        <div className="w-4 h-4 rounded-sm bg-slate-200 dark:bg-white/10"></div>
      </div>
      <div className="p-6 flex-1 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-32 bg-slate-100 dark:bg-white/10 rounded-md"></div>
          <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
             <span className="material-symbols-outlined text-primary text-xs font-bold">bolt</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 bg-slate-50 dark:bg-white/5 rounded-xl p-4 space-y-2">
            <div className="h-2 w-12 bg-slate-200 dark:bg-white/10 rounded"></div>
            <div className="h-4 w-16 bg-primary/30 rounded"></div>
          </div>
          <div className="h-20 bg-slate-50 dark:bg-white/5 rounded-xl p-4 space-y-2">
            <div className="h-2 w-12 bg-slate-200 dark:bg-white/10 rounded"></div>
            <div className="h-4 w-16 bg-slate-300 dark:bg-white/20 rounded"></div>
          </div>
        </div>
        <div className="h-32 bg-slate-50 dark:bg-white/5 rounded-xl border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
          <span className="material-symbols-outlined text-slate-300 dark:text-white/20 text-4xl">insights</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
