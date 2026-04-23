import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

export default function HowItWorks() {
  const { howItWorks } = home;

  return (
    <section className="bg-off-white py-20 lg:py-28" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text={howItWorks.sectionLabel} />
            <h2
              id="how-it-works-heading"
              className="font-jakarta font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
            >
              {howItWorks.heading}
            </h2>
          </div>
        </AnimateOnScroll>

        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Steps">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-border z-0"
            aria-hidden="true"
          />

          {howItWorks.steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <li className="relative z-10 flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-6 shadow-lg">
                  <span className="font-jakarta font-bold text-blue text-xl">{step.number}</span>
                </div>
                <h3 className="font-jakarta font-bold text-navy text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-inter max-w-xs">
                  {step.description}
                </p>
              </li>
            </AnimateOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
