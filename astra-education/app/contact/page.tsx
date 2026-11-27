import type { Metadata } from 'next';
import { Mail, Globe, MapPin, Phone } from 'lucide-react';
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
    icon: Mail,
  },
  {
    label: 'Phone',
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    label: 'Location',
    value: site.contact.address,
    href: null,
    icon: MapPin,
  },
  {
    label: 'Website',
    value: site.contact.website,
    href: `https://${site.contact.website}`,
    icon: Globe,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-base pt-24 pb-16" aria-labelledby="contact-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="max-w-[680px]">
            <SectionLabel text="School partnerships · 2027 to 2028" />
            <h1 id="contact-hero-heading" className="heading-1 hero-heading-gradient mb-4">
              Request a curriculum
              <br />
              briefing
            </h1>
            <p className="body-3 text-muted">
              Review the class wise curriculum with Astra and plan for your rooms, staffing and timetable.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-surface border-t border-elevated py-20 lg:py-24"
        aria-label="Contact details and form"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimateOnScroll>
              <div>
                <h2 className="heading-4 text-navy mb-2">Contact details</h2>
                <p className="body-6 text-muted mb-8">
                  We respond to every school enquiry within 24 hours.
                </p>

                <address className="not-italic space-y-6">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <Icon size={20} strokeWidth={1.65} className="shrink-0 text-accent mt-1" aria-hidden="true" />
                        <div>
                          <p className="caption-3 text-muted uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="body-5 text-navy hover:text-accent transition-colors duration-300 ease-base"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="body-5 text-navy">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </address>

                <div className="mt-10 p-6 bg-white border border-elevated rounded-2xl shadow-sm">
                  <p className="body-6 text-muted">
                    <strong className="body-4 text-navy">Prefer a direct call?</strong> Reach us on the phone number above on weekdays between 9 AM and 6 PM IST.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <ContactForm email={site.contact.email} />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
