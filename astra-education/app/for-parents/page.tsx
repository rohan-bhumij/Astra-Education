import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Box,
  Cpu,
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { home } from '@/content/home';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.forParents.title,
  description: meta.forParents.description,
  alternates: { canonical: '/for-parents' },
};

const outcomes = [
  {
    number: '01',
    title: 'Real physical builds',
    description:
      'Students write software, wire real circuits, design 3D CAD models, and train AI systems inside guided weekly sessions.',
  },
  {
    number: '02',
    title: 'Beyond technical skills',
    description:
      'Students evaluate cost, users, and material reuse, bringing financial literacy, ethics, and environmental thinking into every project.',
  },
  {
    number: '03',
    title: 'Inquiry to communication',
    description:
      'Students frame questions, test ideas, refine work in teams, and explain results clearly through project assessment and reflection.',
  },
];

const skillAreas = [
  {
    title: 'Coding',
    description: 'Stories, games, and software applications built logically step by step.',
    icon: Code2,
  },
  {
    title: 'Artificial intelligence',
    description: 'Patterns, curated datasets, and real machine learning models.',
    icon: BrainCircuit,
  },
  {
    title: 'Electronics',
    description: 'Working circuits, physical switches, sensors, and hardware prototyping.',
    icon: Cpu,
  },
  {
    title: '3D design',
    description: 'Engineering sketches, CAD modeling, and physical prototype fabrication.',
    icon: Box,
  },
];

const faqItems = [
  {
    question: 'Does this replace regular school subjects?',
    answer:
      'No. Sessions are planned cleanly inside the weekly school timetable alongside core CBSE, ASSEB Division I (formerly SEBA), or ICSE subjects.',
  },
  {
    question: 'What skills does my child develop besides coding?',
    answer:
      'Students build inquiry, design, teamwork, and communication habits alongside financial literacy, ethics, and environmental thinking.',
  },
  {
    question: 'Do families need to purchase separate electronics kits?',
    answer:
      'No. Lab kits, tools, and component upkeep are planned and supplied for use inside the school technology lab.',
  },
  {
    question: 'How is student progress evaluated?',
    answer:
      'Through practical project work and structured student reflection rather than rote written memorization.',
  },
  {
    question: 'How does the program grow across grades?',
    answer:
      'Students progress from Technology foundations in Year 01 into Robotics and 3D printing, Connected devices, Immersive technology and flight, and Space and astronomy.',
  },
];

export default function ForParentsPage() {
  return (
    <>
      <section className="bg-base pt-24 pb-20 lg:pb-24" aria-labelledby="parents-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="max-w-[680px]">
            <SectionLabel text="For parents" />
            <h1 id="parents-hero-heading" className="heading-1 hero-heading-gradient mb-6">
              Learn, explore and
              <br />
              build for real life.
            </h1>
            <p className="body-3 text-muted mb-8">
              Inside an Astra technology lab, students write code, work with real electronic components, design in 3D, and reflect on how technology serves people responsibly.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Ask us about the program</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-surface border-y border-elevated py-20 lg:py-24"
        aria-labelledby="outcomes-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center mb-16">
              <SectionLabel text="Student growth" />
              <h2 id="outcomes-heading" className="heading-2 text-navy">
                {home.labTracks.beyondTechnical.heading}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <AnimateOnScroll key={o.number} delay={i * 100}>
                <article className="bg-white border border-elevated rounded-2xl p-8 h-full shadow-sm">
                  <p className="heading-4 text-accent mb-4 tabular-nums">{o.number}</p>
                  <h3 className="title-2 text-navy mb-3">{o.title}</h3>
                  <p className="body-6 text-muted">{o.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base py-20 lg:py-24" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center mb-16">
              <SectionLabel text="Inside the lab" />
              <h2 id="skills-heading" className="heading-2 text-navy">
                Four core disciplines inside one lab
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skillAreas.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <AnimateOnScroll key={skill.title} delay={i * 80}>
                  <article className="bg-surface border border-elevated rounded-2xl p-8 flex items-start gap-4 h-full">
                    <Icon size={20} strokeWidth={1.65} className="shrink-0 text-accent mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="title-2 text-navy mb-2">{skill.title}</h3>
                      <p className="body-6 text-muted">{skill.description}</p>
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ
        label="Parent questions"
        heading="What parents want to know"
        items={faqItems}
        surface="surface"
      />

      <ContactCTA surface="base" />
    </>
  );
}
