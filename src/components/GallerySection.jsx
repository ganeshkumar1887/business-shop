import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { Sparkles, Maximize2, X, MessageCircle, ExternalLink } from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function GallerySection({ limit = null }) {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const tabs = [
    { id: 'all', label: 'All Designs' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'gifts', label: 'Gifts' },
    { id: 'thermocol', label: 'Thermocol' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'custom-designs', label: 'Custom Designs' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleWhatsAppInquiry = (item) => {
    const message = `Hello ${SHOP_CONFIG.shopName}, I saw your gallery design: *"${item.title}"* (${item.occasion}) on your website. I want a similar design customized for my celebration. Please share the pricing and details!`;
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-20 bg-brand-cream-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
            <span>Our Craftsmanship Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 tracking-tight">
            Our Recent Designs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Browse through real custom thermocol name boards, wedding entries, and celebration decors made by our shop.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-brand-purple-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-brand-cream-200 border border-brand-cream-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-brand-cream-300 hover:border-brand-purple-400 shadow-sm hover:shadow-luxury-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-brand-cream-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950/95 via-brand-purple-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-brand-gold-300 uppercase tracking-widest mb-1">
                  {item.categoryLabel} • {item.occasion}
                </span>
                <h3 className="font-serif font-bold text-base leading-tight mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-cream-200 line-clamp-2 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs font-semibold text-brand-gold-300 pt-2 border-t border-white/20">
                  <span>Click to view full photo</span>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Always-visible caption below photo for mobile friendliness */}
              <div className="p-4 bg-white block group-hover:hidden">
                <span className="text-[10px] font-bold text-brand-rose-600 uppercase tracking-wider block mb-1">
                  {item.occasion}
                </span>
                <h4 className="font-serif font-bold text-sm text-brand-purple-950 line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-brand-cream-300 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Details & WhatsApp CTA */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-brand-purple-100 text-brand-purple-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {lightboxItem.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Crafted for: {lightboxItem.client}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-brand-purple-950">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {lightboxItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  <span>Want something similar for your function?</span>
                </div>
                <button
                  onClick={() => handleWhatsAppInquiry(lightboxItem)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire for This Design on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
