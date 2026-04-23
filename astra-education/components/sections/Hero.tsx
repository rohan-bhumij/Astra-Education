import Link from 'next/link';
import { home } from '@/content/home';

export default function Hero() {
  const { hero } = home;

  return (
    <section
      className="bg-off-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-5 font-inter">
              NEP 2020 Aligned · Classes 1–9 · Assam
            </p>
            <h1 className="font-jakarta font-bold text-navy text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6">
              {hero.headline}
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 font-inter max-w-lg">
              {hero.subheading}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center px-7 py-3.5 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors duration-150 font-inter text-sm"
              >
                {hero.primaryCta.label}
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center px-7 py-3.5 border-2 border-navy text-navy font-semibold rounded-md hover:bg-navy hover:text-white transition-colors duration-150 font-inter text-sm"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
            <p className="text-muted text-xs font-inter">{hero.footnote}</p>
          </div>

          {/* Illustration */}
          <div className="order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-full" aria-hidden="true">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
      role="presentation"
    >
      {/* Background circle */}
      <circle cx="260" cy="240" r="200" fill="#EFF6FF" />

      {/* Circuit board lines */}
      <g stroke="#2563EB" strokeWidth="1.5" opacity="0.25">
        <line x1="100" y1="240" x2="420" y2="240" />
        <line x1="260" y1="80" x2="260" y2="400" />
        <line x1="140" y1="140" x2="380" y2="380" />
        <line x1="380" y1="140" x2="140" y2="380" />
        <line x1="100" y1="180" x2="420" y2="180" />
        <line x1="100" y1="300" x2="420" y2="300" />
        <line x1="180" y1="80" x2="180" y2="400" />
        <line x1="340" y1="80" x2="340" y2="400" />
      </g>

      {/* Connection nodes */}
      <g fill="#2563EB" opacity="0.35">
        <circle cx="180" cy="180" r="5" />
        <circle cx="340" cy="180" r="5" />
        <circle cx="180" cy="300" r="5" />
        <circle cx="340" cy="300" r="5" />
        <circle cx="260" cy="120" r="4" />
        <circle cx="260" cy="360" r="4" />
        <circle cx="120" cy="240" r="4" />
        <circle cx="400" cy="240" r="4" />
      </g>

      {/* Central star/asterisk */}
      <g stroke="#0A1F44" strokeWidth="3" strokeLinecap="round" opacity="0.9">
        <line x1="260" y1="200" x2="260" y2="280" />
        <line x1="220" y1="220" x2="300" y2="260" />
        <line x1="300" y1="220" x2="220" y2="260" />
      </g>
      <circle cx="260" cy="240" r="28" fill="#0A1F44" />
      <circle cx="260" cy="240" r="14" fill="#2563EB" />

      {/* Orbiting dots */}
      <circle cx="260" cy="158" r="8" fill="#0A1F44" />
      <circle cx="342" cy="240" r="8" fill="#2563EB" />
      <circle cx="260" cy="322" r="8" fill="#0A1F44" />
      <circle cx="178" cy="240" r="8" fill="#2563EB" />

      {/* Corner brackets — top left */}
      <path d="M80 100 L80 80 L100 80" stroke="#0A1F44" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Corner brackets — bottom right */}
      <path d="M440 380 L440 400 L420 400" stroke="#0A1F44" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Corner brackets — top right */}
      <path d="M440 100 L440 80 L420 80" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Corner brackets — bottom left */}
      <path d="M80 380 L80 400 L100 400" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Floating label chips */}
      <g>
        <rect x="60" y="210" width="80" height="28" rx="6" fill="#0A1F44" opacity="0.9" />
        <text x="100" y="229" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="600">ROBOTICS</text>
      </g>
      <g>
        <rect x="374" y="150" width="68" height="28" rx="6" fill="#2563EB" opacity="0.9" />
        <text x="408" y="169" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="600">CODING</text>
      </g>
      <g>
        <rect x="374" y="318" width="46" height="28" rx="6" fill="#F59E0B" opacity="0.9" />
        <text x="397" y="337" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="600">AI</text>
      </g>

      {/* Decorative small dots scatter */}
      <circle cx="150" cy="120" r="3" fill="#2563EB" opacity="0.4" />
      <circle cx="390" cy="100" r="3" fill="#0A1F44" opacity="0.4" />
      <circle cx="410" cy="340" r="3" fill="#2563EB" opacity="0.4" />
      <circle cx="120" cy="350" r="3" fill="#0A1F44" opacity="0.4" />
    </svg>
  );
}
