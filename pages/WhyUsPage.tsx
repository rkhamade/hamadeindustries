
import React from 'react';
import { ShieldCheck, Zap, BarChart, Users, Headphones, ArrowRight } from 'lucide-react';
import { useRouter } from '../App';

const valueProps = [
  {
    icon: Zap,
    title: "Practical Installs",
    desc: "We don't sell decks or vague advice. We install the software, connect the APIs, and write the automation loops."
  },
  {
    icon: ShieldCheck,
    title: "Built for Real Businesses",
    desc: "Our systems are battle-tested in gyms, service firms, and agencies. We understand local operations and high-volume lead handling."
  },
  {
    icon: Headphones,
    title: "24/7 Response Coverage",
    desc: "Speed to lead is everything. Our infrastructure ensures every inquiry is acknowledged and routed within 60 seconds."
  },
  {
    icon: BarChart,
    title: "Measurable Outcomes",
    desc: "We track the only metrics that matter: leads captured, appointments booked, and follow-up completion rates."
  },
  {
    icon: Users,
    title: "Ongoing Support",
    desc: "We act as your fractional systems operations team, ensuring the tech evolves as your business grows."
  }
];

const clientProfiles = [
  "Gyms and Fitness Studios",
  "Home Service Businesses (HVAC, Plumbing, Solar)",
  "Professional Service Teams",
  "Local Operators scaling to multiple locations",
  "High-volume lead generators"
];

export const WhyUsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Why Hamade Industries</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Less talk. More installs. Most firms sell advice; we sell infrastructure. We treat your operations like a precision-engineered machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-sm flex items-center justify-center flex-shrink-0 text-white">
                <prop.icon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">{prop.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/10 pt-24">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Who we work best with</h3>
            <div className="grid grid-cols-1 gap-4">
              {clientProfiles.map((profile, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900/30 border border-white/5 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-lg font-medium text-zinc-300">{profile}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-900/50 p-12 border border-white/10 rounded-sm flex flex-col justify-center text-center">
            <h4 className="text-2xl font-bold mb-4 text-white">Does your business fit?</h4>
            <p className="text-zinc-400 mb-10">If you have more leads than you can follow up with, or your backend is a mess of spreadsheets and manual tasks, we can help.</p>
            <button 
              onClick={() => navigate('/schedule')}
              className="px-10 py-5 bg-white text-black font-bold text-lg rounded-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group self-center outline-none"
            >
              Schedule a Fit Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
