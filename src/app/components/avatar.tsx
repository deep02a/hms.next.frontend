import React from 'react';

export function Avatar({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}
