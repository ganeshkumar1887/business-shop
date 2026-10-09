import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ShoppingBag, MessageCircle, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function WishlistPage({ onQuickView, onOrderNow }) {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <div className="py-8 lg:py-14 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Back to Home Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between pb-1">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-brand-purple-50 text-brand-purple-950 font-bold text-xs sm:text-sm border border-brand-cream-300 shadow-2xs hover:shadow-sm hover:border-brand-purple-300 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-brand-purple-700 group-hover:-translate-x-1 transition-transform" />
            <Home className="w-4 h-4 text-brand-gold-600" />
            <span>Back to Home</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-brand-purple-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-purple-900 font-bold">Wishlist</span>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose-100 text-brand-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-brand-rose-600 text-brand-rose-600" />
            <span>Saved Favorites</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-purple-950 tracking-tight">
            Your Wishlist ({wishlistCount})
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Items you have saved for your upcoming wedding, party, or celebration.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-brand-cream-300 p-8 max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-brand-rose-50 mx-auto flex items-center justify-center text-3xl">
              ❤️
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-purple-950">
              Your wishlist is empty
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Click the heart icon on any wedding board, thermocol cutout, or gift box to save it here.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-purple-900 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:bg-brand-purple-950 transition-colors"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onOrderNow={onOrderNow}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
