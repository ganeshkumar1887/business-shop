import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Eye, 
  Sparkles, 
  Check, 
  Zap, 
  ArrowRight,
  Send
} from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { getProductOrderUrl } from '../utils/whatsapp';

export default function ProductCard({ product, onQuickView, onOrderNow }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, {
      quantity: 1,
      customText: '',
      notes: ''
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onOrderNow) {
      onOrderNow(product);
    } else {
      const url = getProductOrderUrl(product);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-brand-cream-300 hover:border-brand-purple-300/80 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_-6px_rgba(42,14,97,0.15)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      
      {/* Top Image Box */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-brand-cream-100/60 via-white to-brand-cream-100/40 border-b border-brand-cream-200/80 flex items-center justify-center p-3">
        <Link to={`/products/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl drop-shadow-sm group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Top Left Badges: Customizable / Discount / Bestseller */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
          {product.discount && !product.customPrice && (
            <span className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md tracking-tight">
              {product.discount}
            </span>
          )}
          {product.bestseller && (
            <span className="bg-brand-gold-500 text-brand-purple-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Bestseller</span>
            </span>
          )}
          {product.customizable && (
            <span className="bg-brand-purple-950/90 backdrop-blur-md text-brand-gold-300 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md border border-brand-gold-400/40">
              Customizable ✨
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2.5 right-2.5 p-2.5 bg-white/90 hover:bg-white text-slate-700 hover:text-brand-rose-600 rounded-full shadow-md backdrop-blur-md transition-all duration-200 z-10 hover:scale-110 active:scale-95"
        >
          <Heart className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-brand-rose-600 text-brand-rose-600' : ''}`} />
        </button>

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onQuickView) onQuickView(product);
          }}
          className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 bg-white/95 hover:bg-brand-purple-950 hover:text-brand-gold-300 text-brand-purple-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md opacity-90 group-hover:opacity-100 transition-all duration-200 hover:scale-105 z-10"
        >
          <Eye className="w-3.5 h-3.5 text-brand-purple-700 group-hover:text-brand-gold-300" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 text-xs mb-2 font-outfit">
            <span className="text-brand-rose-600 font-extrabold uppercase tracking-wider text-[11px] truncate">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-slate-700 bg-brand-cream-100 px-2 py-0.5 rounded-full font-bold text-xs shrink-0 border border-brand-cream-200">
              <Star className="w-3.5 h-3.5 fill-brand-gold-500 text-brand-gold-500" />
              <span>{product.rating}</span>
              <span className="text-slate-400 text-[10px] font-medium">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link to={`/products/${product.id}`} className="block group/title">
            <h3 className="font-outfit font-extrabold text-base sm:text-lg text-brand-purple-950 group-hover/title:text-brand-purple-800 transition-colors line-clamp-1 mb-2.5 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Price Section */}
          <div className="mb-4 font-outfit">
            {product.customPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-brand-purple-900 bg-brand-purple-100 px-2.5 py-1 rounded-lg border border-brand-purple-200">
                  Custom Quote
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {product.priceNote || '(Size & Design based)'}
                </span>
              </div>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-black text-brand-purple-950 tracking-tight">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs font-medium text-slate-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {product.discount}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Dual Actions: Add to Cart & Buy / Order Now */}
        <div className="pt-3 border-t border-brand-cream-200/90 grid grid-cols-2 gap-2">
          {product.customPrice ? (
            <button
              onClick={handleBuyNow}
              className="col-span-2 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Quote</span>
            </button>
          ) : (
            <>
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl text-xs font-bold border transition-all duration-200 cursor-pointer shadow-2xs hover:scale-[1.02] active:scale-95 ${
                  isAdded 
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                    : 'bg-brand-purple-50 hover:bg-brand-purple-100 text-brand-purple-950 border-brand-purple-200/90'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-brand-purple-800" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              {/* Order / Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>Order Now</span>
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
