'use client';

import { useState } from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  label: string;
  heading: string;
  items: FAQItem[];
  dark?: boolean;
}

export default function FAQ({ label, heading, items, dark = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`py-20 lg:py-28 ${dark ? 'bg-navy' : 'bg-off-white'}`}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <SectionLabel text={label} light={dark} />
            <h2
              id="faq-heading"
              className={`font-jakarta font-bold text-3xl sm:text-4xl leading-tight ${
                dark ? 'text-white' : 'text-navy'
              }`}
            >
              {heading}
            </h2>
          </div>
        </AnimateOnScroll>

        <dl className="space-y-3">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 60}>
              <div
                className={`rounded-xl border overflow-hidden ${
                  dark
                    ? 'border-white/10 bg-white/5'
                    : 'border-border bg-white'
                }`}
              >
                <dt>
                  <button
                    className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold font-jakarta transition-colors ${
                      dark
                        ? 'text-white hover:text-gold'
                        : 'text-navy hover:text-blue'
                    } text-base`}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`shrink-0 transition-transform duration-200 ${
                        openIndex === i ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p
                    className={`px-6 pb-5 text-sm leading-relaxed font-inter ${
                      dark ? 'text-white/70' : 'text-muted'
                    }`}
                  >
                    {item.answer}
                  </p>
                </dd>
              </div>
            </AnimateOnScroll>
          ))}
        </dl>
      </div>
    </section>
  );
}
