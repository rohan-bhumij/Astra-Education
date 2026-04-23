import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

export default function SchoolBenefits() {
  const { schoolBenefits } = home;

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel text={schoolBenefits.sectionLabel} />
            <h2
              id="benefits-heading"
              className="font-jakarta font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
            >
              {schoolBenefits.heading}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {schoolBenefits.cards.map((card, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <article className="bg-white rounded-xl border border-border shadow-sm p-7 flex gap-5 relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue rounded-l-xl" aria-hidden="true" />
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-jakarta font-bold text-navy text-base mb-1.5">{card.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter">{card.description}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Callout box */}
        <AnimateOnScroll>
          <div className="bg-navy rounded-xl p-8 text-center max-w-3xl mx-auto">
            <svg className="w-8 h-8 text-gold mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white text-base lg:text-lg font-inter leading-relaxed">
              {schoolBenefits.callout}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
