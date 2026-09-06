'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      href,
      external = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-lime-500 text-gray-900 hover:bg-lime-400 active:bg-lime-600 focus-visible:ring-lime-500',
      secondary:
        'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600 focus-visible:ring-gray-500',
      outline:
        'border-2 border-lime-500 text-lime-600 dark:text-lime-400 hover:bg-lime-50 dark:hover:bg-lime-500/10 active:bg-lime-100 dark:active:bg-lime-500/20 focus-visible:ring-lime-500',
      ghost:
        'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 focus-visible:ring-gray-500',
      glass:
        'bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-gray-800/70 active:bg-white/30 dark:active:bg-gray-800 focus-visible:ring-white',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-5 py-2.5 text-base gap-2',
      lg: 'px-7 py-3.5 text-lg gap-2.5',
      xl: 'px-9 py-[1.125rem] text-xl gap-3',
    };

    const combinedClassName = `
      ${baseStyles}
      ${variants[variant]}
      ${sizes[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={combinedClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isLoading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
            ) : null}
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClassName}>
          {isLoading ? (
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
          ) : null}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
