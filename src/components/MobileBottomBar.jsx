import React from 'react';
import { Phone, MessageCircle, ShoppingBag, Wand2, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SHOP_CONFIG } from '../data/config';
import { useCart } from '../context/CartContext';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function MobileBottomBar() {
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-cream-300 shadow-2xl px-2 py-2 flex items-center justify-around">
      
      {/* Home */}
      <Link
        to="/"
        className={`flex flex-col items-center gap-0.5 p-1 text-[10px] font-semibold transition-colors ${
          location.pathname === '/' ? 'text-brand-purple-900 font-bold' : 'text-slate-600'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>

      {/* Call Shop */}
      <a
        href={`tel:${SHOP_CONFIG.phoneRaw}`}
        className="flex flex-col items-center gap-0.5 p-1 text-[10px] font-semibold text-slate-600 hover:text-brand-purple-900"
      >
        <Phone className="w-5 h-5 text-brand-purple-800" />
        <span>Call Shop</span>
      </a>

      {/* Marriage / Customizer */}
      <Link
        to="/marriage-designs"
        className="flex flex-col items-center gap-0.5 p-1 text-[10px] font-semibold text-brand-rose-600"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple-900 to-brand-rose-600 text-white flex items-center justify-center -mt-4 shadow-lg border-2 border-white">
          <Wand2 className="w-4 h-4" />
        </div>
        <span className="font-bold">Designs</span>
      </Link>

      {/* Cart Drawer */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center gap-0.5 p-1 text-[10px] font-semibold text-slate-600 relative"
      >
        <ShoppingBag className="w-5 h-5" />
        <span>Cart</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-2 bg-brand-rose-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* WhatsApp */}
      <a
        href={getGeneralInquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 p-1 text-[10px] font-semibold text-emerald-700 font-bold"
      >
        <MessageCircle className="w-5 h-5 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}
