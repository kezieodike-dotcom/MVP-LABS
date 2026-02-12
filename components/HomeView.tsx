
import React, { useState } from 'react';
import { Page } from '../types';
import BrowserMockup from './BrowserMockup';

interface HomeViewProps {
  onNavigate: (page: Page) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative pt-24 overflow-hidden">
      {/* Background Gradients — animated glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] glow-arc rounded-[100%] border-t border-primary/20 pointer-events-none"></div>
      <div className="absolute top-[-100px] left-1/2 w-full h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none anim-glow-breathe"></div>

      {/* Drifting particles */}
      <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-primary/40 rounded-full anim-drift pointer-events-none"></div>
      <div className="absolute top-[35%] right-[20%] w-1 h-1 bg-white/30 rounded-full anim-drift-2 pointer-events-none"></div>
      <div className="absolute top-[50%] left-[40%] w-1 h-1 bg-primary/25 rounded-full anim-drift-3 pointer-events-none"></div>
      <div className="absolute top-[15%] right-[30%] w-2 h-2 bg-blue-400/10 rounded-full anim-float-slow pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[60%] left-[8%] w-2.5 h-2.5 bg-purple-400/10 rounded-full anim-float-delayed pointer-events-none blur-[2px]"></div>

      {/* ===== HERO SECTION ===== */}
      <div className="relative px-6 pt-12 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge — stagger 1 */}
        <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300 uppercase">Innovation Studio & App Investment</span>
        </div>

        {/* Headline — stagger 2, shimmer effect */}
        <h1 className="anim-fade-up anim-delay-2 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-extrabold mb-6 tracking-tight anim-shimmer max-w-3xl">
          We Turn Ideas Into Scalable Systems for Global Impact
        </h1>

