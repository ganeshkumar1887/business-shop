import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Phone, 
  MessageCircle,
  Clock,
  ChevronDown,
  Crown,
  Moon,
  Cake,
  Flame
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marriageDropdownOpen, setMarriageDropdownOpen] = useState(false);
  const [mobileMarriageOpen, setMobileMarriageOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMarriageDropdownOpen(false);
  }, [location.pathname, location.search]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMarriageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const marriageCategories = [
    {
      name: "Hindu Design",
      hindi: "हिन्दू विवाह डिजाइन",
      path: "/marriage-designs?type=hindu",
      desc: "Shubh Vivah, Kalash, Peacock & Mandap Stage Boards",
      icon: "🕉️",
      cardBg: "bg-orange-50/80 hover:bg-orange-100 border-orange-200",
      iconBg: "bg-orange-100/90 border-orange-300",
      badgeClass: "bg-orange-200 text-orange-900 border border-orange-300",
      badge: "Shubh Vivah"
    },
    {
      name: "Islamic Design",
      hindi: "इस्लामिक निकाह डिजाइन",
      path: "/marriage-designs?type=islamic",
      desc: "Nikah Mubarak, Walima Welcome & Crescent Cutouts",
      icon: "🌙",
      cardBg: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-200",
      iconBg: "bg-emerald-100/90 border-emerald-300",
      badgeClass: "bg-emerald-200 text-emerald-900 border border-emerald-300",
      badge: "Nikah Mubarak"
    },
    {
      name: "Birthday Design",
      hindi: "बर्थडे सेलिब्रेशन डिजाइन",
      path: "/marriage-designs?type=birthday",
      desc: "3D Custom Age & Name Boards for Cake Tables",
      icon: "🎂",
      cardBg: "bg-sky-50/80 hover:bg-sky-100 border-sky-200",
      iconBg: "bg-sky-100/90 border-sky-300",
      badgeClass: "bg-sky-200 text-sky-900 border border-sky-300",
      badge: "Kids & Adults"
    }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-purple-950 via-brand-purple-900 to-brand-rose-900 text-white text-xs py-2 px-4 border-b border-brand-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center justify-center p-1 bg-brand-gold-500/20 text-brand-gold-300 rounded-full text-[10px]">✨</span>
            <span>Hindu, Islamic &amp; Birthday Custom Thermocol Name Boards — Direct WhatsApp Order!</span>
          </div>
          <div className="flex items-center gap-4 text-brand-cream-200 text-[11px]">
            <a href={`tel:${SHOP_CONFIG.phoneRaw}`} className="hover:text-brand-gold-300 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-brand-gold-400" />
              <span>{SHOP_CONFIG.phone}</span>
            </a>
            <span className="hidden md:inline text-brand-purple-400">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3 h-3 text-brand-gold-400" />
              <span>{SHOP_CONFIG.hours.weekdays}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-cream-300' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Shop Title */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-brand-purple-800 via-brand-purple-900 to-brand-rose-700 flex items-center justify-center shadow-md shadow-brand-purple-900/20 group-hover:scale-105 transition-transform duration-300 border border-brand-gold-400/40">
                <Sparkles className="w-6 h-6 text-brand-gold-300 animate-pulse-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-brand-purple-950 leading-tight tracking-tight group-hover:text-brand-purple-800 transition-colors">
                  {SHOP_CONFIG.shortName}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-rose-600 tracking-wider uppercase">
                  {SHOP_CONFIG.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Marriage Dropdown */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/' 
                    ? 'text-brand-purple-900 bg-brand-purple-100/70 font-semibold shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-800 hover:bg-brand-cream-100'
                }`}
              >
                Home
              </Link>

              <Link
                to="/products?category=gift-items"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/products'
                    ? 'text-brand-purple-900 bg-brand-purple-100/70 font-semibold shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-800 hover:bg-brand-cream-100'
                }`}
              >
                Gift Items
              </Link>

              {/* Marriage Designs with Interactive Dropdown (Hindu, Islamic, Birthday) */}
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={() => setMarriageDropdownOpen(true)}
                onMouseLeave={() => setMarriageDropdownOpen(false)}
              >
                <button
                  onClick={() => setMarriageDropdownOpen(!marriageDropdownOpen)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    location.pathname === '/marriage-designs'
                      ? 'text-brand-purple-900 bg-brand-purple-100/70 font-semibold shadow-sm'
                      : 'text-slate-700 hover:text-brand-purple-800 hover:bg-brand-cream-100'
                  }`}
                >
                  <span>Marriage Designs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${marriageDropdownOpen ? 'rotate-180 text-brand-purple-900' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {marriageDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-brand-cream-300 p-2.5 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="px-3 py-1.5 border-b border-brand-cream-200 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                      <span>Select Category</span>
                      <span className="text-brand-rose-600 font-bold">100% Customized</span>
                    </div>

                    {marriageCategories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={cat.path}
                        className={`flex items-start gap-3 p-2.5 rounded-2xl border transition-all duration-200 group shadow-xs hover:shadow-sm hover:-translate-y-0.5 ${cat.cardBg}`}
                        onClick={() => setMarriageDropdownOpen(false)}
                      >
                        <div className={`text-2xl p-2 rounded-xl group-hover:scale-110 transition-transform shrink-0 shadow-2xs ${cat.iconBg}`}>
                          {cat.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="font-serif font-bold text-sm text-brand-purple-950 group-hover:text-brand-purple-900">
                              {cat.name}
                            </h4>
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${cat.badgeClass}`}>
                              {cat.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                            {cat.desc}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <div className="pt-2 border-t border-brand-cream-200">
                      <Link
                        to="/marriage-designs"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-brand-purple-950 bg-brand-purple-50 hover:bg-brand-purple-100 rounded-xl transition-colors"
                        onClick={() => setMarriageDropdownOpen(false)}
                      >
                        <Crown className="w-3.5 h-3.5 text-brand-gold-600" />
                        <span>View All Marriage Designs →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/gallery' 
                    ? 'text-brand-purple-900 bg-brand-purple-100/70 font-semibold shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-800 hover:bg-brand-cream-100'
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/about"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-brand-purple-900 bg-brand-purple-100/70 font-semibold shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-800 hover:bg-brand-cream-100'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-brand-purple-900 bg-brand-purple-100/70 font-semibold shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-800 hover:bg-brand-cream-100'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              
              {/* Search Trigger Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search Products"
                className="p-2.5 text-slate-700 hover:text-brand-purple-900 hover:bg-brand-cream-200/60 rounded-xl transition-colors relative group"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Search</span>
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                aria-label="View Wishlist"
                className="p-2.5 text-slate-700 hover:text-brand-rose-600 hover:bg-brand-rose-50 rounded-xl transition-colors relative group hidden sm:flex"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-brand-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Cart Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Open Cart"
                className="p-2.5 text-slate-700 hover:text-brand-purple-900 hover:bg-brand-purple-50 rounded-xl transition-colors relative group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-gradient-to-r from-brand-purple-700 to-brand-rose-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Order Button */}
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2.5 text-slate-700 hover:text-brand-purple-900 hover:bg-brand-cream-200/60 rounded-xl transition-colors lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-cream-300 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1 py-2">
              <Link
                to="/"
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream-100"
              >
                Home
              </Link>

              <Link
                to="/products?category=gift-items"
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream-100"
              >
                Gift Items
              </Link>

              {/* Mobile Marriage Designs Accordion */}
              <div className="border border-brand-cream-300 rounded-2xl overflow-hidden bg-brand-cream-50/50 my-1.5">
                <button
                  onClick={() => setMobileMarriageOpen(!mobileMarriageOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-brand-purple-950"
                >
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-brand-gold-600" />
                    <span>Marriage Designs</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileMarriageOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileMarriageOpen && (
                  <div className="px-3 pb-3 space-y-1.5 border-t border-brand-cream-200 pt-2">
                    {marriageCategories.map((cat, i) => (
                      <Link
                        key={i}
                        to={cat.path}
                        className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-slate-800 border ${cat.cardBg}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">{cat.icon}</span>
                          <div>
                            <p className="font-bold text-brand-purple-950">{cat.name}</p>
                            <p className="text-[10px] text-slate-600 font-normal">{cat.hindi}</p>
                          </div>
                        </div>
                        <span className="text-brand-purple-700 font-bold">→</span>
                      </Link>
                    ))}
                    <Link
                      to="/marriage-designs"
                      className="block text-center py-2 text-xs font-bold text-brand-purple-900 bg-brand-purple-100 rounded-xl"
                    >
                      View All Designs
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream-100"
              >
                Gallery
              </Link>

              <Link
                to="/about"
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream-100"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream-100"
              >
                Contact
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream-100"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-brand-rose-600" />
                  <span>Wishlist</span>
                </div>
                {wishlistCount > 0 && (
                  <span className="bg-brand-rose-100 text-brand-rose-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {wishlistCount} items
                  </span>
                )}
              </Link>
            </div>

            <div className="pt-4 mt-2 border-t border-brand-cream-200 space-y-3">
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${SHOP_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-brand-purple-50 text-brand-purple-900 border border-brand-purple-200 font-semibold py-3 px-4 rounded-xl"
              >
                <Phone className="w-4 h-4 text-brand-purple-700" />
                <span>Call Shop: {SHOP_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
