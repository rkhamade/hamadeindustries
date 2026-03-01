import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from '../App';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/why-us', label: 'Why Us' },
    { path: '/results', label: 'Results' },
    { path: '/demo', label: 'Demo Hub' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-xl font-bold tracking-tight hover:text-white transition-colors"
          >
            <span className="text-white">Hamade</span>
            <span className="text-zinc-500"> Industries</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-sm transition-colors ${
                  currentPath === link.path
                    ? 'text-white font-medium'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm transition-colors ${
                  currentPath === link.path
                    ? 'text-white font-medium'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
