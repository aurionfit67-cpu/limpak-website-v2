'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/config/company';
import { useSecretReveal } from '@/components/common/SecretRevealContext';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHoldActive, setIsLogoHoldActive] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { reveal } = useSecretReveal();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const startLogoHold = () => {
    // Start hold timer for secret reveal
    if (holdTimer.current) clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(() => {
      setIsLogoHoldActive(true);
      reveal();
    }, 3000);
  };

  const cancelLogoHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    setIsLogoHoldActive(false);
  };

  useEffect(() => () => { if (holdTimer.current) clearTimeout(holdTimer.current); }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-all duration-300"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onPointerDown={startLogoHold}
              onPointerUp={cancelLogoHold}
              onPointerLeave={cancelLogoHold}
              onPointerCancel={cancelLogoHold}
              aria-label="LIMEPAK Home"
            >
              <div
                className={`text-2xl font-bold transition-all duration-300 ${
                  isLogoHoldActive
                    ? 'text-lime-500 scale-110 glow'
                    : 'text-lime-600 group-hover:text-lime-500'
                }`}
                style={{ fontStyle: 'italic' }}
              >
                LIMEPAK
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-lime-500/5 hover:text-lime-600 dark:hover:bg-lime-500/10 dark:hover:text-lime-400'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:bg-lime-500/20 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 animate-slide-down">
            <div className="px-4 py-4 space-y-2">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-lime-500/5 hover:text-lime-600 dark:hover:bg-lime-500/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
}
