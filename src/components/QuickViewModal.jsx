import React, { useState, useEffect } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  Check, 
  Calendar, 
  Palette,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductOrderUrl } from '../utils/whatsapp';

export default function QuickViewModal({ product, onClose, onOrderNow }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImage, setActiveImage] = useState('');
  const [customText, setCustomText] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [preferredColor, setPreferredColor] = useState('');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setCustomText('');
      setEventDate('');
      setPreferredColor(product.customizationOptions?.sampleColors?.[0] || 'Royal Gold');
      setNotes('');
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, {
      quantity,
      customText,
      eventDate,
      preferredColor,
      notes
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  const handleDirectWhatsApp = () => {
    if (onOrderNow) {
      onOrderNow({
        ...product,
        customText,
        eventDate,
        preferredColor,
        notes,
        quantity
      });
    } else {
      const url = getProductOrderUrl(product, {
        quantity,
        customText,
        eventDate,
        preferredColor,
        notes
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-brand-cream-300 z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/5 hover:bg-black/10 rounded-full text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Images Gallery */}
          <div className="p-6 bg-brand-cream-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-cream-300">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-brand-purple-950 border border-brand-cream-300 flex items-center justify-center p-3">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl drop-shadow-md"
              />
              {product.customizable && (
                <span className="absolute top-3 left-3 bg-brand-purple-900 text-brand-gold-300 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 border border-brand-gold-400/40">
                  <Sparkles className="w-3 h-3 text-brand-gold-400" />
                  <span>Customizable</span>
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img ? 'border-brand-purple-900 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details & Customization Fields */}
          <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto space-y-4">
            
            <div>
              <div className="flex items-center justify-between gap-2 text-xs mb-1">
                <span className="text-brand-rose-600 font-bold uppercase tracking-wider text-[11px] bg-brand-rose-50 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-slate-700 font-semibold bg-brand-cream-100 px-2 py-0.5 rounded-md">
                  <Star className="w-3.5 h-3.5 fill-brand-gold-500 text-brand-gold-500" />
                  <span>{product.rating}</span>
                  <span className="text-[10px] text-slate-400">({product.reviewsCount})</span>
                </div>
              </div>

              <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-purple-950 leading-snug">
                {product.name}
              </h3>

              <div className="mt-2">
                {product.customPrice ? (
                  <span className="inline-block bg-brand-purple-100 text-brand-purple-900 font-bold text-xs px-3 py-1 rounded-lg border border-brand-purple-200">
                    Custom Quote (Quote Needed)
                  </span>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-brand-purple-950">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
                    )}
                    {product.discount && (
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {product.discount}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Customization Options Input */}
            {product.customizable && (
              <div className="p-4 rounded-2xl bg-brand-cream-50 border border-brand-cream-300 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-purple-950">
                  <Sparkles className="w-4 h-4 text-brand-gold-600" />
                  <span>Customization Details</span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Names / Message to Print
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="e.g. Rahul & Simran / Happy Birthday"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-purple-600 bg-white font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-purple-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Color Theme
                    </label>
                    <select
                      value={preferredColor}
                      onChange={(e) => setPreferredColor(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-purple-600 bg-white"
                    >
                      {product.customizationOptions?.sampleColors?.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      )) || (
                        <>
                          <option value="Royal Gold">Royal Gold</option>
                          <option value="Rose Gold">Rose Gold</option>
                          <option value="Diamond Silver">Diamond Silver</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity Stepper & Dual Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center gap-2 border border-slate-300 rounded-xl px-2 py-1 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-slate-600 hover:text-brand-purple-900 font-bold px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-slate-900 px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-slate-600 hover:text-brand-purple-900 font-bold px-1"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="ml-auto p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-rose-600 hover:bg-brand-rose-50"
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-brand-rose-600 text-brand-rose-600' : ''}`} />
                </button>
              </div>

              {product.customPrice ? (
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Custom Quote on WhatsApp</span>
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleAddToCart}
                    className={`py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      isAdded 
                        ? 'bg-emerald-600 text-white border-emerald-600' 
                        : 'bg-brand-purple-50 text-brand-purple-950 border-brand-purple-200 hover:bg-brand-purple-100'
                    }`}
                  >
                    {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
                  </button>

                  <button
                    onClick={handleDirectWhatsApp}
                    className="py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-sm"
                  >
                    <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>Buy Now</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
