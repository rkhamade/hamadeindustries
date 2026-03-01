import React from 'react';
import { useRouter } from '../App';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Hamade</span>
              <span className="text-zinc-500"> Industries</span>
            </h3>
            <p className="text-zinc-400 text-sm">
              Performance infrastructure for modern businesses
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <div className="space-y-2">
              <button
                onClick={() => navigate('/services')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => navigate('/process')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => navigate('/why-us')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Why Us
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <div className="space-y-2">
              <button
                onClick={() => navigate('/demo')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Demo Hub
              </button>
              <button
                onClick={() => navigate('/results')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Results
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2">
              <button
                onClick={() => navigate('/contact')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate('/schedule')}
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Hamade Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
