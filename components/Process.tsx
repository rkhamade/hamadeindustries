
import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'We diagnose friction inside your business. Our team performs a deep-tissue scan of your current acquisition and fulfillment loops.'
  },
  {
    number: '02',
    title: 'Install',
    description: 'We deploy infrastructure that fixes bottlenecks. We don\'t just give advice; we build and integrate the actual software and human workflows.'
  },
  {
    number: '03',
    title: 'Optimize',
    description: 'We refine systems for long-term performance. Once the infrastructure is live, we stress-test it to ensure it scales with your revenue.'
  }
];

export const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className={`py-24 px-6 reveal ${isVisible ? 'active' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 font-medium">Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Our Process</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-zinc-800 -z-10" />
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center md:items-start text-center md:text-left group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-black border border-white/10 rounded-sm flex items-center justify-center mb-8 relative z-10 group-hover:border-white transition-colors">
                <span className="mono text-2xl font-bold text-white/50 group-hover:text-white transition-colors">{step.number}</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-zinc-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
