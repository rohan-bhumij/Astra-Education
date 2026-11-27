'use client';

import {
  Wrench,
  BookOpen,
  GraduationCap,
  Cpu,
  ClipboardCheck,
  Calendar,
  Monitor,
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

const planIcons = {
  kits: Cpu,
  curriculum: BookOpen,
  teaching: GraduationCap,
  upkeep: Wrench,
  assessment: ClipboardCheck,
  timetable: Calendar,
};

export default function SchoolFitSection() {
  const { schoolFit } = home;

  return (
    <section
      className="bg-surface border-y border-elevated py-20 lg:py-24"
      aria-labelledby="school-fit-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <SectionLabel text={schoolFit.sectionLabel} />
            <h2 id="school-fit-heading" className="heading-2 text-navy">
              {schoolFit.heading}
            </h2>
          </div>
        </AnimateOnScroll>

        {/* 6-item planning grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schoolFit.plans.map((plan, i) => {
            const Icon = planIcons[plan.icon];
            return (
              <AnimateOnScroll key={plan.title} delay={i * 70}>
                <article className="bg-white border border-elevated rounded-2xl p-8 flex gap-4 h-full shadow-sm hover:border-control transition-colors duration-300 ease-base">
                  <Icon size={20} strokeWidth={1.65} className="shrink-0 text-accent mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="title-2 text-navy mb-2">{plan.title}</h3>
                    <p className="body-6 text-muted">{plan.description}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Before the first session table */}
        <AnimateOnScroll>
          <div className="bg-white border border-elevated rounded-2xl overflow-hidden mb-8 shadow-sm">
            <div className="bg-navy px-6 sm:px-8 py-4">
              <h3 className="title-2 text-white">{schoolFit.beforeFirstSessionHeading}</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-elevated bg-surface">
                    <th className="px-6 sm:px-8 py-4 caption-3 text-accent uppercase tracking-wider">
                      Decision
                    </th>
                    <th className="px-6 sm:px-8 py-4 caption-3 text-navy uppercase tracking-wider">
                      Your school identifies
                    </th>
                    <th className="px-6 sm:px-8 py-4 caption-3 text-amber uppercase tracking-wider">
                      Astra helps plan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-elevated">
                  {schoolFit.planningTable.map((row) => (
                    <tr key={row.decision} className="hover:bg-surface/60 transition-colors duration-300 ease-base">
                      <td className="px-6 sm:px-8 py-5 title-4 text-navy whitespace-nowrap">
                        {row.decision}
                      </td>
                      <td className="px-6 sm:px-8 py-5 body-6 text-muted">
                        {row.schoolIdentifies}
                      </td>
                      <td className="px-6 sm:px-8 py-5 body-5 text-navy">
                        {row.astraPlans}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Starting point callout */}
        <AnimateOnScroll delay={120}>
          <div className="bg-white border border-elevated rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-surface border border-elevated flex items-center justify-center shrink-0 text-accent">
              <Monitor size={20} strokeWidth={1.65} aria-hidden="true" />
            </div>
            <div>
              <h3 className="title-2 text-navy mb-2">{schoolFit.startingPoint.heading}</h3>
              <p className="body-6 text-muted max-w-3xl">{schoolFit.startingPoint.body}</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
