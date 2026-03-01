
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { useRouter } from '../App';

const demoData: Record<string, any> = {
  "powerhouse-gym": {
    title: "Powerhouse Gym Assistant",
    tag: "Fulfillment & Booking",
    description: "A robust lead intake system designed to capture member interest and schedule trials without staff intervention.",
    bullets: [
      "Answers FAQs instantly",
      "Captures lead contact info",
      "Routes inquiries by facility",
      "Automated trial booking flow",
      "Handoff to human on edge cases"
    ]
  },
  "eric-domanico-foundation": {
    title: "Eric Domanico Foundation Assistant",
    tag: "Non-Profit Infrastructure",
    description: "Intelligent front-end handling for a non-profit foundation, managing donations and scholarship inquiries.",
    bullets: [
      "24/7 scholarship information",
      "Donation link distribution",
      "Volunteer intake routing",
      "Event scheduling info",
      "Direct integration with donation CRM"
    ]
  },
  "real-estate-assistant": {
    title: "Real Estate Lead Assistant",
    tag: "High-Ticket Acquisition",
    description: "Systematic lead qualification for busy real estate teams, filtering for buyer/seller readiness.",
    bullets: [
      "Instant buyer pre-qualification",
      "Seller property detail capture",
      "Booking agent tours",
      "Instant SMS notification to agent",
      "Lead scoring based on motivation"
    ]
  }
};

declare global {
  interface Window {
    VG_CONFIG?: any;
  }
}

export const DemoDetail: React.FC = () => {
  const { params, navigate } = useRouter();
  const demoId = params.id;
  const demo = demoId ? demoData[demoId] : null;
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    let configId = "";
    
    // Route to correct Convocore ID
    if (demoId === 'real-estate-assistant') {
      configId = "v0x4bteum7vgwd1t";
    } else if (demoId === 'eric-domanico-foundation') {
      configId = "889j7wzx85ujnzvn";
    } else if (demoId === 'powerhouse-gym') {
      configId = "8a9095qnmnppdh2q";
    }

    if (configId) {
      // Set the global config for the Convocore bundle
      window.VG_CONFIG = {
        ID: configId,
        region: 'na',
        render: 'full-width',
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ],
      };

      // Create and inject the widget script
      const script = document.createElement("script");
      script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      script.defer = true;
      document.body.appendChild(script);
      scriptRef.current = script;

      // Cleanup logic to remove the script and reset global config when navigating away
      return () => {
        if (scriptRef.current) {
          document.body.removeChild(scriptRef.current);
          scriptRef.current = null;
        }
        delete window.VG_CONFIG;
        const container = document.getElementById('VG_OVERLAY_CONTAINER');
        if (container) container.innerHTML = '';
      };
    }
  }, [demoId]);

  if (!demo) {
    // Redirect if invalid ID
    setTimeout(() => navigate('/demo'), 0);
    return null;
  }

  const isLiveDemo = demoId === 'real-estate-assistant' || demoId === 'eric-domanico-foundation' || demoId === 'powerhouse-gym';

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/demo')} 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group outline-none"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Live Installations
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-2 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-500 mb-6 border border-white/5">
              {demo.tag}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">{demo.title}</h1>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">{demo.description}</p>

            <div className="space-y-4 mb-12">
              <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-6">What this demo shows</h3>
              {demo.bullets.map((bullet: string, i: number) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900/30 border border-white/5 rounded-sm">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="text-zinc-300 font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/schedule')} 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-zinc-200 transition-all group outline-none"
            >
              Get This For Your Business
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-sm p-1 shadow-2xl">
            <div className="h-[650px] lg:h-auto lg:aspect-[4/5] bg-zinc-950 rounded-sm flex flex-col overflow-hidden">
               <div className="p-4 bg-zinc-800 flex items-center gap-2 border-b border-white/5 shrink-0">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Live Demo Sandbox</span>
               </div>
               
               <div className="flex-grow flex flex-col items-center justify-center relative min-h-0">
                  {isLiveDemo ? (
                    <div 
                      id="VG_OVERLAY_CONTAINER" 
                      className="w-full h-full min-h-[500px]"
                      style={{ background: 'transparent' }}
                    >
                      {/* Convocore Widget Mounts Here */}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <MessageSquare size={48} className="text-zinc-800 mb-4 mx-auto" />
                      <h3 className="text-xl font-bold mb-2 text-white">Interactive Preview</h3>
                      <p className="text-zinc-600 text-sm mb-8">[ Loading Demo Interface ]</p>
                      <div className="w-full max-w-xs space-y-4 mx-auto">
                        <div className="h-10 bg-zinc-900 rounded-sm animate-pulse" />
                        <div className="h-10 bg-zinc-900 rounded-sm animate-pulse w-3/4 ml-auto" />
                        <div className="h-10 bg-zinc-900 rounded-sm animate-pulse w-1/2" />
                      </div>
                    </div>
                  )}
               </div>

               <div className="p-4 bg-zinc-900 border-t border-white/5 text-[10px] text-zinc-600 uppercase tracking-widest text-center shrink-0">
                 Powered by Hamade Industries Infrastructure
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};