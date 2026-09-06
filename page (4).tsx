import { COMPANY, PROCESS_STEPS } from '@/config/company';

export const metadata = { title: `How It Works — ${COMPANY.name}`, description: 'See how LIMEPAK turns ideas into digital products.' };

export default function HowItWorksPage() {
  return <div className="py-16 md:py-24"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><header className="text-center mb-14"><p className="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-3">Our process</p><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Idea to launch.</h1><p className="text-lg text-gray-600 dark:text-gray-300">A clear process for turning ambitious ideas into real systems.</p></header><ol className="space-y-6">{PROCESS_STEPS.map(step => <li key={step.number} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8 flex gap-5"><div className="text-lime-600 dark:text-lime-400 font-mono font-bold text-xl">{step.number}</div><div><h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.icon} {step.title}</h2><p className="text-gray-600 dark:text-gray-300">{step.description}</p></div></li>)}</ol></div></div>;
}
