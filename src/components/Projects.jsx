import React from 'react';
import { AlertTriangle, Cpu, Network, FileText, Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Zero-Day Vulnerability Disclosure',
    type: 'Vulnerability Research',
    desc: 'Discovered and responsibly disclosed an unauthenticated RCE vulnerability in a widely used open-source CMS (CVE-2025-XXXX). Developed a proof-of-concept exploit and worked with the vendor on patching.',
    tech: ['Python', 'Burp Suite', 'Ghidra', 'PHP'],
    link: '#',
    icon: <AlertTriangle size={24} />,
  },
  {
    title: 'KubeAudit Automation',
    type: 'Tool Development',
    desc: 'An open-source CLI tool built in Go that automates the auditing of Kubernetes RBAC configurations against CIS benchmarks. Currently has over 500 stars on GitHub.',
    tech: ['Go', 'Kubernetes API', 'Docker'],
    link: '#',
    icon: <Cpu size={24} />,
  },
  {
    title: 'Enterprise Active Directory Pwn',
    type: 'Red Team Engagement',
    desc: 'Conducted a black-box assumed breach assessment for a Fortune 500 company. Successfully escalated privileges to Domain Admin within 48 hours using a custom Kerberoasting technique.',
    tech: ['BloodHound', 'Cobalt Strike', 'PowerShell'],
    link: '#',
    icon: <Network size={24} />,
  },
  {
    title: 'DEFCON CTF Write-ups',
    type: 'Capture The Flag',
    desc: 'A collection of detailed write-ups for complex pwn and crypto challenges solved during international CTF competitions, focused on explaining the fundamental concepts to beginners.',
    tech: ['C', 'Assembly', 'GDB', 'Pwntools'],
    link: '#',
    icon: <FileText size={24} />,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
          <span className="text-green-500">03.</span> Operation Logs
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1"></div>
      </div>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className="flex flex-col md:flex-row gap-8 items-center bg-transparent group relative">
            <div className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-800 -z-10 -m-6 p-6 rounded-sm"></div>

            <div className={`w-full md:w-5/12 relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-green-500/20 z-10 group-hover:bg-transparent transition-all mix-blend-screen rounded-sm"></div>
              <div className="h-[250px] bg-black border border-gray-800 flex items-center justify-center overflow-hidden rounded-sm group-hover:border-green-500/50 transition-colors relative">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="text-gray-700 group-hover:text-green-500/80 transition-colors z-20 scale-[2.5]">
                  {React.cloneElement(project.icon, { size: 48 })}
                </div>
              </div>
            </div>

            <div className={`w-full md:w-7/12 z-20 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
              <p className="font-mono text-green-500 text-sm mb-2">{project.type}</p>
              <h3 className="text-2xl font-bold text-gray-200 mb-6 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>

              <div
                className={`bg-gray-900/90 border border-gray-800 p-6 mb-6 text-gray-400 shadow-xl backdrop-blur-sm ${
                  index % 2 !== 0 ? 'border-l-2 border-l-green-500' : 'border-r-2 border-r-green-500'
                }`}
              >
                {project.desc}
              </div>

              <ul
                className={`flex flex-wrap gap-4 font-mono text-xs text-gray-500 mb-6 ${
                  index % 2 !== 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {project.tech.map((t) => (
                  <li key={t} className="hover:text-green-400 transition-colors">
                    [{t}]
                  </li>
                ))}
              </ul>

              <div className={`flex gap-4 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                <a href={project.link} className="text-white hover:text-green-500 transition-colors flex items-center gap-2">
                  <Github size={20} /> <span className="text-sm font-mono">Source</span>
                </a>
                <a href={project.link} className="text-white hover:text-green-500 transition-colors flex items-center gap-2">
                  <ExternalLink size={20} /> <span className="text-sm font-mono">Report</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href="#"
          className="inline-block bg-transparent text-white border border-gray-700 px-6 py-4 font-mono text-sm hover:border-green-500 hover:text-green-500 transition-colors"
        >
          View Full Archive
        </a>
      </div>
    </section>
  );
};
