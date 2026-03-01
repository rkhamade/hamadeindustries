
import React from 'react';
import { useRouter } from '../App';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <button onClick={() => navigate('/')} className="flex items-center gap-2 mb-4 outline-none">
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-bold text-sm">H</span>
            </div>
            <span className="text-lg font-bold tracking-tight uppercase text-white">
              Hamade <span className="text-zinc-500 font-light">Industries</span>
            </span>
          </button>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            Performance infrastructure and operational systems for high-growth enterprises.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-12 gap-y-4">
          <button onClick={() => navigate('/')} className="text-sm text-zinc-400 hover:text-white transition-colors outline-none">Home</button>
          <button onClick={() => navigate('/services')} className="text-sm text-zinc-400 hover:text-white transition-colors outline-none">Services</button>
          <button onClick={() => navigate('/process')} className="text-sm text-zinc-400 hover:text-white transition-colors outline-none">Process</button>
          <button onClick={() => navigate('/demo')} className="text-sm text-zinc-400 hover:text-white transition-colors outline-none">Demo</button>
          <button onClick={() => navigate('/results')} className="text-sm text-zinc-400 hover:text-white transition-colors outline-none">Results</button>
          <button onClick={() => navigate('/contact')} className="text-sm text-zinc-400 hover:text-white transition-colors outline-none">Contact</button>
        </nav>

        <div className="text-left md:text-right">
          <p className="text-sm text-zinc-400 mb-1 font-medium uppercase tracking-wider text-[10px]">General Enquiries</p>
          <a href="mailto:contact@hamadeindustries.com" className="text-lg font-medium text-white hover:text-zinc-300 transition-colors">
            contact@hamadeindustries.com
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
        <span>© 2026 Hamade Industries. All systems operational.</span>
        <span className="flex gap-6 mt-4 md:mt-0">
          <button className="hover:text-zinc-400 transition-colors outline-none">Privacy Policy</button>
          <button className="hover:text-zinc-400 transition-colors outline-none">Terms of Service</button>
        </span>
      </div>
    </footer>
  );
};
