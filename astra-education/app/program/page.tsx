import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FileText,
  FlaskConical,
  TrendingUp,
  Award,
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import TiltCard from '@/components/ui/TiltCard';
import RoadmapSection from '@/components/sections/RoadmapSection';
import Lab3DShowcase from '@/components/sections/Lab3DShowcase';
import ContactCTA from '@/components/sections/ContactCTA';
import { program } from '@/content/program';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.program.title,
  description: meta.program.description,
  alternates: { canonical: '/program' },
};

const bands = [
  {
    label: 'Junior band',
    classes: 'Classes 1 to 5',
    tagline: 'Foundation years',
    description:
      'Students build inquiry habits, logical thinking, visual coding, basic electronics, and early 3D sketches before transitioning to microcontrollers.',
    skills: ['Computational thinking', 'Scratch Jr and Scratch', 'Circuits and switches', '3D design sketches'],
    accent: 'blue' as const,
  },
  {
    label: 'Senior band',
    classes: 'Classes 6 to 9',
    tagline: 'Applied years',
    description:
      'Aligned with NEP 2020 (§4.6, §4.25) and CBSE Kaushal Bodh for Classes 6 to 8, covering Python, sensors, 3D CAD prototyping, and applied AI.',
    skills: ['Python programming', 'Sensors and robotics', '3D CAD prototypes', 'AI and model training'],
    accent: 'amber' as const,
  },
];

const principles = [
  {
    icon: FlaskConical,
    title: 'Practical first',
    body: 'Every concept starts with real components, switches, and physical prototyping.',
  },
  {
    icon: TrendingUp,
    title: 'Progressive sequence',
    body: 'Each grade builds across Coding, AI, Electronics, and 3D design without repetition.',
  },
  {
    icon: Award,
    title: 'Project assessment',
    body: 'Students reflect on cost, utility, and reuse while presenting tested builds each term.',
  },
  {
    icon: BookOpen,
    title: 'NEP 2020 and Kaushal Bodh',
    body: 'Built for CBSE, ASSEB Division I (formerly SEBA) and ICSE school schedules.',
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-base pt-24 pb-20 lg:pb-24" aria-labelledby="program-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="max-w-[680px]">
            <SectionLabel text="Our program" />
            <h1 id="program-hero-heading" className="heading-1 hero-heading-gradient mb-6">
              {program.hero.heading}
            </h1>
            <p className="body-3 text-muted mb-8">{program.hero.subheading}</p>
            <Link href="/contact" className="btn-primary">
              <span>Request a curriculum briefing</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Program principles */}
      <section
        className="bg-surface border-y border-elevated py-20 lg:py-24"
        aria-labelledby="principles-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center mb-16">
              <SectionLabel text="Program structure" />
              <h2 id="principles-heading" className="heading-2 text-navy">
                Built on four engineering principles
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimateOnScroll key={p.title} delay={i * 80}>
                  <article className="bg-white border border-elevated rounded-2xl p-8 h-full shadow-sm">
                    <Icon size={22} strokeWidth={1.65} className="text-accent mb-5" aria-hidden="true" />
                    <h3 className="title-2 text-navy mb-2">{p.title}</h3>
                    <p className="body-6 text-muted">{p.body}</p>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive 3D Discipline Explorer */}
      <Lab3DShowcase />

      {/* Two bands */}
      <section
        className="bg-surface border-y border-elevated py-20 lg:py-24"
        aria-labelledby="bands-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center mb-16">
              <SectionLabel text="Program bands" />
              <h2 id="bands-heading" className="heading-2 text-navy">
                Two bands. Nine years. One journey.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {bands.map((band, i) => (
              <AnimateOnScroll key={band.label} delay={i * 120}>
                <TiltCard className="h-full">
                  <article className="bg-white border border-elevated rounded-2xl overflow-hidden h-full flex flex-col shadow-sm">
                    <div className="bg-navy px-8 py-6 flex items-center justify-between gap-4">
                      <div>
                        <span
                          className={`caption-3 uppercase tracking-widest ${
                            band.accent === 'blue' ? 'text-blue-300' : 'text-amber-300'
                          }`}
                        >
                          {band.label}
                        </span>
                        <h3 className="heading-5 text-white mt-1">{band.classes}</h3>
                      </div>
                      <span className="caption-4 text-slate-300 border-l border-white/20 pl-3 whitespace-nowrap">
                        {band.tagline}
                      </span>
                    </div>

                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="body-6 text-muted mb-6">{band.description}</p>
                        <ul className="grid grid-cols-2 gap-2.5" role="list">
                          {band.skills.map((skill) => (
                            <li
                              key={skill}
                              className="px-3 py-2 rounded-lg bg-surface border border-elevated caption-4 text-navy"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 pt-6 border-t border-elevated flex items-center justify-between gap-4">
                        <p className="caption-5 text-muted">
                          Class wise sequence shared during your briefing.
                        </p>
                        <Link
                          href="/contact"
                          className="caption-3 text-accent hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          <span>Request syllabus</span>
                          <ChevronRight size={14} strokeWidth={2} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {program.builds.items.map((item, i) => (
              <AnimateOnScroll key={item.number} delay={i * 80}>
                <article className="bg-white border border-elevated rounded-2xl p-8 h-full shadow-sm">
                  <p className="heading-4 text-accent mb-3 tabular-nums">{item.number}</p>
                  <h3 className="title-2 text-navy mb-2">{item.title}</h3>
                  <p className="body-6 text-muted">{item.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="bg-white border border-elevated rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-sm">
              <FileText size={28} strokeWidth={1.5} className="text-accent mx-auto mb-4" aria-hidden="true" />
              <h3 className="heading-5 text-navy mb-3">Want the class wise curriculum?</h3>
              <p className="body-6 text-muted mb-6 max-w-md mx-auto">
                Review the complete syllabus across Classes 1 to 9 and plan for your school rooms, staffing, and timetable.
              </p>
              <Link href="/contact" className="btn-primary">
                <span>Request a curriculum briefing</span>
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <RoadmapSection />

      <ContactCTA surface="surface" />
    </>
  );
}
