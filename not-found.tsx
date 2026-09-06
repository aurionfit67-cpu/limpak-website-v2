import Link from 'next/link';

export default function NotFound() {
  return <div className="min-h-[60vh] flex items-center justify-center px-4 py-16"><div className="text-center max-w-xl"><p className="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-3">404</p><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Page not found.</h1><p className="text-lg text-gray-600 dark:text-gray-300 mb-8">The page you requested does not exist or may have moved.</p><Link href="/" className="inline-flex items-center justify-center rounded-xl bg-lime-500 px-7 py-3.5 font-medium text-gray-900 hover:bg-lime-400">Back to LIMEPAK</Link></div></div>;
}
