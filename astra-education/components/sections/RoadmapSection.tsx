'use client';

import {
  Layers,
  Bot,
  Wifi,
  Glasses,
  Compass,
  Award,
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import TiltCard from '@/components/ui/TiltCard';
import { home } from '@/content/home';

const yearIcons = {
  foundations: Layers,
  robotics: Bot,
  iot: Wifi,
  immersive: Glasses,
  space: Compass,
};

export default function RoadmapSection() {
  const { roadmap } = home;

  return (
    <section
      className="bg-base py-20 lg:py-24"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <SectionLabel text={roadmap.sectionLabel} />
            <h2 id="roadmap-heading" className="heading-2 text-navy mb-4">
              {roadmap.heading}
            </h2>
            <p className="body-3 text-muted">{roadmap.subheading}</p>
          </div>
        </AnimateOnScroll>

        {/* 5-Year Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {roadmap.years.map((item, i) => {
            const Icon = yearIcons[item.icon];
            return (
              <AnimateOnScroll key={item.year} delay={i * 70}>
                <TiltCard className="h-full">
                  <article className="bg-surface border border-elevated rounded-2xl p-6 h-full flex flex-col hover:border-control transition-colors duration-300 ease-base">
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-elevated">
                      <span className="caption-3 text-accent uppercase tracking-wider tabular-nums">
                        {item.year}
                      </span>
                      <Icon size={18} strokeWidth={1.65} className="text-navy shrink-0" aria-hidden="true" />
                    </div>
                    <h3 className="title-3 text-navy mb-2">{item.title}</h3>
                    <p className="caption-2 text-muted flex-1">{item.description}</p>
                  </article>
                </TiltCard>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Curriculum Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmap.alignments.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <article className="bg-surface border border-elevated rounded-2xl p-8 flex gap-4 h-full">
                <Award size={20} strokeWidth={1.65} className="shrink-0 text-accent mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="title-2 text-navy mb-2">{item.title}</h3>
                  <p className="body-6 text-muted">{item.body}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
