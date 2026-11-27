import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'header';
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  label,
  href,
  variant = 'primary',
  className = '',
  icon,
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    header: 'btn-header',
  };

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      <span>{label}</span>
      {icon}
    </Link>
  );
}
