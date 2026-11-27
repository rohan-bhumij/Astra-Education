'use client';

import Image from 'next/image';
import {
  Code2,
  BrainCircuit,
  Cpu,
  Box,
  Search,
  Compass,
  Users,
  MessageSquare,
  Scale,
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import TiltCard from '@/components/ui/TiltCard';
import { home } from '@/content/home';

const pillarIcons = {
  code: Code2,
  ai: BrainCircuit,
  electronics: Cpu,
  design3d: Box,
};

const skillIcons = {
  inquiry: Search,
  design: Compass,
  teamwork: Users,
  communication: MessageSquare,
};

export default function LabTracksSection() {
  const { labTracks } = home;

  return (
    <section
      className="bg-surface border-y border-elevated py-20 lg:py-24"
      aria-labelledby="lab-tracks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <SectionLabel text={labTracks.sectionLabel} />
            <h2 id="lab-tracks-heading" className="heading-2 text-navy">
              {labTracks.heading}
            </h2>
          </div>
        </AnimateOnScroll>

        {/* 4 Lab Pillars with 3D spatial tilt cards & real photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {labTracks.pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon];
            return (
              <AnimateOnScroll key={pillar.title} delay={i * 80}>
                <TiltCard className="h-full">
                  <article className="bg-white border border-elevated rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:border-control transition-colors duration-300 ease-base">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-elevated bg-navy">
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fill
                        unoptimized
                        className={`object-cover ${
                          pillar.icon === 'electronics' ? 'object-[50%_20%]' : 'object-center'
                        }`}
                      />
                    </div>
                    <div className="p-8 flex items-start gap-4 flex-1">
                      <Icon size={22} strokeWidth={1.65} className="shrink-0 text-accent mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="heading-6 text-navy mb-2">{pillar.title}</h3>
                        <p className="body-6 text-muted">{pillar.description}</p>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Skills Students Develop */}
        <AnimateOnScroll>
          <div className="bg-white border border-elevated rounded-2xl p-8 shadow-sm mb-8">
            <p className="caption-3 text-accent uppercase tracking-wider mb-6">
              {labTracks.studentSkillsHeading}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {labTracks.studentSkills.map((skill) => {
                const Icon = skillIcons[skill.icon];
                return (
                  <div
                    key={skill.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-elevated"
                  >
                    <Icon size={18} strokeWidth={1.75} className="shrink-0 text-accent mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="title-4 text-navy mb-1">{skill.title}</h3>
                      <p className="caption-5 text-muted">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Beyond Technical Skills Callout */}
        <AnimateOnScroll delay={120}>
          <div className="bg-white border border-elevated rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-surface border border-elevated flex items-center justify-center shrink-0 text-accent">
              <Scale size={20} strokeWidth={1.65} aria-hidden="true" />
            </div>
            <div>
              <p className="caption-3 text-accent uppercase tracking-wider mb-2">
                {labTracks.beyondTechnical.label}
              </p>
              <h3 className="heading-5 text-navy mb-2">
                {labTracks.beyondTechnical.heading}
              </h3>
              <p className="body-6 text-muted max-w-3xl">
                {labTracks.beyondTechnical.body}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
