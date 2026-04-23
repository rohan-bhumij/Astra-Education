import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { meta } from '@/content/meta';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(meta.default.siteUrl),
  title: {
    default: meta.default.title,
    template: '%s | Astra Education',
  },
  description: meta.default.description,
  keywords: meta.default.keywords,
  authors: [{ name: 'Astra Education' }],
  creator: 'Astra Education',
  publisher: 'Astra Education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: meta.default.siteUrl,
    siteName: 'Astra Education',
    title: meta.default.title,
    description: meta.default.description,
    images: [
      {
        url: meta.default.ogImage,
        width: 1200,
        height: 630,
        alt: 'Astra Education — Robotics, Coding & AI for Schools in Assam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.default.title,
    description: meta.default.description,
    images: [meta.default.ogImage],
    creator: '@astraeducation',
  },
  alternates: {
    canonical: meta.default.siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Astra Education',
  url: meta.default.siteUrl,
  logo: `${meta.default.siteUrl}/images/logo.svg`,
  description: meta.default.description,
  foundingLocation: {
    '@type': 'Place',
    name: 'Dibrugarh, Assam, India',
  },
  areaServed: {
    '@type': 'State',
    name: 'Assam',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@astraeducation.in',
    availableLanguage: ['English', 'Assamese'],
  },
  sameAs: [
    'https://linkedin.com/company/astra-education',
    'https://instagram.com/astraeducation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
