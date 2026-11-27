import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import SchoolFitSection from '@/components/sections/SchoolFitSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.forSchools.title,
  description: meta.forSchools.description,
  alternates: { canonical: '/for-schools' },
};

const faqItems = [
  {
    question: 'Can our school start with an existing computer room?',
    answer:
      'Yes. An existing computer room with storage is the ideal starting point. Together we review what your school already has and what the first lab sessions require.',
  },
  {
    question: 'Who handles teaching support and instructor roles?',
    answer:
      'Astra plans teaching support, instructor roles, and lesson preparation alongside your designated school coordinator.',
  },
  {
    question: 'How does the lab fit into our existing timetable?',
    answer:
      'Your school identifies classes and available periods while Astra plans the lesson sequence and weekly pacing across Classes 1 to 9.',
  },
  {
    question: 'How are lab upkeep and kit replacements managed?',
    answer:
      'Astra handles lab upkeep, component storage standards, and timely replacements so sessions run smoothly throughout the year.',
  },
  {
    question: 'Which curriculum standards does Astra align with?',
    answer:
      'Our sequence supports National Education Policy 2020 (§4.6 and §4.25) and CBSE Kaushal Bodh for CBSE, ASSEB Division I (formerly SEBA) and ICSE schools.',
  },
];

export default function ForSchoolsPage() {
  return (
    <>
      <section className="bg-base pt-24 pb-20 lg:pb-24" aria-labelledby="schools-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="max-w-[680px]">
            <SectionLabel text="For schools · 2027 to 2028" />
            <h1 id="schools-hero-heading" className="heading-1 hero-heading-gradient mb-6">
              How the Astra lab
              <br />
              fits into your school.
            </h1>
            <p className="body-3 text-muted mb-8">
              An existing computer room can be the starting point. Your school identifies the room, periods, and coordinator while Astra plans kits, instruction, upkeep, and assessment.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Request a curriculum briefing</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SchoolFitSection />
      <RoadmapSection />

      <FAQ
        label="School leadership FAQ"
        heading="What principals and coordinators ask"
        items={faqItems}
        surface="surface"
      />

      <ContactCTA surface="base" />
    </>
  );
}
