import Link from 'next/link';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  label,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue rounded-md';

  const variants = {
    primary:
      'bg-blue text-white hover:bg-blue/90 active:bg-blue/80',
    outline:
      'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    white:
      'bg-white text-blue hover:bg-off-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </Link>
  );
}
