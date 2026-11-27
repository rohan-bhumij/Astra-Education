'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  email: string;
}

interface FormErrors {
  name?: string;
  emailAddress?: string;
  phone?: string;
  school?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ email }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const emailAddress = String(data.get('emailAddress') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const school = String(data.get('school') ?? '').trim();
    const designation = String(data.get('designation') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = 'Enter your full name.';
    if (!emailAddress || !EMAIL_PATTERN.test(emailAddress)) {
      nextErrors.emailAddress = 'Enter a valid email address.';
    }
    if (!phone || phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Enter a 10 digit phone number.';
    }
    if (!school) nextErrors.school = 'Enter the name of your school.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const body = `Name: ${name}
Email: ${emailAddress}
School: ${school}
Designation: ${designation || 'Not specified'}
Phone: ${phone}

Message:
${message || 'Interested in scheduling an Astra Education curriculum briefing.'}`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `Curriculum briefing enquiry for ${school}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-elevated p-8 text-center shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-surface border border-elevated flex items-center justify-center mx-auto mb-4 text-accent">
          <CheckCircle2 size={24} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h3 className="heading-5 text-navy mb-2">Briefing request prepared</h3>
        <p className="body-6 text-muted mb-6">
          Your email client has opened with your message addressed to{' '}
          <a href={`mailto:${email}`} className="text-accent hover:underline">
            {email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-elevated p-8 shadow-sm">
      <h2 className="heading-5 text-navy mb-6">Schedule a school briefing</h2>

      <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block caption-3 text-navy uppercase tracking-wider mb-2">
                Your name <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-elevated bg-surface text-navy body-6 placeholder:text-muted/60 focus:border-accent transition-colors duration-300 ease-base"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 caption-4 text-amber flex items-center gap-1" role="alert">
                  <AlertCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="emailAddress" className="block caption-3 text-navy uppercase tracking-wider mb-2">
                Work email <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                required
                autoComplete="email"
                placeholder="principal@school.edu.in"
                aria-invalid={Boolean(errors.emailAddress)}
                aria-describedby={errors.emailAddress ? 'email-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-elevated bg-surface text-navy body-6 placeholder:text-muted/60 focus:border-accent transition-colors duration-300 ease-base"
              />
              {errors.emailAddress && (
                <p id="email-error" className="mt-1 caption-4 text-amber flex items-center gap-1" role="alert">
                  <AlertCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                  <span>{errors.emailAddress}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block caption-3 text-navy uppercase tracking-wider mb-2">
                Phone number <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 90000 00000"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-elevated bg-surface text-navy body-6 placeholder:text-muted/60 focus:border-accent transition-colors duration-300 ease-base"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 caption-4 text-amber flex items-center gap-1" role="alert">
                  <AlertCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="designation" className="block caption-3 text-navy uppercase tracking-wider mb-2">
                Your designation
              </label>
              <input
                id="designation"
                name="designation"
                type="text"
                placeholder="Principal, Director, Coordinator"
                className="w-full px-4 py-3 rounded-lg border border-elevated bg-surface text-navy body-6 placeholder:text-muted/60 focus:border-accent transition-colors duration-300 ease-base"
              />
            </div>
          </div>

          <div>
            <label htmlFor="school" className="block caption-3 text-navy uppercase tracking-wider mb-2">
              School name <span className="text-accent" aria-hidden="true">*</span>
            </label>
            <input
              id="school"
              name="school"
              type="text"
              required
              placeholder="Full name of your school"
              aria-invalid={Boolean(errors.school)}
              aria-describedby={errors.school ? 'school-error' : undefined}
              className="w-full px-4 py-3 rounded-lg border border-elevated bg-surface text-navy body-6 placeholder:text-muted/60 focus:border-accent transition-colors duration-300 ease-base"
            />
            {errors.school && (
              <p id="school-error" className="mt-1 caption-4 text-amber flex items-center gap-1" role="alert">
                <AlertCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                <span>{errors.school}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block caption-3 text-navy uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share your school board, existing computer room setup, or preferred briefing dates."
              className="w-full px-4 py-3 rounded-lg border border-elevated bg-surface text-navy body-6 placeholder:text-muted/60 focus:border-accent transition-colors duration-300 ease-base resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center py-3">
            Request curriculum briefing
          </button>

          <p className="caption-5 text-muted text-center">
            We reply within 24 hours. Zero obligation at the first briefing.
          </p>
        </div>
      </form>
    </div>
  );
}
