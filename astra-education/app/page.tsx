import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import LabTracksSection from '@/components/sections/LabTracksSection';
import Lab3DShowcase from '@/components/sections/Lab3DShowcase';
import LabVideoShowcase from '@/components/sections/LabVideoShowcase';
import TaglineReveal from '@/components/sections/TaglineReveal';
import SchoolFitSection from '@/components/sections/SchoolFitSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { home } from '@/content/home';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.home.title,
  description: meta.home.description,
  alternates: {
    canonical: '/',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: home.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <LabTracksSection />
      <Lab3DShowcase />
      <LabVideoShowcase />
      <TaglineReveal />
      <SchoolFitSection />
      <RoadmapSection />
      <LeadershipSection />
      <FAQ
        label={home.faq.sectionLabel}
        heading={home.faq.heading}
        items={home.faq.items}
        surface="base"
      />
      <ContactCTA surface="surface" />
    </>
  );
}
