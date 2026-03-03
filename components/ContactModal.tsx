import React, { useState, useEffect } from 'react';
import { X, Mail, Clock, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    q: "What do you need from me to start?",
    a: "A quick walkthrough of your current tools (if any) and your primary business goals. We handle the heavy lifting of tech setup."
  },
  {
    q: "Do you replace my staff?",
    a: "No. We give them leverage. We automate the repetitive tasks so your team can focus on closing deals and high-value work."
  },
  {
    q: "How long does install take?",
    a: "Initial core infrastructure is typically deployed within 7-10 business days."
  }
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-sm animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-zinc-950 border-b border-white/10 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl md:text-3xl font-bold">Get Started</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-sm transition-colors outline-none"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-sm">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in scale-in duration-500">
                  <div className="w-16 h-16 bg-emerald-500 text-black flex items-center justify-center rounded-full mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent</h3>
                  <p className="text-zinc-400 mb-8">Thank you for reaching out. A systems engineer will contact you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-white underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Name</label>
                      <input required type="text" className="w-full bg-black/40 border border-white/10 p-4 rounded-sm outline-none focus:border-white transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Business Name</label>
                      <input required type="text" className="w-full bg-black/40 border border-white/10 p-4 rounded-sm outline-none focus:border-white transition-colors" placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                      <input required type="email" className="w-full bg-black/40 border border-white/10 p-4 rounded-sm outline-none focus:border-white transition-colors" placeholder="john@acme.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Phone</label>
                      <input required type="tel" className="w-full bg-black/40 border border-white/10 p-4 rounded-sm outline-none focus:border-white transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message / Bottleneck</label>
                    <textarea required rows={4} className="w-full bg-black/40 border border-white/10 p-4 rounded-sm outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about the chaos you're looking to fix..." />
                  </div>
                  <button type="submit" className="w-full py-5 bg-white text-black font-bold text-lg rounded-sm hover:bg-zinc-200 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail size={20} className="text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <a href="mailto:contact@hamadeindustries.com" className="text-zinc-400 hover:text-white transition-colors">contact@hamadeindustries.com</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Clock size={20} className="text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Response Time</h4>
                    <p className="text-zinc-400">We respond to all inquiries within 24 business hours.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-8">Frequently Asked Questions</h4>
                <div className="space-y-8">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-3">
                      <p className="font-bold text-white tracking-tight">{faq.q}</p>
                      <p className="text-zinc-400 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
