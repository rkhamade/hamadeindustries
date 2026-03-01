
import React from 'react';
import { Bot, Play, ShieldAlert, ArrowRight } from 'lucide-react';
import { useRouter } from '../App';

const demos = [
  {
    id: "powerhouse-gym",
    title: "Powerhouse Gym Assistant",
    tag: "Fulfillment & Booking",
    description: "Multi-channel booking system that handles membership inquiries and trial scheduling 24/7."
  },
  {
    id: "eric-domanico-foundation",
    title: "Eric Domanico Foundation Assistant",
    tag: "Non-Profit Infrastructure",
    description: "Automated inquiry routing and donation info delivery via intelligent conversational loops."
  },
  {
    id: "real-estate-assistant",
    title: "Real Estate Lead Assistant",
    tag: "High-Ticket Acquisition",
    description: "Qualifies buyers/sellers instantly and routes high-intent leads to agents via SMS."
  }
];

export const DemoHub: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Live Installations</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Interactive demos of systems deployed for partner businesses. Experience how our performance infrastructure handles real human interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {demos.map((demo) => (
            <button 
              key={demo.id} 
              onClick={() => navigate(`/demo/${demo.id}`)}
              className="group p-10 bg-zinc-900/40 border border-white/5 rounded-sm hover:bg-zinc-900 hover:border-white/20 transition-all flex flex-col relative overflow-hidden text-left outline-none"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Bot size={80} />
              </div>
              <div className="inline-block px-2 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-500 mb-6 border border-white/5 w-fit">
                {demo.tag}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{demo.title}</h3>
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">
                {demo.description}
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                View Demo
                <Play size={14} className="fill-current" />
              </div>
            </button>
          ))}
        </div>

        <div className="p-8 bg-zinc-950 border border-white/5 rounded-sm flex items-start gap-4 max-w-2xl mx-auto">
          <ShieldAlert size={20} className="text-zinc-600 mt-1 flex-shrink-0" />
          <p className="text-zinc-600 text-sm italic">
            Disclaimer: These demos are hosted in a sandboxed environment. Some functionality may be limited for privacy. Production installs include direct integration with proprietary CRM and SMS hubs.
          </p>
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => navigate('/schedule')}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold text-xl rounded-sm hover:bg-zinc-200 transition-all group outline-none"
          >
            Schedule a Custom Build
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
