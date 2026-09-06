import Link from 'next/link';
import { NAVIGATION, COMPANY } from '@/config/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-lime-500/5 via-transparent to-lime-500/5 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-lime-600 dark:text-lime-400 mb-4" style={{ fontStyle: 'italic' }}>
              LIMEPAK
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {COMPANY.shortDescription}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-lime-600 dark:text-lime-400 mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.footer.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Build */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-lime-600 dark:text-lime-400 mb-4 uppercase tracking-wider">
              What We Build
            </h3>
            <ul className="space-y-3">
              {COMPANY.focusAreas.slice(0, 5).map((area, index) => (
                <li key={index}>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Focus Areas */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-lime-600 dark:text-lime-400 mb-4 uppercase tracking-wider invisible md:visible lg:visible">
              More
            </h3>
            <ul className="space-y-3 md:mt-10 lg:mt-0">
              {COMPANY.focusAreas.slice(5).map((area, index) => (
                <li key={index}>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            Building the future, one system at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
