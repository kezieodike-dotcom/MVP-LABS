
import React from 'react';

const WhatWeBuildView: React.FC = () => {
    return (
        <div className="relative pt-24 pb-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* ===== HERO SECTION ===== */}
                <section className="text-center mb-20 anim-fade-up anim-delay-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                        <span className="material-symbols-outlined text-sm">construction</span>
                        Capabilities & Systems
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-[1.1] mb-8 hero-text-gradient uppercase tracking-tight">
                        What We Build
                    </h1>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        We take ideas — from founders, institutions, and visionaries — and transform them into scalable, high-impact technological solutions.
                    </p>
                </section>

                {/* ===== CORE OFFERINGS (4 CARDS) ===== */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 anim-fade-up anim-delay-2">
                    {[
                        {
                            icon: 'verified',
                            title: 'Validated MVPs',
                            desc: 'Rapidly engineered prototypes that prove core concepts and product-market fit. We focus on speed-to-insight without compromising on future scalability.',
                            color: 'text-blue-400',
                            bg: 'bg-blue-500/10',
                            features: ['Rapid concept prototyping', 'User feedback loops', 'Scalable foundation', 'Go-to-market ready']
                        },
                        {
                            icon: 'layers',
                            title: 'Digital Platforms',
                            desc: 'Robust digital ecosystems built for heavy traffic and high performance. We architect platforms that grow as your user base expands.',
                            color: 'text-purple-400',
                            bg: 'bg-purple-500/10',
                            features: ['Microservices architecture', 'Cloud-native scaling', 'API-first design', 'High-availability uptime']
                        },
                        {
                            icon: 'psychology',
                            title: 'AI Applications',
                            desc: 'Powerful applications powered by custom LLMs, RAG, and neural architectures. We integrate intelligence directly into the core user experience.',
                            color: 'text-emerald-400',
                            bg: 'bg-emerald-500/10',
                            features: ['Custom LLM integration', 'RAG implementations', 'Neural data pipelines', 'Model fine-tuning']
                        },
                        {
                            icon: 'public',
                            title: 'Impact Systems',
                            desc: 'High-stake technology systems designed to solve global-scale challenges with precision, security, and ethical integrity.',
                            color: 'text-amber-400',
                            bg: 'bg-amber-500/10',
                            features: ['Global infrastructure', 'Security-first engineering', 'Impact tracking', 'Sustainable systems']
                        },
                    ].map((card, i) => (
                        <div key={i} className="card-blur p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all group flex flex-col h-full">
                            <div className={`w-16 h-16 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined text-4xl">{card.icon}</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-4 text-white uppercase tracking-tight">{card.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{card.desc}</p>

                            <ul className="space-y-3 pt-6 border-t border-white/5">
                                {card.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* ===== THE MANIFESTO ===== */}
                <section className="text-center py-20 border-y border-white/10 anim-fade-up anim-delay-3">
                    <p className="text-slate-500 uppercase tracking-[0.2em] font-bold text-sm mb-6">
                        Beyond Code
                    </p>
                    <h3 className="text-3xl md:text-5xl font-extrabold font-display mb-10 text-white leading-tight">
                        Innovation requires <span className="text-primary italic">conviction, capital, and systems thinking.</span>
                    </h3>
                    <div className="max-w-2xl mx-auto p-8 card-blur rounded-3xl bg-primary/5 border border-primary/20 italic text-slate-300">
                        "We don't just write code. We build the infrastructure for global impact."
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhatWeBuildView;
