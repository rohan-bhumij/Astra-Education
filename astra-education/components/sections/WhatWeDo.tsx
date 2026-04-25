'use client';

import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { home } from '@/content/home';

/* ── Icons ─────────────────────────────────────────────────── */
const icons: Record<string, ReactElement> = {
  robot: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M12 2a2 2 0 012 2v1h2a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h2V4a2 2 0 012-2zM9 13h.01M15 13h.01M9 17h6" />
    </svg>
  ),
  electronics: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  code: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  ai: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

const accents = [
  { ring: '#2563EB', glow: 'rgba(37,99,235,0.12)',  iconBg: 'bg-blue/10',  iconText: 'text-blue'  },
  { ring: '#F59E0B', glow: 'rgba(245,158,11,0.12)', iconBg: 'bg-amber-50', iconText: 'text-gold'  },
  { ring: '#2563EB', glow: 'rgba(37,99,235,0.12)',  iconBg: 'bg-blue/10',  iconText: 'text-blue'  },
  { ring: '#0A1F44', glow: 'rgba(10,31,68,0.10)',   iconBg: 'bg-navy/5',   iconText: 'text-navy'  },
];

function SkillCard({ card, accent, index }: {
  card: { icon: string; title: string; description: string };
  accent: typeof accents[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transitionDelay = `${index * 90}ms`;
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700">
      <article
        className="group relative bg-white rounded-2xl border border-border overflow-hidden h-full
                   hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        style={{ boxShadow: '0 2px 14px rgba(0,0,0,0.05)' }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent.ring }} aria-hidden="true" />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent.glow} 0%, transparent 65%)` }}
          aria-hidden="true"
        />

        <div className="relative p-8 flex flex-col h-full">
          {/* Icon */}
          <div className="relative mb-6 w-fit">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${accent.iconBg} ${accent.iconText}`}>
              {icons[card.icon]}
            </div>
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white"
              style={{ background: accent.ring }}
              aria-hidden="true"
            />
          </div>

          <h3 className="font-jakarta font-bold text-navy text-xl mb-3 group-hover:text-blue transition-colors duration-200">
            {card.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed font-inter flex-1">{card.description}</p>

          {/* Bottom rule */}
          <div className="mt-6 flex items-center gap-2" aria-hidden="true">
            <div className="h-px flex-1 bg-border group-hover:bg-blue/30 transition-colors duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-blue transition-colors duration-300" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default function WhatWeDo() {
  const { whatWeDo } = home;

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden" aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel text={whatWeDo.sectionLabel} />
          <h2 id="solution-heading" className="font-jakarta font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {whatWeDo.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDo.cards.map((card, i) => (
            <SkillCard key={i} card={card} accent={accents[i]} index={i} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {['NEP 2020 Aligned', 'Fully Managed', 'Hardware Included', 'Trained Instructor'].map((tag, i) => (
            <div key={i} className="flex items-center gap-2 text-muted text-xs font-inter">
              <svg className="w-4 h-4 text-blue shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
