import { useState, useEffect } from 'react';
import { Terminal, Code } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-green-500/20 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-mono text-green-500 font-bold text-xl flex items-center gap-2">
          <Terminal size={24} />
          <span>John Ominde</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm text-gray-400">
          <a href="#about" className="hover:text-green-400 transition-colors flex items-center gap-1">
            <span className="text-green-500">01.</span> About
          </a>
          <a href="#skills" className="hover:text-green-400 transition-colors flex items-center gap-1">
            <span className="text-green-500">02.</span> Skills
          </a>
          <a href="#projects" className="hover:text-green-400 transition-colors flex items-center gap-1">
            <span className="text-green-500">03.</span> Projects
          </a>
          <a href="#contact" className="hover:text-green-400 transition-colors flex items-center gap-1">
            <span className="text-green-500">04.</span> Contact
          </a>
        </div>
        <button className="md:hidden text-green-500">
          <Code size={24} />
        </button>
      </div>
    </nav>
  );
};
