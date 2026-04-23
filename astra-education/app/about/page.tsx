import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import ContactCTA from '@/components/sections/ContactCTA';
import { about } from '@/content/about';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.about.title,
  description: meta.about.description,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text={about.hero.sectionLabel} light />
          <h1
            id="about-hero-heading"
            className="font-jakarta font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
          >
            {about.hero.heading}
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl mx-auto">
            {about.hero.subheading}
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <SectionLabel text="OUR STORY" />
              <h2
                id="story-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight mb-8"
              >
                {about.story.heading}
              </h2>
            </AnimateOnScroll>
            <div className="space-y-5">
              {about.story.paragraphs.map((p, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <p className="text-muted text-base leading-relaxed font-inter">{p}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="founders-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <SectionLabel text="THE FOUNDERS" />
              <h2
                id="founders-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight"
              >
                The People Behind Astra
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {about.founders.map((founder, i) => (
              <AnimateOnScroll key={i} delay={i * 120}>
                <article className="bg-off-white rounded-xl overflow-hidden border border-border">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <PlaceholderImage
                      src={founder.image}
                      alt={`${founder.name} — ${founder.role}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-jakarta font-bold text-navy text-lg mb-0.5">{founder.name}</h3>
                    <p className="text-blue text-sm font-semibold font-inter mb-1">{founder.role}</p>
                    <p className="text-muted text-xs font-inter mb-3">{founder.credential}</p>
                    <p className="text-muted text-sm leading-relaxed font-inter">{founder.bio}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AEC Alumni */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="alumni-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <SectionLabel text="OUR ROOTS" light />
              <h2
                id="alumni-heading"
                className="font-jakarta font-bold text-white text-3xl sm:text-4xl leading-tight mb-5"
              >
                {about.alumni.heading}
              </h2>
              <p className="text-white/75 text-base leading-relaxed font-inter mb-8">
                {about.alumni.body}
              </p>
              <div className="inline-flex flex-col items-center gap-1 px-8 py-5 bg-white/5 border border-white/10 rounded-xl">
                <p className="font-jakarta font-bold text-gold text-lg">{about.alumni.institution}</p>
                <p className="text-white/50 text-xs font-inter">{about.alumni.established}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Academic Advisory */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="advisory-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <SectionLabel text={about.advisory.sectionLabel} />
              <h2
                id="advisory-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4 max-w-2xl mx-auto"
              >
                {about.advisory.heading}
              </h2>
              <p className="text-muted text-base leading-relaxed font-inter max-w-2xl mx-auto">
                {about.advisory.body}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="max-w-sm mx-auto">
              <article className="bg-white rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="relative w-full aspect-[1/1] overflow-hidden">
                  <PlaceholderImage
                    src={about.advisory.advisor.image}
                    alt={`${about.advisory.advisor.name} — ${about.advisory.advisor.role}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-jakarta font-bold text-navy text-lg mb-0.5">
                    {about.advisory.advisor.name}
                  </h3>
                  <p className="text-blue text-sm font-semibold font-inter mb-0.5">
                    {about.advisory.advisor.role}
                  </p>
                  <p className="text-muted text-xs font-inter">
                    {about.advisory.advisor.credential}
                  </p>
                </div>
              </article>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <SectionLabel text="WHAT WE STAND FOR" />
              <h2
                id="values-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight"
              >
                Our Principles
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {about.values.map((v, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <article className="text-center p-8 rounded-xl bg-off-white border border-border">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
                    <span className="font-jakarta font-bold text-blue text-lg">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-jakarta font-bold text-navy text-lg mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter">{v.description}</p>
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
