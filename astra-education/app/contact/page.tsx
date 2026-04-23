import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ContactForm from './ContactForm';
import { site } from '@/content/site';
import { meta } from '@/content/meta';

export const metadata: Metadata = {
  title: meta.contact.title,
  description: meta.contact.description,
  alternates: { canonical: '/contact' },
};

const contactDetails = [
  {
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, '')}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: site.contact.address,
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Website',
    value: site.contact.website,
    href: `https://${site.contact.website}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="contact-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text="GET IN TOUCH" light />
          <h1
            id="contact-hero-heading"
            className="font-jakarta font-bold text-white text-4xl sm:text-5xl leading-tight mb-4"
          >
            Let's Talk About Your School
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl mx-auto">
            We are currently onboarding schools across Assam. Reach out — no commitment required.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-off-white py-20 lg:py-28" aria-label="Contact details and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Details */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-jakarta font-bold text-navy text-2xl sm:text-3xl mb-2">
                  Contact Details
                </h2>
                <p className="text-muted text-sm font-inter mb-8">
                  We respond to all enquiries within 24 hours.
                </p>

                <address className="not-italic space-y-5">
                  {contactDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-blue">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted uppercase tracking-wider font-inter mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-navy text-sm font-medium font-inter hover:text-blue transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-navy text-sm font-medium font-inter">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </address>

                {/* Note */}
                <div className="mt-10 p-6 bg-blue/5 border border-blue/20 rounded-xl">
                  <p className="text-navy text-sm font-inter leading-relaxed">
                    <strong className="font-semibold">Prefer a call?</strong> You can reach us directly on the number above. We are available on weekdays between 9 AM and 6 PM IST.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: Form */}
            <AnimateOnScroll delay={100}>
              <ContactForm email={site.contact.email} />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
