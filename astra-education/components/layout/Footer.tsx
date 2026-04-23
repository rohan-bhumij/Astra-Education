import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Astra Education — Home">
              <Image
                src={site.logo.src}
                alt={site.logo.alt}
                width={44}
                height={44}
                className="w-11 h-11 object-contain brightness-0 invert"
              />
              <span className="font-jakarta font-bold text-white text-lg">{site.name}</span>
            </Link>
            <p className="text-white/70 text-sm font-inter leading-relaxed max-w-xs">
              {site.tagline}
            </p>
            <p className="text-white/50 text-xs font-inter">{site.foundedBy}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-jakarta font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm font-inter transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={site.ctaButton.href}
                  className="text-white/70 hover:text-white text-sm font-inter transition-colors duration-150"
                >
                  {site.ctaButton.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-jakarta font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h3>
            <address className="not-italic space-y-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-start gap-3 text-white/70 hover:text-white text-sm font-inter transition-colors duration-150"
              >
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {site.contact.email}
              </a>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-white/70 hover:text-white text-sm font-inter transition-colors duration-150"
              >
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {site.contact.phone}
              </a>
              <p className="flex items-start gap-3 text-white/70 text-sm font-inter">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {site.contact.address}
              </p>
              <p className="flex items-start gap-3 text-white/70 text-sm font-inter">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {site.contact.website}
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-inter">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-inter">
            NEP 2020 Aligned · Classes 1–9 · Assam, India
          </p>
        </div>
      </div>
    </footer>
  );
}
