import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Heart, 
  Crown, 
  Sparkles, 
  MessageCircle, 
  Moon, 
  Cake, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import LiveNamePreviewer from '../components/LiveNamePreviewer';
import { IMAGES } from '../data/images';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function MarriageDesigns({ onQuickView, onOrderNow }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get('type') || 'all';

  const [activeTab, setActiveTab] = useState(typeParam);

  useEffect(() => {
    if (typeParam) {
      setActiveTab(typeParam);
    }
  }, [typeParam]);

  const handleTabChange = (type) => {
    setActiveTab(type);
    if (type === 'all') {
      searchParams.delete('type');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ type });
    }
  };

  const tabs = [
    { 
      id: 'all', 
      label: 'सभी डिजाइन्स', 
      englishLabel: 'All Designs',
      icon: '✨', 
      sub: 'कम्प्लीट कैटलॉग',
      count: PRODUCTS.length,
      activeClass: 'from-brand-purple-900 to-brand-rose-900 text-white shadow-luxury ring-2 ring-brand-gold-400'
    },
    { 
      id: 'hindu', 
      label: 'हिन्दू विवाह', 
      englishLabel: 'Hindu Design',
      icon: '🕉️', 
      sub: 'शुभ विवाह व मंडप बोर्ड',
      activeClass: 'from-amber-600 to-amber-800 text-white shadow-luxury ring-2 ring-amber-300'
    },
    { 
      id: 'islamic', 
      label: 'इस्लामिक निकाह', 
      englishLabel: 'Islamic Design',
      icon: '🌙', 
      sub: 'निकाह मुबारक व वलीमा',
      activeClass: 'from-emerald-700 to-emerald-900 text-white shadow-luxury ring-2 ring-emerald-300'
    },
    { 
      id: 'birthday', 
      label: 'बर्थडे डेकोरेशन', 
      englishLabel: 'Birthday Design',
      icon: '🎂', 
      sub: '3D एज व केक टेबल बोर्ड',
      activeClass: 'from-sky-600 to-blue-700 text-white shadow-luxury ring-2 ring-sky-300'
    },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'hindu') return p.designType === 'hindu' || p.categoryId === 'hindu-design';
    if (activeTab === 'islamic') return p.designType === 'islamic' || p.categoryId === 'islamic-design';
    if (activeTab === 'birthday') return p.designType === 'birthday' || p.categoryId === 'birthday-design';
    return true;
  });

  const categoryHeaders = {
    all: {
      tag: "👑 कम्प्लीट वेडिंग एवं पार्टी स्टूडियो",
      hindiTitle: "विवाह एवं शुभ उत्सव डिजाइन्स 💍",
      englishTitle: "Marriage & Celebration Custom Studio",
      subtitle: "हाथ से नक्काशीदार 3D दूल्हा-दुल्हन स्टेज बोर्ड्स, निकाह मुबारक कटआउट्स, और बर्थडे केक टेबल डेकोरेशन।"
    },
    hindu: {
      tag: "🕉️ शुभ विवाह एवं मंडप स्पेशल",
      hindiTitle: "हिन्दू विवाह एवं शुभ विवाह डिजाइन्स 🕉️",
      englishTitle: "Hindu Wedding Mandap & Stage Name Boards",
      subtitle: "पारंपरिक मोर-कलश नक्काशी, शुभ विवाह कटआउट्स, दूल्हा संग दुल्हन नाम बोर्ड्स और गोल्डन ग्लिटर फिनिश।"
    },
    islamic: {
      tag: "🌙 निकाह मुबारक व वलीमा स्पेशल",
      hindiTitle: "इस्लामिक निकाह व वलीमा डिजाइन्स 🌙",
      englishTitle: "Islamic Nikah Mubarak 3D Cutouts & Backdrops",
      subtitle: "शाही निकाह मुबारक 3D कटआउट्स, चांद-तारा फ्लोरल आर्क, उर्दू कैलीग्राफी और वेलकम ईजल बोर्ड्स।"
    },
    birthday: {
      tag: "🎂 बर्थडे व माइलस्टोन सेलिब्रेशन",
      hindiTitle: "बर्थडे व पार्टी सेलिब्रेशन डिजाइन्स 🎂",
      englishTitle: "Birthday 3D Age & Cake Table Decor",
      subtitle: "कस्टमाइज्ड 3D नाम व उम्र कटआउट्स, किड्स कार्टून थीम्स, बेबी वेलकम सेटअप और LED ग्लो बोर्ड्स।"
    }
  };

  const currentHeader = categoryHeaders[activeTab] || categoryHeaders.all;

  return (
    <div className="py-8 lg:py-14 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grand Luxurious Festive Header Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-purple-950 via-brand-purple-900 to-brand-rose-950 text-white p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-brand-gold-400/40 mb-10">
          
          {/* Subtle glowing ambient lights & pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-brand-gold-300 border border-brand-gold-400/40 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
              <Crown className="w-4 h-4 text-brand-gold-400" />
              <span>{currentHeader.tag}</span>
            </div>

            {/* Main Grand Heading in Hindi & English */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight">
              {currentHeader.hindiTitle}
            </h1>
            
            <p className="text-brand-gold-300 font-serif text-sm sm:text-base font-semibold tracking-wide">
              {currentHeader.englishTitle}
            </p>

            <p className="text-brand-cream-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {currentHeader.subtitle}
            </p>

            {/* Value Highlight Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[11px] sm:text-xs text-brand-cream-200 border border-white/10 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-gold-400" /> 100% हैंडक्राफ्टेड
              </span>
              <span className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[11px] sm:text-xs text-brand-cream-200 border border-white/10 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> तुरंत 1-क्लिक व्हाट्सएप ऑर्डर
              </span>
              <span className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[11px] sm:text-xs text-brand-cream-200 border border-white/10 flex items-center gap-1">
                <Heart className="w-3 h-3 text-brand-rose-400" /> नाम व साइज अनुसार कस्टमाइज़ेबल
              </span>
            </div>

          </div>
        </div>

        {/* 4 Interactive Category Filter Cards (High-Converting Styled Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 text-left transition-all duration-300 flex flex-col justify-between group overflow-hidden border ${
                  isActive
                    ? `bg-gradient-to-br ${tab.activeClass} scale-[1.03] shadow-xl`
                    : 'bg-white hover:bg-brand-cream-100/90 text-slate-800 border-brand-cream-300 shadow-sm hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Top Row: Icon and Badge */}
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                    isActive ? 'bg-white/20 backdrop-blur-md' : 'bg-brand-cream-200'
                  }`}>
                    <span>{tab.icon}</span>
                  </div>
                  {tab.count && (
                    <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-brand-cream-200 text-slate-600'
                    }`}>
                      {tab.count} डिजाइन्स
                    </span>
                  )}
                </div>

                {/* Bottom Row: Text Labels */}
                <div>
                  <h3 className={`font-serif font-bold text-sm sm:text-base md:text-lg leading-tight mb-0.5 ${
                    isActive ? 'text-white' : 'text-brand-purple-950 group-hover:text-brand-purple-900'
                  }`}>
                    {tab.label}
                  </h3>
                  <p className={`text-[10px] sm:text-xs font-medium truncate ${
                    isActive ? 'text-brand-cream-200' : 'text-slate-500'
                  }`}>
                    {tab.sub}
                  </p>
                </div>

                {/* Active Indicator Dot */}
                {isActive && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-gold-300 animate-ping"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* 3 Visual Spotlight Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          
          {/* Hindu Design Spotlight Card */}
          <div 
            onClick={() => handleTabChange('hindu')}
            className={`rounded-3xl p-6 border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-luxury ${
              activeTab === 'hindu' 
                ? 'bg-amber-50/90 border-amber-400 ring-2 ring-amber-400/40 shadow-lg' 
                : 'bg-white hover:bg-amber-50/40 border-brand-cream-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">🕉️</span>
              <span className="text-xs font-extrabold text-amber-900 bg-amber-200/70 border border-amber-300 px-3 py-1 rounded-full">
                शुभ विवाह स्पेशल
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-purple-950 mb-1">
              हिन्दू विवाह डिजाइन्स
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              मंडप स्टेज नाम, पारंपरिक मोर-कलश बोर्ड्स, शुभ विवाह कटआउट्स और दूल्हा-दुल्हन हिंदी/इंग्लिश अक्षर।
            </p>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-800 group-hover:translate-x-1 transition-transform">
              <span>डिजाइन्स देखें</span>
              <span>→</span>
            </div>
          </div>

          {/* Islamic Design Spotlight Card */}
          <div 
            onClick={() => handleTabChange('islamic')}
            className={`rounded-3xl p-6 border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-luxury ${
              activeTab === 'islamic' 
                ? 'bg-emerald-50/90 border-emerald-400 ring-2 ring-emerald-400/40 shadow-lg' 
                : 'bg-white hover:bg-emerald-50/40 border-brand-cream-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">🌙</span>
              <span className="text-xs font-extrabold text-emerald-900 bg-emerald-200/70 border border-emerald-300 px-3 py-1 rounded-full">
                निकाह मुबारक
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-purple-950 mb-1">
              इस्लामिक निकाह डिजाइन्स
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              निकाह मुबारक 3D बोर्ड्स, वलीमा वेलकम ईजल साइन्स, चांद-तारा फ्लोरल आर्क और खूबसूरत उर्दू कैलीग्राफी।
            </p>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
              <span>डिजाइन्स देखें</span>
              <span>→</span>
            </div>
          </div>

          {/* Birthday Design Spotlight Card (Light Blue) */}
          <div 
            onClick={() => handleTabChange('birthday')}
            className={`rounded-3xl p-6 border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-luxury ${
              activeTab === 'birthday' 
                ? 'bg-sky-50/90 border-sky-400 ring-2 ring-sky-400/40 shadow-lg' 
                : 'bg-white hover:bg-sky-50/40 border-brand-cream-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">🎂</span>
              <span className="text-xs font-extrabold text-sky-900 bg-sky-200/70 border border-sky-300 px-3 py-1 rounded-full">
                केक टेबल डेकोर
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-purple-950 mb-1">
              बर्थडे सेलिब्रेशन डिजाइन्स
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              कस्टमाइज्ड 3D नाम व उम्र कटआउट्स, बच्चों के कार्टून थीम्स, बेबी वेलकम सेटअप और LED ग्लो बैकड्रॉप।
            </p>
            <div className="flex items-center gap-1 text-xs font-bold text-sky-800 group-hover:translate-x-1 transition-transform">
              <span>डिजाइन्स देखें</span>
              <span>→</span>
            </div>
          </div>

        </div>

        {/* Live Interactive Board Simulator */}
        <div className="mb-16">
          <LiveNamePreviewer />
        </div>

        {/* Catalog Grid for Current Selection */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-brand-rose-600 uppercase tracking-wider">
                {activeTab.toUpperCase()} CATALOG
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-purple-950">
                Available {activeTab === 'all' ? 'Marriage & Celebration' : activeTab === 'hindu' ? 'Hindu Marriage' : activeTab === 'islamic' ? 'Islamic Nikah' : 'Birthday'} Designs ({filteredProducts.length})
              </h2>
            </div>
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onOrderNow={onOrderNow}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-brand-cream-300">
              <p className="text-slate-500 font-medium">No designs found in this category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
