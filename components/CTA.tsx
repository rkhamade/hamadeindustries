
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../App';

export const CTA: React.FC = () => {
  const { navigate } = useRouter();
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className={`py-24 px-6 relative overflow-hidden reveal ${isVisible ? 'active' : ''}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 p-12 md:p-24 rounded-sm text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Stop Running a Messy Business</h2>
        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl mx-auto">
          Install infrastructure that scales. Our team is ready to audit your operations and install the systems required for predictable growth.
        </p>
        
        <button 
          onClick={() => navigate('/schedule')} 
          className="group px-10 py-5 bg-white text-black font-bold text-xl rounded-sm hover:bg-zinc-200 transition-all inline-flex items-center justify-center gap-3 mx-auto outline-none"
        >
          Book Strategy Call
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
