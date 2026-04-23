'use client';

import { useState, FormEvent } from 'react';

interface ContactFormProps {
  email: string;
}

export default function ContactForm({ email }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const school = data.get('school') as string;
    const designation = data.get('designation') as string;
    const phone = data.get('phone') as string;
    const message = data.get('message') as string;

    const body = `Name: ${name}
School: ${school}
Designation: ${designation}
Phone: ${phone}

Message:
${message}`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `Partnership Enquiry — ${school}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-border p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-blue" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-jakarta font-bold text-navy text-xl mb-2">Thank you!</h3>
        <p className="text-muted text-sm font-inter leading-relaxed">
          Your email client should have opened. If not, please email us directly at{' '}
          <a href={`mailto:${email}`} className="text-blue hover:underline">{email}</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-border p-8 lg:p-10">
      <h2 className="font-jakarta font-bold text-navy text-xl mb-6">Send Us a Message</h2>

      <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-navy uppercase tracking-wider font-inter mb-1.5">
                Your Name <span className="text-blue" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-text text-sm font-inter placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-navy uppercase tracking-wider font-inter mb-1.5">
                Phone Number <span className="text-blue" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 00000 00000"
                className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-text text-sm font-inter placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="school" className="block text-xs font-semibold text-navy uppercase tracking-wider font-inter mb-1.5">
              School Name <span className="text-blue" aria-hidden="true">*</span>
            </label>
            <input
              id="school"
              name="school"
              type="text"
              required
              placeholder="Full name of your school"
              className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-text text-sm font-inter placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="designation" className="block text-xs font-semibold text-navy uppercase tracking-wider font-inter mb-1.5">
              Your Designation
            </label>
            <input
              id="designation"
              name="designation"
              type="text"
              placeholder="Principal, Director, etc."
              className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-text text-sm font-inter placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-navy uppercase tracking-wider font-inter mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your school and any questions you have..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-off-white text-text text-sm font-inter placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-blue text-white font-semibold rounded-lg hover:bg-blue/90 active:bg-blue/80 transition-colors duration-150 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
          >
            Send Message
          </button>

          <p className="text-muted text-xs font-inter text-center">
            We respond within 24 hours. No commitment required.
          </p>
        </div>
      </form>
    </div>
  );
}
