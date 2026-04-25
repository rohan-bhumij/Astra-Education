'use client';

import { useEffect, useRef, useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { home } from '@/content/home';

/* ── Animated circuit board background ───────────────────── */
function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <style>{`
        @keyframes trace-h {
          0%   { stroke-dashoffset: 120; opacity: 0; }
          20%  { opacity: 0.5; }
          80%  { opacity: 0.5; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes node-ping {
          0%, 100% { r: 3; opacity: 0.2; }
          50%       { r: 5; opacity: 0.6; }
        }
        @keyframes scan-line {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        .ct { stroke-dasharray: 120; animation: trace-h 4s ease-in-out infinite; }
        .ct1 { animation-delay: 0s; }
        .ct2 { animation-delay: 0.8s; }
        .ct3 { animation-delay: 1.6s; }
        .ct4 { animation-delay: 2.4s; }
        .ct5 { animation-delay: 3.2s; }
        .ct6 { animation-delay: 0.4s; }
        .ct7 { animation-delay: 1.2s; }
        .ct8 { animation-delay: 2.0s; }
        .nd  { animation: node-ping 3s ease-in-out infinite; }
        .nd1 { animation-delay: 0s; }
        .nd2 { animation-delay: 0.6s; }
        .nd3 { animation-delay: 1.2s; }
        .nd4 { animation-delay: 1.8s; }
        .nd5 { animation-delay: 2.4s; }
        .nd6 { animation-delay: 3.0s; }
      `}</style>

      {/* Static grid of faint traces */}
      <g stroke="#2563EB" strokeWidth="0.5" opacity="0.06" fill="none">
        {[60, 120, 180, 240, 300, 360, 420].map(y => (
          <line key={y} x1="0" y1={y} x2="1200" y2={y} />
        ))}
        {[80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880, 960, 1040, 1120].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="500" />
        ))}
      </g>

      {/* Animated horizontal traces — Electronics */}
      <line className="ct ct1" x1="0"   y1="80"  x2="120" y2="80"  stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line className="ct ct2" x1="200" y1="160" x2="320" y2="160" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line className="ct ct3" x1="500" y1="60"  x2="620" y2="60"  stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line className="ct ct4" x1="750" y1="200" x2="870" y2="200" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line className="ct ct5" x1="950" y1="100" x2="1070" y2="100" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Animated vertical traces */}
      <line className="ct ct6" x1="160" y1="0"   x2="160" y2="120" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.4" />
      <line className="ct ct7" x1="640" y1="120" x2="640" y2="240" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.4" />
      <line className="ct ct8" x1="1000" y1="0"  x2="1000" y2="140" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Junction nodes */}
      <circle className="nd nd1" cx="160"  cy="80"  fill="#2563EB" />
      <circle className="nd nd2" cx="320"  cy="160" fill="#F59E0B" />
      <circle className="nd nd3" cx="640"  cy="60"  fill="#2563EB" />
      <circle className="nd nd4" cx="870"  cy="200" fill="#F59E0B" />
      <circle className="nd nd5" cx="1000" cy="100" fill="#2563EB" />
      <circle className="nd nd6" cx="480"  cy="280" fill="#F59E0B" />

      {/* Corner bracket decorations */}
      <path d="M20 20 L20 8 L32 8"  stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25" />
      <path d="M1180 20 L1180 8 L1168 8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25" />
      <path d="M20 480 L20 492 L32 492" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25" />
      <path d="M1180 480 L1180 492 L1168 492" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25" />
    </svg>
  );
}

/* ── Count-up stat ────────────────────────────────────────── */
function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center p-8 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden
                  transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
           style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
           aria-hidden="true" />
      <p className={`font-jakarta font-bold text-gold text-5xl lg:text-6xl mb-3 transition-all duration-1000
                     ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {value}
      </p>
      <p className="text-blue/90 text-sm font-inter leading-relaxed relative">{label}</p>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function Problem() {
  const { problem } = home;

  return (
    <section className="bg-navy py-20 lg:py-28 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Circuit board background */}
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel text={problem.sectionLabel} light />
          <h2
            id="problem-heading"
            className="font-jakarta font-bold text-gold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
          >
            {problem.heading}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed font-inter">
            {problem.body}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {problem.stats.map((stat, i) => (
            <CountUpStat key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
