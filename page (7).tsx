import { COMPANY, FOUNDER } from '@/config/company';
import { Card, CardContent } from '@/components/common/Card';

export const metadata = { title: `About — ${COMPANY.name}`, description: COMPANY.description };

export default function AboutPage() {
  return <div className="py-16 md:py-24"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><header className="text-center mb-12"><p className="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-3">About LIMEPAK</p><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5">We build digital products.</h1><p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{COMPANY.description}</p></header><div className="grid md:grid-cols-2 gap-6"><Card variant="bordered"><CardContent><h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">What we do</h2><p className="text-gray-600 dark:text-gray-300">We design and build apps, websites, SaaS platforms, AI systems, automation and digital products from idea through deployment.</p></CardContent></Card><Card variant="bordered"><CardContent><h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our vision</h2><p className="text-gray-600 dark:text-gray-300">{FOUNDER.vision}</p></CardContent></Card></div></div></div>;
}
