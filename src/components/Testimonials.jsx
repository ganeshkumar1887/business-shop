import React from 'react';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-rose-50 text-brand-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-rose-600" />
            <span>Loved by 5000+ Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 tracking-tight">
            Customer Reviews &amp; Stories
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Hear what couples and event planners say about our custom designs and gift items.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-cream-50/70 hover:bg-white rounded-3xl p-6 border border-brand-cream-300 hover:border-brand-purple-300 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold-500 text-brand-gold-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-purple-200" />
                </div>

                {/* Event Tag */}
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-brand-purple-900 bg-brand-purple-100/70 px-2.5 py-0.5 rounded-md">
                    {rev.event}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Avatar & Info */}
              <div className="pt-4 border-t border-brand-cream-200 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-gold-400 shadow-xs"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-purple-950 flex items-center gap-1">
                    <span>{rev.name}</span>
                    {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />}
                  </h4>
                  <p className="text-[11px] text-slate-500">{rev.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
