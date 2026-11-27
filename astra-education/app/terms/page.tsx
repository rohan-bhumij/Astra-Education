import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { meta } from '@/content/meta';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: meta.terms.title,
  description: meta.terms.description,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="bg-surface pt-24 pb-20 lg:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <SectionLabel text="Legal" />
        <h1 className="heading-2 text-navy mb-6">Terms of service</h1>
        <p className="body-3 text-muted mb-8">
          These terms govern general use of the Astra Education website and partnership enquiries.
        </p>

        <div className="space-y-6 bg-white border border-elevated rounded-2xl p-8 shadow-sm">
          <div>
            <h2 className="title-2 text-navy mb-2">School partnerships and MoUs</h2>
            <p className="body-6 text-muted">
              Program delivery inside partner schools, hardware ownership, session scheduling, and term reporting are governed by the formal Memorandum of Understanding signed between Astra Education and each school.
            </p>
          </div>
          <div>
            <h2 className="title-2 text-navy mb-2">Curriculum and hardware ownership</h2>
            <p className="body-6 text-muted">
              Curriculum materials, instructional guides, and Astra supplied hardware kits remain the property of Astra Education unless stated otherwise in a signed school agreement.
            </p>
          </div>
          <div>
            <h2 className="title-2 text-navy mb-2">Contact</h2>
            <p className="body-6 text-muted">
              For questions about school partnerships or these terms, write to{' '}
              <a href={`mailto:${site.contact.email}`} className="text-accent hover:underline">
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
