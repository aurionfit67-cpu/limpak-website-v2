import { Metadata } from 'next';
import { COMPANY, PRODUCTS, NAVIGATION } from '@/config/company';
import { Button } from '@/components/common/Button';
import { Card, CardContent } from '@/components/common/Card';
import { ProductCard } from '@/components/pages/ProductCard';

export const metadata: Metadata = {
  title: `LIMEPAK — ${COMPANY.tagline}`,
  description: COMPANY.description,
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-lime-500/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{ fontStyle: 'italic' }}>
              LIMEPAK
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-slide-up delay-[300ms]">
              {COMPANY.tagline}
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up delay-[600ms]">
              {COMPANY.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-[900ms]">
              <Button variant="primary" size="lg" href="/about">
                Explore LIMEPAK
              </Button>
              <Button variant="outline" size="lg" href="/download">
                Download App
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Visual - Human + AI + Software */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-4xl h-64 md:h-80">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl animate-pulse-soft" />
              
              {/* Central node - LIMEPAK Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl shadow-2xl shadow-lime-500/30 animate-float flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-2xl" style={{ fontStyle: 'italic' }}>
                  LP
                </span>
              </div>
              
              {/* Human Node */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl shadow-blue-500/30 animate-pulse-soft flex items-center justify-center">
                <span className="text-white text-2xl">👤</span>
              </div>
              
              {/* AI Node */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-xl shadow-purple-500/30 animate-pulse-soft flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <span className="text-white text-2xl">🤖</span>
              </div>
              
              {/* Software Node */}
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl shadow-green-500/30 animate-pulse-soft flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <span className="text-white text-2xl">💻</span>
              </div>
              
              {/* Connected Systems Node */}
              <div className="absolute bottom-1/4 right-1/3 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-xl shadow-orange-500/30 animate-pulse-soft flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
                <span className="text-white text-2xl">🌐</span>
              </div>
              
              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#a3e635', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#4ade80', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M100 50 Q200 25 300 50"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse-soft"
                />
                <path
                  d="M100 150 Q200 175 300 150"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse-soft"
                  style={{ animationDelay: '0.3s' }}
                />
                <path
                  d="M150 50 Q200 100 150 150"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse-soft"
                  style={{ animationDelay: '0.6s' }}
                />
                <path
                  d="M250 50 Q200 100 250 150"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse-soft"
                  style={{ animationDelay: '0.9s' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              LIMEPAK creates innovative digital solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured: LAYER Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="glass" className="p-8 md:p-12">
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1 bg-lime-500/10 text-lime-600 dark:text-lime-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    Featured Product
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    LAYER
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Intelligent digital workspace designed to help users organize, build and interact with their digital work through a unified interface.
                  </p>
                  <Button variant="primary" href="/layer">
                    Open LAYER
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-lime-500/20 to-lime-500/5 rounded-2xl flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl shadow-xl shadow-lime-500/30 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold" style={{ fontStyle: 'italic' }}>
                        LYR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {NAVIGATION.main.map((item) => (
              <Button key={item.label} variant="ghost" href={item.href}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
