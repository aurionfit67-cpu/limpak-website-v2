'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'glass' | 'bordered';
  hoverEffect?: boolean;
  interactive?: boolean;
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hoverEffect = false,
      interactive = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'relative rounded-2xl transition-all duration-300';

    const variants = {
      default: 'bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800',
      gradient: 'bg-gradient-to-br from-lime-500/5 to-lime-500/10 dark:from-lime-500/10 dark:to-lime-500/5',
      glass: 'bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl border border-white/10 dark:border-gray-700/50',
      bordered: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
    };

    const hoverStyles = hoverEffect
      ? 'hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-lime-500/10'
      : '';

    const interactiveStyles = interactive
      ? 'cursor-pointer active:scale-[0.98]'
      : '';

    const combinedClassName = `
      ${baseStyles}
      ${variants[variant]}
      ${hoverStyles}
      ${interactiveStyles}
      ${className}
    `;

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header Component
export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`px-6 py-5 border-b border-gray-100 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  );
}

// Card Content Component
export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 py-5 ${className}`}>{children}</div>;
}

// Card Footer Component
export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`px-6 py-4 border-t border-gray-100 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
