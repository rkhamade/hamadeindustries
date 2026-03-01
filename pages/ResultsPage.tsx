import React from 'react';
import { TrendingUp, Zap, DollarSign, Users } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  const caseStudies = [
    {
      company: 'TechCorp',
      industry: 'SaaS',
      results: [
        { metric: 'Response Time', improvement: '-65%', icon: Zap },
        { metric: 'Infrastructure Cost', improvement: '-40%', icon: DollarSign },
        { metric: 'User Capacity', improvement: '+300%', icon: Users },
        { metric: 'Revenue', improvement: '+85%', icon: TrendingUp },
      ],
      challenge:
        'Struggling with slow page loads and frequent downtime during peak traffic.',
      solution:
        'Implemented a distributed caching layer, optimized database queries, and deployed auto-scaling infrastructure.',
    },
    {
      company: 'E-Commerce Giant',
      industry: 'Retail',
      results: [
        { metric: 'Page Load Time', improvement: '-70%', icon: Zap },
        { metric: 'Conversion Rate', improvement: '+45%', icon: TrendingUp },
        { metric: 'Server Costs', improvement: '-55%', icon: DollarSign },
        { metric: 'Uptime', improvement: '99.99%', icon: Users },
      ],
      challenge:
        'High infrastructure costs with poor performance during sales events.',
      solution:
        'Built a cloud-native architecture with intelligent load balancing and CDN optimization.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Proven Results</h1>
          <p className="text-xl text-zinc-400">
            Real performance improvements for real businesses
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold">{study.company}</h2>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-400">
                    {study.industry}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {study.results.map((result, i) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={i}
                        className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 text-center"
                      >
                        <Icon className="mx-auto mb-3 text-zinc-400" size={24} />
                        <div className="text-2xl font-bold mb-1">{result.improvement}</div>
                        <div className="text-sm text-zinc-500">{result.metric}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-400">The Challenge</h3>
                    <p className="text-zinc-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-400">Our Solution</h3>
                    <p className="text-zinc-300">{study.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
          <p className="text-zinc-400 mb-8">
            Let's discuss how we can transform your infrastructure and drive measurable business outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = '/schedule')}
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all"
            >
              Schedule Discovery Call
            </button>
            <button
              onClick={() => (window.location.href = '/contact')}
              className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
