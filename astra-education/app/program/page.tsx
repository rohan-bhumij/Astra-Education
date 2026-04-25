import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ContactCTA from '@/components/sections/ContactCTA';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.program.title,
  description: meta.program.description,
  alternates: { canonical: '/program' },
};

const bands = [
  {
    label: 'JUNIOR BAND',
    classes: 'Classes 1 – 5',
    tagline: 'Foundation years',
    description:
      'Students build a strong foundation in logical thinking, visual programming, and basic electronics. By Class 5, they are writing their first real code and assembling sensor-based models.',
    skills: ['Computational Thinking', 'Visual Coding', 'Basic Electronics', 'Arduino Fundamentals'],
    accent: 'blue' as const,
  },
  {
    label: 'SENIOR BAND',
    classes: 'Classes 6 – 9',
    tagline: 'Applied years',
    description:
      'Students progress through Python programming, advanced robotics, and applied AI. Every year builds on the last, culminating in a Class 9 capstone project that combines AI and hardware.',
    skills: ['Python Programming', 'Robotics & Sensors', 'Data & Libraries', 'AI & Machine Learning'],
    accent: 'navy' as const,
  },
];

const buildCards = [
  {
    number: '01',
    title: 'Working Circuit',
    description: 'Sensor-triggered electronics — built, wired, and tested by hand.',
  },
  {
    number: '02',
    title: 'Python Application',
    description: 'A real coded application — written from scratch, not copied.',
  },
  {
    number: '03',
    title: 'Programmable Robot',
    description: 'Assembled, wired, and coded to follow instructions and react to sensors.',
  },
  {
    number: '04',
    title: 'AI Model',
    description: 'A model trained on real data — understanding what AI actually does.',
  },
];

const principles = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Hands-On First',
    body: 'Every concept is introduced through physical building before theory. Students learn by doing.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Progressive Complexity',
    body: 'Each year builds on the last. A Class 9 student has 9 years of compounding practical skills.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Term Showcases',
    body: 'Every term ends with students presenting real built projects to parents and school leadership.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'NEP 2020 Aligned',
    body: 'Fully structured to meet vocational education mandates. No additional staff or admin required from your school.',
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="program-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel text="OUR PROGRAM" light />
            <h1
              id="program-hero-heading"
              className="font-jakarta font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
            >
              What We Teach
            </h1>
            <p className="text-white/70 text-lg font-inter leading-relaxed mb-8 max-w-xl">
              A structured, progressive program from Class 1 to Class 9 — building real skills in
              Robotics, Electronics, Coding, and AI, one term at a time.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors duration-150 font-inter text-sm"
            >
              Get the Full Curriculum
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Program principles */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="principles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-xl mx-auto mb-14">
              <SectionLabel text="HOW IT'S STRUCTURED" />
              <h2 id="principles-heading" className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight">
                Built on Four Principles
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <article className="bg-off-white rounded-xl p-7 border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-blue mb-5">
                    {p.icon}
                  </div>
                  <h3 className="font-jakarta font-bold text-navy text-base mb-2">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter">{p.body}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Two bands — high-level overview only */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="bands-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-xl mx-auto mb-16">
              <SectionLabel text="PROGRAM BANDS" />
              <h2 id="bands-heading" className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight">
                Two Bands. Nine Years. One Journey.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bands.map((band, i) => (
              <AnimateOnScroll key={i} delay={i * 120}>
                <article className={`rounded-2xl overflow-hidden border-2 ${band.accent === 'blue' ? 'border-blue' : 'border-navy'}`}>
                  {/* Header */}
                  <div className={`px-8 py-5 ${band.accent === 'blue' ? 'bg-blue' : 'bg-navy'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold tracking-widest text-white/60 font-inter uppercase">
                          {band.label}
                        </span>
                        <h3 className="font-jakarta font-bold text-white text-2xl mt-0.5">{band.classes}</h3>
                      </div>
                      <span className="text-white/50 text-sm font-inter italic">{band.tagline}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="bg-white p-8">
                    <p className="text-muted text-sm leading-relaxed font-inter mb-6">{band.description}</p>

                    {/* Skill tags — no class-level detail */}
                    <div className="flex flex-wrap gap-2">
                      {band.skills.map((skill, si) => (
                        <span
                          key={si}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold font-inter ${
                            band.accent === 'blue'
                              ? 'bg-blue/10 text-blue'
                              : 'bg-navy/10 text-navy'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA nudge */}
                    <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                      <p className="text-muted text-xs font-inter">
                        Detailed term-wise breakdown available on request.
                      </p>
                      <Link
                        href="/contact"
                        className={`text-xs font-semibold font-inter flex items-center gap-1 ${
                          band.accent === 'blue' ? 'text-blue' : 'text-navy'
                        } hover:underline`}
                      >
                        Request details
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What students build */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="builds-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <SectionLabel text="WHAT STUDENTS BUILD" light />
              <h2 id="builds-heading" className="font-jakarta font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Every Student Leaves With Real Work to Show
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildCards.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <article className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors duration-300">
                  <p className="font-jakarta font-bold text-blue text-3xl mb-3">{item.number}</p>
                  <h3 className="font-jakarta font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm font-inter leading-relaxed">{item.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum CTA */}
      <section className="bg-white py-20" aria-label="Curriculum request">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="bg-off-white border border-border rounded-2xl p-10">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-blue" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="font-jakarta font-bold text-navy text-2xl mb-3">
                Want the Full Curriculum?
              </h2>
              <p className="text-muted text-sm font-inter leading-relaxed mb-6 max-w-md mx-auto">
                The complete term-wise breakdown for all classes is shared directly with school
                leadership. Reach out and we will send it across.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors duration-150 font-inter text-sm"
              >
                Request the Curriculum
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
