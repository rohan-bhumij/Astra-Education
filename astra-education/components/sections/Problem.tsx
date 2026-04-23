import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

export default function Problem() {
  const { problem } = home;

  return (
    <section className="bg-navy py-20 lg:py-28" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel text={problem.sectionLabel} light />
            <h2
              id="problem-heading"
              className="font-jakarta font-bold text-gold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
            >
              {problem.heading}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-inter">
              {problem.body}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {problem.stats.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="text-center p-8 rounded-xl border border-white/10 bg-white/5">
                <p className="font-jakarta font-bold text-gold text-5xl lg:text-6xl mb-3">
                  {stat.value}
                </p>
                <p className="text-blue/90 text-sm font-inter leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
