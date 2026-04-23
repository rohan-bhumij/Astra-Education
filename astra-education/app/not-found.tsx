import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — Astra Education',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-off-white px-4">
      <div className="text-center max-w-md">
        {/* Large 404 */}
        <p className="font-jakarta font-bold text-blue/20 text-[120px] leading-none select-none" aria-hidden="true">
          404
        </p>

        <h1 className="font-jakarta font-bold text-navy text-3xl sm:text-4xl mb-4 -mt-4">
          Page Not Found
        </h1>
        <p className="text-muted font-inter text-base leading-relaxed mb-8">
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors font-inter text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-md hover:bg-navy hover:text-white transition-colors font-inter text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
