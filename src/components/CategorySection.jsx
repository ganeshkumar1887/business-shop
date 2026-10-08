import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategorySection() {
  return (
    <section className="py-16 lg:py-20 bg-brand-cream-50 bg-festive-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
            <span>प्रमुख कैटेगरीज (Featured Collections)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 mb-3 tracking-tight">
            हमारे कलेक्शन देखें
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            आपकी शादी, जन्मदिन और हर उत्सव को यादगार बनाने के लिए सब कुछ।
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-cream-300 hover:border-brand-purple-300 shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image with Zoom Effect & Emoji Badge */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Emoji Float Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5 border border-brand-cream-200">
                  <span className="text-base">{cat.emoji}</span>
                  <span>{cat.itemCount}</span>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-purple-950 mb-1.5 group-hover:text-brand-purple-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <Link
                  to={`/products?category=${cat.slug}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-brand-cream-100 group-hover:bg-gradient-to-r group-hover:from-brand-purple-900 group-hover:to-brand-purple-800 text-brand-purple-950 group-hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs"
                >
                  <span>कलेक्शन देखें (View)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
