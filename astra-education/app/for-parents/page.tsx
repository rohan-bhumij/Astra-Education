import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.forParents.title,
  description: meta.forParents.description,
  alternates: { canonical: '/for-parents' },
};

const outcomes = [
  {
    number: '01',
    title: 'Real Skills',
    description:
      "Your child won't just learn about technology. They'll build with it — assembling robots, writing code, and training AI models with their own hands.",
  },
  {
    number: '02',
    title: 'Future Ready',
    description:
      'Every skill taught is directly relevant to careers in the next 10–20 years. Robotics, Electronics, Python, and AI are not electives — they are the foundation of tomorrow.',
  },
  {
    number: '03',
    title: 'Visible Progress',
    description:
      "You'll see exactly what your child built every term at our showcase events. Not grades on a paper — actual working projects presented by your child.",
  },
];

const skillAreas = [
  {
    title: 'Robotics',
    description: 'Students design, assemble, and program robots that respond to the real world.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M12 2a2 2 0 012 2v1h2a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h2V4a2 2 0 012-2zM9 13h.01M15 13h.01M9 17h6" />
      </svg>
    ),
  },
  {
    title: 'Electronics',
    description: 'Students wire circuits, work with sensors, and understand how hardware works at a fundamental level.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Coding',
    description: 'Students write real programs — starting with visual tools and progressing to Python by the senior years.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Artificial Intelligence',
    description: 'Students train real AI models using their own data — understanding what AI does, not just what it is.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: 'Is this instead of regular school subjects?',
    answer:
      "No. Astra runs as one additional 60-minute period per week. It does not replace any existing subject. Your child's core academic schedule remains unchanged.",
  },
  {
    question: 'What will my child actually make?',
    answer:
      'Depending on their year: working electronic circuits, coded Python applications, sensor-controlled robots, fully programmable autonomous robots, and in the senior years, an AI model trained on real data. Every term ends with a built project.',
  },
  {
    question: 'Do I need to buy anything?',
    answer:
      'Nothing at all. All materials, hardware kits, components, and equipment are provided by Astra Education at no cost to families. Students work with Astra-owned equipment during every session.',
  },
  {
    question: 'How will I know what my child is learning?',
    answer:
      'Through two channels: term-wise progress reports shared at the end of each term, and our showcase events where your child presents their project directly to you.',
  },
  {
    question: 'Who teaches the sessions?',
    answer:
      'A trained Astra instructor — not your school teachers. Our instructors are fully managed by Astra Education, so there is no additional responsibility on school staff.',
  },
];

export default function ForParentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="parents-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel text="FOR PARENTS" />
            <h1
              id="parents-hero-heading"
              className="font-jakarta font-bold text-navy text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
            >
              What Astra Means for{' '}
              <span className="text-blue">Your Child</span>
            </h1>
            <p className="text-muted text-lg font-inter leading-relaxed">
              Practical skills. Built from scratch. Demonstrated every term.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome cards */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="outcomes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-xl mx-auto mb-14">
              <SectionLabel text="OUTCOMES" />
              <h2 id="outcomes-heading" className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight">
                Three Things Every Astra Student Gains
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <article className="bg-off-white rounded-xl p-8 border border-border h-full">
                  <p className="font-jakarta font-bold text-blue text-4xl mb-4">{o.number}</p>
                  <h3 className="font-jakarta font-bold text-navy text-xl mb-3">{o.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter">{o.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Four skill areas — no class-level detail */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-xl mx-auto mb-14">
              <SectionLabel text="WHAT THEY LEARN" light />
              <h2 id="skills-heading" className="font-jakarta font-bold text-white text-3xl sm:text-4xl leading-tight">
                Four Skills That Actually Matter
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skillAreas.map((skill, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <article className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-blue/20 flex items-center justify-center text-blue">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-white text-base mb-1.5">{skill.title}</h3>
                    <p className="text-white/60 text-sm font-inter leading-relaxed">{skill.description}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Curriculum nudge */}
          <AnimateOnScroll>
            <div className="text-center mt-12">
              <p className="text-white/50 text-sm font-inter mb-4">
                Want to understand exactly what is covered in your child&apos;s year?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors font-inter text-sm"
              >
                Ask Us About the Program
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ
        label="PARENT QUESTIONS"
        heading="What Parents Want to Know"
        items={faqItems}
      />

      <ContactCTA />
    </>
  );
}
