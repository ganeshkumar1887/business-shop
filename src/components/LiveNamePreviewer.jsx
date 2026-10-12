import React, { useState, useEffect } from 'react';
import { MessageCircle, MapPin, Calendar, Heart, Wand2, ArrowRight, Truck, CheckCircle2, Layers } from 'lucide-react';
import { getLiveCustomizerUrl } from '../utils/whatsapp';
import { PRODUCTS } from '../data/products';
import { smallBoardDulhanImg } from '../data/images';
import { instantTransliterateWord, fetchGoogleTransliterate, transliterateFullText } from '../utils/transliterate';

export default function LiveNamePreviewer({ selectedDesign, onSelectDesign }) {
  // Available wedding stage designs (Hindu + Islamic)
  const allStageDesigns = PRODUCTS.filter(
    p => p.categoryId === 'hindu-design' || 
         p.categoryId === 'islamic-design' || 
         p.designType === 'islamic' || 
         p.designType === 'hindu' ||
         p.tags?.includes('hindu-stage-board')
  );

  const [currentDesign, setCurrentDesign] = useState(
    selectedDesign || allStageDesigns[0] || {
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

  const [inputLang, setInputLang] = useState('hi'); // 'hi' or 'en'
  const [groomName, setGroomName] = useState('');
  const [brideName, setBrideName] = useState('');
  const [baratFrom, setBaratFrom] = useState('');
  const [baratTo, setBaratTo] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [includeSmallBoard, setIncludeSmallBoard] = useState(false);

  // Handle language switcher click (automatically converts existing English text to Hindi if switching to Hindi)
  const handleLanguageSwitch = async (lang) => {
    setInputLang(lang);
    if (lang === 'hi') {
      if (groomName && /[a-zA-Z]/.test(groomName)) {
        setGroomName(await transliterateFullText(groomName));
      }
      if (brideName && /[a-zA-Z]/.test(brideName)) {
        setBrideName(await transliterateFullText(brideName));
      }
      if (baratFrom && /[a-zA-Z]/.test(baratFrom)) {
        setBaratFrom(await transliterateFullText(baratFrom));
      }
      if (baratTo && /[a-zA-Z]/.test(baratTo)) {
        setBaratTo(await transliterateFullText(baratTo));
      }
    }
  };

  // Convert on typing when user hits space in Hindi mode
  const handleTextInputChange = (rawText, setter) => {
    setter(rawText);

    if (inputLang === 'hi' && rawText.endsWith(' ')) {
      const parts = rawText.slice(0, -1).split(' ');
      const lastWord = parts[parts.length - 1];

      if (lastWord && /[a-zA-Z]/.test(lastWord)) {
        const instant = instantTransliterateWord(lastWord);
        parts[parts.length - 1] = instant;
        const newText = parts.join(' ') + ' ';
        setter(newText);

        // Async Google transliteration refine
        fetchGoogleTransliterate(lastWord).then((refined) => {
          if (refined && refined !== instant) {
            parts[parts.length - 1] = refined;
            setter(parts.join(' ') + ' ');
          }
        });
      }
    }
  };

  // Convert on blur when leaving the input field
  const handleInputBlur = async (value, setter) => {
    if (inputLang === 'hi' && value && /[a-zA-Z]/.test(value)) {
      const converted = await transliterateFullText(value);
      setter(converted);
    }
  };

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
      totalPrice,
      lang: inputLang
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
            
            {/* Language Selection Radio Buttons */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-cream-100/70 border border-brand-cream-300">
              <span className="text-xs font-bold text-slate-800">
                भाषा (Language):
              </span>
              <div className="flex items-center gap-5">
                <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800 hover:text-brand-purple-900 select-none">
                  <input
                    type="radio"
                    name="writingLanguage"
                    value="hi"
                    checked={inputLang === 'hi'}
                    onChange={() => handleLanguageSwitch('hi')}
                    className="w-4 h-4 text-brand-purple-900 accent-brand-purple-900 cursor-pointer"
                  />
                  <span>हिंदी (Hindi)</span>
                </label>

                <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800 hover:text-brand-purple-900 select-none">
                  <input
                    type="radio"
                    name="writingLanguage"
                    value="en"
                    checked={inputLang === 'en'}
                    onChange={() => handleLanguageSwitch('en')}
                    className="w-4 h-4 text-brand-purple-900 accent-brand-purple-900 cursor-pointer"
                  />
                  <span>English</span>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-2 pb-1 border-b border-brand-cream-200">
              <Heart className="w-4 h-4 text-brand-rose-600 fill-brand-rose-600" />
              <span className="text-xs font-extrabold text-brand-purple-950 uppercase tracking-wider">
                {inputLang === 'hi' ? 'विवाह एवं बारात विवरण दर्ज करें' : 'Enter Wedding & Barat Details'}
              </span>
            </div>

            {/* 1. Groom & Bride Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {inputLang === 'hi' ? 'दूल्हे का नाम (Groom Name) *' : 'Groom Name *'}
                </label>
                <input
                  type="text"
                  value={groomName}
                  onChange={(e) => handleTextInputChange(e.target.value, setGroomName)}
                  onBlur={() => handleInputBlur(groomName, setGroomName)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {inputLang === 'hi' ? 'दुल्हन का नाम (Bride Name) *' : 'Bride Name *'}
                </label>
                <input
                  type="text"
                  value={brideName}
                  onChange={(e) => handleTextInputChange(e.target.value, setBrideName)}
                  onBlur={() => handleInputBlur(brideName, setBrideName)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>
            </div>

            {/* 2. Barat From & Barat To */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{inputLang === 'hi' ? 'बारात कहाँ से (Barat From) *' : 'Barat From (Origin) *'}</span>
                </label>
                <input
                  type="text"
                  value={baratFrom}
                  onChange={(e) => handleTextInputChange(e.target.value, setBaratFrom)}
                  onBlur={() => handleInputBlur(baratFrom, setBaratFrom)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-rose-600" />
                  <span>{inputLang === 'hi' ? 'बारात कहाँ तक / स्थल (Barat To) *' : 'Barat To (Venue) *'}</span>
                </label>
                <input
                  type="text"
                  value={baratTo}
                  onChange={(e) => handleTextInputChange(e.target.value, setBaratTo)}
                  onBlur={() => handleInputBlur(baratTo, setBaratTo)}
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

            {/* 4. Small Board (छोटा बोर्ड - दुल्हन हम ले जायेंगे) Preview Card & Yes/No Options */}
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

              {/* Real Photo Showcase of Small Board: 'दुल्हन हम ले जायेंगे' */}
              <div
                onClick={() => setIncludeSmallBoard(!includeSmallBoard)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group mb-2.5 ${
                  includeSmallBoard 
                    ? 'bg-gradient-to-r from-emerald-50 via-rose-50/50 to-amber-50 border-emerald-400 ring-2 ring-emerald-400/40 shadow-sm'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Small Board Thumbnail Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 border-brand-gold-400/70 shadow-sm bg-brand-cream-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img
                      src={smallBoardDulhanImg}
                      alt="छोटा बोर्ड - दुल्हन हम ले जायेंगे"
                      className="w-full h-full object-contain p-0.5"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] text-white px-1.5 py-0.2 rounded font-bold shadow-xs">
                      +₹50
                    </span>
                  </div>

                  {/* Details & Status Badge */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-rose-700 bg-brand-rose-50 px-2 py-0.5 rounded-full border border-brand-rose-200">
                        <span>✨</span> छोटा एंट्री / कार बोर्ड
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        includeSmallBoard ? 'bg-emerald-200 text-emerald-900 border border-emerald-300' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {includeSmallBoard ? '✓ शामिल है' : 'वैकल्पिक (+₹50)'}
                      </span>
                    </div>

                    <h4 className="font-serif font-black text-xs sm:text-sm text-brand-purple-950 leading-tight">
                      'दुल्हन हम ले जायेंगे' 3D कटआउट
                    </h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5 leading-snug">
                      बारात कार, मंडप एंट्री गेट व फोटो प्रॉप्स के लिए हाथ से बना 3D ग्लिटर थर्मोकोल हार्ट कटआउट।
                    </p>

                    <div className="flex items-center gap-2 mt-1 text-[11px] font-bold">
                      <span className="text-emerald-700">मात्र +₹50 अतिरिक्त</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-brand-purple-900 font-medium">क्लिक करके जोड़ें/हटाएं</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yes / No Selector Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeSmallBoard(false)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    !includeSmallBoard
                      ? 'border-brand-purple-600 bg-brand-purple-50 ring-2 ring-brand-purple-600/30 shadow-xs'
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
                      ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-600/30 shadow-xs'
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

          {/* Right Live Simulation Board Visual - Professional Attractive 3D Wedding Board */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-slate-950 via-brand-purple-950 to-slate-950 shadow-2xl border-2 border-brand-gold-500/40 overflow-hidden flex flex-col justify-between">
              
              {/* Background ambient spotlight & glowing lights */}
              <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-amber-400/15 via-brand-purple-500/10 to-transparent pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-rose-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Top Header Bar */}
              <div className="relative z-10 mb-4 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-brand-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 font-cinzel">
                    <span>✨</span>
                    <span>लाइव 3D स्टेज बोर्ड प्रिव्यू</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-white/10 text-brand-cream-200 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15">
                    {currentDesign?.name || 'मोर फूल तबला'}
                  </span>
                  <span className="bg-emerald-500/25 text-emerald-300 text-xs font-black px-3 py-1 rounded-full border border-emerald-400/40 shadow-xs">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* THE GRAND 3D STAGE BOARD (Unified Realistic Thermocol Masterpiece) */}
              <div className="relative z-10 w-full rounded-3xl p-5 sm:p-7 md:p-8 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9ED] to-[#FAF1DE] border-4 border-amber-400/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-center overflow-hidden my-2">
                
                {/* Board Embossed Decorative Gold Filigree Borders & Corner Motifs */}
                <div className="absolute inset-1.5 rounded-2xl border-2 border-dashed border-amber-500/40 pointer-events-none"></div>
                <div className="absolute top-2 left-2 text-amber-500/60 text-lg sm:text-xl">🪷</div>
                <div className="absolute top-2 right-2 text-amber-500/60 text-lg sm:text-xl">🪷</div>
                <div className="absolute bottom-2 left-2 text-amber-500/60 text-lg sm:text-xl">🪷</div>
                <div className="absolute bottom-2 right-2 text-amber-500/60 text-lg sm:text-xl">🪷</div>

                {/* Top Auspicious Header Motif Badge */}
                <div className="relative mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-600 via-brand-rose-600 to-amber-600 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md border border-amber-300">
                    {currentDesign?.designType === 'islamic' || currentDesign?.categoryId === 'islamic-design' ? (
                      <>
                        <span>🌙</span>
                        <span>निकाह मुबारक व वलीमा स्टेज</span>
                        <span>🌙</span>
                      </>
                    ) : (
                      <>
                        <span>🕉️</span>
                        <span>शुभ विवाह • मंडप स्टेज</span>
                        <span>🕉️</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Main 3D Cutout Couple Names Display */}
                <div className="relative py-2 sm:py-3">
                  <div className="flex flex-col items-center justify-center gap-2 sm:gap-2.5">
                    
                    {/* Groom Name in Grand 3D Glitter Font */}
                    <div className="relative inline-block my-1">
                      <div className="relative px-6 py-2 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-amber-500/20 border-2 border-amber-400/70 shadow-[0_6px_20px_rgba(217,119,6,0.3)]">
                        <span 
                          className="font-serif font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-red-600 block drop-shadow-[0_2px_2px_rgba(255,255,255,1)]"
                          style={{
                            textShadow: '2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff, 0 4px 10px rgba(185, 28, 28, 0.45)'
                          }}
                        >
                          {groomName || (inputLang === 'hi' ? 'दूल्हा' : 'Groom')}
                        </span>
                      </div>
                    </div>

                    {/* Auspicious Connector Badge (संग / WEDS) */}
                    <div className="my-1">
                      <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 text-white font-serif font-black text-xs sm:text-sm shadow-md border-2 border-white tracking-widest">
                        {inputLang === 'en' ? 'WEDS' : currentDesign?.designType === 'islamic' ? 'WEDS' : 'संग'}
                      </span>
                    </div>

                    {/* Bride Name in Grand 3D Glitter Font */}
                    <div className="relative inline-block my-1">
                      <div className="relative px-6 py-2 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-amber-500/20 border-2 border-amber-400/70 shadow-[0_6px_20px_rgba(217,119,6,0.3)]">
                        <span 
                          className="font-serif font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-rose-600 block drop-shadow-[0_2px_2px_rgba(255,255,255,1)]"
                          style={{
                            textShadow: '2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff, 0 4px 10px rgba(225, 29, 72, 0.45)'
                          }}
                        >
                          {brideName || (inputLang === 'hi' ? 'दुल्हन' : 'Bride')}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Barat Route Ribbon */}
                {(baratFrom || baratTo) ? (
                  <div className="mt-4 pt-3 border-t border-amber-300/60">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 via-white to-amber-100 text-slate-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5 text-brand-rose-600 shrink-0" />
                      <span>
                        {inputLang === 'hi'
                          ? `बारात: ${baratFrom || 'स्थान'} से ${baratTo || 'गंतव्य'}`
                          : `Barat: ${baratFrom || 'Origin'} to ${baratTo || 'Venue'}`
                        }
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 pt-2.5 border-t border-amber-300/40">
                    <span className="text-[11px] font-semibold text-amber-800/80">
                      {inputLang === 'hi' ? 'बारात स्थल व तिथि विवरण' : 'Barat Route & Wedding Details'}
                    </span>
                  </div>
                )}

                {/* Wedding Date & Delivery Date Badges */}
                {(eventDate || deliveryDate) && (
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-2 pt-1">
                    {eventDate && (
                      <span className="inline-flex items-center gap-1 bg-amber-600/15 text-amber-950 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/40">
                        <Calendar className="w-3 h-3 text-amber-700" />
                        <span>{inputLang === 'hi' ? 'शादी:' : 'Date:'} {eventDate}</span>
                      </span>
                    )}
                    {deliveryDate && (
                      <span className="inline-flex items-center gap-1 bg-emerald-600/15 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/40">
                        <Truck className="w-3 h-3 text-emerald-700" />
                        <span>{inputLang === 'hi' ? 'डिलीवरी:' : 'Delivery:'} {deliveryDate}</span>
                      </span>
                    )}
                  </div>
                )}

                {/* Attached Small Board Preview Badge */}
                {includeSmallBoard && (
                  <div className="mt-4 pt-3 border-t border-amber-300/60 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2.5 p-2 px-3 rounded-2xl bg-gradient-to-r from-rose-100 via-amber-50 to-rose-100 border-2 border-rose-400 shadow-sm text-left">
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-rose-300 shrink-0 bg-white shadow-xs">
                        <img
                          src={smallBoardDulhanImg}
                          alt="दुल्हन हम ले जायेंगे"
                          className="w-full h-full object-contain p-0.5"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs font-black text-rose-950">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>छोटा बोर्ड शामिल (+₹50)</span>
                        </div>
                        <span className="text-[10px] text-rose-800 font-semibold block">
                          'दुल्हन हम ले जायेंगे' 3D कार व गेट कटआउट
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subtitle Guarantee Tag */}
                <div className="mt-4 pt-2 border-t border-amber-200/80 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-amber-900/80">
                  <span>📐 साइज: 4 × 2.5 फीट स्टेज बोर्ड</span>
                  <span>💎 3D थर्मोकोल ग्लिटर फिनिश</span>
                </div>

              </div>

              {/* Quality & Service Trust Highlights */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 py-2 text-[11px] text-brand-cream-200">
                <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  ⭐ 100% कस्टमाइज़्ड
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  💧 वॉटरप्रूफ फिनिश
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  📦 सुरक्षित डिलीवरी
                </span>
              </div>

              {/* Order on WhatsApp CTA directly from preview */}
              <div className="relative z-10 mt-2 w-full">
                <button
                  onClick={handleOrderCustomizer}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all text-sm sm:text-base cursor-pointer border border-emerald-400/40"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200" />
                  <span>यह ₹{totalPrice} वाला बोर्ड WhatsApp पर ऑर्डर करें</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
