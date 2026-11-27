'use client';

import Image from 'next/image';
import { useState } from 'react';
import { UserRound } from 'lucide-react';

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
        className={`bg-slate-100 flex flex-col items-center justify-center gap-2 text-slate-400 ${className}`}
        aria-label={alt}
        role="img"
      >
        <UserRound size={48} strokeWidth={1.25} aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
