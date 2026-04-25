'use client';

import { useEffect, useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { home } from '@/content/home';

/* ── Pillar icons — one per step, tied to the 4 pillars ──── */
const pillarIcons = [
  /* Step 1 — Partnership → Electronics spark */
  {
    pillar: 'Electronics',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  /* Step 2 — Setup → Robotics gear */
  {
    pillar: 'Robotics',
    color: '#2563EB',
    bg: 'bg-blue/10',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M12 2a2 2 0 012 2v1h2a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h2V4a2 2 0 012-2zM9 13h.01M15 13h.01M9 17h6" />
      </svg>
    ),
  },
  /* Step 3 — Build → Coding + AI */
  {
    pillar: 'Coding & AI',
    color: '#0A1F44',
    bg: 'bg-navy/10',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="#0A1F44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

/* ── Animated step card ───────────────────────────────────── */
function StepCard({
  step,
  pillar,
  index,
}: {
  step: { number: string; title: string; description: string };
  pillar: typeof pillarIcons[0];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transitionDelay = `${index * 140}ms`;
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-8');
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <li
      ref={ref}
      className="relative z-10 flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700"
    >
      {/* Outer ring — subtle pulse */}
      <div className="relative mb-6">
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-10"
          style={{ background: pillar.color, animationDuration: `${3 + index * 0.5}s` }}
          aria-hidden="true"
        />
        {/* Main circle */}
        <div
          className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-2"
          style={{ background: '#0A1F44', borderColor: pillar.color + '60' }}
        >
          {pillar.icon}
          <span
            className="font-jakarta font-bold text-xs mt-1"
            style={{ color: pillar.color }}
          >
            {step.number}
          </span>
        </div>
        {/* Pillar label badge */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-white text-[10px] font-semibold font-inter whitespace-nowrap"
          style={{ background: pillar.color }}
        >
          {pillar.pillar}
        </div>
      </div>

      <h3 className="font-jakarta font-bold text-navy text-lg mb-3 mt-2">{step.title}</h3>
      <p className="text-muted text-sm leading-relaxed font-inter max-w-xs">{step.description}</p>
    </li>
  );
}

/* ── Animated connector SVG ──────────────────────────────── */
function FlowConnector() {
  return (
    <svg
      className="hidden md:block absolute top-12 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-6"
      viewBox="0 0 600 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes flow-dash {
          to { stroke-dashoffset: -40; }
        }
        .flow-line { stroke-dasharray: 8 6; animation: flow-dash 1.8s linear infinite; }
      `}</style>
      {/* Static base line */}
      <line x1="0" y1="12" x2="600" y2="12" stroke="#E2E8F0" strokeWidth="2" />
      {/* Animated dash travelling right */}
      <line className="flow-line" x1="0" y1="12" x2="600" y2="12"
        stroke="#2563EB" strokeWidth="2" opacity="0.6" />
      {/* Mid node */}
      <circle cx="300" cy="12" r="4" fill="#2563EB" opacity="0.4" />
    </svg>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function HowItWorks() {
  const { howItWorks } = home;
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-6');
        obs.unobserve(el);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-off-white py-20 lg:py-28 overflow-hidden" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className="text-center max-w-2xl mx-auto mb-20 opacity-0 translate-y-6 transition-all duration-700"
        >
          <SectionLabel text={howItWorks.sectionLabel} />
          <h2
            id="how-it-works-heading"
            className="font-jakarta font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            {howItWorks.heading}
          </h2>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Steps">
          <FlowConnector />
          {howItWorks.steps.map((step, i) => (
            <StepCard key={i} step={step} pillar={pillarIcons[i]} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
