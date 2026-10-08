import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES, getCategoryBySlug } from '../data/categories';
import { 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  Filter, 
  X, 
  Flame, 
  Gift, 
  Crown, 
  Heart, 
  Wand2, 
  ArrowRight,
  MessageCircle,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function Products({ onQuickView, onOrderNow }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const tagParam = searchParams.get('tag') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [activeSpecialTag, setActiveSpecialTag] = useState(tagParam);
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all'); // all, under300, 300-700, 700-1500, above1500, custom
  const [minRating, setMinRating] = useState(0);
  const [filterCustomizableOnly, setFilterCustomizableOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (tagParam) {
      setActiveSpecialTag(tagParam);
    }
  }, [tagParam]);

  const handleCategoryChange = (slug) => {
    setActiveCategory(slug);
    setActiveSpecialTag('all');
    if (slug === 'all') {
      searchParams.delete('category');
      searchParams.delete('tag');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
  };

  const handleSpecialTag = (tag) => {
    setActiveSpecialTag(tag);
    if (tag === 'all') {
      searchParams.delete('tag');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ ...Object.fromEntries(searchParams), tag });
    }
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveSpecialTag('all');
    setSearchTerm('');
    setPriceFilter('all');
    setMinRating(0);
    setFilterCustomizableOnly(false);
    setSortBy('popular');
    setSearchParams({});
  };

  const activeCatObj = getCategoryBySlug(activeCategory);

  const filteredProducts = PRODUCTS.filter((product) => {
    // Category match (supports slug or categoryId)
    if (activeCategory !== 'all') {
      if (product.categoryId !== activeCategory && product.categoryEn !== activeCategory && product.category !== activeCategory) {
        // Special legacy fallbacks
        if (activeCategory === 'gift-items' && product.categoryId.includes('gift')) {
          // match
        } else {
          return false;
        }
      }
    }

    // Special quick collection tags
    if (activeSpecialTag === 'bestseller' && !product.bestseller) return false;
    if (activeSpecialTag === 'featured' && !product.featured) return false;
    if (activeSpecialTag === 'newArrival' && !product.newArrival) return false;
    if (activeSpecialTag === 'personalized' && !product.customizable) return false;
    if (activeSpecialTag === 'thermocol' && product.categoryId !== 'thermocol-event-decoration' && product.categoryId !== 'customized-event-orders') return false;
    if (activeSpecialTag === 'hampers' && product.categoryId !== 'gift-hampers') return false;

    // Price range filter
    if (priceFilter === 'under300' && (product.customPrice || (product.price && product.price > 300))) return false;
    if (priceFilter === '300-700' && (product.customPrice || (product.price && (product.price < 300 || product.price > 700)))) return false;
    if (priceFilter === '700-1500' && (product.customPrice || (product.price && (product.price < 700 || product.price > 1500)))) return false;
    if (priceFilter === 'above1500' && (product.customPrice || (product.price && product.price < 1500))) return false;
    if (priceFilter === 'custom' && !product.customPrice) return false;

    // Rating filter
    if (minRating > 0 && product.rating < minRating) return false;

    // Customizable filter
    if (filterCustomizableOnly && !product.customizable) return false;

    // Search query match
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q) || (product.nameEn && product.nameEn.toLowerCase().includes(q));
      const matchCategory = product.category.toLowerCase().includes(q) || product.categoryId.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchTags = product.tags?.some(tag => tag.toLowerCase().includes(q));
      if (!matchName && !matchCategory && !matchDesc && !matchTags) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
    if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
    if (sortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
    return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0); // Default popularity
  });

  return (
    <div className="py-8 sm:py-12 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Hero Banner with Rich Festive Gradient */}
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-purple-950 via-brand-purple-900 to-brand-rose-900 text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-brand-gold-400/30">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-gold-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold-500/20 text-brand-gold-300 text-xs font-bold uppercase tracking-wider border border-brand-gold-400/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shree Bhagwan Gifts &amp; Thermocol Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              {activeCatObj ? `${activeCatObj.emoji} ${activeCatObj.name}` : "Gifts & Personalized Collection"}
            </h1>

            <p className="text-brand-cream-200 text-xs sm:text-base leading-relaxed max-w-2xl">
              {activeCatObj ? activeCatObj.description : "Browse over 150+ handcrafted birthday gifts, couple keepsakes, wedding hampers, soft toys, 3D LED lamps, and custom thermocol stage decorations."}
            </p>

            {/* Quick Stats Pills */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold text-brand-cream-100">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">🎁 20+ Categories</span>
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">✨ 100% Customized</span>
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">🚚 Direct Shop Pickup &amp; Delivery</span>
            </div>
          </div>
        </div>

        {/* 20 Categories Horizontal Scroller Carousel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-lg sm:text-xl text-brand-purple-950 flex items-center gap-2">
              <span>All 20 Gift Categories</span>
              <span className="text-xs font-normal text-slate-500">({CATEGORIES.length} Categories)</span>
            </h2>
            {activeCategory !== 'all' && (
              <button
                onClick={() => handleCategoryChange('all')}
                className="text-xs font-bold text-brand-rose-600 hover:text-brand-rose-700 underline"
              >
                Clear Category
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-brand-purple-200 scrollbar-track-brand-cream-100">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 border flex items-center gap-1.5 shadow-2xs ${
                activeCategory === 'all'
                  ? 'bg-brand-purple-950 text-brand-gold-300 border-brand-gold-400 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-brand-cream-100 border-brand-cream-300'
              }`}
            >
              <span>✨</span>
              <span>All Products ({PRODUCTS.length})</span>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 border flex items-center gap-1.5 shadow-2xs ${
                  activeCategory === cat.slug
                    ? 'bg-brand-purple-950 text-brand-gold-300 border-brand-gold-400 shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-brand-cream-100 border-brand-cream-300'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70 bg-black/10 px-1.5 py-0.5 rounded-full">{cat.itemCount}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Collection Filter Quick Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-brand-cream-200">
          {[
            { id: 'all', label: 'All Items', icon: Sparkles },
            { id: 'bestseller', label: 'Best Sellers 🔥', icon: Flame },
            { id: 'featured', label: 'Featured Gifts ⭐', icon: Gift },
            { id: 'newArrival', label: 'New Arrivals 🆕', icon: Tag },
            { id: 'personalized', label: 'Personalized Gifts ✨', icon: Wand2 },
            { id: 'hampers', label: 'Gift Hampers 🎁', icon: Gift },
            { id: 'thermocol', label: 'Thermocol Designs 👑', icon: Crown }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleSpecialTag(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeSpecialTag === tab.id
                  ? 'bg-brand-purple-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-brand-cream-300 hover:bg-brand-cream-100'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search, Filter Bar & Sort Controls */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-brand-cream-300 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search teddy, mug, photo frame, LED lamp, idol..."
                className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Filter Dropdown */}
            <div className="sm:col-span-3">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-white font-medium text-slate-700"
              >
                <option value="all">Price: All Ranges</option>
                <option value="under300">Under ₹300 (Budget)</option>
                <option value="300-700">₹300 - ₹700</option>
                <option value="700-1500">₹700 - ₹1,500</option>
                <option value="above1500">₹1,500+ (Premium)</option>
                <option value="custom">Custom Price (Quote)</option>
              </select>
            </div>

            {/* Sorting Dropdown */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-white font-medium text-slate-700"
              >
                <option value="popular">Sort: Popularity / Bestsellers</option>
                <option value="rating">Highest Rated (⭐ 5.0)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

          </div>

          {/* Active Filter Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-brand-cream-200 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-500 font-medium">
                Showing <strong>{filteredProducts.length}</strong> products
              </span>

              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-purple-100 text-brand-purple-900 font-bold text-[11px]">
                  Category: {activeCategory}
                  <button onClick={() => handleCategoryChange('all')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {priceFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-rose-100 text-brand-rose-900 font-bold text-[11px]">
                  Price: {priceFilter}
                  <button onClick={() => setPriceFilter('all')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-[11px]">
                  "{searchTerm}"
                  <button onClick={() => setSearchTerm('')}><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>

            {(activeCategory !== 'all' || activeSpecialTag !== 'all' || priceFilter !== 'all' || searchTerm) && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-brand-rose-600 hover:text-brand-rose-700"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onOrderNow={onOrderNow}
            />
          ))}
        </div>

        {/* Zero Results Notice */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-cream-300 p-8 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-brand-cream-100 mx-auto flex items-center justify-center text-3xl">
              🎁
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-purple-950">
              No matching gifts found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We couldn't find any products matching your active filters. You can reset filters or directly send your custom requirement to our artisans on WhatsApp!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleResetFilters}
                className="bg-brand-purple-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm"
              >
                Reset All Filters
              </button>
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Custom Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Custom Order & Quote Banner */}
        <div className="bg-gradient-to-r from-brand-purple-950 to-brand-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-gold-500/20 text-brand-gold-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need Something Truly Unique?</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Can't Find the Exact Gift or Theme?
            </h3>
            <p className="text-brand-cream-200 text-xs sm:text-sm max-w-xl leading-relaxed">
              Share your reference photo, sketch, names, or budget with our workshop on WhatsApp. We design and craft 100% personalized hampers and thermocol decor!
            </p>
          </div>

          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all text-xs sm:text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Get Custom Quote on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
