import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  Check, 
  ArrowLeft,
  Home,
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Palette, 
  Calendar, 
  Share2,
  Zap,
  Package,
  Award,
  Clock,
  Upload,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductOrderUrl } from '../utils/whatsapp';
import ProductCard from '../components/ProductCard';

export default function ProductDetails({ onQuickView, onOrderNow }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState('');
  const [customText, setCustomText] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [preferredColor, setPreferredColor] = useState('');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('description'); // description, specs, reviews

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setCustomText('');
      setEventDate('');
      setPreferredColor(product.customizationOptions?.sampleColors?.[0] || 'Royal Gold Finish');
      setNotes('');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product, productId]);

  if (!product) {
    return (
      <div className="py-24 text-center bg-brand-cream-50 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-20 h-20 rounded-full bg-brand-cream-100 flex items-center justify-center text-3xl mb-4">
          🔍
        </div>
        <h2 className="text-2xl font-serif font-bold text-brand-purple-950">Product Not Found</h2>
        <p className="text-slate-600 mt-2 max-w-md">The requested gift or design is currently unavailable in the catalog.</p>
        <Link to="/products" className="inline-flex items-center gap-2 mt-6 bg-brand-purple-900 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md hover:bg-brand-purple-950 transition-colors">
          <span>← Browse Full Gift Catalog</span>
        </Link>
      </div>
    );
  }

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
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleDirectOrder = () => {
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

  // Related products in same category or featured
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="py-8 lg:py-14 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation & Back to Home */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-brand-purple-50 text-brand-purple-950 font-bold text-xs border border-brand-cream-300 shadow-2xs hover:shadow-sm transition-all"
            >
              <Home className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-brand-rose-50 text-brand-rose-700 font-bold text-xs border border-brand-cream-300 shadow-2xs hover:shadow-sm transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Products</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs">
            <Link to="/" className="hover:text-brand-purple-900">Home</Link>
            <span>/</span>
            <Link to={`/products?category=${product.categoryId}`} className="hover:text-brand-purple-900">{product.category}</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>

        {/* Product Details Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-brand-cream-300 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Image Gallery View */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-brand-purple-950 border border-brand-cream-300 shadow-md flex items-center justify-center p-4">
                <img
                  src={activeImage || product.image}
                  alt={product.name}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {product.customizable && (
                  <span className="absolute top-4 left-4 bg-brand-purple-900 text-brand-gold-300 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-brand-gold-400/40">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold-400" />
                    <span>Personalized / Custom</span>
                  </span>
                )}

                <button
                  onClick={() => toggleWishlist(product)}
                  aria-label="Toggle Wishlist"
                  className="absolute top-4 right-4 p-3 bg-white/90 hover:bg-white rounded-full text-slate-700 shadow-md transition-all hover:scale-110"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-brand-rose-600 text-brand-rose-600' : ''}`} />
                </button>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border-2 transition-all shrink-0 p-1 flex items-center justify-center ${
                        activeImage === img
                          ? 'border-brand-purple-900 ring-2 ring-brand-purple-400/40 scale-95'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Gallery Thumb" className="max-h-full max-w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Product Details & Customization */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                {/* Category Pill & Rating */}
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <span className="text-brand-rose-600 font-bold uppercase tracking-wider text-xs bg-brand-rose-50 px-3 py-1 rounded-lg border border-brand-rose-100">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-800 font-bold bg-brand-cream-100 px-3 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-brand-gold-500 text-brand-gold-500" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 text-xs">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-brand-purple-950 leading-tight">
                  {product.name}
                </h1>

                {/* Stock Status Badge */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{product.stock || "In Stock • Fast Dispatch"}</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-4 pt-3 border-t border-brand-cream-200">
                  {product.customPrice ? (
                    <div className="bg-brand-purple-50 border border-brand-purple-200 p-4 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-purple-700" />
                        <span className="text-lg font-bold text-brand-purple-950">
                          Custom Price / Quote Based
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Pricing depends on board dimensions, letters count, and glitter finish. Click below to get an instant quote on WhatsApp!
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-serif font-black text-brand-purple-950">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base sm:text-lg text-slate-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                      {product.discount && (
                        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                          {product.discount} Special Discount
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Short Description */}
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>{product.description}</p>
              </div>

              {/* Customization Inputs (For Personalized & Custom products) */}
              {product.customizable && (
                <div className="p-5 rounded-3xl bg-brand-cream-50/90 border border-brand-cream-300 space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-cream-200 pb-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-purple-950">
                      <Sparkles className="w-4 h-4 text-brand-gold-600" />
                      <span>Enter Customization Details</span>
                    </div>
                    <span className="text-[11px] text-brand-rose-600 font-semibold">100% Handcrafted</span>
                  </div>

                  {/* Name or Custom Text */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Name(s) / Custom Text to Print / Carve
                    </label>
                    <input
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="e.g. Rahul & Simran / Aarav / World's Best Teacher"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm bg-white font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Event Date / Occasion
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm bg-white"
                      />
                    </div>

                    {/* Color / Finish */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Glitter / Color Finish
                      </label>
                      <select
                        value={preferredColor}
                        onChange={(e) => setPreferredColor(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm bg-white font-medium"
                      >
                        {product.customizationOptions?.sampleColors?.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        )) || (
                          <>
                            <option value="Royal Gold Finish">Royal Gold Finish</option>
                            <option value="Rose Gold Sparkle">Rose Gold Sparkle</option>
                            <option value="Diamond Silver">Diamond Silver</option>
                            <option value="Multi-color Traditional">Multi-color Traditional</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Special Note / Instructions */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Special Instructions / Reference Photo Note
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Include red roses on corner, send photo on WhatsApp"
                      className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-xs bg-white"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 italic flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-brand-purple-600 shrink-0" />
                    <span>You can share reference photos directly on WhatsApp after placing order.</span>
                  </p>
                </div>
              )}

              {/* Quantity & CTA Action Buttons */}
              <div className="space-y-4 pt-2">
                {!product.customPrice && (
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm font-bold text-slate-700">Quantity:</span>
                    <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-3 py-1.5 bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-slate-600 hover:text-brand-purple-900 font-bold px-1.5 text-base"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold text-slate-900 px-2">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-slate-600 hover:text-brand-purple-900 font-bold px-1.5 text-base"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {product.customPrice ? (
                  <button
                    onClick={handleDirectOrder}
                    className="w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get Instant WhatsApp Quote &amp; Preview</span>
                  </button>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={handleAddToCart}
                      className={`py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border transition-all ${
                        isAdded 
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                          : 'bg-brand-purple-950 text-white border-brand-purple-950 hover:bg-brand-purple-900 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleDirectOrder}
                      className="py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-md hover:shadow-lg transition-all"
                    >
                      <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
                      <span>Buy Now on WhatsApp</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Trust & Guarantee Badges */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-brand-cream-300 text-center text-[11px] text-slate-600">
                <div className="p-3 bg-brand-cream-100/70 rounded-2xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="font-semibold block text-slate-800">100% Quality</span>
                  <span className="text-[10px] text-slate-500">Premium Materials</span>
                </div>
                <div className="p-3 bg-brand-cream-100/70 rounded-2xl">
                  <Truck className="w-5 h-5 text-brand-purple-700 mx-auto mb-1" />
                  <span className="font-semibold block text-slate-800">Safe Delivery</span>
                  <span className="text-[10px] text-slate-500">Bubble Packaged</span>
                </div>
                <div className="p-3 bg-brand-cream-100/70 rounded-2xl">
                  <MessageCircle className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="font-semibold block text-slate-800">Instant Chat</span>
                  <span className="text-[10px] text-slate-500">Fast Support</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Specifications & Reviews Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-cream-300 mb-14 space-y-6">
          <div className="flex items-center gap-4 border-b border-brand-cream-200 pb-3">
            <button
              onClick={() => setActiveTab('description')}
              className={`text-sm font-bold pb-2 transition-all relative ${
                activeTab === 'description' 
                  ? 'text-brand-purple-950 border-b-2 border-brand-purple-900' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Product Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-sm font-bold pb-2 transition-all relative ${
                activeTab === 'reviews' 
                  ? 'text-brand-purple-950 border-b-2 border-brand-purple-900' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Customer Reviews ({product.reviewsCount})
            </button>
          </div>

          {activeTab === 'description' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-brand-cream-200">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-bold text-slate-900">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-cream-200">
                  <span className="text-slate-500">Subcategory:</span>
                  <span className="font-bold text-slate-900">{product.subcategory || "General Gift"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-cream-200">
                  <span className="text-slate-500">Customization:</span>
                  <span className="font-bold text-emerald-700">{product.customizable ? "Available (Name/Date/Photo)" : "Standard Product"}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-brand-cream-200">
                  <span className="text-slate-500">Packaging:</span>
                  <span className="font-bold text-slate-900">Secure Bubble &amp; Gift Wrap</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-cream-200">
                  <span className="text-slate-500">Ordering Mode:</span>
                  <span className="font-bold text-slate-900">Direct WhatsApp / Shop Pickup</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-cream-200">
                  <span className="text-slate-500">Dispatch Time:</span>
                  <span className="font-bold text-slate-900">Same Day / 24-48 Hours</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-brand-cream-50 p-4 rounded-2xl">
                <div className="text-3xl font-black text-brand-purple-950">{product.rating}</div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold-500 text-brand-gold-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Based on {product.reviewsCount} verified customer reviews</p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 italic">
                "Superb quality and excellent finishing! Shree Bhagwan delivered it exactly as requested on WhatsApp with beautiful gift wrapping."
              </div>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-2xl text-brand-purple-950">
                Related {product.category}
              </h3>
              <Link to={`/products?category=${product.categoryId}`} className="text-xs font-bold text-brand-purple-900 hover:text-brand-rose-600 underline">
                View All in {product.category} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  onQuickView={onQuickView}
                  onOrderNow={onOrderNow}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
