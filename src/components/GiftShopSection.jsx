import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, ArrowRight, Star, Heart, Flame, ShieldCheck, Truck, Palette, Clock } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { getFeaturedProducts, getProductsByCategory } from '../data/products';
import ProductCard from './ProductCard';

export default function GiftShopSection({ onQuickView, onOrderNow }) {
  const [activeTab, setActiveTab] = useState('all');

  // Key 9 highlighted visual categories with dedicated images, theme gradients, and full names
  const highlightCategories = [
    {
      id: 'birthday-gifts',
      name: 'Birthday Gifts',
      hindiName: 'बर्थडे स्पेशल',
      emoji: '🎂',
      slug: 'birthday-gifts',
      count: '35+ Gifts',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-pink-600/90 via-rose-700/80 to-purple-900/90',
      borderGlow: 'hover:border-pink-400 group-hover:shadow-pink-500/20',
      badge: 'Popular',
      badgeColor: 'bg-pink-500 text-white'
    },
    {
      id: 'wedding-gifts',
      name: 'Wedding Gifts',
      hindiName: 'शादी व शुभ विवाह',
      emoji: '💍',
      slug: 'wedding-gifts',
      count: '45+ Items',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-amber-700/90 via-orange-800/80 to-purple-950/90',
      borderGlow: 'hover:border-amber-400 group-hover:shadow-amber-500/20',
      badge: 'Royal',
      badgeColor: 'bg-amber-500 text-slate-950'
    },
    {
      id: 'couple-romantic-gifts',
      name: 'Couple & Romantic',
      hindiName: 'रोमांटिक गिफ्ट्स',
      emoji: '❤️',
      slug: 'couple-romantic-gifts',
      count: '40+ Items',
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-rose-700/90 via-red-800/80 to-pink-950/90',
      borderGlow: 'hover:border-rose-400 group-hover:shadow-rose-500/20',
      badge: 'Trending',
      badgeColor: 'bg-rose-500 text-white'
    },
    {
      id: 'baby-gifts',
      name: 'Baby & Newborn',
      hindiName: 'न्यू बॉर्न बेबी',
      emoji: '👶',
      slug: 'baby-gifts',
      count: '25+ Items',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-sky-600/90 via-cyan-700/80 to-blue-900/90',
      borderGlow: 'hover:border-sky-400 group-hover:shadow-sky-500/20',
      badge: 'Cute',
      badgeColor: 'bg-sky-500 text-white'
    },
    {
      id: 'soft-toys',
      name: 'Soft Toys & Teddies',
      hindiName: 'टेडी व प्लश टॉय',
      emoji: '🧸',
      slug: 'soft-toys',
      count: '30+ Items',
      image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-amber-600/90 via-yellow-700/80 to-orange-950/90',
      borderGlow: 'hover:border-yellow-400 group-hover:shadow-yellow-500/20',
      badge: 'Super Soft',
      badgeColor: 'bg-amber-400 text-slate-900'
    },
    {
      id: 'personalized-gifts',
      name: 'Personalized Gifts',
      hindiName: 'कस्टमाइज्ड नाम व फोटो',
      emoji: '✨',
      slug: 'personalized-gifts',
      count: '60+ Items',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-purple-700/90 via-violet-800/80 to-pink-900/90',
      borderGlow: 'hover:border-purple-400 group-hover:shadow-purple-500/20',
      badge: 'Custom Made',
      badgeColor: 'bg-brand-purple-600 text-white'
    },
    {
      id: 'religious-gifts',
      name: 'Religious & Idols',
      hindiName: 'राधा कृष्ण व गणेश जी',
      emoji: '🕉️',
      slug: 'religious-gifts',
      count: '35+ Items',
      image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-amber-700/90 via-yellow-800/80 to-orange-950/90',
      borderGlow: 'hover:border-amber-400 group-hover:shadow-amber-500/20',
      badge: 'Devotional',
      badgeColor: 'bg-amber-600 text-white'
    },
    {
      id: 'gift-hampers',
      name: 'Luxury Hampers',
      hindiName: 'प्रीमियम गिफ्ट बास्केट',
      emoji: '🎁',
      slug: 'gift-hampers',
      count: '30+ Hampers',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-fuchsia-700/90 via-purple-900/80 to-slate-950/90',
      borderGlow: 'hover:border-fuchsia-400 group-hover:shadow-fuchsia-500/20',
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
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
      gradient: 'from-brand-purple-950/95 via-purple-900/90 to-amber-900/90',
      borderGlow: 'hover:border-brand-gold-400 group-hover:shadow-amber-500/30',
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
        {/* 🎨 9 HIGH-IMPACT CATEGORY SHOWCASE CARDS */}
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

          {/* Responsive Category Grid with Real Photos & Full Names */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {highlightCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className={`group relative h-48 sm:h-56 rounded-3xl overflow-hidden border-2 border-brand-cream-300 ${cat.borderGlow} shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-5 hover:-translate-y-1.5`}
              >
                {/* Background Image with Zoom Effect */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Rich Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-85 group-hover:opacity-95 transition-opacity duration-300`} />

                {/* Subtle Inner Border Ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 group-hover:ring-amber-300/40 transition-colors pointer-events-none" />

                {/* Card Top: Emoji & Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {cat.emoji}
                  </div>
                  <span className={`text-[11px] font-outfit font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                {/* Card Bottom: Titles & CTA */}
                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] font-outfit font-semibold text-amber-200 tracking-wide block">
                    {cat.hindiName}
                  </span>
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h4 className="font-outfit font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors">
                        {cat.name}
                      </h4>
                      <p className="text-xs font-outfit font-medium text-white/80">
                        {cat.count}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-amber-400 group-hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shrink-0">
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
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {quickTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-outfit font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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
