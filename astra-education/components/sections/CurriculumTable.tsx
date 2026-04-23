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
  accentColor: 'blue' | 'navy';
}

export default function CurriculumTable({ band, accentColor }: CurriculumTableProps) {
  const accentBg = accentColor === 'blue' ? 'bg-blue' : 'bg-navy';
  const accentText = accentColor === 'blue' ? 'text-blue' : 'text-navy';
  const accentBorder = accentColor === 'blue' ? 'border-blue' : 'border-navy';

  return (
    <div>
      <AnimateOnScroll>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${accentBg} text-white text-xs font-semibold font-inter uppercase tracking-wider mb-3`}>
          {band.label}
        </div>
        <h3 className="font-jakarta font-bold text-navy text-2xl sm:text-3xl mb-1">
          {band.title}
        </h3>
        <p className="text-muted text-sm font-inter mb-10">{band.subtitle}</p>
      </AnimateOnScroll>

      <div className="space-y-8">
        {band.classes.map((classGroup, ci) => (
          <AnimateOnScroll key={ci} delay={ci * 80}>
            <div className={`rounded-xl border-2 ${accentBorder} overflow-hidden`}>
              {/* Class header */}
              <div className={`${accentBg} px-6 py-3`}>
                <h4 className="font-jakarta font-bold text-white text-base">
                  {classGroup.classLabel}
                </h4>
              </div>

              {/* Terms */}
              <div className="divide-y divide-border">
                {classGroup.terms.map((term, ti) => (
                  <div key={ti} className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-6 px-6 py-4 bg-white">
                    <span className={`text-xs font-semibold ${accentText} font-inter uppercase tracking-wide pt-0.5`}>
                      {term.term}
                    </span>
                    <div>
                      <p className="font-jakarta font-semibold text-navy text-sm mb-0.5">
                        {term.topic}
                      </p>
                      <p className="text-muted text-xs leading-relaxed font-inter">
                        {term.description}
                      </p>
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
