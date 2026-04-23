import Link from 'next/link';
import { home } from '@/content/home';
import { site } from '@/content/site';

export default function ContactCTA() {
  const { contactCta } = home;

  return (
    <section className="bg-blue py-20 lg:py-24" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="font-jakarta font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
        >
          {contactCta.heading}
        </h2>
        <p className="text-white/80 text-base lg:text-lg font-inter mb-10 max-w-xl mx-auto">
          {contactCta.subtext}
        </p>

        {/* Contact options */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-inter transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {site.contact.email}
          </a>
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-inter transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {site.contact.phone}
          </a>
        </div>

        <Link
          href={contactCta.button.href}
          className="inline-flex items-center px-8 py-4 bg-white text-blue font-semibold rounded-md hover:bg-off-white transition-colors duration-150 font-inter text-sm"
        >
          {contactCta.button.label}
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
