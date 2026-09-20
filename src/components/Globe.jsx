const NODES = [
  { top: '15%', left: '20%', delay: '0s' },
  { top: '30%', left: '78%', delay: '0.6s' },
  { top: '55%', left: '8%', delay: '1.2s' },
  { top: '72%', left: '58%', delay: '0.3s' },
  { top: '18%', left: '52%', delay: '0.9s' },
  { top: '82%', left: '32%', delay: '1.5s' },
];

export const Globe = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto select-none">
      {/* outer glow halo */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl scale-110"></div>

      {/* gentle floating wrapper */}
      <div className="relative w-full h-full animate-[float-slow_6s_ease-in-out_infinite]">
        {/* sphere */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-green-500/40 shadow-[0_0_60px_rgba(34,197,94,0.35)] bg-black">
          {/* scrolling "continents" texture — doubled width for a seamless loop */}
          <div className="absolute inset-y-0 left-0 w-[200%] h-full flex animate-[globe-scroll_18s_linear_infinite]">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="relative w-1/2 h-full bg-[radial-gradient(circle_at_30%_30%,#0a1f1a,#020806_70%)]"
              >
                <div className="absolute w-16 h-20 bg-green-600/70 blur-[6px] rounded-full top-[18%] left-[15%]"></div>
                <div className="absolute w-20 h-24 bg-green-500/60 blur-[8px] rounded-full top-[45%] left-[35%]"></div>
                <div className="absolute w-12 h-16 bg-cyan-500/50 blur-[6px] rounded-full top-[65%] left-[62%]"></div>
                <div className="absolute w-10 h-14 bg-green-400/50 blur-[6px] rounded-full top-[8%] left-[68%]"></div>
              </div>
            ))}
          </div>

          {/* latitude / longitude wireframe */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30">
            <ellipse cx="100" cy="100" rx="90" ry="90" fill="none" stroke="#4ade80" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="#4ade80" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="55" ry="90" fill="none" stroke="#4ade80" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="20" ry="90" fill="none" stroke="#4ade80" strokeWidth="0.5" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="#4ade80" strokeWidth="0.5" />
          </svg>

          {/* sphere shading for depth */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,transparent_35%,rgba(0,0,0,0.65)_100%)]"></div>
        </div>

        {/* pulsing network nodes */}
        {NODES.map((node, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.8)] animate-pulse"
            style={{ top: node.top, left: node.left, animationDelay: node.delay }}
          />
        ))}

        {/* faint connecting lines between nodes, for the "network" feel */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="20" y1="15" x2="78" y2="30" stroke="#4ade80" strokeWidth="0.3" opacity="0.4" />
          <line x1="78" y1="30" x2="58" y2="72" stroke="#4ade80" strokeWidth="0.3" opacity="0.4" />
          <line x1="8" y1="55" x2="52" y2="18" stroke="#4ade80" strokeWidth="0.3" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};
