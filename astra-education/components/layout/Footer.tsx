'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg" aria-label="Astra Education home">
              <Image
                src={site.logo.src}
                alt={site.logo.alt}
                width={36}
                height={36}
                unoptimized
                className="w-9 h-9 rounded-md ring-1 ring-white/20 object-contain"
              />
              <span className="title-2 text-white">{site.name}</span>
            </Link>
            <p className="body-6 text-slate-300 max-w-xs">{site.tagline}</p>
            <p className="caption-5 text-slate-400">{site.foundedBy}</p>
            <p className="caption-5 text-slate-400">{site.boards}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="caption-3 text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3" role="list">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-6 text-slate-300 hover:text-white transition-colors duration-300 ease-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {site.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-6 text-slate-300 hover:text-white transition-colors duration-300 ease-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="caption-3 text-white uppercase tracking-wider mb-4">
              Get in touch
            </h3>
            <address className="not-italic space-y-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-3 body-6 text-slate-300 hover:text-white transition-colors duration-300 ease-base"
              >
                <Mail size={16} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
                <span>{site.contact.email}</span>
              </a>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 body-6 text-slate-300 hover:text-white transition-colors duration-300 ease-base"
              >
                <Phone size={16} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
                <span>{site.contact.phone}</span>
              </a>
              <p className="flex items-center gap-3 body-6 text-slate-300">
                <MapPin size={16} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
                <span>{site.contact.address}</span>
              </p>
              <a
                href={`https://${site.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 body-6 text-slate-300 hover:text-white transition-colors duration-300 ease-base"
              >
                <Globe size={16} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
                <span>{site.contact.website}</span>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <p className="caption-5 text-slate-400">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {site.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="caption-5 text-slate-400 hover:text-white transition-colors duration-300 ease-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Astra Education on LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-colors duration-300 ease-base"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Astra Education on Instagram"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-colors duration-300 ease-base"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
