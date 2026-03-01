
import React from 'react';
import { Calendar, PhoneCall, ListTodo, Layers, ArrowLeft } from 'lucide-react';
import { useRouter } from '../App';

export const SchedulePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Schedule a Consultation</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Choose a time to speak with a performance engineer. We'll identify your leaks and propose an infrastructure plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-zinc-900 border border-white/10 rounded-sm p-1">
             <div className="aspect-[4/5] bg-zinc-950 rounded-sm flex flex-col items-center justify-center p-12 text-center border border-white/5">
                <Calendar size={64} className="text-zinc-700 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">[ Paste Calendly Embed Code Here ]</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">Integrate your preferred booking widget here for seamless appointment capture.</p>
                <a href="mailto:contact@hamadeindustries.com" className="px-8 py-3 bg-white text-black font-bold rounded-sm hover:bg-zinc-200 transition-all">
                  Email to schedule manually
                </a>
             </div>
          </div>

          <div className="space-y-12 py-8">
            <h3 className="text-3xl font-bold text-white">What happens on this call?</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm text-black flex-shrink-0">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Confirm Goals</h4>
                  <p className="text-zinc-400">We establish your desired business outcomes and current scale targets.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm text-black flex-shrink-0">
                  <ListTodo size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Identify Leaks</h4>
                  <p className="text-zinc-400">A rapid audit of your current lead intake, follow-up speed, and backend workflows.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm text-black flex-shrink-0">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Propose Install Plan</h4>
                  <p className="text-zinc-400">A clear roadmap of the systems we recommend installing and a fixed pricing range.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <button 
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group outline-none"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