        {/* Decorative line under headline */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 anim-line-draw mx-auto"></div>

        {/* Subtext — stagger 3 */}
        <p className="anim-fade-up anim-delay-3 text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-4">
          MVP Labs is a systems innovation lab and app investment studio.
          We transform bold ideas into high-impact, scalable technologies — and invest in the most promising ones.
        </p>

        {/* Microcopy — stagger 4 */}
        <p className="anim-fade-up anim-delay-4 text-primary/80 text-sm font-semibold tracking-widest uppercase mb-10">
          We build. We scale. We invest.
        </p>

        {/* CTAs — stagger 5 */}
        <div className="anim-fade-up anim-delay-5 flex flex-col sm:flex-row w-full gap-3 max-w-xs sm:max-w-lg justify-center">
          <button className="w-full sm:w-48 bg-primary hover:bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
            Build Your System
          </button>
          <button
            onClick={() => onNavigate(Page.INVESTMENT)}
            className="w-full sm:w-48 bg-white/5 dark:bg-white/5 hover:bg-white/10 text-slate-900 dark:text-white font-semibold py-4 rounded-xl border border-slate-200 dark:border-white/10 transition-all backdrop-blur-sm active:scale-[0.98] hover:-translate-y-0.5"
          >
            App Investment
          </button>
          <button
            onClick={() => onNavigate(Page.INVESTMENT)}
            className="w-full sm:w-48 text-primary hover:text-blue-400 font-medium py-4 rounded-xl transition-all active:scale-[0.98] underline underline-offset-4 decoration-primary/30 hover:-translate-y-0.5"
          >
            Submit an Idea →
          </button>
        </div>

        <div className="anim-fade-up anim-delay-6 mt-20 w-full max-w-2xl mx-auto relative px-4 pb-12">
          <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10 rounded-full anim-glow-breathe"></div>
          <div className="anim-float-slow card-blur p-2 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
            <img
              src="/images/hero-dashboard.png"
              alt="Systems Innovation Dashboard"
              className="w-full h-auto rounded-[2.2rem] opacity-90 object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>

      {/* ===== WHAT WE DO ===== */}
      <section className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-16 anim-fade-up">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            What We Do
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We take ideas — from founders, institutions, and visionaries — and transform them into:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: 'verified',
              title: 'Validated MVPs',
              desc: 'Rapidly engineered prototypes that prove core concepts and product-market fit.',
              color: 'text-blue-400',
              bg: 'bg-blue-500/10',
            },
            {
              icon: 'layers',
              title: 'Digital Platforms',
              desc: 'Robust, scalable digital ecosystems built for heavy traffic and high performance.',
              color: 'text-purple-400',
              bg: 'bg-purple-500/10',
            },
            {
              icon: 'psychology',
              title: 'AI Applications',
              desc: 'Powerful applications powered by custom LLMs, RAG, and neural architectures.',
              color: 'text-emerald-400',
              bg: 'bg-emerald-500/10',
            },
            {
              icon: 'public',
              title: 'Impact Systems',
              desc: 'High-stake technology systems designed to solve global-scale challenges.',
              color: 'text-amber-400',
              bg: 'bg-amber-500/10',
            },
          ].map((card, i) => (
            <div key={i} className={`anim-scale-in card-blur p-8 rounded-[2rem] hover:bg-white/[0.06] hover:border-white/15 transition-all group cursor-default hover:-translate-y-2`} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              <div className={`w-14 h-14 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-8 anim-fade-up">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"></div>

          <p className="text-xl md:text-2xl font-bold text-white leading-tight">
            And when the opportunity is exceptional, <span className="text-primary italic">we invest.</span>
          </p>

          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto font-medium">
            Because true innovation requires more than code — it requires conviction, capital, and systems thinking.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate(Page.INVESTMENT)}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:border-primary/30"
            >
              Learn About App Investment →
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY MVP LABS ===== */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
            Why MVP Labs
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            We're not a software agency. Not a generic accelerator. Not a passive VC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            { icon: 'handshake', text: 'We build, scale, and invest — as partners' },
            { icon: 'engineering', text: 'Engineers who ship, not consultants who advise' },
            { icon: 'trending_up', text: 'Selective investment in high-impact AI' },
            { icon: 'globe', text: 'Global systems thinking, local execution' },
          ].map((item, i) => (
            <div key={i} className={`anim-scale-in flex items-start gap-4 p-5 card-blur rounded-2xl hover:bg-white/[0.04] transition-all hover:-translate-y-0.5`} style={{ animationDelay: `${1.4 + i * 0.12}s` }}>
              <span className="material-symbols-outlined text-primary mt-0.5">{item.icon}</span>
              <p className="text-sm font-medium text-slate-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Systems Built' },
            { value: '12', label: 'App Investments' },
            { value: '8', label: 'Countries Reached' },
            { value: '99.9%', label: 'Uptime Standard' },
          ].map((stat, i) => (
            <div key={i} className={`anim-scale-in text-center p-6 card-blur rounded-2xl hover:-translate-y-1 transition-transform`} style={{ animationDelay: `${1.8 + i * 0.1}s` }}>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR COMMITMENT (SLIDING CARDS) ===== */}
      <section className="py-24 border-t border-white/5 overflow-hidden relative">
        <div className="text-center mb-16 anim-fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-6 gradient-text uppercase tracking-tight">
            Our Commitment
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We commit to building technologies that:
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative group">
          {/* Gradient Fades for masking edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

          <div className="anim-slide-track flex gap-6 px-6">
            {[
              { title: 'Create measurable impact', icon: 'analytics', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { title: 'Empower users', icon: 'person_add', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { title: 'Scale beyond borders', icon: 'language', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
              { title: 'Stand the test of time', icon: 'history', color: 'text-amber-400', bg: 'bg-amber-500/10' },
              // Duplicate for infinite loop
              { title: 'Create measurable impact', icon: 'analytics', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { title: 'Empower users', icon: 'person_add', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { title: 'Scale beyond borders', icon: 'language', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
              { title: 'Stand the test of time', icon: 'history', color: 'text-amber-400', bg: 'bg-amber-500/10' },
            ].map((commit, i) => (
              <div key={i} className="w-[300px] p-10 card-blur rounded-[2.5rem] border border-white/5 group-hover:border-primary/20 transition-all flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${commit.bg} ${commit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-4xl">{commit.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">{commit.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Final Manifesto Statement */}
        <div className="mt-24 max-w-2xl mx-auto text-center space-y-8 anim-fade-up">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Every system we design is built with <span className="text-primary italic">intention.</span>
            </p>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Every partnership is built on <span className="text-primary italic">alignment.</span>
            </p>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Every investment is built for <span className="text-primary italic">long-term value.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== EXECUTIVE LEADERSHIP SECTION ===== */}
      <section className="px-6 py-32 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-20 anim-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="material-symbols-outlined text-sm">groups</span>
            Our Team
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-6 gradient-text uppercase tracking-tight">
            Executive Leadership
          </h2>
          <div className="h-1 bg-primary/30 w-12 mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Leading the studio with a dual focus on technical excellence and strategic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Paul Nwosu Light', role: 'Executive Director', img: '/images/team-paul.png', bio: 'Full Stack Software Engineer and Executive Director of MVP Labs. Paul leads the studio with technical excellence.' },
            { name: 'Sarah Chen', role: 'Managing Partner', img: '/images/team-1.png', bio: 'Former infrastructure lead at Stripe, Sarah oversees systems architecture and scale.' },
            { name: 'Marcus Thorne', role: 'Head of Investment', img: '/images/team-2.png', bio: '20+ years in venture capital and systems engineering. Marcus leads our app investment arm.' },
            { name: 'Alex Rivera', role: 'Lead AI Architect', img: '/images/team-3.png', bio: 'AI researcher and venture builder focused on LLM performance and neural systems.' }
          ].map((person, i) => (
            <div key={i} className="anim-scale-in group" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
              <div className="card-blur p-2 rounded-[3.5rem] overflow-hidden mb-6 border border-white/5 group-hover:border-primary/20 transition-all duration-700 shadow-xl shadow-black/20">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-80 object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                <p className="text-primary text-xs font-black uppercase tracking-widest mb-4">{person.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO SECTION ===== */}
      <section className="px-6 py-32 max-w-6xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
          <div className="anim-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
              <span className="material-symbols-outlined text-sm">connect_without_contact</span>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-display leading-[1.1] mb-8 gradient-text uppercase tracking-tight">
              Let's build the <span className="text-primary italic">next system.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
              Whether you're a founder seeking investment or a partner looking to architect high-impact technology, our executive team is ready to talk.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-white font-bold">Innovation HQ</p>
                  <p className="text-slate-500 text-sm">300 Mission St, San Francisco, CA</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-white font-bold">Direct Inquiry</p>
                  <p className="text-slate-500 text-sm">hello@mvplabs.io</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 card-blur rounded-3xl border border-white/5 bg-primary/5 italic text-slate-400 text-sm leading-relaxed">
              "We prioritize founders and partners who think in systems. If your idea has the potential for borderless scale, we want to hear from you."
            </div>
          </div>

          <div className="anim-fade-up anim-delay-2">
            <div className="card-blur p-10 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

              {formSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                  <p className="text-slate-500 text-lg">A lab partner will review your inquiry and respond within 24-48 hours.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-10 text-primary font-bold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                      <input required type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all" placeholder="Your Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                      <input required type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all" placeholder="name@company.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                    <textarea required className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all h-40 resize-none" placeholder="Tell us about the system you want to build..."></textarea>
                  </div>
                  <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-6 rounded-2xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] uppercase tracking-widest text-sm">
                    Dispatch Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-slate-950 border border-primary/20 overflow-hidden text-center group hover:border-primary/40 transition-colors">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/15 blur-[100px] rounded-full anim-float"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 blur-[100px] rounded-full anim-float-delayed"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-white uppercase tracking-tight">
              Have an App Idea?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              We're looking for visionary founders building AI-powered products. If that's you, let's talk.
            </p>
            <button
              onClick={() => onNavigate(Page.INVESTMENT)}
              className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 mb-12"
            >
              Submit Your App →
            </button>

            {/* Generated Image */}
            <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl anim-scale-in anim-delay-7">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
              <img
                src="/images/studio-concept.png"
                alt="Studio Concept"
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
