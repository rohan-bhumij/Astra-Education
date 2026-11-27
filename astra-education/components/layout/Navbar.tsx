'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { site } from '@/content/site';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none"
        role="banner"
      >
        <nav
          className="pointer-events-auto w-full sm:w-auto bg-white/85 backdrop-blur-md border border-elevated shadow-sm rounded-2xl p-2 flex items-center justify-between gap-4 lg:gap-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-surface transition-colors duration-300 ease-base shrink-0"
            aria-label="Astra Education home"
          >
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={32}
              height={32}
              unoptimized
              className="w-8 h-8 rounded-md object-contain"
              priority
            />
            <span className="title-4 text-navy font-semibold whitespace-nowrap">
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {site.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg title-4 whitespace-nowrap transition-[background-color,color] duration-300 ease-base ${
                      isActive
                        ? 'bg-surface text-accent border border-elevated'
                        : 'text-muted hover:text-navy hover:bg-surface'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link href={site.ctaButton.href} className="btn-header whitespace-nowrap">
              <span>{site.ctaButton.label}</span>
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 rounded-lg bg-surface border border-elevated flex items-center justify-center text-navy hover:bg-elevated active:scale-[0.98] transition-[background-color,transform] duration-300 ease-base"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 bg-navy rounded-sm origin-center transition-transform duration-500 ease-base ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy rounded-sm transition-[opacity,transform] duration-300 ease-base ${
                  menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy rounded-sm origin-center transition-transform duration-500 ease-base ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Full-height Mobile Menu Panel */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-opacity duration-500 ease-base ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto">
          <ul className="flex flex-col gap-2" role="list">
            {site.nav.map((item, idx) => {
              const isActive = pathname === item.href;
              const delayMs = Math.min(idx * 60, 400);
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: menuOpen ? `${delayMs}ms` : '0ms' }}
                  className={`transition-[opacity,transform] duration-500 ease-base ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <Link
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`flex items-center justify-between px-4 py-4 rounded-xl heading-5 transition-colors duration-300 ease-base ${
                      isActive
                        ? 'bg-surface text-accent border border-elevated'
                        : 'text-navy hover:bg-surface'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            style={{ transitionDelay: menuOpen ? `${Math.min(site.nav.length * 60, 400)}ms` : '0ms' }}
            className={`pt-6 border-t border-elevated space-y-4 transition-[opacity,transform] duration-500 ease-base ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              href={site.ctaButton.href}
              tabIndex={menuOpen ? 0 : -1}
              className="btn-primary w-full justify-center py-3"
            >
              <span>{site.ctaButton.label}</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <p className="caption-4 text-muted text-center">{site.foundedBy}</p>
          </div>
        </div>
      </div>
    </>
  );
}
