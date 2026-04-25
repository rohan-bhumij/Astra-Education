'use client';

import { useEffect, useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { home } from '@/content/home';

/* ── 4-pillar icon strip ──────────────────────────────────── */
const pillars = [
  {
    label: 'Electronics',
    color: '#F59E0B',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    label: 'Robotics',
    color: '#2563EB',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 012 2v1h2a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h2V4a2 2 0 012-2zM9 13h.01M15 13h.01M9 17h6" /></svg>,
  },
  {
    label: 'Coding',
    color: '#0A1F44',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    label: 'AI',
    color: '#2563EB',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  },
];

/* ── Animated benefit card ────────────────────────────────── */
function BenefitCard({
  card,
  index,
}: {
  card: { title: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transitionDelay = `${index * 80}ms`;
        el.classList.add('opacity-100', 'translate-x-0');
        el.classList.remove('opacity-0', '-translate-x-4');
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className="group bg-white rounded-xl border border-border shadow-sm p-7 flex gap-5 relative
                 overflow-hidden hover:shadow-md hover:-translate-y-0.5
                 opacity-0 -translate-x-4 transition-all duration-600"
    >
      {/* Animated left accent — fills on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue rounded-l-xl transition-all duration-300 group-hover:w-1"
        aria-hidden="true"
      />
      {/* Check icon */}
      <div className="shrink-0 w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue
                      group-hover:bg-blue group-hover:text-white transition-colors duration-300">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-jakarta font-bold text-navy text-base mb-1.5">{card.title}</h3>
        <p className="text-muted text-sm leading-relaxed font-inter">{card.description}</p>
      </div>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function SchoolBenefits() {
  const { schoolBenefits } = home;
  const headingRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, calloutRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          el.style.transitionDelay = `${i * 200}ms`;
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-6');
          obs.unobserve(el);
        }
      }, { threshold: 0.15 });
      obs.observe(el);
    });
  }, []);

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headingRef}
          className="text-center max-w-2xl mx-auto mb-14 opacity-0 translate-y-6 transition-all duration-700"
        >
          <SectionLabel text={schoolBenefits.sectionLabel} />
          <h2
            id="benefits-heading"
            className="font-jakarta font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
          >
            {schoolBenefits.heading}
          </h2>

          {/* 4-pillar strip */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold font-inter"
                style={{ borderColor: p.color + '40', color: p.color, background: p.color + '0D' }}
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {schoolBenefits.cards.map((card, i) => (
            <BenefitCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* Callout */}
        <div
          ref={calloutRef}
          className="opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="bg-navy rounded-xl p-8 text-center max-w-3xl mx-auto relative overflow-hidden">
            {/* Subtle circuit dots decoration */}
            <div className="absolute top-3 left-6 flex gap-1.5" aria-hidden="true">
              {['#2563EB','#F59E0B','#2563EB'].map((c, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.5 }} />
              ))}
            </div>
            <svg className="w-8 h-8 text-gold mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white text-base lg:text-lg font-inter leading-relaxed">
              {schoolBenefits.callout}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
