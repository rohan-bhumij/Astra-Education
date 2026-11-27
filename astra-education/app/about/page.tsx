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
      <section className="bg-base pt-24 pb-20 lg:pb-24" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="max-w-[680px]">
            <SectionLabel text={about.hero.sectionLabel} />
            <h1 id="about-hero-heading" className="heading-1 hero-heading-gradient mb-6">
              {about.hero.heading}
            </h1>
            <p className="body-3 text-muted">{about.hero.subheading}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className="bg-surface border-y border-elevated py-20 lg:py-24"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <SectionLabel text="Our story" />
              <h2 id="story-heading" className="heading-2 text-navy mb-6">
                {about.story.heading}
              </h2>
            </AnimateOnScroll>
            <div className="space-y-4">
              {about.story.paragraphs.map((p, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <p className="body-3 text-muted">{p}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-base py-20 lg:py-24" aria-labelledby="founders-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center mb-16">
              <SectionLabel text="Founders" />
              <h2 id="founders-heading" className="heading-2 text-navy">
                Assam Engineering College alumni
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {about.founders.map((founder, i) => (
              <AnimateOnScroll key={founder.name} delay={i * 120}>
                <article className="bg-white border border-elevated rounded-2xl overflow-hidden h-full shadow-sm">
                  <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-elevated bg-navy">
                    <PlaceholderImage
                      src={founder.image}
                      alt={`${founder.name}, ${founder.role}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="title-1 text-navy mb-1">{founder.name}</h3>
                    <p className="body-4 text-accent mb-1">{founder.role}</p>
                    <p className="caption-5 text-amber mb-3">{founder.credential}</p>
                    <p className="body-6 text-muted">{founder.bio}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AEC Alumni */}
      <section
        className="bg-navy text-white py-20 lg:py-24"
        aria-labelledby="alumni-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <SectionLabel text="Our roots" light />
              <h2 id="alumni-heading" className="heading-2 text-white mb-4">
                {about.alumni.heading}
              </h2>
              <p className="body-3 text-slate-300 mb-8">{about.alumni.body}</p>
              <div className="inline-flex flex-col items-center gap-1 px-8 py-6 bg-white/10 border border-white/15 rounded-2xl">
                <p className="title-1 text-amber-300">{about.alumni.institution}</p>
                <p className="caption-5 text-slate-300">{about.alumni.established}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Academic Mentor */}
      <section className="bg-base py-20 lg:py-24" aria-labelledby="advisory-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12 max-w-[680px] mx-auto">
              <SectionLabel text={about.advisory.sectionLabel} />
              <h2 id="advisory-heading" className="heading-2 text-navy mb-4">
                {about.advisory.heading}
              </h2>
              <p className="body-3 text-muted">{about.advisory.body}</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="max-w-sm mx-auto">
              <article className="bg-white border border-elevated rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full aspect-square overflow-hidden border-b border-elevated bg-navy">
                  <PlaceholderImage
                    src={about.advisory.advisor.image}
                    alt={`${about.advisory.advisor.name}, ${about.advisory.advisor.role}`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="title-1 text-navy mb-1">{about.advisory.advisor.name}</h3>
                  <p className="body-4 text-accent mb-1">{about.advisory.advisor.role}</p>
                  <p className="caption-5 text-amber">{about.advisory.advisor.credential}</p>
                </div>
              </article>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-surface border-t border-elevated py-20 lg:py-24"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16 max-w-[680px] mx-auto">
              <SectionLabel text="What we stand for" />
              <h2 id="values-heading" className="heading-2 text-navy">
                Our operating principles
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {about.values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 100}>
                <article className="text-center p-8 rounded-2xl bg-white border border-elevated h-full shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-elevated flex items-center justify-center mx-auto mb-6">
                    <span className="title-2 text-accent tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="title-2 text-navy mb-3">{v.title}</h3>
                  <p className="body-6 text-muted">{v.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA surface="base" />
    </>
  );
}
