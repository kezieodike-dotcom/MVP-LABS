
import React from 'react';

const AboutView: React.FC = () => {
    return (
        <div className="relative pt-24 pb-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* ===== HERO SECTION ===== */}
                <section className="text-center mb-20 anim-fade-up anim-delay-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                        <span className="material-symbols-outlined text-sm">info</span>
                        Mission & Vision
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-[1.1] mb-8 hero-text-gradient uppercase tracking-tight">
                        About MVP Labs
                    </h1>

                    <div className="space-y-4 mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            We Don’t Just Build Products.
                        </h2>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight">
                            We Build Systems That Scale.
                        </h2>
                    </div>

                    <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12 w-full anim-line-draw"></div>
                </section>

                {/* ===== CONTENT SECTION ===== */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 anim-fade-up anim-delay-2">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="relative">
                            <span className="absolute -left-4 top-0 text-7xl font-serif text-primary/10 italic select-none">"</span>
                            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-semibold italic pl-4">
                                MVP Labs is a systems innovation lab and app investment studio focused on one mission: transforming bold ideas into scalable technologies with global impact.
                            </p>
                        </div>

                        <div className="p-10 card-blur rounded-[3rem] border border-white/10 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">architecture</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Intersection</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    We exist at the intersection of execution and capital. Where others see concepts, we see architecture. Where others build features, we design systems. Where others fund ideas, we partner to scale them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="absolute inset-0 bg-primary/30 blur-[120px] -z-10 rounded-full anim-glow-breathe"></div>
                        <div className="card-blur p-2 rounded-[3.5rem] overflow-hidden -rotate-3 hover:rotate-0 transition-all duration-1000 shadow-2xl border border-white/5">
                            <img
                                src="/images/mission-visual.png"
                                alt="Studio Mission"
                                className="w-full h-auto rounded-[3.2rem] opacity-90 object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 p-6 card-blur rounded-2xl border border-primary/30 text-center anim-float-delayed shadow-xl">
                            <p className="text-2xl font-bold text-white">2026</p>
                            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Innovation Lab</p>
                        </div>
                    </div>
                </section>

                {/* ===== MANIFESTO ===== */}
                <section className="text-center py-20 border-t border-white/10 anim-fade-up anim-delay-3">
                    <h3 className="text-3xl md:text-5xl font-extrabold font-display mb-8 text-white">
                        We turn potential into <span className="text-primary italic">infrastructure.</span>
                    </h3>
                    <p className="text-slate-500 uppercase tracking-[0.2em] font-bold text-sm">
                        Execution Meets Capital
                    </p>
                </section>

                {/* ===== CORE VALUES ===== */}
                <section className="py-24 grid grid-cols-1 sm:grid-cols-3 gap-8 anim-fade-up anim-delay-4">
                    {[
                        {
                            title: 'Systems First',
                            desc: 'We architect for resilience and massive scale from day zero.',
                            icon: 'hub'
                        },
                        {
                            title: 'Capital Injection',
                            desc: 'Selective funding for founders building high-impact platforms.',
                            icon: 'payments'
                        },
                        {
                            title: 'Global Impact',
                            desc: 'Solutions designed to solve real-world problems worldwide.',
                            icon: 'public'
                        }
                    ].map((val, i) => (
                        <div key={i} className="text-center space-y-4 group">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                            </div>
                            <h4 className="font-bold text-lg text-white">{val.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default AboutView;
