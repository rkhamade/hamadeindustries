import React from 'react';
import { Search, Pencil, Rocket, BarChart } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your current infrastructure, identify bottlenecks, and understand your business goals.',
      timeline: 'Week 1',
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Our team creates a comprehensive architecture plan tailored to your specific requirements.',
      timeline: 'Week 2-3',
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'We build and deploy your infrastructure with zero downtime and minimal disruption.',
      timeline: 'Week 4-8',
    },
    {
      icon: BarChart,
      title: 'Optimization',
      description: 'Continuous monitoring and improvements ensure peak performance at all times.',
      timeline: 'Ongoing',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-zinc-400">
            A proven methodology that delivers results every time
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">
                        {index + 1}. {step.title}
                      </h3>
                      <span className="text-sm text-zinc-500 font-mono">{step.timeline}</span>
                    </div>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Transparent & Collaborative</h2>
          <p className="text-zinc-400 mb-8">
            We believe in clear communication at every step. You'll have full visibility into progress,
            timelines, and deliverables throughout the entire engagement.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-zinc-500">Transparency</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-zinc-500">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-zinc-500">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
