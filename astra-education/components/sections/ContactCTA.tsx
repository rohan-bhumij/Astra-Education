'use client';

import Link from 'next/link';
import { ArrowRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { home } from '@/content/home';
import { site } from '@/content/site';

interface ContactCTAProps {
  surface?: 'base' | 'surface';
}

export default function ContactCTA({ surface = 'surface' }: ContactCTAProps) {
  const { contactCta } = home;
  const sectionBg = surface === 'surface' ? 'bg-surface border-t border-elevated' : 'bg-base';

  return (
    <section
      className={`${sectionBg} py-20 lg:py-24`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-elevated rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <SectionLabel text={contactCta.sectionLabel} />
          <h2 id="cta-heading" className="heading-2 text-navy mb-4 max-w-[680px] mx-auto">
            {contactCta.heading}
          </h2>
          <p className="body-3 text-muted mb-8 max-w-[680px] mx-auto">
            {contactCta.subtext}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2 body-5 text-navy hover:text-accent transition-colors duration-300 ease-base"
            >
              <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
              <span>{site.contact.email}</span>
            </a>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 body-5 text-navy hover:text-accent transition-colors duration-300 ease-base"
            >
              <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
              <span>{site.contact.phone}</span>
            </a>
          </div>

          <div className="mb-6">
            <Link href={contactCta.button.href} className="btn-primary">
              <span>{contactCta.button.label}</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <p className="caption-4 text-muted inline-flex items-center justify-center gap-2">
            <ShieldCheck size={16} strokeWidth={1.75} className="text-accent shrink-0" aria-hidden="true" />
            <span>{contactCta.guarantee}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
