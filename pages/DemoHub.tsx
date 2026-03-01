import React from 'react';
import { ArrowRight, Gauge, Zap, LineChart } from 'lucide-react';
import { useRouter } from '../App';

export const DemoHub: React.FC = () => {
  const { navigate } = useRouter();

  const demos = [
    {
      id: 'load-balancing',
      icon: Gauge,
      title: 'Load Balancing Demo',
      description: 'See how our intelligent load balancing distributes traffic across multiple servers',
      metrics: ['99.9% uptime', 'Auto-scaling', 'Health checks'],
    },
    {
      id: 'caching',
      icon: Zap,
      title: 'Caching Strategy',
      description: 'Experience the performance impact of our multi-layer caching architecture',
      metrics: ['80% cache hit rate', 'Sub-10ms response', 'CDN integration'],
    },
    {
      id: 'monitoring',
      icon: LineChart,
      title: 'Real-time Monitoring',
      description: 'Explore our comprehensive monitoring dashboard with live metrics',
      metrics: ['Real-time alerts', 'Custom dashboards', 'Performance insights'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Demo Hub</h1>
          <p className="text-xl text-zinc-400">
            Interactive demonstrations of our infrastructure capabilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <button
                key={demo.id}
                onClick={() => navigate(`/demo/${demo.id}`)}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all text-left group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">{demo.title}</h3>
                      <ArrowRight
                        className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all"
                        size={24}
                      />
                    </div>
                    <p className="text-zinc-400 mb-4">{demo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {demo.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Want a Custom Demo?</h2>
          <p className="text-zinc-400 mb-8">
            Schedule a call with our team to see a demo tailored to your specific use case
          </p>
          <button
            onClick={() => navigate('/schedule')}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};
