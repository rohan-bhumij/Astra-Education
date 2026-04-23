import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.forParents.title,
  description: meta.forParents.description,
  alternates: { canonical: '/for-parents' },
};

const outcomes = [
  {
    number: '01',
    title: 'Real Skills',
    description:
      'Your child won\'t just learn about technology. They\'ll build with it — assembling robots, writing code, and training AI models with their own hands.',
  },
  {
    number: '02',
    title: 'Future Ready',
    description:
      'Every skill taught is directly relevant to careers in the next 10–20 years. Robotics, Python, and AI are not electives — they are the foundation of tomorrow\'s economy.',
  },
  {
    number: '03',
    title: 'Visible Progress',
    description:
      'You\'ll see exactly what your child built every term at our showcase events. Not grades on a paper — actual working projects presented by your child.',
  },
];

const programSummary = [
  { classes: 'Class 1 & 2', summary: 'Computational thinking, visual coding with Scratch Jr, and simple LED circuits.' },
  { classes: 'Class 3 & 4', summary: 'Algorithms and interactive game-building in Scratch, introduction to sensors.' },
  { classes: 'Class 5', summary: 'First Arduino projects, transition from block to text coding, mini sensor project.' },
  { classes: 'Class 6', summary: 'Python fundamentals, Arduino digital I/O, first automated system project.' },
  { classes: 'Class 7', summary: 'Python functions and data structures, sensor-controlled robot build.' },
  { classes: 'Class 8', summary: 'Python libraries, robotics chassis and motor control, autonomous robot.' },
  { classes: 'Class 9', summary: 'AI fundamentals, model training with real data, capstone AI + hardware project.' },
];

const faqItems = [
  {
    question: 'Is this instead of regular school subjects?',
    answer:
      'No. Astra runs as one additional 60-minute period per week. It does not replace any existing subject. Your child\'s core academic schedule remains unchanged.',
  },
  {
    question: 'What age groups does Astra teach?',
    answer:
      'Class 1 through Class 9 — students aged approximately 6 to 15. The curriculum is designed to grow with the student, becoming progressively more advanced each year.',
  },
  {
    question: 'What will my child actually make?',
    answer:
      'Depending on their class: working electronic circuits, coded Python applications, sensor-controlled robots, fully programmable autonomous robots, and in Class 9, an AI model trained on real data. Every term ends with a built project.',
  },
  {
    question: 'Do I need to buy anything?',
    answer:
      'Nothing at all. All materials, hardware kits, components, and equipment are provided by Astra Education at no cost to families. Students work with Astra-owned equipment during every session.',
  },
  {
    question: 'How will I know what my child is learning?',
    answer:
      'Through two channels: term-wise progress reports shared at the end of each term, and our showcase events where your child presents their project directly to you.',
  },
];

export default function ForParentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="parents-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel text="FOR PARENTS" />
            <h1
              id="parents-hero-heading"
              className="font-jakarta font-bold text-navy text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
            >
              What Astra Means for{' '}
              <span className="text-blue">Your Child</span>
            </h1>
            <p className="text-muted text-lg font-inter leading-relaxed">
              Practical skills. Built from scratch. Presented every term. Here is what your child experiences inside an Astra program.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome cards */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="outcomes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-xl mx-auto mb-14">
              <SectionLabel text="OUTCOMES" />
              <h2
                id="outcomes-heading"
                className="font-jakarta font-bold text-navy text-3xl sm:text-4xl leading-tight"
              >
                Three Things Every Astra Student Gains
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <article className="bg-off-white rounded-xl p-8 border border-border h-full">
                  <p className="font-jakarta font-bold text-blue text-4xl mb-4">{o.number}</p>
                  <h3 className="font-jakarta font-bold text-navy text-xl mb-3">{o.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-inter">{o.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum overview */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="curriculum-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-xl mx-auto mb-14">
              <SectionLabel text="WHAT THEY LEARN" light />
              <h2
                id="curriculum-overview-heading"
                className="font-jakarta font-bold text-white text-3xl sm:text-4xl leading-tight"
              >
                A Simple Overview of the Program
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="max-w-2xl mx-auto space-y-3">
            {programSummary.map((row, i) => (
              <AnimateOnScroll key={i} delay={i * 50}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                  <span className="font-jakarta font-bold text-blue text-sm shrink-0 w-20">{row.classes}</span>
                  <p className="text-white/75 text-sm font-inter leading-relaxed">{row.summary}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        label="PARENT QUESTIONS"
        heading="What Parents Want to Know"
        items={faqItems}
      />

      <ContactCTA />
    </>
  );
}
