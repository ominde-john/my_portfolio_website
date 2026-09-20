import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => (
  <footer className="py-8 text-center border-t border-gray-900 bg-black">
    <div className="flex justify-center gap-8 mb-6">
      <a
        href="https://github.com/ominde-john"
        className="text-gray-500 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
      >
        <Github size={24} />
      </a>
      <a href="#" className="text-gray-500 hover:text-green-500 hover:-translate-y-1 transition-all duration-300">
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:ominde@jonzjohn.com"
        className="text-gray-500 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
      >
        <Mail size={24} />
      </a>
    </div>
    <p className="font-mono text-gray-600 text-sm mb-2">
      <a href="https://github.com/bchiang7/v4" className="hover:text-green-500 transition-colors">
        Design inspired by Brittany Chiang
      </a>
    </p>
    <p className="font-mono text-gray-600 text-sm">
      Built with <span className="text-green-500">React</span> &amp;{' '}
      <span className="text-green-500">Tailwind</span>.
    </p>
  </footer>
);
