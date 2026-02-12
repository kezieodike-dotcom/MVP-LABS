
import React from 'react';

const InsightsView: React.FC = () => {
    const cases = [
        {
            id: 'aether',
            title: 'Aether Data Protocol',
            category: 'Systems Architecture',
            image: '/images/mission-visual.png',
            challenge: 'Architecting a borderless, low-latency data sync protocol for decentralized networks.',
            solution: 'Designed a neural-mesh data ledger that reduced global sync latency by 70%.',
            tags: ['System Arch', 'Neural Mesh', 'Node.js']
        },
        {
            id: 'vitaltrack',
            title: 'VitalTrack Dashboard',
            category: 'App Infrastructure',
            image: '/images/hero-dashboard.png',
            challenge: 'Visualizing real-time health data across 100k+ concurrent users without lag.',
            solution: 'Implemented a high-performance streaming architecture with reactive glassmorpism UI.',
            tags: ['React', 'Data Viz', 'Streaming']
        },
        {
            id: 'innovation-lab',
            title: 'Global Studio Platform',
            category: 'Digital Product',
            image: '/images/studio-concept.png',
            challenge: 'Building a centralized portal for managing cross-continental innovation pipelines.',
            solution: 'A unified digital studio platform that synchronized 5 global hubs into one operational view.',
            tags: ['Cloud Native', 'Workflow', 'SaaS']
        }
    ];

    return (
        <div className="relative pt-24 pb-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* ===== HERO SECTION ===== */}
                <section className="text-center mb-24 anim-fade-up anim-delay-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                        Proven Results
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-[1.1] mb-8 hero-text-gradient uppercase tracking-tight">
                        Real Systems. <span className="text-primary italic">Global Impact.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore how we architect, build, and scale specialized technology for founders and institutions worldwide.
                    </p>
                </section>

                {/* ===== CASE STUDIES GRID ===== */}
                <div className="space-y-32">
                    {cases.map((study, i) => (
                        <section
                            key={study.id}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center anim-fade-up`}
                            style={{ animationDelay: `${0.2 + i * 0.2}s` }}
                        >
                            {/* Image Side */}
                            <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <div className="card-blur p-2 rounded-[3.5rem] border border-white/5 overflow-hidden shadow-2xl group-hover:border-primary/20 transition-all duration-700">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-[400px] md:h-[500px] object-cover rounded-[3rem] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000"
                                        />
                                    </div>
                                    {/* Project Number */}
                                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center text-primary font-black text-xl shadow-2xl">
                                        0{i + 1}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`lg:col-span-5 space-y-8 ${i % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
                                <div className={`flex flex-col ${i % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2">{study.category}</p>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">{study.title}</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className={`space-y-2 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">The Challenge</h4>
                                        <p className="text-slate-300 text-lg leading-relaxed">{study.challenge}</p>
                                    </div>
                                    <div className={`space-y-2 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Our Solution</h4>
                                        <p className="text-slate-300 text-lg leading-relaxed font-medium">{study.solution}</p>
                                    </div>
                                </div>

                                <div className={`flex flex-wrap gap-2 pt-4 ${i % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* ===== FINAL CALL TO ACTION ===== */}
                <section className="mt-40 text-center py-24 border-t border-white/5 anim-fade-up">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                        Ready to architect your success story?
                    </h3>
                    <button className="bg-primary hover:bg-blue-600 text-white font-bold px-10 py-5 rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-[0.98]">
                        Start My Project
                    </button>
                </section>
            </div>
        </div>
    );
};

export default InsightsView;
