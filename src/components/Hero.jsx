import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Crown,
  Wand2,
  CheckCircle2,
  Play,
  Pause,
  Heart,
  Star
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { HERO_SLIDES, weddingCoupleImg, logoImg } from '../data/images';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  // Smooth automatic slide transition every 4 seconds
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative bg-festive-mesh bg-mandala-pattern pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 border-b-2 border-brand-gold-500/40 overflow-hidden">
      
      {/* Decorative Vibrant Indian Festive Ambient Glow Orbs */}
      <div className="absolute -top-10 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-brand-purple-400/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-5 w-80 sm:w-96 h-80 sm:h-96 bg-brand-rose-400/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]"></div>
      <div className="absolute -bottom-10 left-1/3 w-80 sm:w-96 h-80 sm:h-96 bg-brand-gold-400/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Showcase Layout */}
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
          
          {/* Top Shop Branding with 100% Centered Title & Balanced Artwork */}
          <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-2 sm:px-4">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative">
              
              {/* Left Side: Traditional Wedding Couple Illustration */}
              <div className="hidden md:flex relative shrink-0 group">
                <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 lg:w-36 lg:h-44 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-brand-gold-400/80 shadow-lg shadow-brand-purple-950/15 bg-white/70 backdrop-blur-xs p-1 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={weddingCoupleImg}
                    alt="Traditional Indian Wedding Couple"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    loading="eager"
                  />
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-amber-400/40 pointer-events-none"></div>
                </div>
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-outfit font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-md border border-amber-300">
                  शुभ विवाह ✨
                </span>
              </div>

              {/* Center: 100% Perfectly Centered Shop Branding & Titles */}
              <div className="flex-1 text-center space-y-2 sm:space-y-3 mx-auto max-w-2xl lg:max-w-3xl">
                
                {/* Mobile Artwork Preview (Couples + Logo Pills) */}
                <div className="flex md:hidden items-center justify-center gap-3 pb-1">
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden border border-brand-gold-400 shadow-sm">
                    <img src={weddingCoupleImg} alt="Wedding Couple" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden border border-brand-gold-400 shadow-sm bg-brand-purple-950 p-0.5">
                    <img src={logoImg} alt="Shree Bhagwan Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>

                {/* Festive Auspicious Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-brand-purple-100/90 via-brand-rose-100/90 to-brand-gold-100/90 border border-brand-purple-300/70 text-brand-purple-950 text-xs sm:text-sm md:text-base font-outfit font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold-600 animate-spin-slow shrink-0" />
                  <span className="truncate">शादी, सालगिरह व जन्मदिन स्पेशल थर्मोकोल नेम बोर्ड्स</span>
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold-600 animate-spin-slow shrink-0" />
                </div>

                {/* Regal Shop Name (100% Centered) */}
                <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight sm:tracking-wide text-brand-purple-950 leading-none py-1 select-none text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-950 via-brand-purple-800 to-brand-rose-700 drop-shadow-[0_4px_16px_rgba(76,29,149,0.18)]">
                    {SHOP_CONFIG.shortName}
                  </span>
                </h1>

                {/* Tagline with Decorative Gold Filigree Bars (Centered) */}
                <div className="flex items-center justify-center gap-3 sm:gap-5 w-full pt-1">
                  <span className="flex-1 max-w-[50px] sm:max-w-[100px] md:max-w-[160px] h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-brand-gold-400 to-brand-gold-600 rounded-full"></span>
                  <p className="font-serif font-black text-sm sm:text-xl md:text-2xl lg:text-3xl text-brand-rose-600 tracking-widest uppercase drop-shadow-xs whitespace-nowrap">
                    {SHOP_CONFIG.tagline}
                  </p>
                  <span className="flex-1 max-w-[50px] sm:max-w-[100px] md:max-w-[160px] h-[2px] sm:h-[3px] bg-gradient-to-l from-transparent via-brand-gold-400 to-brand-gold-600 rounded-full"></span>
                </div>

                {/* Sub-tagline */}
                <p className="text-xs sm:text-sm md:text-base font-outfit font-semibold text-slate-600 tracking-wide text-center">
                  {SHOP_CONFIG.subTagline}
                </p>

              </div>

              {/* Right Side: Official 3D Logo Artwork (Symmetrical Balance) */}
              <div className="hidden md:flex relative shrink-0 group">
                <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 lg:w-36 lg:h-44 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-brand-gold-400/80 shadow-lg shadow-brand-purple-950/15 bg-brand-purple-950 p-1 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={logoImg}
                    alt="Shree Bhagwan Official Logo"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    loading="eager"
                  />
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-amber-400/40 pointer-events-none"></div>
                </div>
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-outfit font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-brand-purple-700 to-brand-purple-900 text-brand-gold-300 shadow-md border border-brand-gold-400">
                  गिफ्ट शॉप 🎁
                </span>
              </div>

            </div>

          </div>

          {/* Centerpiece Image Showcase Slider (Wider max-w-6xl with Perfect Fitting) */}
          <div className="w-full max-w-5xl lg:max-w-6xl relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-tr from-brand-gold-400 via-brand-purple-400 to-brand-rose-400 shadow-[0_20px_60px_-15px_rgba(107,33,168,0.25),0_0_25px_rgba(234,179,8,0.2)]">
            
            <div className="relative h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] w-full bg-gradient-to-b from-slate-950 via-brand-purple-950 to-slate-950 rounded-xl sm:rounded-[22px] flex items-center justify-center overflow-hidden">
              
              {/* Background Slide Images */}
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl sm:rounded-2xl drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                );
              })}

              {/* Navigation Left / Right Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/30 transition-all hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/30 transition-all hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Slide Title Tag (Top Left Floating) */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto z-20">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white border border-brand-gold-400/50 text-xs sm:text-sm font-semibold shadow-lg">
                  <Crown className="w-4 h-4 text-brand-gold-400" />
                  <span className="text-brand-gold-300 font-bold">{activeSlideData.title}</span>
                  <span className="hidden sm:inline text-brand-cream-300">({activeSlideData.hindiTitle})</span>
                </div>
              </div>

              {/* Slider Bottom Controls Bar (Play/Pause + Dots) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 p-1.5 px-3 rounded-full bg-black/70 backdrop-blur-md border border-white/30 shadow-lg">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  className="text-brand-gold-300 hover:text-white transition-colors"
                >
                  {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <span className="w-[1px] h-3 bg-white/30"></span>
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentSlide 
                          ? 'w-6 h-2 bg-brand-gold-400 shadow-glow-gold' 
                          : 'w-2 h-2 bg-white/50 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Action CTAs & Highlights Card (Equal width matching slider above) */}
          <div className="w-full max-w-5xl lg:max-w-6xl bg-white/85 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-brand-gold-400/30 shadow-lg space-y-4 sm:space-y-5">
            
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-brand-purple-950">
                Make Every Celebration Special ✨
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-1.5 font-medium">
                दूल्हा-दुल्हन स्टेज नेम बोर्ड्स, वेडिंग वेलकम ईजल बोर्ड्स, बर्थडे कटआउट्स और कस्टमाइज्ड गिफ्ट्स।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 max-w-4xl mx-auto">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple-900 via-brand-purple-800 to-brand-rose-700 hover:from-brand-purple-950 hover:to-brand-rose-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>

              <Link
                to="/marriage-designs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold-50 hover:bg-brand-gold-100 text-brand-purple-950 font-bold px-7 py-3.5 rounded-xl border border-brand-gold-300 transition-all text-xs sm:text-sm cursor-pointer"
              >
                <Wand2 className="w-4 h-4 text-brand-gold-700" />
                <span>Design Custom Board</span>
              </Link>
            </div>

            {/* Direct Order Ceremony Wedding Boards Quick Selector */}
            <div className="pt-3 max-w-4xl mx-auto w-full border-t border-brand-cream-300/80">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pb-2 text-center sm:text-left">
                <span className="text-xs font-bold text-brand-purple-950 flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-brand-gold-600" />
                  <span>Order Wedding &amp; Event Stage Boards by Ceremony:</span>
                </span>
                <span className="text-[11px] text-brand-rose-600 font-bold">
                  ✨ 100% Customized with Groom &amp; Bride Names
                </span>
              </div>

              {/* Ceremony Options Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pt-1">
                {[
                  {
                    name: "Hindu Vivah",
                    hindi: "शुभ विवाह बोर्ड",
                    path: "/marriage-designs?type=hindu",
                    icon: "🕉️",
                    bg: "bg-orange-50/90 hover:bg-orange-100 text-orange-950 border-orange-200",
                    badge: "Mandap & Stage",
                    badgeColor: "bg-orange-200 text-orange-900"
                  },
                  {
                    name: "Muslim / Nikah",
                    hindi: "निकाह मुबारक बोर्ड",
                    path: "/marriage-designs?type=islamic",
                    icon: "🌙",
                    bg: "bg-emerald-50/90 hover:bg-emerald-100 text-emerald-950 border-emerald-200",
                    badge: "Walima & Stage",
                    badgeColor: "bg-emerald-200 text-emerald-900"
                  },
                  {
                    name: "Haldi Ceremony",
                    hindi: "हल्दी सेरेमनी बोर्ड",
                    path: "/marriage-designs?type=haldi",
                    icon: "💛",
                    bg: "bg-amber-50/90 hover:bg-amber-100 text-amber-950 border-amber-200",
                    badge: "Yellow Props",
                    badgeColor: "bg-amber-200 text-amber-900"
                  },
                  {
                    name: "Mehndi Ceremony",
                    hindi: "मेहंदी सेरेमनी बोर्ड",
                    path: "/marriage-designs?type=mehndi",
                    icon: "💚",
                    bg: "bg-teal-50/90 hover:bg-teal-100 text-teal-950 border-teal-200",
                    badge: "Floral & Stage",
                    badgeColor: "bg-teal-200 text-teal-900"
                  },
                  {
                    name: "Birthday Party",
                    hindi: "बर्थडे 3D कटआउट्स",
                    path: "/marriage-designs?type=birthday",
                    icon: "🎂",
                    bg: "bg-sky-50/90 hover:bg-sky-100 text-sky-950 border-sky-200",
                    badge: "Name & Age 3D",
                    badgeColor: "bg-sky-200 text-sky-900"
                  }
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className={`flex flex-col items-center text-center p-2.5 rounded-2xl border transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 group ${item.bg}`}
                  >
                    <span className="text-2xl group-hover:scale-115 transition-transform mb-1">{item.icon}</span>
                    <span className="font-serif font-bold text-xs leading-tight text-brand-purple-950 group-hover:text-brand-purple-800">{item.name}</span>
                    <span className="text-[10px] text-slate-600 font-medium mt-0.5">{item.hindi}</span>
                    <span className={`mt-1.5 text-[9px] font-extrabold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro Trust Factors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-brand-cream-300 text-slate-800 text-[11px] sm:text-xs font-bold max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream-50/90 border border-brand-cream-200 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Real Work</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream-50/90 border border-brand-cream-200 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hindi &amp; English</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream-50/90 border border-brand-cream-200 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stage Specialists</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream-50/90 border border-brand-cream-200 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fast Quote</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
