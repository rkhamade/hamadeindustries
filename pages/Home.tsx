import React, { useEffect } from 'react';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { useRouter } from '../App';

export const Home: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-400 tracking-wide uppercase">
                Currently Onboarding New Partners
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Performance Infrastructure for{' '}
              <span className="animate-color-cycle">Growing</span>
              <br />
              Businesses
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto">
              We install systems that help companies acquire clients, operate efficiently, and scale without chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/schedule')}
                className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
              >
                Schedule a Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => navigate('/process')}
                className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center reveal">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-zinc-400">
                Optimized infrastructure delivering sub-second response times
              </p>
            </div>

            <div className="text-center reveal">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Built</h3>
              <p className="text-zinc-400">
                Every component engineered for maximum efficiency
              </p>
            </div>

            <div className="text-center reveal">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
              <p className="text-zinc-400">
                Measurable improvements in performance and conversion
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-zinc-500">Scale</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              From startups to enterprise, our infrastructure adapts to your needs. Whether you're
              handling 100 or 100 million requests, we've got you covered.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
