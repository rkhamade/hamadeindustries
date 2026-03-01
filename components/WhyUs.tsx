
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const points = [
  "Systems built for real businesses",
  "Measurable performance improvements",
  "Infrastructure that scales with growth",
  "Ongoing optimization and support",
  "Operator-level thinking"
];

export const WhyUs: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const targetValue = 94;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated && count < targetValue) {
      // 1.5x faster than 800ms is approx 533ms
      const duration = 533; 
      const increment = targetValue / (duration / 16); // ~60fps
      
      const timer = setTimeout(() => {
        setCount(prev => {
          const next = prev + Math.max(1, increment);
          return next >= targetValue ? targetValue : Math.floor(next);
        });
      }, 16);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated, count]);

  return (
    <section 
      ref={sectionRef} 
      id="why-us" 
      className={`py-24 px-6 bg-zinc-950/50 border-t border-white/5 reveal ${hasAnimated ? 'active' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 font-medium">Why Hamade Industries</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-white">
            Infrastructure built to <span className="text-zinc-500">endure growth</span>.
          </h3>
          <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
            Most firms sell advice. We sell infrastructure. We treat your business like a machine that requires precision engineering to operate at peak performance.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                </div>
                <span className="text-zinc-300 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden border border-white/10 p-1">
            <div className="w-full h-full bg-[#050505] rounded-sm relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-4 gap-2 p-8 opacity-20">
                    {Array.from({length: 16}).map((_, i) => (
                        <div key={i} className={`bg-zinc-800 rounded-sm animate-pulse`} style={{ animationDelay: `${i * 100}ms`, height: `${Math.random() * 100 + 50}%` }} />
                    ))}
                </div>
                <div className="relative z-10 text-center">
                    <div className="text-7xl font-black tracking-tighter text-white mb-2 tabular-nums">
                      {count}%
                    </div>
                    <div className="mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Efficiency Yield</div>
                </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-sm shadow-2xl hidden lg:block">
            <p className="text-sm font-bold tracking-tight mb-1">PROVEN DEPLOYMENT</p>
            <p className="text-xs font-medium opacity-70">Infrastructure v3.44.2</p>
          </div>
        </div>
      </div>
    </section>
  );
};
