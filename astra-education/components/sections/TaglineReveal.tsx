import { home } from '@/content/home';
import SectionLabel from '@/components/ui/SectionLabel';

export default function TaglineReveal() {
  const { taglineReveal } = home;

  return (
    <section
      className="bg-base py-20 lg:py-24"
      aria-label="Core promise"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <SectionLabel text="Our starting point" />
          <h2 className="heading-2 text-navy leading-tight">
            {taglineReveal.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
