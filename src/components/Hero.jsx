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
import { HERO_SLIDES } from '../data/images';
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
          
          {/* Top Shop Branding & Tagline (Moved Up & Compact) */}
          <div className="space-y-1.5 max-w-3xl mx-auto">
            
            {/* Festive Auspicious Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-purple-100 via-brand-rose-100 to-brand-gold-100 border border-brand-purple-300/60 text-brand-purple-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-600 animate-spin-slow" />
              <span>शादी, सालगिरह व जन्मदिन स्पेशल थर्मोकोल नेम बोर्ड्स</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-600 animate-spin-slow" />
            </div>

            {/* Regal Shop Name */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-brand-purple-950 drop-shadow-xs leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-950 via-brand-purple-800 to-brand-rose-700">
                {SHOP_CONFIG.shortName}
              </span>
            </h1>

            {/* Tagline with Decorative Gold Filigree Bars */}
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-brand-gold-500 to-brand-gold-600 rounded-full"></span>
              <p className="font-serif font-extrabold text-sm sm:text-xl md:text-2xl text-brand-rose-600 tracking-wider uppercase drop-shadow-xs">
                {SHOP_CONFIG.tagline}
              </p>
              <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-l from-transparent via-brand-gold-500 to-brand-gold-600 rounded-full"></span>
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

          {/* Action CTAs & Highlights Card with Soft Warm Glow */}
          <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-brand-gold-400/30 shadow-lg space-y-4">
            
            <div>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-brand-purple-950">
                Make Every Celebration Special ✨
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                दूल्हा-दुल्हन स्टेज नेम बोर्ड्स, वेडिंग वेलकम ईजल बोर्ड्स, बर्थडे कटआउट्स और कस्टमाइज्ड गिफ्ट्स।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple-900 via-brand-purple-800 to-brand-rose-700 hover:from-brand-purple-950 hover:to-brand-rose-800 text-white font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>

              <Link
                to="/marriage-designs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold-50 hover:bg-brand-gold-100 text-brand-purple-950 font-bold px-6 py-3 rounded-xl border border-brand-gold-300 transition-all text-xs sm:text-sm"
              >
                <Wand2 className="w-4 h-4 text-brand-gold-700" />
                <span>Design Custom Board</span>
              </Link>
            </div>

            {/* Micro Trust Factors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-brand-cream-300 text-slate-800 text-[10px] sm:text-xs font-semibold">
              <div className="flex items-center justify-center gap-1.5 p-1.5 bg-brand-cream-50 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Real Work</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-1.5 bg-brand-cream-50 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hindi &amp; English</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-1.5 bg-brand-cream-50 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Stage Specialists</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-1.5 bg-brand-cream-50 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Fast Quote</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
