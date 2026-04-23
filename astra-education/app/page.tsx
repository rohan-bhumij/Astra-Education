import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import WhatWeDo from '@/components/sections/WhatWeDo';
import HowItWorks from '@/components/sections/HowItWorks';
import SchoolBenefits from '@/components/sections/SchoolBenefits';
import About from '@/components/sections/About';
import ContactCTA from '@/components/sections/ContactCTA';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.home.title,
  description: meta.home.description,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <SchoolBenefits />
      <About />
      <ContactCTA />
    </>
  );
}
