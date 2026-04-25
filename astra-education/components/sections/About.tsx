'use client';

import { useEffect, useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { home } from '@/content/home';

/* ── Circuit trace decoration for credential cards ─────────── */
function CircuitTrace({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className="absolute bottom-0 right-0 w-32 h-20 opacity-10"
      viewBox="0 0 128 80"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : {}}
    >
      <style>{`
        @keyframes trace-fade {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }
        .tr { stroke-dasharray: 60; stroke-dashoffset: 60;
              animation: trace-fade 3s ease-in-out infinite; }
        .tr1 { animation-delay: 0s; }
        .tr2 { animation-delay: 1s; }
        .tr3 { animation-delay: 2s; }
      `}</style>
      <polyline className="tr tr1" points="128,20 80,20 80,40 40,40" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <polyline className="tr tr2" points="128,50 100,50 100,70 60,70" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="80"  cy="40" r="3" fill="#F59E0B" opacity="0.6" />
      <circle cx="100" cy="50" r="3" fill="#2563EB" opacity="0.6" />
    </svg>
  );
}

/* ── Credential card ──────────────────────────────────────── */
function CredentialCard({
  card,
  index,
}: {
  card: { title: string; body: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transitionDelay = `${index * 150}ms`;
        el.classList.add('opacity-100', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-x-6');
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="bg-navy rounded-xl p-7 relative overflow-hidden group
                 opacity-0 translate-x-6 transition-all duration-700
                 hover:shadow-lg hover:shadow-navy/20"
    >
      {/* Gold top accent — expands on hover */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gold transition-all duration-500 group-hover:right-0"
        style={{ right: '60%' }}
        aria-hidden="true"
      />
      {/* Circuit trace decoration */}
      <CircuitTrace flip={index % 2 === 1} />

      <h3 className="font-jakarta font-bold text-gold text-base mb-2 relative">
        {card.title}
      </h3>
      <p className="text-white/75 text-sm leading-relaxed font-inter relative">
        {card.body}
      </p>
    </div>
  );
}

/* ── Animated tech stat strip ─────────────────────────────── */
const techStats = [
  { value: '4', label: 'Core Skills' },
  { value: '9', label: 'Year Program' },
  { value: '3', label: 'Terms / Year' },
  { value: '1', label: 'Period / Week' },
];

/* ── Section ──────────────────────────────────────────────── */
export default function About() {
  const { about } = home;
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [textRef.current, statsRef.current];
    els.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-6');
          obs.unobserve(el);
        }
      }, { threshold: 0.15 });
      obs.observe(el);
    });
  }, []);

  return (
    <section className="bg-off-white py-20 lg:py-28 overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Text + tech stats */}
          <div
            ref={textRef}
            className="opacity-0 translate-y-6 transition-all duration-700"
          >
            <SectionLabel text={about.sectionLabel} />
            <h2
              id="about-heading"
              className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight mb-6"
            >
              {about.heading}
            </h2>
            <p className="text-muted text-base leading-relaxed font-inter mb-10">
              {about.body}
            </p>

            {/* Tech stat strip */}
            <div
              ref={statsRef}
              className="opacity-0 translate-y-6 transition-all duration-700 delay-200"
            >
              <div className="grid grid-cols-4 gap-3">
                {techStats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white border border-border rounded-xl p-4 text-center
                               hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                  >
                    <p className="font-jakarta font-bold text-navy text-2xl">{s.value}</p>
                    <p className="text-muted text-[11px] font-inter mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Credential cards with circuit animations */}
          <div className="space-y-5">
            {about.credentialCards.map((card, i) => (
              <CredentialCard key={i} card={card} index={i} />
            ))}

            {/* Pillar indicator strip */}
            <div className="flex items-center gap-2 pt-2">
              {['Electronics', 'Robotics', 'Coding', 'AI'].map((label, i) => (
                <div key={i} className="flex-1 text-center">
                  <div
                    className="h-1 rounded-full mb-1.5"
                    style={{ background: i % 2 === 0 ? '#2563EB' : '#F59E0B', opacity: 0.6 }}
                    aria-hidden="true"
                  />
                  <p className="text-muted text-[10px] font-inter">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
