import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

export default function About() {
  const { about } = home;

  return (
    <section className="bg-off-white py-20 lg:py-28" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <AnimateOnScroll>
            <div>
              <SectionLabel text={about.sectionLabel} />
              <h2
                id="about-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight mb-6"
              >
                {about.heading}
              </h2>
              <p className="text-muted text-base leading-relaxed font-inter">
                {about.body}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: Credential cards */}
          <div className="space-y-5">
            {about.credentialCards.map((card, i) => (
              <AnimateOnScroll key={i} delay={i * 120}>
                <div className="bg-navy rounded-xl p-7 relative overflow-hidden">
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" aria-hidden="true" />
                  <h3 className="font-jakarta font-bold text-gold text-base mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed font-inter">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
