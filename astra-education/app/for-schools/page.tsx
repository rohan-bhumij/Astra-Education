import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.forSchools.title,
  description: meta.forSchools.description,
  alternates: { canonical: '/for-schools' },
};

const benefits = [
  {
    title: 'We Own All Hardware',
    description:
      'No capital investment. Astra supplies, maintains and insures all equipment. When a component fails, we replace it — at no cost to your school.',
    icon: 'hardware',
  },
  {
    title: 'NEP 2020 Compliant',
    description:
      'Directly fulfils mandatory vocational education requirements. The program integrates cleanly into your existing academic structure with zero staff overhead.',
    icon: 'check',
  },
  {
    title: 'Trained Instructor',
    description:
      'A qualified Astra instructor manages every single session from entry to exit. Your teachers are never asked to facilitate or supervise beyond normal duty.',
    icon: 'teacher',
  },
  {
    title: 'Term-Wise Reports',
    description:
      'Structured progress reports for every student are shared with school management and parents at the end of each term.',
    icon: 'report',
  },
  {
    title: 'Parent Showcase Events',
    description:
      'Each term culminates in a showcase where students present their projects to parents, teachers, and school leadership — demonstrating real, visible outcomes.',
    icon: 'showcase',
  },
  {
    title: 'Full MoU Framework',
    description:
      'A formal Memorandum of Understanding protects both parties and defines every responsibility clearly — nothing is left ambiguous.',
    icon: 'document',
  },
];

const mouSteps = [
  {
    step: '01',
    title: 'Initial Conversation',
    description:
      'We meet with school leadership — principal and management — to walk through the program structure, timetable integration, and answer all questions. No commitment at this stage.',
  },
  {
    step: '02',
    title: 'MoU Signing',
    description:
      'A formal Memorandum of Understanding is signed, outlining responsibilities on both sides: Astra provides instructor, hardware and curriculum. The school provides the designated room and the students.',
  },
  {
    step: '03',
    title: 'Setup & Launch',
    description:
      'Astra installs the hardware lab, briefs school administration, and runs a parent orientation session. The program launches at the start of the academic term.',
  },
];

const faqItems = [
  {
    question: 'Does the school need to buy hardware?',
    answer:
      'No. Astra owns and provides all hardware — every kit, component, sensor, and robot chassis. The school is never asked to purchase, store, or maintain any equipment.',
  },
  {
    question: 'Who teaches the sessions?',
    answer:
      'A trained Astra instructor — not your teachers. Our instructors are hired, trained, and managed entirely by Astra Education. Your staff has no facilitation responsibilities.',
  },
  {
    question: 'How does this fit into the school timetable?',
    answer:
      'One 60-minute period per class per week. We work with your timetable team to identify the right slot for each class group. It is structured as a regular school period.',
  },
  {
    question: 'What if parents don\'t want their child enrolled?',
    answer:
      'We recommend a parent orientation session before the academic year starts. In our experience, concerns dissolve once parents see the curriculum and understand the outcomes. For any remaining objections, we address them directly on a case-by-case basis.',
  },
  {
    question: 'What happens at the end of each term?',
    answer:
      'A student showcase event where every student presents the project they built during the term — to parents, teachers, and school leadership. This is one of the most visible demonstrations of real learning outcomes.',
  },
];

const iconMap: Record<string, ReactElement> = {
  hardware: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h6m-6 0v2m6-2h4a2 2 0 012 2v4M3 9v8a2 2 0 002 2h14a2 2 0 002-2V9M3 9h18" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  teacher: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  report: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  showcase: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

export default function ForSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="schools-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel text="FOR SCHOOLS" light />
            <h1
              id="schools-hero-heading"
              className="font-jakarta font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
            >
              Everything Managed.{' '}
              <span className="text-gold">Nothing Risked.</span>
            </h1>
            <p className="text-white/70 text-lg font-inter leading-relaxed mb-8">
              Astra Education handles the instructor, the hardware lab, and the full curriculum. Your school provides the room and the students.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors duration-150 font-inter text-sm"
            >
              Request a Meeting
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="school-benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel text="WHAT YOU GET" />
              <h2
                id="school-benefits-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight"
              >
                Why Schools Across Assam Choose Astra
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
                <article className="bg-white border border-border rounded-xl p-7 relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue rounded-l-xl" aria-hidden="true" />
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue mb-4">
                    {iconMap[b.icon]}
                  </div>
                  <h3 className="font-jakarta font-bold text-navy text-base mb-2">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter">{b.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* MoU Process */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="mou-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <SectionLabel text="THE PROCESS" />
              <h2
                id="mou-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight"
              >
                How a School Partnership Works
              </h2>
            </div>
          </AnimateOnScroll>

          <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Partnership steps">
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-border z-0" aria-hidden="true" />
            {mouSteps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 120}>
                <li className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-6 shadow-lg">
                    <span className="font-jakarta font-bold text-blue text-xl">{s.step}</span>
                  </div>
                  <h3 className="font-jakarta font-bold text-navy text-lg mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter max-w-xs">{s.description}</p>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <FAQ
        label="COMMON QUESTIONS"
        heading="What Principals Ask Us"
        items={faqItems}
      />

      <ContactCTA />
    </>
  );
}
