import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductGrid({ limit = null, initialCategory = 'all', showFilters = true, onQuickView, onOrderNow }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: 'all', label: 'सभी आइटम्स (All)' },
    { id: 'hindu-design', label: '🕉️ हिन्दू विवाह' },
    { id: 'islamic-design', label: '🌙 इस्लामिक निकाह' },
    { id: 'birthday-design', label: '🎂 बर्थडे डेकोर' },
    { id: 'anniversary-gifts', label: '❤️ सालगिरह' },
    { id: 'gift-items', label: '🎁 गिफ्ट आइटम्स' }
  ];

  const filteredProducts = PRODUCTS.filter(product => {
    if (activeCategory === 'all') return true;
    return product.categoryId === activeCategory;
  });

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-rose-50 text-brand-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-rose-600" />
              <span>हाथ से तैयार की गई डिजाइन्स</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 tracking-tight">
              प्रमुख प्रोडक्ट्स एवं डिजाइन्स
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              वेडिंग वेलकम बोर्ड्स, पर्सनलाइज्ड कटआउट्स, और गिफ्ट आइटम्स।
            </p>
          </div>

          {limit && (
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-purple-900 hover:text-brand-rose-600 transition-colors"
            >
              <span>सभी ({PRODUCTS.length}) प्रोडक्ट्स देखें</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Filter Pills */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 pb-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-brand-purple-900 text-white shadow-md'
                    : 'bg-brand-cream-100 text-slate-700 hover:bg-brand-cream-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onOrderNow={onOrderNow}
            />
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center py-12 bg-brand-cream-50 rounded-3xl border border-brand-cream-300">
            <p className="text-slate-500 font-medium">इस कैटेगरी में कोई प्रोडक्ट उपलब्ध नहीं है।</p>
          </div>
        )}

      </div>
    </section>
  );
}
