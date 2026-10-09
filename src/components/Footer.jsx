import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Heart, 
  Instagram, 
  Facebook,
  Mail
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { logoImg } from '../data/images';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-brand-purple-950 text-white relative overflow-hidden border-t-2 border-brand-gold-500/30">
      
      {/* Decorative top gold line */}
      <div className="h-1 bg-gradient-to-r from-brand-gold-400 via-brand-rose-500 to-brand-gold-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-brand-gold-400/60 shadow-md bg-white/10 shrink-0 p-0.5">
                <img 
                  src={logoImg} 
                  alt={SHOP_CONFIG.shopName} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-xl text-white">
                  {SHOP_CONFIG.shortName}
                </h3>
                <p className="text-[11px] text-brand-gold-400 uppercase tracking-wider font-semibold">
                  {SHOP_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-brand-cream-200/80 text-xs sm:text-sm leading-relaxed">
              आपके शहर की २० साल पुरानी और भरोसेमंद दुकान — हस्तनिर्मित थर्मोकोल शादी वेलकम बोर्ड्स, दूल्हा-दुल्हन 3D नेम प्लेट, आकर्षक पार्टी डेकोर और मनपसंद गिफ्ट्स।
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHOP_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={SHOP_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-rose-600 flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SHOP_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-brand-gold-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-cream-200/90">
              <li>
                <Link to="/" className="hover:text-brand-gold-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold-300 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/marriage-designs" className="hover:text-brand-gold-300 transition-colors">Marriage Designs</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold-300 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-brand-gold-300 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-cream-200/90">
              <li>
                <Link to="/products?category=gift-items" className="hover:text-brand-gold-300 transition-colors">Gift Items</Link>
              </li>
              <li>
                <Link to="/products?category=wedding-decoration" className="hover:text-brand-gold-300 transition-colors">Wedding Designs</Link>
              </li>
              <li>
                <Link to="/products?category=thermocol-designs" className="hover:text-brand-gold-300 transition-colors">Thermocol Designs</Link>
              </li>
              <li>
                <Link to="/products?category=birthday-decoration" className="hover:text-brand-gold-300 transition-colors">Birthday Decoration</Link>
              </li>
              <li>
                <Link to="/products?category=custom-name-boards" className="hover:text-brand-gold-300 transition-colors">Custom Name Boards</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-brand-gold-300 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-brand-cream-200/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                <span>{SHOP_CONFIG.address.line1}, {SHOP_CONFIG.address.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a href={`tel:${SHOP_CONFIG.phoneRaw}`} className="hover:text-brand-gold-300">
                  {SHOP_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getGeneralInquiryUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold-300">
                  {SHOP_CONFIG.whatsappNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a href={`mailto:${SHOP_CONFIG.email}`} className="hover:text-brand-gold-300 truncate">
                  {SHOP_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream-300/60">
          <p>
            © 2026 {SHOP_CONFIG.shopName}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-rose-500 fill-brand-rose-500 inline" />
            <span>for your special moments</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
