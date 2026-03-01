import React from 'react';
import { Server, Cloud, Shield, Gauge } from 'lucide-react';
import { useRouter } from '../App';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  const services = [
    {
      icon: Server,
      title: 'Infrastructure Design',
      description: 'Custom-built systems architected for your specific needs and scale requirements.',
      features: ['Scalable architecture', 'High availability', 'Load balancing', 'Database optimization'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Multi-cloud deployment strategies that maximize performance and minimize costs.',
      features: ['AWS/GCP/Azure', 'Kubernetes orchestration', 'Serverless functions', 'CDN integration'],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures built into every layer of your infrastructure.',
      features: ['Zero-trust architecture', 'Data encryption', 'Compliance standards', 'Monitoring'],
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and tuning to ensure peak performance at all times.',
      features: ['Real-time analytics', 'Bottleneck identification', 'Automated scaling', 'Cost optimization'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-zinc-400">
            Comprehensive infrastructure solutions designed to power your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all"
              >
                <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-400 mb-8">
            Schedule a discovery call to discuss your infrastructure needs
          </p>
          <button
            onClick={() => navigate('/schedule')}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all"
          >
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
};
