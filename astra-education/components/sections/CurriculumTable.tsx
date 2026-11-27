import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface Term {
  term: string;
  topic: string;
  description: string;
}

interface ClassGroup {
  classLabel: string;
  terms: Term[];
}

interface CurriculumTableProps {
  band: {
    label: string;
    title: string;
    subtitle: string;
    classes: ClassGroup[];
  };
  accentColor: 'blue' | 'amber';
}

export default function CurriculumTable({ band, accentColor }: CurriculumTableProps) {
  const badgeText = accentColor === 'blue' ? 'text-accent' : 'text-amber';

  return (
    <div>
      <AnimateOnScroll>
        <p className={`caption-3 uppercase tracking-widest mb-2 ${badgeText}`}>
          {band.label}
        </p>
        <h3 className="heading-4 text-navy mb-2">{band.title}</h3>
        <p className="body-6 text-muted mb-8">{band.subtitle}</p>
      </AnimateOnScroll>

      <div className="space-y-6">
        {band.classes.map((classGroup, ci) => (
          <AnimateOnScroll key={classGroup.classLabel} delay={ci * 60}>
            <div className="rounded-2xl border border-elevated bg-white overflow-hidden shadow-sm">
              <div className="bg-navy px-6 py-4">
                <h4 className="title-3 text-white">{classGroup.classLabel}</h4>
              </div>

              <div className="divide-y divide-elevated">
                {classGroup.terms.map((term) => (
                  <div
                    key={term.term}
                    className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-6 px-6 py-4"
                  >
                    <span className={`caption-3 uppercase tracking-wide pt-1 ${badgeText}`}>
                      {term.term}
                    </span>
                    <div>
                      <p className="body-4 text-navy mb-1">{term.topic}</p>
                      <p className="caption-2 text-muted">{term.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
