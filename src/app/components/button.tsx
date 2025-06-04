import * as React from 'react';

export function Button({ children, className = '', variant = 'default', size = 'default', ...props }: any) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants: Record<string, string> = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };
  const sizes: Record<string, string> = {
    default: 'h-10 px-4',
    icon: 'h-10 w-10',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
