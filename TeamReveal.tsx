'use client';

import type { LeadershipMember } from '@/config/company';
import { useSecretReveal } from '@/components/common/SecretRevealContext';

export function TeamReveal({ leadership, aiRoles }: { leadership: LeadershipMember[]; aiRoles: { role: string; status: string }[] }) {
  const { isRevealed } = useSecretReveal();
  const visible = isRevealed ? leadership : leadership.filter(member => member.status === 'public');
  return <div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{visible.map(member => <article key={member.role} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"><div className="text-sm font-semibold text-lime-600 dark:text-lime-400 mb-2">{member.role}</div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h2><p className="text-gray-500 dark:text-gray-400 mt-1">{member.title}</p><p className="text-gray-600 dark:text-gray-300 text-sm mt-4">{member.description}</p></article>)}</div><div className="mt-10 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-6"><h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI team</h2><div className="flex flex-wrap gap-3">{aiRoles.map(item => <span key={item.role} className="rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-600 dark:text-gray-300">{isRevealed ? item.role : 'CLASSIFIED'}</span>)}</div><p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{isRevealed ? 'Additional team roles are now revealed.' : 'Hold the LIMEPAK logo in the navigation for 3 seconds to reveal classified roles.'}</p></div></div>;
}
