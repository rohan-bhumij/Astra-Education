'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: PlaceholderImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-navy flex items-center justify-center ${className}`}
        style={{ width, height }}
        aria-label={alt}
        role="img"
      >
        <svg
          className="w-12 h-12 text-white/20"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 16l3.75-3.75 2.5 2.5 3.25-3.25 4 4M4.75 6.75h14.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
