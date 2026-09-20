import { ShieldAlert } from 'lucide-react';

// A small feed-forward network layout: [input layer] -> [hidden layer] -> [output layer]
const INPUT_NODES = [
  { x: 30, y: 30 },
  { x: 30, y: 100 },
  { x: 30, y: 170 },
];
const HIDDEN_NODES = [
  { x: 150, y: 15 },
  { x: 150, y: 68 },
  { x: 150, y: 132 }, // this one periodically "flags" as an anomaly
  { x: 150, y: 185 },
];
const OUTPUT_NODES = [
  { x: 270, y: 65 },
  { x: 270, y: 135 },
];

const ANOMALY_HIDDEN_INDEX = 2;

const LOG_LINES = [
  '> monitoring network traffic...',
  '> anomaly detected: node_07',
  '> isolating suspicious activity...',
  '> threat neutralized ✓',
];

export const ThreatRadar = () => {
  const edges = [];
  INPUT_NODES.forEach((inNode, i) => {
    HIDDEN_NODES.forEach((hNode, j) => {
      edges.push({ from: inNode, to: hNode, key: `i${i}-h${j}` });
    });
  });
  HIDDEN_NODES.forEach((hNode, j) => {
    OUTPUT_NODES.forEach((outNode, k) => {
      edges.push({ from: hNode, to: outNode, key: `h${j}-o${k}` });
    });
  });

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-lg bg-green-500/10 blur-2xl scale-105"></div>

      <div className="relative border border-green-500/30 bg-black/70 rounded-sm overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.15)]">
        {/* terminal-style title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border-b border-gray-800">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <span className="ml-3 font-mono text-xs text-gray-500 flex items-center gap-1.5">
            <ShieldAlert size={12} className="text-green-500" />
            neural_net_ids.py
          </span>
        </div>

        {/* network visualization with scanning beam */}
        <div className="relative h-52">
          <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full">
            {edges.map((edge) => (
              <line
                key={edge.key}
                x1={edge.from.x}
                y1={edge.from.y}
                x2={edge.to.x}
                y2={edge.to.y}
                stroke="#4ade80"
                strokeWidth="0.6"
                opacity="0.15"
              />
            ))}

            {[...INPUT_NODES, ...OUTPUT_NODES].map((n, i) => (
              <circle key={`static-${i}`} cx={n.x} cy={n.y} r="4" fill="#4ade80" opacity="0.85" />
            ))}

            {HIDDEN_NODES.map((n, i) =>
              i === ANOMALY_HIDDEN_INDEX ? (
                <g key={`hidden-${i}`}>
                  <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0">
                    <animate
                      attributeName="r"
                      values="4;18"
                      dur="1.6s"
                      begin="3.2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.7;0"
                      dur="1.6s"
                      begin="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx={n.x} cy={n.y} r="4" fill="#4ade80">
                    <animate
                      attributeName="fill"
                      values="#4ade80;#4ade80;#ef4444;#f97316;#4ade80;#4ade80"
                      keyTimes="0;0.38;0.48;0.58;0.68;1"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ) : (
                <circle key={`hidden-${i}`} cx={n.x} cy={n.y} r="4" fill="#4ade80" opacity="0.85" />
              )
            )}
          </svg>

          {/* radar-style scanning beam sweeping down the panel */}
          <div
            className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-green-400/10 to-transparent animate-[scan-sweep_4s_linear_infinite]"
            style={{ top: '-4rem' }}
          ></div>
        </div>

        {/* live-looking log ticker */}
        <div className="border-t border-gray-800 bg-gray-900/60 px-4 py-2 h-8 overflow-hidden font-mono text-xs text-green-400/90">
          <div className="animate-[log-scroll_12s_linear_infinite]">
            {[...LOG_LINES, ...LOG_LINES].map((line, i) => (
              <div key={i} className="h-4 leading-4 whitespace-nowrap">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
