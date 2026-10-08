import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Heart, 
  Send,
  Languages,
  CheckCircle2,
  Crown
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function OrderNowModal({ product, isOpen, onClose }) {
  const [lang, setLang] = useState('hi'); // 'hi' or 'en'
  const [groomName, setGroomName] = useState('');
  const [brideName, setBrideName] = useState('');
  const [baratFrom, setBaratFrom] = useState('');
  const [baratTo, setBaratTo] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [boardSize, setBoardSize] = useState('स्टैंडर्ड साइज (4 x 2.5 फीट)');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `🛍️ *नया ऑर्डर / NEW ORDER — ${SHOP_CONFIG.shopName}*\n\n`;
    message += `• *प्रोडक्ट / Product:* ${product.name}\n`;
    message += `• *भाषा / Language:* ${lang === 'hi' ? 'हिंदी (Hindi)' : 'English'}\n\n`;
    
    message += `💍 *विवाह विवरण / Wedding Details:*\n`;
    message += `• दूल्हा (Groom): *${groomName || 'N/A'}*\n`;
    message += `• दुल्हन (Bride): *${brideName || 'N/A'}*\n`;
    message += `• बारात कहाँ से (From): *${baratFrom || 'N/A'}*\n`;
    message += `• बारात कहाँ तक (To): *${baratTo || 'N/A'}*\n`;
    message += `• विवाह तिथि (Date): *${eventDate || 'N/A'}*\n`;
    message += `• बोर्ड साइज (Size): ${boardSize}\n\n`;

    message += `👤 *ग्राहक विवरण / Customer Info:*\n`;
    if (customerName) message += `• नाम: ${customerName}\n`;
    if (customerPhone) message += `• मोबाइल: ${customerPhone}\n\n`;

    message += `कृपया मुझे इस डिजाइन का फाइनल कोटेशन व डिलीवरी समय बताएं। धन्यवाद!`;

    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const isHindi = lang === 'hi';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-4 md:p-8 flex items-center justify-center">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      ></div>

      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-brand-gold-400/40 z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Festive Gradient */}
        <div className="bg-gradient-to-r from-brand-purple-950 via-brand-purple-900 to-brand-rose-900 p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 rounded-xl bg-brand-gold-500/20 border border-brand-gold-400/40 flex items-center justify-center text-brand-gold-300">
              <Crown className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-brand-gold-300 uppercase tracking-wider">
              {isHindi ? 'कस्टम बोर्ड ऑर्डर फॉर्म' : 'Custom Board Order Form'}
            </span>
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
            {product.name}
          </h3>
          <p className="text-xs text-brand-cream-200 mt-1">
            {isHindi 
              ? 'कृपया दूल्हा-दुल्हन का नाम, बारात का स्थान व तिथि भरें।' 
              : 'Please enter Groom & Bride names, Barat route, and wedding date.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto bg-brand-cream-50/50">
          
          {/* Language Selection Switcher */}
          <div className="p-3.5 rounded-2xl bg-white border border-brand-cream-300 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-brand-purple-800" />
              <div>
                <span className="text-xs font-bold text-slate-800 block">
                  {isHindi ? 'बोर्ड पर लिखने की भाषा' : 'Board Writing Language'}
                </span>
                <span className="text-[11px] text-slate-500">
                  {isHindi ? 'अक्षर हिंदी या इंग्लिश में चाहिए?' : 'Select writing script'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-brand-cream-100 p-1 rounded-xl border border-brand-cream-300">
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  lang === 'hi' 
                    ? 'bg-brand-purple-900 text-white shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-900'
                }`}
              >
                🇮🇳 हिंदी (Hindi)
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  lang === 'en' 
                    ? 'bg-brand-purple-900 text-white shadow-sm' 
                    : 'text-slate-700 hover:text-brand-purple-900'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Groom & Bride Names Inputs */}
          <div className="p-4 rounded-2xl bg-white border border-brand-cream-300 shadow-xs space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-purple-950 pb-1 border-b border-brand-cream-200">
              <Heart className="w-4 h-4 text-brand-rose-600 fill-brand-rose-600" />
              <span>{isHindi ? 'दूल्हा व दुल्हन का नाम' : 'Bride & Groom Names'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isHindi ? 'दूल्हे का नाम (Groom Name) *' : 'Groom Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                  placeholder={isHindi ? 'उदा. डा. दिग्विजय या विकास' : 'e.g. Dr. Digvijay or Vikas'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isHindi ? 'दुल्हन का नाम (Bride Name) *' : 'Bride Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  placeholder={isHindi ? 'उदा. डा. मीनू मोहन या बबिता' : 'e.g. Dr. Meenu Mohan or Babita'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-brand-cream-50/40"
                />
              </div>
            </div>
          </div>

          {/* Barat From & Barat To (बारात कहाँ से, कहाँ तक) */}
          <div className="p-4 rounded-2xl bg-white border border-brand-cream-300 shadow-xs space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-purple-950 pb-1 border-b border-brand-cream-200">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>{isHindi ? 'बारात का स्थान (From & To Location)' : 'Barat Route / Locations'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isHindi ? 'बारात कहाँ से (Barat From) *' : 'Barat From (Origin Village/Town) *'}
                </label>
                <input
                  type="text"
                  required
                  value={baratFrom}
                  onChange={(e) => setBaratFrom(e.target.value)}
                  placeholder={isHindi ? 'उदा. तरवैया बंगरा / सिधवल' : 'e.g. Tarwaiya Bangra'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isHindi ? 'बारात कहाँ तक / स्थल (Barat To) *' : 'Barat To / Venue *'}
                </label>
                <input
                  type="text"
                  required
                  value={baratTo}
                  onChange={(e) => setBaratTo(e.target.value)}
                  placeholder={isHindi ? 'उदा. खलपुरा / द मंडप पैलेस सिवान' : 'e.g. Khelpura / Mandap Palace'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-brand-cream-50/40"
                />
              </div>
            </div>
          </div>

          {/* Date & Board Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-brand-cream-300 shadow-xs">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isHindi ? 'विवाह / शुभ तिथि (Wedding Date) *' : 'Wedding Date *'}
              </label>
              <input
                type="text"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                placeholder={isHindi ? 'उदा. 11.7.2026 या 7.7.26' : 'e.g. 11.7.2026'}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
              />
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brand-cream-300 shadow-xs">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isHindi ? 'बोर्ड का साइज (Board Size)' : 'Board Size Preference'}
              </label>
              <select
                value={boardSize}
                onChange={(e) => setBoardSize(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-white"
              >
                <option value="स्टैंडर्ड साइज (3.5 x 2.5 फीट)">स्टैंडर्ड साइज (3.5 x 2.5 फीट)</option>
                <option value="बड़ा स्टेज बोर्ड (4 x 3 फीट)">बड़ा स्टेज बोर्ड (4 x 3 फीट)</option>
                <option value="ग्रैंड मंडप बोर्ड (6 x 3.5 फीट)">ग्रैंड मंडप बोर्ड (6 x 3.5 फीट)</option>
                <option value="कस्टम साइज (व्हाट्सएप पर बताएं)">कस्टम साइज (व्हाट्सएप पर बताएं)</option>
              </select>
            </div>
          </div>

          {/* Customer Contact Details */}
          <div className="p-4 rounded-2xl bg-white border border-brand-cream-300 shadow-xs space-y-3">
            <div className="text-xs font-bold text-slate-700 pb-1 border-b border-brand-cream-200">
              {isHindi ? 'ग्राहक संपर्क जानकारी (Customer Details)' : 'Your Contact Details'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={isHindi ? 'आपका नाम (Your Name) *' : 'Your Name *'}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={isHindi ? 'व्हाट्सएप नंबर (WhatsApp No.) *' : 'WhatsApp Number *'}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Live Text Preview Box */}
          {(groomName || brideName || baratFrom || baratTo || eventDate) && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-purple-950 to-brand-rose-950 text-white border border-brand-gold-400/40 shadow-md">
              <div className="flex items-center gap-1.5 text-xs text-brand-gold-300 font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isHindi ? 'बोर्ड पर छपने वाला टेक्स्ट (Live Preview):' : 'Board Output Preview:'}</span>
              </div>
              <div className="text-center font-serif py-1 space-y-1">
                <p className="text-base sm:text-xl font-bold text-amber-300">
                  {groomName || (isHindi ? 'दूल्हा' : 'Groom')} {isHindi ? 'संग' : 'weds'} {brideName || (isHindi ? 'दुल्हन' : 'Bride')}
                </p>
                {(baratFrom || baratTo || eventDate) && (
                  <p className="text-xs sm:text-sm text-brand-cream-100 font-medium">
                    {baratFrom ? baratFrom : ''} {baratTo ? `से ${baratTo}` : ''} {eventDate ? eventDate : ''}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Submit Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isHindi ? 'सबमिट करें और व्हाट्सएप पर ऑर्डर भेजें' : 'Submit & Order on WhatsApp'}</span>
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2">
              {isHindi 
                ? 'क्लिक करते ही यह सारी जानकारी व्हाट्सएप पर तुरंत शॉप को भेज दी जाएगी।' 
                : 'Clicking submit will open WhatsApp with all filled details.'}
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}
