
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRouter } from '../App';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative blurred gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-zinc-800/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-zinc-800/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Currently onboarding new partners</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 text-white max-w-[18ch] mx-auto">
          Performance Infrastructure for <span className="animate-text-grow italic font-light">Growing</span> Businesses
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          We install systems that help companies acquire clients, operate efficiently, and scale without chaos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <button 
            onClick={() => navigate('/schedule')} 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group outline-none"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => navigate('/process')} 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/10 font-bold text-lg rounded-sm hover:bg-white/5 transition-all flex items-center justify-center outline-none"
          >
            See How It Works
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block text-white">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
