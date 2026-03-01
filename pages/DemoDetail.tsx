import React, { useState, useEffect } from 'react';
import { ArrowLeft, Activity, TrendingUp, Server } from 'lucide-react';
import { useRouter } from '../App';

export const DemoDetail: React.FC = () => {
  const { params, navigate } = useRouter();
  const demoId = params.id || '';

  const [metrics, setMetrics] = useState({
    requests: 0,
    latency: 0,
    uptime: 99.9,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        requests: Math.floor(Math.random() * 1000) + 500,
        latency: Math.floor(Math.random() * 50) + 10,
        uptime: 99.9 + Math.random() * 0.09,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const demoContent = {
    'load-balancing': {
      title: 'Load Balancing Demo',
      description: 'Watch real-time traffic distribution across our server clusters',
      features: [
        'Automatic health checking',
        'Weighted round-robin distribution',
        'Session persistence',
        'Failover protection',
      ],
    },
    caching: {
      title: 'Caching Strategy Demo',
      description: 'See the performance impact of our multi-layer caching',
      features: [
        'Edge caching',
        'Redis in-memory cache',
        'Database query cache',
        'Intelligent cache invalidation',
      ],
    },
    monitoring: {
      title: 'Real-time Monitoring Demo',
      description: 'Comprehensive visibility into your infrastructure',
      features: [
        'Live performance metrics',
        'Custom alerting rules',
        'Historical data analysis',
        'API endpoint monitoring',
      ],
    },
  };

  const content = demoContent[demoId as keyof typeof demoContent] || demoContent['load-balancing'];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate('/demo')}
          className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Demo Hub
        </button>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.title}</h1>
            <p className="text-xl text-zinc-400">{content.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="text-zinc-400" size={20} />
                <span className="text-sm text-zinc-500">Requests/sec</span>
              </div>
              <div className="text-3xl font-bold mono">{metrics.requests}</div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-zinc-400" size={20} />
                <span className="text-sm text-zinc-500">Avg Latency</span>
              </div>
              <div className="text-3xl font-bold mono">{metrics.latency}ms</div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Server className="text-zinc-400" size={20} />
                <span className="text-sm text-zinc-500">Uptime</span>
              </div>
              <div className="text-3xl font-bold mono">{metrics.uptime.toFixed(2)}%</div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Live Visualization</h2>
            <div className="aspect-video bg-zinc-950/50 rounded-lg flex items-center justify-center border border-zinc-800">
              <div className="text-center">
                <Activity className="mx-auto mb-4 text-zinc-600 animate-pulse" size={48} />
                <p className="text-zinc-600">Live Demo Visualization</p>
                <p className="text-sm text-zinc-700 mt-2">Metrics updating in real-time</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400 mb-6">
              Want to see how this applies to your infrastructure?
            </p>
            <button
              onClick={() => navigate('/schedule')}
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all"
            >
              Schedule a Custom Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
