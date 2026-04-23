'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/content/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Astra Education — Home">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span className="font-jakarta font-bold text-navy text-lg leading-tight hidden sm:block">
            {site.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 font-inter ${
                  pathname === item.href
                    ? 'text-blue'
                    : 'text-text hover:text-blue'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href={site.ctaButton.href}
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-blue text-white text-sm font-semibold hover:bg-blue/90 transition-colors duration-150 font-inter"
          >
            {site.ctaButton.label}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-text hover:text-blue transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col px-4 pt-4 pb-8 gap-1" role="list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3.5 rounded-lg text-base font-medium transition-colors font-inter ${
                    pathname === item.href
                      ? 'text-blue bg-blue/5'
                      : 'text-text hover:bg-off-white'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href={site.ctaButton.href}
                className="block text-center px-5 py-3.5 rounded-lg bg-blue text-white text-base font-semibold hover:bg-blue/90 transition-colors font-inter"
              >
                {site.ctaButton.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
