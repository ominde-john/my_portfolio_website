import { Binary, Terminal, Radar } from 'lucide-react';

const FOCUS_TAGS = [
  'Network Security',
  'Linux',
  'Threat Detection',
  'SIEM',
  'Incident Response',
  'Vulnerability Management',
];

const QUICK_FACTS = [
  { label: 'STATUS', value: 'In Training' },
  { label: 'BASE', value: 'Kenya' },
  { label: 'TRACK', value: 'Blue Team / SOC' },
  { label: 'TARGET_ROLE', value: 'SOC Analyst' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
          <span className="text-green-500">01.</span> System Profile
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-2/3 space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            Hello! I'm <span className="text-green-400">John Ominde</span>, a{' '}
            <span className="text-green-400">cybersecurity professional in training</span> based
            in Kenya. My interest in cybersecurity grew from wanting to understand how the
            systems we rely on every day can be attacked, defended, and made more resilient.
          </p>
          <p>
            I'm currently building my foundation across{' '}
            <span className="text-green-400">
              network security, Linux, threat detection, security operations, and incident
              response
            </span>
            . I'm also completing the{' '}
            <span className="text-green-400">Google Cybersecurity Professional Certificate</span>{' '}
            while developing practical skills through hands-on labs, investigations, and security
            projects.
          </p>
          <p>
            My main focus is security operations and defensive cybersecurity — investigating
            suspicious activity, analyzing security alerts, understanding attack techniques, and
            learning how security teams detect and respond to incidents. I'm particularly
            interested in <span className="text-green-400">SOC operations, SIEM, threat
            detection, incident response, and vulnerability management</span>.
          </p>
          <p>
            My goal is to grow into a{' '}
            <span className="text-green-400">Security Operations / SOC Analyst</span> role where
            I can apply my technical skills to real-world security problems, continue learning
            from experienced security professionals, and contribute to protecting organizations
            and their users.
          </p>
          <p>
            When I'm away from the terminal, I'm usually learning something new, working through
            cybersecurity labs, or turning what I've learned into practical projects. I believe
            cybersecurity is a field built on{' '}
            <span className="text-green-400">curiosity, persistence, and continuous learning</span>.
          </p>

          <div className="pt-8">
            <h3 className="font-mono text-xl text-white mb-6 flex items-center gap-2">
              <Terminal className="text-green-500" size={20} />
              Currently Training In
            </h3>

            <div className="flex flex-wrap gap-3 font-mono text-xs">
              {FOCUS_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="border border-green-500/30 bg-green-500/5 text-green-400 px-3 py-2 rounded-sm hover:bg-green-500/10 hover:border-green-500/60 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 border border-gray-800 bg-gray-900/30 p-4 rounded-sm">
              <div className="flex justify-between items-center mb-2 font-mono text-sm">
                <span className="text-gray-300">Google Cybersecurity Professional Certificate</span>
                <span className="text-green-400">In Progress</span>
              </div>
              <div className="h-2 w-full bg-black border border-gray-800 rounded-sm overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-6 mt-8 md:mt-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500 translate-x-4 translate-y-4 rounded-sm border border-green-500 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
            <div className="relative z-10 bg-black border border-gray-700 p-2 rounded-sm overflow-hidden h-[320px]">
              {/* Placeholder styled like a terminal rendering of a headshot image */}
              <div className="w-full h-full bg-gray-900/50 flex flex-col items-center justify-center p-6 border border-gray-800">
                <Binary size={48} className="text-green-500/50 mb-4" />
                <div className="font-mono text-xs text-green-500/70 text-center break-all opacity-50">
                  01001010 01101111 01101000 01101110 00100000 01001111 01101101 01101001 01101110
                  01100100 01100101
                </div>
                <p className="mt-4 font-mono text-sm text-gray-500">[Image Rendered in Hex]</p>
              </div>
              <div className="absolute inset-0 bg-green-500/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
            </div>
          </div>

          <div className="border border-gray-800 bg-gray-900/30 rounded-sm overflow-hidden font-mono text-sm">
            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2 text-gray-500 text-xs">
              <Radar size={14} className="text-green-500" />
              status_check.log
            </div>
            <div className="p-4 space-y-3">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4">
                  <span className="text-gray-500">{fact.label}</span>
                  <span className="text-green-400 text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
