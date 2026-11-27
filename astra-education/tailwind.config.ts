import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        surface: '#F4F7FB',
        card: '#FFFFFF',
        elevated: '#E2E8F0',
        control: '#CBD5E1',
        warm: '#FFFBEB',
        navy: '#0B1B36',
        accent: '#2563EB',
        amber: '#D97706',
        ink: '#0F172A',
        muted: '#475569',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      transitionTimingFunction: {
        base: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
