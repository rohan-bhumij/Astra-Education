import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { home } from '@/content/home';
import { about } from '@/content/about';

export default function LeadershipSection() {
  const { leadership } = home;

  const people = [
    ...about.founders,
    {
      name: about.advisory.advisor.name,
      role: about.advisory.advisor.role,
      credential: about.advisory.advisor.credential,
      bio: 'Guides academic rigour across coding, electronics, AI, and 3D design tracks.',
      image: about.advisory.advisor.image,
    },
  ];

  return (
    <section
      className="bg-surface border-y border-elevated py-20 lg:py-24"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <SectionLabel text={leadership.sectionLabel} />
            <h2 id="leadership-heading" className="heading-2 text-navy mb-4">
              {leadership.heading}
            </h2>
            <p className="body-3 text-muted">{leadership.body}</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {people.map((person, i) => (
            <AnimateOnScroll key={person.name} delay={i * 90}>
              <article className="bg-white border border-elevated rounded-2xl overflow-hidden h-full flex flex-col shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-elevated bg-navy">
                  <PlaceholderImage
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="title-1 text-navy mb-1">{person.name}</h3>
                  <p className="body-4 text-accent mb-1">{person.role}</p>
                  <p className="caption-5 text-amber mb-3">{person.credential}</p>
                  <p className="body-6 text-muted">{person.bio}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about" className="btn-secondary">
            Read our full story
          </Link>
        </div>
      </div>
    </section>
  );
}
