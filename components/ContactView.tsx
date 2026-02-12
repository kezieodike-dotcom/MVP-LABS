
import React, { useState } from 'react';

const ContactView: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="relative pt-24 pb-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.15)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* ===== HERO SECTION ===== */}
                <section className="text-center mb-20 anim-fade-up anim-delay-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-6">
                        <span className="material-symbols-outlined text-sm">connect_without_contact</span>
                        Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-[1.1] mb-8 hero-text-gradient uppercase tracking-tight">
                        Let's build the <span className="text-primary italic">next system.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Whether you're a founder seeking investment or a partner looking to architect high-impact technology, we're ready to talk.
                    </p>
                </section>

                {/* ===== TEAM SECTION ===== */}
                <section className="mb-32">
                    <div className="text-center mb-16 anim-fade-up anim-delay-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wider">Meet the Partners</h2>
                        <div className="h-1 bg-primary/30 w-12 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sarah Chen', role: 'Managing Partner', img: '/images/team-1.png', bio: 'Former infrastructure lead at Stripe, Sarah oversees systems architecture and scale.' },
                            { name: 'Marcus Thorne', role: 'Head of Investment', img: '/images/team-2.png', bio: '20+ years in venture capital and systems engineering. Marcus leads our app investment arm.' },
                            { name: 'Alex Rivera', role: 'Lead AI Architect', img: '/images/team-3.png', bio: 'AI researcher and venture builder focused on LLM performance and impact-driven neural systems.' }
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

                {/* ===== CONTACT FORM & INFO ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <section className="anim-fade-up anim-delay-4">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">The Lab</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Innovation HQ</p>
                                            <p className="text-slate-500 text-sm">300 Mission St, San Francisco, CA</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Direct Inquiry</p>
                                            <p className="text-slate-500 text-sm">hello@mvplabs.io</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">time_to_leave</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Lab Hours</p>
                                            <p className="text-slate-500 text-sm">Mon - Fri: 09:00 - 18:00 (PST)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 card-blur rounded-3xl border border-white/5 bg-primary/5">
                                <p className="text-slate-400 text-sm italic leading-relaxed">
                                    "We prioritize founders and partners who think in systems. If your idea has the potential for borderless scale, we want to hear from you."
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="anim-fade-up anim-delay-5">
                        <div className="card-blur p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            {formSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                                    <p className="text-slate-500">A lab partner will review your inquiry and respond within 24-48 hours.</p>
                                    <button
                                        onClick={() => setFormSubmitted(false)}
                                        className="mt-8 text-primary font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                            <input required type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                            <input required type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="name@company.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                                        <select className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                                            <option>System Build Inquiry</option>
                                            <option>App Investment Pitch</option>
                                            <option>Partnership Proposal</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                        <textarea required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors h-32 resize-none" placeholder="Tell us about the system you want to build..."></textarea>
                                    </div>
                                    <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]">
                                        Dispatch Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactView;
