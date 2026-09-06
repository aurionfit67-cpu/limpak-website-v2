import { COMPANY, FOUNDER } from '@/config/company';

export const metadata = { title: `Founder — ${COMPANY.name}`, description: `${FOUNDER.name}, founder and CEO of ${COMPANY.name}.` };

export default function FounderPage() { return <div className="py-16 md:py-24"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-3">Founder</p><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">{FOUNDER.name}</h1><p className="text-xl text-lime-600 dark:text-lime-400 mb-8">{FOUNDER.title}</p><div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-left"><p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{FOUNDER.description}</p><p className="font-semibold text-gray-900 dark:text-white">Vision</p><p className="text-gray-600 dark:text-gray-300 mt-2">{FOUNDER.vision}</p></div></div></div>; }
