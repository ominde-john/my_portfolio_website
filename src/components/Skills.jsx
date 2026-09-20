import { Crosshair, Shield, Search, Server, Lock, Code } from 'lucide-react';

const SKILLS = [
  {
    icon: <Crosshair className="text-red-500" size={32} />,
    title: 'Red Teaming',
    desc: 'Simulating advanced persistent threats (APTs) to test organizational detection and response capabilities.',
  },
  {
    icon: <Shield className="text-blue-500" size={32} />,
    title: 'Penetration Testing',
    desc: 'Exploiting web applications, APIs, and networks to identify critical vulnerabilities before deployment.',
  },
  {
    icon: <Search className="text-yellow-500" size={32} />,
    title: 'Vulnerability Research',
    desc: 'Fuzzing, code auditing, and zero-day discovery in commercial and open-source software.',
  },
  {
    icon: <Server className="text-cyan-500" size={32} />,
    title: 'Cloud Security',
    desc: 'Securing AWS/Azure environments, reviewing IAM policies, and hardening Kubernetes clusters.',
  },
  {
    icon: <Lock className="text-purple-500" size={32} />,
    title: 'Reverse Engineering',
    desc: 'Decompiling malware, analyzing binaries (x86/x64/ARM), and bypassing obfuscation.',
  },
  {
    icon: <Code className="text-green-500" size={32} />,
    title: 'DevSecOps',
    desc: 'Integrating SAST/DAST tools into CI/CD pipelines and infrastructure as code (IaC) scanning.',
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
          <span className="text-green-500">02.</span> Core Competencies
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-900/50 border border-gray-800 p-6 rounded-sm hover:border-green-500/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-4 bg-black w-16 h-16 flex items-center justify-center rounded-sm border border-gray-800 group-hover:border-green-500/30 transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-mono">{skill.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
