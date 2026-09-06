import { COMPANY, PRODUCTS } from '@/config/company';
import { ProductCard } from '@/components/pages/ProductCard';

export const metadata = { title: `Products — ${COMPANY.name}`, description: 'Explore the digital products and systems LIMEPAK builds.' };

export default function ProductsPage() {
  return <div className="py-16 md:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><header className="text-center mb-12"><p className="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-3">What we build</p><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Products & services</h1><p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{COMPANY.tagline}</p></header><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{PRODUCTS.map((product, index) => <div id={product.id} key={product.id}><ProductCard product={product} index={index} /></div>)}</div></div></div>;
}
