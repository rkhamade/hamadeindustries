import React, { useEffect, useRef, useState } from 'react';
import { Target, Cpu, Activity } from 'lucide-react';

const services = [
  {
    title: 'Client Pipeline Systems',
    description: 'We design automated pipelines that capture leads, follow up instantly, and convert interest into booked appointments.',
    icon: Target,
    tag: 'Acquisition'
  },
  {
    title: 'Operational Infrastructure',
    description: 'We clean up backend chaos by installing workflows, automation, and repeatable systems.',
    icon: Cpu,
    tag: 'Efficiency'
  },
  {
    title: 'Performance Consulting',
    description: 'We act as an external operator, identifying bottlenecks and implementing scalable growth systems.',
    icon: Activity,
    tag: 'Strategy'
  }
];

export const Services: React.FC = () => {
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
      id="services" 
      className={`py-24 px-6 border-y border-white/5 bg-zinc-950/50 reveal ${isVisible ? 'active' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 font-medium">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">What Hamade Industries Provides</h3>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs border-l border-white/10 pl-4">
            Specialized in complex business mechanics and high-growth operational models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-zinc-900/40 border border-white/5 rounded-sm hover:bg-zinc-900 hover:border-white/10 transition-all duration-300 relative overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="inline-block px-2 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-500 mb-6 border border-white/5">
                  {service.tag}
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm mb-6 text-black">
                  <service.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="h-px w-12 bg-zinc-800 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};