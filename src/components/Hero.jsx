import { Terminal, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ThreatRadar } from './ThreatRadar';

export const Hero = () => {
  const line1 = useTypewriter('> Initializing system...', 30, 0);
  const line2 = useTypewriter('> Loading root access...', 40, 1000);
  const line3 = useTypewriter('> Hello, I am a Cybersecurity Specialist.', 50, 2500);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center gap-12 md:gap-8 px-6 max-w-6xl mx-auto pt-32 md:pt-20 relative">
      <div className="flex-1 w-full">
        <div className="font-mono text-lg md:text-xl text-green-500/70 mb-4 h-8">
          {line1.displayText}
          {line1.isComplete && !line2.isComplete && <span className="animate-pulse">_</span>}
        </div>
        <div className="font-mono text-lg md:text-xl text-green-500/70 mb-8 h-8">
          {line1.isComplete && line2.displayText}
          {line2.isComplete && !line3.isComplete && <span className="animate-pulse">_</span>}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {line2.isComplete ? line3.displayText : ''}
          {line3.isComplete && <span className="animate-pulse text-green-500">_</span>}
        </h1>

        <p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-opacity duration-1000 opacity-0"
          style={{ opacity: line3.isComplete ? 1 : 0 }}
        >
          I specialize in finding vulnerabilities before the bad actors do.
          Passionate about offensive security, secure architecture design, and
          protecting critical infrastructure.
        </p>

        <div
          className="flex gap-4 transition-opacity duration-1000 opacity-0"
          style={{ opacity: line3.isComplete ? 1 : 0 }}
        >
          <a
            href="#projects"
            className="bg-green-500/10 text-green-500 border border-green-500 px-6 py-3 font-mono text-sm hover:bg-green-500 hover:text-black transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
          >
            <Terminal size={16} /> Execute Projects
          </a>
          <a
            href="#contact"
            className="border border-gray-700 text-gray-300 px-6 py-3 font-mono text-sm hover:border-green-500 hover:text-green-500 transition-colors flex items-center gap-2"
          >
            <Mail size={16} /> Ping Me
          </a>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center md:justify-end">
        <ThreatRadar />
      </div>
    </section>
  );
};
