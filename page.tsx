import { COMPANY, LEADERSHIP, AI_TEAM_ROLES } from '@/config/company';
import { TeamReveal } from '@/components/pages/TeamReveal';

export const metadata = { title: `Team — ${COMPANY.name}`, description: 'Meet the LIMEPAK leadership team.' };

export default function TeamPage() {
  return <div className="py-16 md:py-24"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><header className="text-center mb-12"><p className="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-3">The team</p><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">People + intelligence.</h1><p className="text-lg text-gray-600 dark:text-gray-300">LIMEPAK combines human leadership with AI-powered teams.</p></header><TeamReveal leadership={LEADERSHIP} aiRoles={AI_TEAM_ROLES} /></div></div>;
}
