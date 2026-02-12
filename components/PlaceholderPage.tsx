
import React from 'react';

interface PlaceholderPageProps {
    title: string;
    description: string;
    icon: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description, icon }) => {
    return (
        <div className="relative pt-24 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1)_0%,rgba(2,6,23,0)_70%)] pointer-events-none"></div>

            <div className="max-w-lg mx-auto text-center relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                    Coming Soon
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] mb-6 hero-text-gradient">
                    {title}
                </h1>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-sm mx-auto">
                    {description}
                </p>

                {/* Decorative grid */}
                <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto opacity-30">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-16 rounded-xl bg-white/5 border border-white/5"
                            style={{ animationDelay: `${i * 150}ms` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
