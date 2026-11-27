import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Astra Education',
  description: 'The page you requested could not be found.',
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-surface px-4 pt-24 pb-20">
      <div className="text-center max-w-md bg-white border border-elevated rounded-2xl p-8 shadow-sm">
        <p className="heading-1 text-accent mb-4 tabular-nums" aria-hidden="true">
          404
        </p>
        <h1 className="heading-4 text-navy mb-4">Page not found</h1>
        <p className="body-6 text-muted mb-8">
          The page you are looking for does not exist or may have moved. Use the links below to return to Astra Education.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Request a briefing
          </Link>
        </div>
      </div>
    </section>
  );
}
