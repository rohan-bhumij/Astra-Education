import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { meta } from '@/content/meta';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: meta.privacy.title,
  description: meta.privacy.description,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="bg-surface pt-24 pb-20 lg:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <SectionLabel text="Legal" />
        <h1 className="heading-2 text-navy mb-6">Privacy policy</h1>
        <p className="body-3 text-muted mb-8">
          Astra Education respects the privacy of school administrators, teachers, and parents across Assam.
        </p>

        <div className="space-y-6 bg-white border border-elevated rounded-2xl p-8 shadow-sm">
          <div>
            <h2 className="title-2 text-navy mb-2">Information submitted through enquiries</h2>
            <p className="body-6 text-muted">
              When you contact Astra Education through our contact form, email, or phone, we collect only the name, school name, designation, email address, phone number, and message you share so our team can respond to your partnership enquiry.
            </p>
          </div>
          <div>
            <h2 className="title-2 text-navy mb-2">How we use enquiry details</h2>
            <p className="body-6 text-muted">
              We use submitted contact information strictly to schedule meetings, share curriculum documentation, and coordinate school onboarding. We never sell or rent contact details to third parties.
            </p>
          </div>
          <div>
            <h2 className="title-2 text-navy mb-2">Questions or updates</h2>
            <p className="body-6 text-muted">
              To update or remove your contact details, email us at{' '}
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
