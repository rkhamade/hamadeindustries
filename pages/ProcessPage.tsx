
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useRouter } from '../App';

const steps = [
  {
    title: "Audit",
    desc: "We identify leaks: missed calls, slow responses, and follow-up gaps. We document the current friction points that are costing you money today."
  },
  {
    title: "Install",
    desc: "We deploy the pipeline + automations. We build the lead capture forms, configure the CRM, and set up the SMS/Email nurture sequences."
  },
  {
    title: "Train",
    desc: "Handoff + simple SOPs. We ensure your team knows exactly how to interact with the new systems and manage leads as they flow in."
  },
  {
    title: "Optimize",
    desc: "Weekly tweaks based on results. We analyze the conversion data and refine your messaging and workflows for maximum efficiency."
  }
];

const firstSevenDays = [
  "Comprehensive leakage audit completed",
  "Primary lead capture infrastructure live",
  "Missed call text-back enabled",
  "CRM integration verified",
  "Initial 24/7 auto-response sequences active"
];

export const ProcessPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Process</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            How we install systems that run your business predictably. We follow a strict methodology to ensure your infrastructure is deployed rapidly and correctly.
          </p>
        </div>

        <div className="space-y-12 mb-24">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-start border-l border-zinc-800 pl-8 relative">
              <div className="absolute left-[-1.25rem] top-0 w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm font-bold">
                {idx + 1}
              </div>
              <div className="md:w-1/3">
                <h3 className="text-3xl font-bold text-white">{step.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900/40 p-12 rounded-sm border border-white/5">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">What you get in the first 7 days</h3>
            <div className="space-y-4">
              {firstSevenDays.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  <span className="text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-end">
            <div className="text-center lg:text-right max-w-sm">
              <p className="text-zinc-400 mb-8 italic">"We move fast because business friction is expensive. The sooner we install, the sooner you scale."</p>
              <button 
                onClick={() => navigate('/schedule')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-zinc-200 transition-all group outline-none"
              >
                Schedule Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
