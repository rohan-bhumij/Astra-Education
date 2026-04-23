import type { ReactElement } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

const icons: Record<string, ReactElement> = {
  robot: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M9 3H5a2 2 0 00-2 2v4m6-6h6m-6 0v2m6-2h4a2 2 0 012 2v4M3 9v8a2 2 0 002 2h14a2 2 0 002-2V9M3 9h18M9 13h.01M15 13h.01M9 17h6" />
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

export default function WhatWeDo() {
  const { whatWeDo } = home;

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel text={whatWeDo.sectionLabel} />
            <h2
              id="solution-heading"
              className="font-jakarta font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
            >
              {whatWeDo.heading}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatWeDo.cards.map((card, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <article className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col h-full relative overflow-hidden">
                {/* Blue top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue" aria-hidden="true" />

                <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center text-blue mb-5">
                  {icons[card.icon]}
                </div>
                <h3 className="font-jakarta font-bold text-navy text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-inter">
                  {card.description}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
