import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export const WhyUsPage: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description:
        'Over 100+ successful infrastructure deployments across startups and Fortune 500 companies.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Our engineers have decades of combined experience building systems that scale to millions of users.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description:
        'Most projects are delivered within 4-8 weeks with measurable improvements from day one.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Security-first approach with SOC 2 compliance and industry best practices built in.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '3x', label: 'Avg Performance Gain' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose Us</h1>
          <p className="text-xl text-zinc-400">
            We're not just consultants. We're partners in your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all"
              >
                <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                <p className="text-zinc-400">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Hamade Difference</h2>
          <p className="text-zinc-400 text-lg mb-8">
            We're obsessed with performance. Every millisecond matters. Every request counts. We
            build infrastructure that doesn't just work—it excels. Our team lives and breathes
            scalability, reliability, and efficiency.
          </p>
          <p className="text-zinc-400 text-lg">
            When you work with Hamade Industries, you're not getting a cookie-cutter solution.
            You're getting a custom-engineered system built specifically for your needs, your scale,
            and your ambitions.
          </p>
        </div>
      </div>
    </div>
  );
};
