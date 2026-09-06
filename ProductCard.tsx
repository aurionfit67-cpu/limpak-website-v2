'use client';

import { useState } from 'react';
import { ProductCategory } from '@/config/company';
import { Button } from '@/components/common/Button';
import { Card, CardContent } from '@/components/common/Card';

export interface ProductCardProps {
  product: ProductCategory;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Gradient colors based on index for variety
  const gradientClasses = [
    'from-lime-500/10 to-lime-500/20',
    'from-blue-500/10 to-blue-500/20',
    'from-purple-500/10 to-purple-500/20',
    'from-green-500/10 to-green-500/20',
    'from-orange-500/10 to-orange-500/20',
    'from-pink-500/10 to-pink-500/20',
    'from-teal-500/10 to-teal-500/20',
    'from-cyan-500/10 to-cyan-500/20',
  ];

  const gradientClass = gradientClasses[index % gradientClasses.length];

  return (
    <Card
      variant="glass"
      hoverEffect
      interactive
      className={`h-full ${gradientClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-4">
          <span className="text-4xl" role="img" aria-label={product.title}>
            {product.icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex-grow">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* CTA */}
        <div className="mt-auto">
          <Button
            variant="outline"
            size="sm"
            href={product.ctaLink}
            className="w-full"
          >
            {product.ctaText}
          </Button>
        </div>

        {/* Hover overlay effect */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 to-transparent rounded-2xl pointer-events-none" />
        )}
      </CardContent>
    </Card>
  );
}
