import { Shield, Binary } from 'lucide-react';

const CERTS = [
  { abbr: 'OSCP', org: 'OffSec', name: 'Offensive Security Certified Professional' },
  { abbr: 'CISSP', org: '(ISC)²', name: 'Certified Information Systems Security Professional' },
  { abbr: 'AWS-SCS', org: 'Amazon', name: 'AWS Certified Security – Specialty' },
  { abbr: 'CRTP', org: 'Altered Security', name: 'Certified Red Team Professional' },
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
            Hello! I'm John Ominde, a security researcher and penetration tester based in San Francisco.
            My interest in cybersecurity started back in 2018 when I realized how fragile the
            systems we rely on every day actually are. Since then, I've dedicated myself to
            understanding how things break so I can help build them stronger.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an{' '}
            <span className="text-green-400">enterprise security firm</span>, a{' '}
            <span className="text-green-400">fintech start-up</span>, and running{' '}
            <span className="text-green-400">independent bug bounties</span>. My main focus these
            days is conducting red team engagements and building robust security automation tools
            for cloud native environments.
          </p>
          <p>
            When I'm not in front of a terminal hunting for zero-days, you can find me
            participating in CTF competitions (currently ranked top 100 on HackTheBox), tinkering
            with IoT hardware, or exploring the outdoors.
          </p>

          <div className="pt-8">
            <h3 className="font-mono text-xl text-white mb-6 flex items-center gap-2">
              <Shield className="text-green-500" size={20} />
              Active Clearances & Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
              {CERTS.map((cert) => (
                <div
                  key={cert.abbr}
                  className="border border-gray-800 bg-gray-900/30 p-4 hover:border-green-500/50 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-green-400 font-bold">{cert.abbr}</span>
                    <span className="text-gray-500 text-xs">{cert.org}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 relative group mt-8 md:mt-0">
          <div className="absolute inset-0 bg-green-500 translate-x-4 translate-y-4 rounded-sm border border-green-500 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
          <div className="relative z-10 bg-black border border-gray-700 p-2 rounded-sm overflow-hidden h-[400px]">
            {/* Placeholder styled like a terminal rendering of a headshot image */}
            <div className="w-full h-full bg-gray-900/50 flex flex-col items-center justify-center p-6 border border-gray-800">
              <Binary size={48} className="text-green-500/50 mb-4" />
              <div className="font-mono text-xs text-green-500/70 text-center break-all opacity-50">
                01000001 01101100 01100101 01111000 00100000 01010000 01110010 01101111 01100110
                01101001 01101100 01100101 00101110 01101010 01110000 01100111
              </div>
              <p className="mt-4 font-mono text-sm text-gray-500">[Image Rendered in Hex]</p>
            </div>
            <div className="absolute inset-0 bg-green-500/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
