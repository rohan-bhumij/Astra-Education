'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import HeroWebGLBackground from '@/components/sections/HeroWebGLBackground';
import { home } from '@/content/home';

const quickFacts = [
  { value: 'Classes 1 to 9', label: 'Structured weekly sequence' },
  { value: '4 Core tracks', label: 'Coding, AI, Electronics, 3D' },
  { value: '5 Year roadmap', label: 'Foundations to astronomy' },
];

export default function Hero() {
  const { hero } = home;

  return (
    <section
      className="relative overflow-hidden bg-base pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24 border-b border-elevated"
      aria-label="Hero"
    >
      <HeroWebGLBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column — aligned top and bottom with visual showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="pt-1">
              <p className="caption-3 text-accent uppercase tracking-widest mb-4">
                {hero.eyebrow}
              </p>

              <h1 className="text-[36px] sm:text-[44px] xl:text-[50px] leading-[1.08] font-semibold tracking-tight hero-heading-gradient mb-5">
                {hero.headlineLine1}
                <br />
                {hero.headlineLine2}
              </h1>

              <p className="body-3 text-slate-600 max-w-[540px] mb-7">
                {hero.subheading}
              </p>

              <div>
                <Link href={hero.primaryCta.href} className="btn-primary">
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-slate-200/80">
              {quickFacts.map((fact) => (
                <div
                  key={fact.value}
                  className="bg-white/90 backdrop-blur-sm border border-elevated rounded-xl p-3.5 shadow-sm"
                >
                  <p className="title-4 text-navy font-semibold">{fact.value}</p>
                  <p className="caption-5 text-muted mt-1">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Showcase Column */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-white/90 backdrop-blur-md border border-elevated rounded-2xl p-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-elevated bg-navy mb-3">
                  <Image
                    src="/images/lab-hero-real.jpg"
                    alt="School students collaborating with a mentor on a wired classroom robotics project"
                    fill
                    unoptimized
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-elevated bg-navy">
                    <Image
                      src="/images/lab-robotics-real.jpg"
                      alt="Students in safety glasses building and testing an electronics chassis circuit"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-elevated bg-navy">
                    <Image
                      src="/images/lab-3d-real.jpg"
                      alt="3D CAD workstation and modern 3D printer station setup"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-elevated rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="caption-3 text-accent uppercase tracking-wider">
                    School partnerships · 2027 to 2028
                  </p>
                  <p className="title-4 text-navy">
                    CBSE, ASSEB Division I (formerly SEBA) and ICSE schools
                  </p>
                </div>
                <p className="caption-4 text-amber whitespace-nowrap sm:text-right">
                  NEP 2020 and Kaushal Bodh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
