
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useRouter } from '../App';
import { ContactModal } from './ContactModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Demo', href: '/demo' },
    { name: 'Results', href: '/results' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNav('/')} className="flex items-center gap-2 group outline-none">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-black font-bold text-lg">H</span>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase text-white">
            Hamade <span className="text-zinc-500 font-light">Industries</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.href)} 
              className={`text-sm font-medium transition-colors outline-none ${
                currentPath === link.href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-semibold rounded-sm hover:bg-zinc-200 transition-all outline-none"
          >
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.href)}
              className={`text-lg font-medium text-left outline-none ${
                currentPath === link.href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full py-3 bg-white text-black font-bold rounded-sm text-center outline-none"
          >
            Get Started
          </button>
        </div>
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};
