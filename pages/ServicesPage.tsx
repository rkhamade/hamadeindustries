
import React from 'react';
import { Target, PhoneOff, Calendar, Repeat, UserPlus, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from '../App';

const serviceDetails = [
  {
    icon: Target,
    title: "Lead Capture Infrastructure",
    description: "Website lead form integration, chat widget / assistant capture, CRM lead creation, and instant auto-response (SMS/email).",
    outcome: "Every inquiry becomes a tracked lead."
  },
  {
    icon: PhoneOff,
    title: "Missed Call Recovery",
    description: "Missed call text-back, call tracking (basic), and automated follow-up prompts to re-engage prospects immediately.",
    outcome: "Missed calls turn into booked appointments."
  },
  {
    icon: Calendar,
    title: "Booking & Scheduling",
    description: "Online booking calendar, confirmation + reminder texts/emails, and self-serve reschedule/cancel links.",
    outcome: "Appointments book themselves without back-and-forth."
  },
  {
    icon: Repeat,
    title: "Automated Follow-Up Engine",
    description: "SMS follow-up sequences, email nurture sequences, and reactivation campaigns for dormant leads.",
    outcome: "Leads get followed up until they convert."
  },
  {
    icon: UserPlus,
    title: "Client Onboarding Workflow",
    description: "Welcome email + next steps, automated intake forms, and internal task triggers / checklists for your team.",
    outcome: "Every new client moves through a repeatable process."
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    description: "Real-time tracking of leads, bookings, and conversion rates with a weekly snapshot delivered to your inbox.",
    outcome: "Owners see numbers, not guesses."
  }
];

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Operational systems that stop businesses from losing customers. We don't just consult; we install.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, idx) => (
            <div key={idx} className="p-8 bg-zinc-900/50 border border-white/10 rounded-sm hover:border-white/20 transition-all flex flex-col">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-sm mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">Primary Outcome</p>
                <p className="text-white font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  {service.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-sm text-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to install performance infrastructure?</h2>
            <p className="text-zinc-600 font-medium">Stop the leakage. Start scaling with predictable systems designed for your specific business model.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => navigate('/schedule')} className="px-8 py-4 bg-black text-white font-bold rounded-sm flex items-center justify-center gap-2 group whitespace-nowrap outline-none">
              Schedule Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 border border-black text-black font-bold rounded-sm flex items-center justify-center hover:bg-black/5 transition-colors outline-none">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
