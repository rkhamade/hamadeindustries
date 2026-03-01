
import React from 'react';
import { Quote, ArrowRight, TrendingUp } from 'lucide-react';
import { useRouter } from '../App';

const testimonials = [
  {
    quote: "[Add client quote here describing the transformation of their backend operations and lead handling efficiency.]",
    name: "[Name Placeholder]",
    role: "[Role Placeholder], [Business Type]"
  },
  {
    quote: "[Add client quote here detailing the relief of having automated systems capture leads 24/7 without fail.]",
    name: "[Name Placeholder]",
    role: "[Role Placeholder], [Service Firm]"
  },
  {
    quote: "[Add client quote here focusing on the measurable growth in appointments booked since installation.]",
    name: "[Name Placeholder]",
    role: "[Role Placeholder], [Agency]"
  }
];

const caseStudies = [
  {
    title: "Regional Fitness Chain Installation",
    change: "Consolidated 12 disparate booking methods into one centralized, automated capture pipeline.",
    outcome: "44% increase in trial bookings within 30 days."
  },
  {
    title: "Multi-State Home Services Firm",
    change: "Deployed missed call text-back and automated SMS nurture sequences across 4 regions.",
    outcome: "Recovered average of 18 appointments/week from missed inquiries."
  },
  {
    title: "High-Volume Consulting Group",
    change: "Automated onboarding workflows and intake filtering for high-ticket client intake.",
    outcome: "Reduced internal admin time by 14 hours per week."
  }
];

export const ResultsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Results</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Proof over promises. We measure success in captured leads, booked appointments, and recovered time.
          </p>
        </div>

        <section className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-12 font-medium">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 bg-zinc-900/40 border border-white/10 rounded-sm relative">
                <Quote className="text-white/10 absolute top-8 right-8" size={40} />
                <p className="text-zinc-400 italic mb-10 leading-relaxed">
                  {t.quote}
                </p>
                <div>
                  <p className="text-white font-bold tracking-tight">{t.name}</p>
                  <p className="text-zinc-600 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-12 font-medium">Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-12 bg-zinc-950 border border-white/5 rounded-sm hover:border-white/10 transition-colors text-left">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold mb-4 text-white">{cs.title}</h3>
                  <div className="flex items-center gap-2 text-emerald-500 font-bold tracking-tight">
                    <TrendingUp size={18} />
                    Verified Performance
                  </div>
                </div>
                <div className="lg:col-span-5 flex items-center">
                  <p className="text-zinc-400 border-l border-white/10 pl-6">{cs.change}</p>
                </div>
                <div className="lg:col-span-3 flex items-center lg:justify-end">
                  <div className="lg:text-right">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Outcome</p>
                    <p className="text-2xl font-black text-white">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center bg-zinc-900/40 p-16 rounded-sm border border-white/10">
          <h3 className="text-3xl font-bold mb-6 text-white">See the numbers in your business.</h3>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">We don't start projects without a clear baseline and target outcome. Let's define yours.</p>
          <button 
            onClick={() => navigate('/schedule')}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold text-xl rounded-sm hover:bg-zinc-200 transition-all group outline-none"
          >
            Schedule a Forecast Call
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
