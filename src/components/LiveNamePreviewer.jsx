import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, MapPin, Calendar, Heart, Wand2, ArrowRight, Truck, CheckCircle2, Layers } from 'lucide-react';
import { getLiveCustomizerUrl } from '../utils/whatsapp';
import { PRODUCTS } from '../data/products';

export default function LiveNamePreviewer({ selectedDesign, onSelectDesign }) {
  // Available Hindu wedding stage designs
  const hinduDesigns = PRODUCTS.filter(p => p.categoryId === 'hindu-design' || p.tags?.includes('hindu-stage-board'));

  const [currentDesign, setCurrentDesign] = useState(
    selectedDesign || hinduDesigns[0] || {
      id: 'mor-phool-tabla',
      name: 'मोर फूल तबला',
      price: 400,
      image: '/images/products/hero-img2.png'
    }
  );

  useEffect(() => {
    if (selectedDesign) {
      setCurrentDesign(selectedDesign);
    }
  }, [selectedDesign]);

  const [groomName, setGroomName] = useState('डा. दिग्विजय');
  const [brideName, setBrideName] = useState('डा. मीनू मोहन');
  const [baratFrom, setBaratFrom] = useState('तरवैया बंगरा');
  const [baratTo, setBaratTo] = useState('खलपुरा');
  const [eventDate, setEventDate] = useState('2026-07-11');
  const [deliveryDate, setDeliveryDate] = useState('2026-07-05');
  const [includeSmallBoard, setIncludeSmallBoard] = useState(false);

  // Price Calculation: Base ₹400, +₹50 if small board is selected (total ₹450)
  const basePrice = 400;
  const totalPrice = includeSmallBoard ? 450 : 400;

  const handleDesignChange = (design) => {
    setCurrentDesign(design);
    if (onSelectDesign) {
      onSelectDesign(design);
    }
  };

  const [shareToast, setShareToast] = useState('');

  const handleOrderCustomizer = () => {
    const designTitle = currentDesign?.name || 'मोर फूल तबला';
    
    let designImageUrl = currentDesign?.image || '';
    if (designImageUrl && !designImageUrl.startsWith('http') && typeof window !== 'undefined') {
      designImageUrl = `${window.location.origin}${designImageUrl}`;
    }

    // Auto-download design image so user also has the exact image file ready on their device
    if (currentDesign?.image) {
      try {
        const a = document.createElement('a');
        a.href = currentDesign.image;
        a.download = `${currentDesign.name || 'board-design'}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (e) {
        console.error('Image auto-download failed', e);
      }
    }

    // Open WhatsApp URL directly with full pre-filled details & design image
    const url = getLiveCustomizerUrl({
      groomName,
      brideName,
      baratFrom,
      baratTo,
      eventDate,
      deliveryDate,
      designName: designTitle,
      designImage: designImageUrl,
      includeSmallBoard,
      totalPrice
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="live-customizer" className="py-16 bg-brand-cream-50 relative overflow-hidden border-y border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Wand2 className="w-3.5 h-3.5 text-brand-purple-700" />
            <span>Interactive 3D Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 tracking-tight">
            लाइव 3D नाम एवं बारात बोर्ड कस्टमाइज़र
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            डिजाइन चुनें, दूल्हा-दुल्हन का नाम, बारात स्थल, शादी तिथि व छोटा बोर्ड विकल्प चुनें और तुरंत लाइव 3D बोर्ड देखें!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Panel */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-brand-cream-300 space-y-4.5">
            
            {/* Selected Design Indicator & Quick Switcher */}
            <div className="bg-brand-purple-50/60 rounded-2xl p-4 border border-brand-purple-200">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-brand-purple-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-gold-600" />
                  <span>चयनित डिजाइन (Selected Design):</span>
                </span>
                <span className="text-xs font-black text-brand-purple-900 bg-brand-gold-400/30 px-2.5 py-0.5 rounded-full border border-brand-gold-400">
                  {currentDesign?.name || 'मोर फूल तबला'}
                </span>
              </div>

              {/* Quick Design Switcher Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {hinduDesigns.map((d) => {
                  const isSelected = currentDesign?.id === d.id || currentDesign?.name === d.name;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => handleDesignChange(d)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1 border ${
                        isSelected
                          ? 'bg-brand-purple-900 text-white border-brand-purple-900 shadow-xs'
                          : 'bg-white hover:bg-brand-purple-100/60 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{d.name}</span>
                      {isSelected && <span className="text-[10px]">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 pb-1 border-b border-brand-cream-200">
              <Heart className="w-4 h-4 text-brand-rose-600 fill-brand-rose-600" />
              <span className="text-xs font-extrabold text-brand-purple-950 uppercase tracking-wider">
                विवाह एवं बारात विवरण दर्ज करें
              </span>
            </div>

            {/* 1. Groom & Bride Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  दूल्हे का नाम (Groom Name) *
                </label>
                <input
                  type="text"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                  placeholder="उदा. डा. दिग्विजय या विकास"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  दुल्हन का नाम (Bride Name) *
                </label>
                <input
                  type="text"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  placeholder="उदा. डा. मीनू मोहन या बबिता"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>
            </div>

            {/* 2. Barat From & Barat To */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>बारात कहाँ से (Barat From) *</span>
                </label>
                <input
                  type="text"
                  value={baratFrom}
                  onChange={(e) => setBaratFrom(e.target.value)}
                  placeholder="उदा. तरवैया बंगरा / सिधवल"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-rose-600" />
                  <span>बारात कहाँ तक / स्थल (Barat To) *</span>
                </label>
                <input
                  type="text"
                  value={baratTo}
                  onChange={(e) => setBaratTo(e.target.value)}
                  placeholder="उदा. खलपुरा / द मंडप पैलेस सिवान"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>
            </div>

            {/* 3. Wedding Date & Delivery Date with Calendar Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-purple-700" />
                  <span>विवाह तिथि (Wedding Date) *</span>
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>डिलीवरी तिथि (Delivery Date) *</span>
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-emerald-50/30 cursor-pointer"
                />
              </div>
            </div>

            {/* 4. Small Board (छोटा बोर्ड) Yes / No Input */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-brand-purple-700" />
                  <span>छोटा बोर्ड (Small Gate Board) शामिल करें?</span>
                </span>
                <span className="text-[11px] text-brand-rose-600 font-bold">
                  {includeSmallBoard ? '+₹50 (कुल ₹450)' : '₹400 (केवल मुख्य बोर्ड)'}
                </span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeSmallBoard(false)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    !includeSmallBoard
                      ? 'border-brand-purple-600 bg-brand-purple-50 ring-2 ring-brand-purple-600/30'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900">नहीं (No)</div>
                    <div className="text-[11px] text-slate-500">केवल मुख्य बोर्ड</div>
                  </div>
                  <span className="text-xs font-black text-brand-purple-950">₹400</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeSmallBoard(true)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    includeSmallBoard
                      ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-600/30'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>हाँ (Yes)</span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded font-bold">+₹50</span>
                    </div>
                    <div className="text-[11px] text-slate-500">छोटा बोर्ड सहित</div>
                  </div>
                  <span className="text-xs font-black text-emerald-800">₹450</span>
                </button>
              </div>
            </div>

            {/* Price Summary Banner */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-brand-purple-900 to-brand-rose-900 text-white shadow-md">
              <div>
                <span className="text-[11px] text-brand-cream-200 uppercase font-bold tracking-wider block">
                  कुल मूल्य (Total Price)
                </span>
                <span className="text-xs text-brand-gold-300 font-medium">
                  {currentDesign?.name} {includeSmallBoard ? '+ छोटा बोर्ड' : ''}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-brand-gold-300">₹{totalPrice}</span>
                <span className="text-[10px] text-brand-cream-200 block line-through">₹600</span>
              </div>
            </div>

            {/* Toast feedback if downloaded on desktop */}
            {shareToast && (
              <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-bounce">
                <span>📸</span>
                <span>{shareToast}</span>
              </div>
            )}

            {/* Submit Action Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleOrderCustomizer}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>यह ₹{totalPrice} वाला बोर्ड व्हाट्सएप पर ऑर्डर करें</span>
              </button>
            </div>

          </div>

          {/* Right Live Simulation Board Visual */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-tr from-slate-950 via-brand-purple-950 to-slate-900 shadow-2xl border-2 border-brand-gold-500/40 overflow-hidden flex flex-col items-center justify-center text-center">
              
              {/* Background ambient gold lights */}
              <div className="absolute inset-0 bg-radial from-amber-400/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Top Header with Selected Design & Price Tag */}
              <div className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2">
                <span className="text-brand-gold-300 font-cinzel tracking-[0.2em] uppercase text-xs font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-brand-gold-400/30 backdrop-blur-md flex items-center gap-1.5">
                  <span>✨</span>
                  <span>{currentDesign?.name || 'मोर फूल तबला'}</span>
                </span>

                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-black px-3.5 py-1.5 rounded-full border border-emerald-400/40 backdrop-blur-md">
                  कुल मूल्य: ₹{totalPrice}
                </span>
              </div>

              {/* Design Image Thumbnail Preview - Increased Width & Size */}
              {currentDesign?.image && (
                <div className="relative z-10 mb-4 w-full max-w-sm sm:max-w-md h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-brand-gold-400/60 shadow-2xl bg-black/40 backdrop-blur-md p-2 flex items-center justify-center">
                  <img
                    src={currentDesign.image}
                    alt={currentDesign.name}
                    className="w-full h-full object-contain rounded-xl drop-shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-2 inset-x-3 bg-black/80 backdrop-blur-md text-xs sm:text-sm text-brand-gold-300 font-bold py-1 px-3 rounded-xl text-center border border-brand-gold-400/30 shadow-md">
                    {currentDesign.name}
                  </div>
                </div>
              )}

              {/* Main Simulated 3D Thermocol Board Container */}
              <div className="relative z-10 p-5 sm:p-6 rounded-3xl max-w-lg w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                
                {/* 3D Cutout Names */}
                <div className="py-3 px-1">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-amber-900 thermocol-glitter-gold px-3.5 py-1.5 rounded-xl thermocol-cutout-preview border border-amber-400 inline-block shadow-lg">
                      {groomName || 'दूल्हा'}
                    </span>
                    
                    <span className="text-lg sm:text-xl font-serif font-black text-brand-gold-300 px-1 animate-pulse">
                      संग
                    </span>

                    <span className="font-serif font-bold text-2xl sm:text-3xl text-amber-900 thermocol-glitter-gold px-3.5 py-1.5 rounded-xl thermocol-cutout-preview border border-amber-400 inline-block shadow-lg">
                      {brideName || 'दुल्हन'}
                    </span>
                  </div>
                </div>

                {/* Barat Route and Date Display */}
                <div className="mt-3 pt-3 border-t border-white/15 space-y-2">
                  {(baratFrom || baratTo) && (
                    <div className="inline-flex items-center gap-1.5 bg-black/40 text-brand-cream-100 text-xs sm:text-sm font-medium px-4 py-1 rounded-full border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{baratFrom || 'स्थान'} से {baratTo || 'गंतव्य'}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                    {eventDate && (
                      <span className="inline-flex items-center gap-1 bg-brand-purple-900/60 text-brand-gold-300 text-xs font-bold px-3 py-0.5 rounded-full border border-brand-gold-400/30">
                        <Calendar className="w-3 h-3 text-brand-gold-400" />
                        <span>शादी: {eventDate}</span>
                      </span>
                    )}

                    {deliveryDate && (
                      <span className="inline-flex items-center gap-1 bg-emerald-900/60 text-emerald-300 text-xs font-bold px-3 py-0.5 rounded-full border border-emerald-400/30">
                        <Truck className="w-3 h-3 text-emerald-400" />
                        <span>डिलीवरी: {deliveryDate}</span>
                      </span>
                    )}
                  </div>

                  {/* Small Board Indicator */}
                  {includeSmallBoard && (
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-0.5 rounded-full border border-amber-400/30">
                        <CheckCircle2 className="w-3 h-3 text-amber-400" />
                        <span>छोटा स्वागत बोर्ड शामिल (+₹50)</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Subtitle */}
                <div className="mt-3 text-brand-cream-200/80 text-[10px] font-sans tracking-wider uppercase">
                  <span>हैंडक्राफ्टेड 3D थर्मोकोल कटआउट • हाई डेंसिटी व ग्लिटर फिनिश</span>
                </div>
              </div>

              {/* Order on WhatsApp CTA directly from preview */}
              <div className="relative z-10 mt-5 w-full max-w-md">
                <button
                  onClick={handleOrderCustomizer}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-sm sm:text-base cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp पर ₹{totalPrice} में ऑर्डर करें</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
