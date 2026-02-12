
import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import InvestmentView from './components/InvestmentView';
import AboutView from './components/AboutView';
import WhatWeBuildView from './components/WhatWeBuildView';
import ContactView from './components/ContactView';
import InsightsView from './components/InsightsView';
import PlaceholderPage from './components/PlaceholderPage';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';

const placeholderPages: Record<string, { title: string; description: string; icon: string }> = {
  [Page.ABOUT]: {
    title: 'About MVP Labs',
    description: 'Learn about our mission, our team, and how we build systems that create global impact.',
    icon: 'groups',
  },
  [Page.WHAT_WE_BUILD]: {
    title: 'What We Build',
    description: 'Explore our capabilities — from AI architectures to full-stack platforms and data systems.',
    icon: 'construction',
  },
  [Page.INSIGHTS]: {
    title: 'Insight',
    description: 'Real projects. Real impact. See how we turn ideas into scalable, production-grade systems.',
    icon: 'cases',
  },
  [Page.PARTNERS]: {
    title: 'Partners',
    description: 'We collaborate with visionary organizations and technology leaders worldwide.',
    icon: 'handshake',
  },
  [Page.CAREERS]: {
    title: 'Careers',
    description: 'Join the lab. We\'re looking for engineers, designers, and strategists obsessed with impact.',
    icon: 'work',
  },
  [Page.CONTACT]: {
    title: 'Contact Us',
    description: 'Have a bold idea? Let\'s talk about how we can build or invest together.',
    icon: 'mail',
  },
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomeView onNavigate={setCurrentPage} />;
      case Page.INVESTMENT:
        return <InvestmentView />;
      case Page.ABOUT:
        return <AboutView />;
      case Page.WHAT_WE_BUILD:
        return <WhatWeBuildView />;
      case Page.INSIGHTS:
        return <InsightsView />;
      case Page.CONTACT:
        return <ContactView />;
      default: {
        const config = placeholderPages[currentPage];
        if (config) {
          return <PlaceholderPage title={config.title} description={config.description} icon={config.icon} />;
        }
        return <HomeView onNavigate={setCurrentPage} />;
      }
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-white/40 rounded-full blur-[1px]"></div>
        <div className="absolute top-[40%] right-[15%] w-1 h-1 bg-white/20 rounded-full blur-[1px]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 bg-primary/20 rounded-full blur-[2px]"></div>
      </div>

      <Navbar activePage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      {/* Bottom Padding for BottomNav on Mobile */}
      <div className="h-24 md:hidden" />

      <BottomNav activePage={currentPage} onPageChange={setCurrentPage} />

      {/* Scroll indicator for Home */}
      {currentPage === Page.HOME && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-40">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
        </div>
      )}
    </div>
  );
};

export default App;
