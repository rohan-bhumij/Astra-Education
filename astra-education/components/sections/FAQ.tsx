'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
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
  surface?: 'base' | 'surface';
}

export default function FAQ({
  label,
  heading,
  items,
  surface = 'base',
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const bgClass = surface === 'surface' ? 'bg-surface border-y border-elevated' : 'bg-base';
  const cardBg = surface === 'surface' ? 'bg-white' : 'bg-surface';

  return (
    <section
      className={`${bgClass} py-20 lg:py-24`}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <SectionLabel text={label} />
            <h2 id="faq-heading" className="heading-3 text-navy">
              {heading}
            </h2>
          </div>
        </AnimateOnScroll>

        <dl className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={item.question} delay={i * 50}>
                <div
                  className={`${cardBg} rounded-2xl border border-elevated shadow-sm transition-colors duration-300 ease-base`}
                >
                  <dt>
                    <button
                      type="button"
                      className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 title-3 text-navy hover:text-accent transition-colors duration-300 ease-base rounded-2xl"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span>{item.question}</span>
                      <span
                        className={`shrink-0 transition-transform duration-300 ease-base ${
                          isOpen ? 'rotate-45 text-accent' : 'text-muted'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={18} strokeWidth={2} />
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${i}`}
                    hidden={!isOpen}
                    className={`px-6 pb-6 transition-[opacity,transform] duration-300 ease-base ${
                      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}
                  >
                    <p className="body-6 text-muted">{item.answer}</p>
                  </dd>
                </div>
              </AnimateOnScroll>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
