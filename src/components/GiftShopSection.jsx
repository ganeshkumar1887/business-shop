import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, ArrowRight, Star, Heart, Flame, ShieldCheck, Truck, Palette, Clock } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { getFeaturedProducts, getProductsByCategory } from '../data/products';
import { birthdayHamperImg, weddingHamperImg, coupleHamperImg, heroImg2 } from '../data/images';
import ProductCard from './ProductCard';

export default function GiftShopSection({ onQuickView, onOrderNow }) {
  const [activeTab, setActiveTab] = useState('all');

  // Key 9 highlighted visual categories with crystal clear real photos and high-contrast styling
  const highlightCategories = [
    {
      id: 'birthday-gifts',
      name: 'Birthday Gifts',
      hindiName: 'बर्थडे स्पेशल गिफ्ट्स',
      emoji: '🎂',
      slug: 'birthday-gifts',
      count: '35+ Gifts',
      image: birthdayHamperImg,
      badge: 'Popular',
      badgeColor: 'bg-rose-500 text-white'
    },
    {
      id: 'wedding-gifts',
      name: 'Wedding Gifts',
      hindiName: 'शादी व शुभ विवाह',
      emoji: '💍',
      slug: 'wedding-gifts',
      count: '45+ Items',
      image: weddingHamperImg,
      badge: 'Royal',
      badgeColor: 'bg-amber-400 text-slate-950'
    },
    {
      id: 'couple-romantic-gifts',
      name: 'Couple & Romantic',
      hindiName: 'कपल व रोमांटिक गिफ्ट्स',
      emoji: '❤️',
      slug: 'couple-romantic-gifts',
      count: '40+ Items',
      image: coupleHamperImg,
      badge: 'Trending',
      badgeColor: 'bg-red-500 text-white'
    },
    {
      id: 'baby-gifts',
      name: 'Baby & Newborn',
      hindiName: 'न्यू बॉर्न बेबी गिफ्ट्स',
      emoji: '👶',
      slug: 'baby-gifts',
      count: '25+ Items',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop',
      badge: 'Cute',
      badgeColor: 'bg-sky-500 text-white'
    },
    {
      id: 'soft-toys',
      name: 'Soft Toys & Teddies',
      hindiName: 'सॉफ्ट टॉयज व टेडी',
      emoji: '🧸',
      slug: 'soft-toys',
      count: '30+ Items',
      image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=800&auto=format&fit=crop',
      badge: 'Super Soft',
      badgeColor: 'bg-amber-400 text-slate-950'
    },
    {
      id: 'personalized-gifts',
      name: 'Personalized Gifts',
      hindiName: 'कस्टमाइज्ड नाम व फोटो',
      emoji: '✨',
      slug: 'personalized-gifts',
      count: '60+ Items',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
      badge: 'Custom Made',
      badgeColor: 'bg-purple-600 text-white'
    },
    {
      id: 'religious-gifts',
      name: 'Religious & Idols',
      hindiName: 'धार्मिक व पूजा गिफ्ट्स',
      emoji: '🕉️',
      slug: 'religious-gifts',
      count: '35+ Items',
      image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=800&auto=format&fit=crop',
      badge: 'Devotional',
      badgeColor: 'bg-amber-500 text-slate-950'
    },
    {
      id: 'gift-hampers',
      name: 'Luxury Hampers',
      hindiName: 'प्रीमियम गिफ्ट हैंपर्स',
      emoji: '🎁',
      slug: 'gift-hampers',
      count: '30+ Hampers',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
      badge: 'Gift Ready',
      badgeColor: 'bg-fuchsia-600 text-white'
    },
    {
      id: 'thermocol-event-decoration',
      name: 'Thermocol Designs',
      hindiName: '3D स्टेज नाम व बोर्ड',
      emoji: '👑',
      slug: 'thermocol-event-decoration',
      count: '50+ Designs',
      image: heroImg2,
      badge: 'Our Specialty',
      badgeColor: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950'
    },
  ];

  // Quick category tabs for instant product filtering
  const quickTabs = [
    { id: 'all', label: '🔥 All Bestsellers', slug: null },
    { id: 'birthday-gifts', label: '🎂 Birthday', slug: 'birthday-gifts' },
    { id: 'wedding-gifts', label: '💍 Wedding', slug: 'wedding-gifts' },
    { id: 'couple-romantic-gifts', label: '❤️ Couple', slug: 'couple-romantic-gifts' },
    { id: 'personalized-gifts', label: '✨ Personalized', slug: 'personalized-gifts' },
    { id: 'soft-toys', label: '🧸 Soft Toys', slug: 'soft-toys' },
    { id: 'gift-hampers', label: '🎁 Hampers', slug: 'gift-hampers' },
    { id: 'religious-gifts', label: '🕉️ Religious', slug: 'religious-gifts' },
    { id: 'thermocol-event-decoration', label: '👑 Thermocol', slug: 'thermocol-event-decoration' },
  ];

  // Get products based on active tab
  const displayedProducts = activeTab === 'all'
    ? getFeaturedProducts(8)
    : getProductsByCategory(activeTab).slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-cream-50 via-white to-brand-cream-100 relative overflow-hidden border-b border-brand-cream-300">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple-300/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-gold-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* ============================================================ */}
        {/* 🌟 LUXURY SECTION HEADER */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          
          {/* Sparkling Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-rose-500/10 border border-amber-400/40 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs sm:text-sm font-outfit font-extrabold uppercase tracking-widest bg-gradient-to-r from-brand-purple-950 via-brand-purple-800 to-brand-rose-700 bg-clip-text text-transparent">
              Handcrafted &amp; Curated Gift Gallery
            </span>
            <Sparkles className="w-4 h-4 text-brand-rose-500" />
          </div>

          {/* Main Title with Premium Typography */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-black tracking-tight leading-tight text-brand-purple-950 drop-shadow-sm">
              Find the Perfect Gift <span className="inline-block hover:scale-125 transition-transform cursor-pointer">🎁</span>
            </h2>
            <p className="text-sm sm:text-base font-outfit font-semibold text-brand-rose-700 tracking-wide">
              ✨ हर खास रिश्ते व खूबसूरत मौके के लिए यादगार उपहार और 3D थर्माकोल सजावट
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 font-outfit text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Explore personalized LED lamps, handcrafted wedding boards, custom birthday hampers, adorable plush toys, and custom event decor.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 🎨 9 HIGH-IMPACT CATEGORY SHOWCASE CARDS (CRYSTAL CLEAR) */}
        {/* ============================================================ */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-outfit font-black text-lg sm:text-xl text-brand-purple-950 flex items-center gap-2">
              <Gift className="w-5 h-5 text-brand-purple-700" />
              <span>Browse by Category</span>
            </h3>
            <span className="text-xs font-outfit font-semibold text-slate-500">
              Click to view all products
            </span>
          </div>

          {/* Responsive Category Grid with 100% Clear Images & High-Contrast Typography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {highlightCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="group relative h-60 sm:h-72 rounded-3xl overflow-hidden border-2 border-brand-cream-300 hover:border-amber-400 bg-brand-cream-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-4 sm:p-5 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* 100% Crisp & Clear Product Image (No obscuring color tint) */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle top shade for badge contrast */}
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Rich bottom scrim to keep the photo clear above while making text 100% legible */}
                <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

                {/* Inner Border Ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 group-hover:ring-amber-400/60 transition-colors pointer-events-none" />

                {/* Card Top: Floating Emoji Pill & High-Contrast Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-black/40 backdrop-blur-md border border-white/25 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </div>
                  <span className={`text-xs font-outfit font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                {/* Card Bottom: Crystal Clear Frosted Text Pill */}
                <div className="relative z-10 bg-slate-950/75 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-3.5 shadow-xl group-hover:bg-slate-950/90 group-hover:border-amber-400/50 transition-all">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      {/* Hindi Name */}
                      <span className="text-[11px] sm:text-xs font-outfit font-bold text-amber-300 tracking-wide block truncate">
                        {cat.hindiName}
                      </span>
                      {/* English Name */}
                      <h4 className="font-outfit font-black text-base sm:text-lg text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors truncate">
                        {cat.name}
                      </h4>
                      {/* Item Count */}
                      <span className="text-[11px] font-outfit font-semibold text-slate-300">
                        {cat.count}
                      </span>
                    </div>

                    {/* Arrow Button */}
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 group-hover:bg-amber-300 flex items-center justify-center font-bold shadow-md transition-all duration-300 shrink-0 group-hover:scale-105">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 🔥 TRENDING PRODUCTS WITH INTERACTIVE TABS */}
        {/* ============================================================ */}
        <div className="space-y-8 pt-6">
          
          {/* Header & Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-cream-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-outfit font-black uppercase tracking-wider text-brand-rose-600 mb-1">
                <Flame className="w-4 h-4 text-brand-rose-600 animate-pulse" />
                <span>Customer Favorites</span>
              </div>
              <h3 className="font-cinzel font-black text-2xl sm:text-3xl text-brand-purple-950">
                Top Trending Gift Items
              </h3>
              <p className="font-outfit text-sm text-slate-500 mt-1">
                Handpicked bestselling gifts loved by customers for all joyful moments.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-outfit font-extrabold text-sm text-brand-purple-900 hover:text-brand-rose-600 bg-white hover:bg-brand-purple-50 px-4 py-2.5 rounded-xl border border-brand-purple-200 shadow-sm transition-all group shrink-0"
            >
              <span>Explore All 20+ Categories</span>
              <ArrowRight className="w-4 h-4 text-brand-purple-700 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {quickTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-outfit font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-purple-950 text-white shadow-md shadow-brand-purple-950/20 ring-2 ring-brand-purple-400'
                      : 'bg-white text-slate-700 hover:bg-brand-cream-200 border border-brand-cream-300 hover:border-brand-purple-300'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onOrderNow={onOrderNow}
              />
            ))}
          </div>

        </div>

        {/* ============================================================ */}
        {/* 🏆 TRUST BADGES STRIP */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-brand-cream-300 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-slate-900">100% Handcrafted</h5>
              <p className="font-outfit text-xs text-slate-500">Finest thermocol &amp; gift finish</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-slate-900">Custom Names &amp; Photos</h5>
              <p className="font-outfit text-xs text-slate-500">Personalized as per your wish</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-slate-900">Safe Packaging</h5>
              <p className="font-outfit text-xs text-slate-500">Damage-proof secure delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-outfit font-bold text-sm text-slate-900">WhatsApp Ordering</h5>
              <p className="font-outfit text-xs text-slate-500">Instant quotes &amp; mockups</p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 🌟 EXPLORE ALL GIFTS BOTTOM CTA BANNER */}
        {/* ============================================================ */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-purple-950 via-brand-purple-900 to-brand-rose-950 p-8 sm:p-12 text-center text-white shadow-2xl border-2 border-brand-gold-400/40">
          
          {/* Subtle glowing orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-rose-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold-400/20 border border-brand-gold-400/40 text-brand-gold-300 text-xs font-outfit font-extrabold uppercase tracking-widest">
              <span>🎁 Over 20+ Gift &amp; Decor Categories</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-black tracking-tight text-white leading-tight">
              Looking for Something Truly Unique?
            </h3>

            <p className="text-brand-cream-200 font-outfit text-sm sm:text-base leading-relaxed">
              Browse our full catalog or share your custom design requirements on WhatsApp for instant pricing, live mockups, and quick delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold-400 to-amber-500 hover:from-brand-gold-300 hover:to-amber-400 text-slate-950 font-outfit font-black py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm sm:text-base cursor-pointer"
              >
                <Gift className="w-5 h-5 text-slate-950" />
                <span>Explore All 20+ Gift Categories →</span>
              </Link>

              <Link
                to="/marriage-designs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-outfit font-bold py-4 px-6 rounded-2xl backdrop-blur-md hover:border-brand-gold-400 transition-all text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-brand-gold-400" />
                <span>3D Thermocol Name Studio</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
