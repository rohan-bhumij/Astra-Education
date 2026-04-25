'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { home } from '@/content/home';

/* ── Animated SVG illustration ───────────────────────────────── */
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 540 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
      role="presentation"
    >
      <style>{`
        @keyframes spin-slow   { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes spin-rev    { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
        @keyframes pulse-dot   { 0%,100% { opacity:.35; r:5; } 50% { opacity:.9; r:7; } }
        @keyframes pulse-ring  { 0%,100% { opacity:.15; } 50% { opacity:.35; } }
        @keyframes float-chip  { 0%,100% { transform:translateY(0);   } 50% { transform:translateY(-6px); } }
        @keyframes dash-flow   { to { stroke-dashoffset: -40; } }
        @keyframes blink-cursor{ 0%,100% { opacity:1; } 50% { opacity:0; } }

        .ring-spin  { transform-origin:270px 250px; animation:spin-slow 18s linear infinite; }
        .ring-rev   { transform-origin:270px 250px; animation:spin-rev  24s linear infinite; }
        .chip-1     { animation:float-chip 3.2s ease-in-out infinite; }
        .chip-2     { animation:float-chip 3.8s ease-in-out infinite 0.6s; }
        .chip-3     { animation:float-chip 2.9s ease-in-out infinite 1.1s; }
        .chip-4     { animation:float-chip 3.5s ease-in-out infinite 1.7s; }
        .dot-pulse  { animation:pulse-dot 2.4s ease-in-out infinite; }
        .dash-anim  { stroke-dasharray:6 6; animation:dash-flow 1.2s linear infinite; }
        .cursor     { animation:blink-cursor 1s step-end infinite; }
      `}</style>

      {/* ── Background circle ── */}
      <circle cx="270" cy="250" r="210" fill="#EFF6FF" opacity="0.7" />

      {/* ── Outer dashed ring (spinning) ── */}
      <g className="ring-spin">
        <circle cx="270" cy="250" r="195" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 8" opacity="0.2" fill="none" />
      </g>

      {/* ── Middle ring (reverse) ── */}
      <g className="ring-rev">
        <circle cx="270" cy="250" r="148" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 10" opacity="0.15" fill="none" />
      </g>

      {/* ── Static grid lines ── */}
      <g stroke="#2563EB" strokeWidth="1" opacity="0.12">
        <line x1="80" y1="250" x2="460" y2="250" />
        <line x1="270" y1="60"  x2="270" y2="440" />
        <line x1="135" y1="115" x2="405" y2="385" />
        <line x1="405" y1="115" x2="135" y2="385" />
      </g>

      {/* ── Animated dash lines (data flow) ── */}
      <line className="dash-anim" x1="270" y1="60"  x2="270" y2="152" stroke="#2563EB" strokeWidth="1.5" opacity="0.5" />
      <line className="dash-anim" x1="270" y1="348" x2="270" y2="440" stroke="#2563EB" strokeWidth="1.5" opacity="0.5"
        style={{ animationDelay: '0.4s' }} />
      <line className="dash-anim" x1="80"  y1="250" x2="172" y2="250" stroke="#0A1F44" strokeWidth="1.5" opacity="0.4"
        style={{ animationDelay: '0.8s' }} />
      <line className="dash-anim" x1="368" y1="250" x2="460" y2="250" stroke="#0A1F44" strokeWidth="1.5" opacity="0.4"
        style={{ animationDelay: '1.2s' }} />

      {/* ── Central core ── */}
      <circle cx="270" cy="250" r="40" fill="#0A1F44" />
      <circle cx="270" cy="250" r="24" fill="#2563EB" />
      <circle cx="270" cy="250" r="10" fill="#EFF6FF" />

      {/* ── Orbit nodes ── */}
      <circle className="dot-pulse" cx="270" cy="162" r="5" fill="#0A1F44" style={{ animationDelay: '0s' }} />
      <circle className="dot-pulse" cx="358" cy="250" r="5" fill="#2563EB" style={{ animationDelay: '0.6s' }} />
      <circle className="dot-pulse" cx="270" cy="338" r="5" fill="#0A1F44" style={{ animationDelay: '1.2s' }} />
      <circle className="dot-pulse" cx="182" cy="250" r="5" fill="#2563EB" style={{ animationDelay: '1.8s' }} />

      {/* ── Diagonal connectors to chips ── */}
      <line x1="218" y1="198" x2="120" y2="140" stroke="#2563EB" strokeWidth="1" opacity="0.25" />
      <line x1="322" y1="198" x2="420" y2="140" stroke="#2563EB" strokeWidth="1" opacity="0.25" />
      <line x1="218" y1="302" x2="120" y2="370" stroke="#0A1F44" strokeWidth="1" opacity="0.2" />
      <line x1="322" y1="302" x2="420" y2="360" stroke="#0A1F44" strokeWidth="1" opacity="0.2" />

      {/* ── Floating skill chips ── */}
      {/* Robotics */}
      <g className="chip-1">
        <rect x="46" y="116" width="102" height="32" rx="8" fill="#0A1F44" />
        <rect x="46" y="116" width="102" height="32" rx="8" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
        <text x="97" y="137" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">ROBOTICS</text>
      </g>

      {/* Electronics */}
      <g className="chip-2">
        <rect x="376" y="116" width="112" height="32" rx="8" fill="#2563EB" />
        <text x="432" y="137" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">ELECTRONICS</text>
      </g>

      {/* Coding — with blinking cursor detail */}
      <g className="chip-3">
        <rect x="46" y="352" width="96" height="32" rx="8" fill="#0A1F44" />
        <rect x="46" y="352" width="96" height="32" rx="8" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
        <text x="78" y="373" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">CODING</text>
        <text className="cursor" x="112" y="373" fill="#2563EB" fontSize="13" fontFamily="monospace" fontWeight="700">|</text>
      </g>

      {/* AI */}
      <g className="chip-4">
        <rect x="390" y="344" width="56" height="32" rx="8" fill="#F59E0B" />
        <text x="418" y="365" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">AI</text>
      </g>

      {/* ── Corner brackets ── */}
      <path d="M72 72 L72 52 L92 52"  stroke="#0A1F44" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M468 72 L468 52 L448 52" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M72 428 L72 448 L92 448"  stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M468 428 L468 448 L448 448" stroke="#0A1F44" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* ── Scatter dots ── */}
      <circle cx="140" cy="80"  r="3" fill="#2563EB" opacity="0.3" />
      <circle cx="410" cy="90"  r="3" fill="#0A1F44" opacity="0.3" />
      <circle cx="430" cy="415" r="3" fill="#2563EB" opacity="0.3" />
      <circle cx="110" cy="420" r="3" fill="#0A1F44" opacity="0.3" />
      <circle cx="490" cy="200" r="2" fill="#F59E0B" opacity="0.5" />
      <circle cx="50"  cy="300" r="2" fill="#F59E0B" opacity="0.5" />
    </svg>
  );
}

/* ── Hero section ────────────────────────────────────────────── */
export default function Hero() {
  const { hero } = home;

  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="bg-off-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div className="order-1" ref={textRef}>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-5 font-inter">
              NEP 2020 Aligned · Assam
            </p>
            <h1 className="font-jakarta font-bold text-navy text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6">
              {hero.headline}
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 font-inter max-w-lg">
              {hero.subheading}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center px-7 py-3.5 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors duration-150 font-inter text-sm"
              >
                {hero.primaryCta.label}
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center px-7 py-3.5 border-2 border-navy text-navy font-semibold rounded-md hover:bg-navy hover:text-white transition-colors duration-150 font-inter text-sm"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
            <p className="text-muted text-xs font-inter">{hero.footnote}</p>
          </div>

          {/* Illustration */}
          <div className="order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-full">
              <HeroIllustration />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
