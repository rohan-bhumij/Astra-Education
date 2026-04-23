import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';
import CurriculumTable from '@/components/sections/CurriculumTable';
import ContactCTA from '@/components/sections/ContactCTA';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { program } from '@/content/program';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.program.title,
  description: meta.program.description,
  alternates: { canonical: '/program' },
};

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="program-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text="CURRICULUM" light />
          <h1
            id="program-hero-heading"
            className="font-jakarta font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
          >
            {program.hero.heading}
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl mx-auto">
            {program.hero.subheading}
          </p>
        </div>
      </section>

      {/* Junior Band */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="junior-band-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="junior-band-heading">
            <CurriculumTable band={program.juniorBand} accentColor="blue" />
          </div>
        </div>
      </section>

      {/* Senior Band */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="senior-band-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="senior-band-heading">
            <CurriculumTable band={program.seniorBand} accentColor="navy" />
          </div>
        </div>
      </section>

      {/* What Students Build */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="builds-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <SectionLabel text={program.builds.sectionLabel} light />
              <h2
                id="builds-heading"
                className="font-jakarta font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight"
              >
                {program.builds.heading}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.builds.items.map((item, i) => (
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

      <ContactCTA />
    </>
  );
}
