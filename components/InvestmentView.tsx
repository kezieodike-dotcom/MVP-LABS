
import React, { useState } from 'react';

const InvestmentView: React.FC = () => {
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    ideaSummary: '',
    problemSolved: '',
    aiUseCase: '',
    targetMarket: '',
    currentStage: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative pt-24 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* ===== 1. HERO ===== */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            Investment Applications Open
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6 hero-text-gradient">
            Investing in AI Apps That Shape the Future
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
            MVP Labs partners with founders to build, fund, and scale AI-powered products with real-world impact.
          </p>
          <a href="#submit-form" className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98]">
            Submit Your AI App
          </a>
        </section>

        {/* ===== 2. WHAT WE INVEST IN ===== */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">What We Invest In</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'smartphone', color: 'text-blue-400', bg: 'bg-blue-500/10', label: 'AI-Powered Web & Mobile Apps', desc: 'Products that leverage AI to solve real user problems at scale.' },
              { icon: 'database', color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'Data-Driven Platforms', desc: 'Systems built on rich data pipelines and intelligent analytics.' },
              { icon: 'psychology', color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'Applied AI Solutions', desc: 'AI solving tangible, real-world problems across industries.' },
              { icon: 'eco', color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'Ethical & Impact-Focused', desc: 'Scalable systems built with integrity and long-term vision.' },
            ].map((item, i) => (
              <div key={i} className="p-5 card-blur rounded-2xl hover:bg-white/[0.04] transition-colors group cursor-default">
                <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <p className="text-sm font-bold mb-1">{item.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 3. INVESTMENT MODEL ===== */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold">Investment Model</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'account_balance_wallet', color: 'text-indigo-400', bg: 'bg-indigo-500/20', title: 'Equity-Based Partnerships', desc: 'We invest for meaningful equity stakes, aligning our success with yours.' },
              { icon: 'handshake', color: 'text-primary', bg: 'bg-primary/20', title: 'Co-Building Together', desc: 'Our engineers work alongside your team. We don\'t just write checks — we ship products.', highlight: true },
              { icon: 'hub', color: 'text-emerald-400', bg: 'bg-emerald-500/20', title: 'Capital + Systems + Strategy', desc: 'A unique blend of funding, technical infrastructure, and strategic guidance.' },
              { icon: 'all_inclusive', color: 'text-amber-400', bg: 'bg-amber-500/20', title: 'Long-Term Collaboration', desc: 'We\'re not short-term flippers. We build lasting partnerships for sustained growth.' },
            ].map((item, i) => (
              <div key={i} className={`card-blur p-6 rounded-3xl transition-colors ${item.highlight ? 'border-primary/30 bg-primary/5' : ''}`}>
                <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 4. FOUNDER REQUIREMENTS ===== */}
        <section className="mb-20">
          <div className="p-8 md:p-10 bg-slate-950 border border-primary/20 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
            <h2 className="text-2xl font-display font-bold mb-8 relative z-10">Founder Requirements</h2>
            <ul className="space-y-5 relative z-10">
              {[
                { text: 'Clear problem definition', desc: 'You know exactly what problem you\'re solving and for whom.' },
                { text: 'AI-first or AI-enabled solution', desc: 'AI is core to your product, not an afterthought.' },
                { text: 'Global or scalable market', desc: 'Your solution has the potential to impact users worldwide.' },
                { text: 'Coachable founding team', desc: 'Solo founders welcome. Ego-free, growth-minded teams preferred.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">{item.text}</span>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== 5. WHAT FOUNDERS GET ===== */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-8">What Founders Get</h2>
          <div className="space-y-3">
            {[
              { icon: 'architecture', title: 'Technical System Architecture', desc: 'Battle-tested cloud & data systems designed for massive scale.' },
              { icon: 'code', title: 'Product & MVP Development', desc: 'Full-stack engineering to take your idea from prototype to production.' },
              { icon: 'memory', title: 'AI Engineering Support', desc: 'Access to our custom LLM fine-tuning pipelines, RAG systems, and AI infrastructure.' },
              { icon: 'campaign', title: 'Go-to-Market Strategy', desc: 'Strategic GTM support to position and launch your product globally.' },
              { icon: 'cloud', title: 'Infrastructure & Scaling', desc: 'Robust infrastructure to handle growth from day one to global scale.' },
              { icon: 'payments', title: 'Capital Investment', desc: 'Selective capital deployment for founders who meet our investment thesis.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 card-blur rounded-2xl items-start group hover:bg-white/[0.04] transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 6. AI APP SUBMISSION FORM ===== */}
        <section id="submit-form" className="mb-10 scroll-mt-28">
          <div className="p-8 md:p-10 card-blur rounded-[2.5rem] border border-primary/20">
            <div className="text-center mb-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">edit_note</span>
              <h2 className="text-2xl font-display font-bold mb-2">Submit Your AI App</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Tell us about your AI-powered idea. We review every submission and respond within 7 business days.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-400 text-3xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white">Application Received!</h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                  Thank you for submitting your AI app. Our team will review your application and get in touch within 7 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Founder Name *</label>
                    <input
                      type="text"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>

                {/* AI App Idea Summary */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">AI App Idea Summary *</label>
                  <textarea
                    name="ideaSummary"
                    value={formData.ideaSummary}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Describe your AI app in 2-3 sentences"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>

                {/* Problem Being Solved */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Problem Being Solved *</label>
                  <textarea
                    name="problemSolved"
                    value={formData.problemSolved}
                    onChange={handleChange}
                    required
                    rows={2}
                    placeholder="What problem does your app solve?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>

                {/* AI Use Case */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">AI Use Case *</label>
                  <textarea
                    name="aiUseCase"
                    value={formData.aiUseCase}
                    onChange={handleChange}
                    required
                    rows={2}
                    placeholder="How does AI power your solution?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>

                {/* Row: Target Market & Current Stage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Target Market *</label>
                    <input
                      type="text"
                      name="targetMarket"
                      value={formData.targetMarket}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Healthcare, FinTech, EdTech"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Current Stage *</label>
                    <select
                      name="currentStage"
                      value={formData.currentStage}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-slate-900">Select stage</option>
                      <option value="idea" className="bg-slate-900">Idea / Concept</option>
                      <option value="prototype" className="bg-slate-900">Prototype / POC</option>
                      <option value="mvp" className="bg-slate-900">MVP Built</option>
                      <option value="launched" className="bg-slate-900">Launched with Users</option>
                      <option value="scaling" className="bg-slate-900">Scaling / Revenue</option>
                    </select>
                  </div>
                </div>

                {/* Pitch Deck Upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Pitch Deck (Optional)</label>
                  <div className="w-full bg-white/5 border border-dashed border-white/15 rounded-xl px-4 py-6 text-center cursor-pointer hover:bg-white/[0.03] hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined text-slate-500 text-2xl mb-2 block">cloud_upload</span>
                    <p className="text-sm text-slate-500">Drag & drop or click to upload</p>
                    <p className="text-xs text-slate-600 mt-1">PDF, PPTX up to 10MB</p>
                    <input type="file" accept=".pdf,.pptx,.ppt" className="hidden" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] text-lg mt-4"
                >
                  Submit Application →
                </button>

                <p className="text-center text-xs text-slate-600 mt-2">
                  By submitting, you agree that MVP Labs may review your application and contact you regarding potential investment.
                </p>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentView;
