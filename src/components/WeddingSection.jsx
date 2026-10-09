import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Crown, 
  Sparkles, 
  PartyPopper, 
  ArrowRight,
  MessageCircle,
  Gem,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function WeddingSection() {
  const weddingServices = [
    {
      title: "Bride & Groom Name Boards",
      hindiTitle: "दूल्हा-दुल्हन स्टेज नेम",
      desc: "3D thermocol stage & mandap glitter names in Hindi/English.",
      icon: Heart,
      tag: "Stage Hit",
      theme: {
        cardBg: "bg-gradient-to-br from-rose-50 via-pink-50/80 to-rose-100/60 border-rose-200 hover:border-rose-400 hover:shadow-[0_10px_25px_-5px_rgba(244,63,94,0.22)]",
        iconBg: "bg-rose-500 text-white border-rose-300",
        badgeBg: "bg-rose-200/90 text-rose-900 border-rose-300",
        hindiTagBg: "bg-white/90 text-rose-900 border-rose-200",
        titleColor: "text-rose-950 group-hover:text-rose-700",
        descColor: "text-rose-900/80",
        footerBorder: "border-rose-200/80",
        accent: "text-rose-600"
      }
    },
    {
      title: "Wedding Welcome Boards",
      hindiTitle: "वेडिंग वेलकम ईजल बोर्ड",
      desc: "Grand easel entry boards with floral borders & royal gold foil.",
      icon: Crown,
      tag: "Entry",
      theme: {
        cardBg: "bg-gradient-to-br from-amber-50 via-yellow-50/80 to-amber-100/60 border-amber-200 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.22)]",
        iconBg: "bg-amber-500 text-white border-amber-300",
        badgeBg: "bg-amber-200/90 text-amber-900 border-amber-300",
        hindiTagBg: "bg-white/90 text-amber-900 border-amber-200",
        titleColor: "text-amber-950 group-hover:text-amber-700",
        descColor: "text-amber-900/80",
        footerBorder: "border-amber-200/80",
        accent: "text-amber-700"
      }
    },
    {
      title: "Haldi Ceremony Props",
      hindiTitle: "हल्दी सेरेमनी कटआउट्स",
      desc: "Vibrant yellow backdrop sets, marigold cutouts & funny dialogue props.",
      icon: Sparkles,
      tag: "Haldi Special 💛",
      theme: {
        cardBg: "bg-gradient-to-br from-yellow-100/90 via-amber-50/90 to-yellow-200/70 border-yellow-300 hover:border-yellow-500 hover:shadow-[0_10px_25px_-5px_rgba(234,179,8,0.28)]",
        iconBg: "bg-yellow-500 text-slate-950 border-yellow-300",
        badgeBg: "bg-yellow-300 text-yellow-950 border-yellow-400",
        hindiTagBg: "bg-white/90 text-yellow-950 border-yellow-300",
        titleColor: "text-yellow-950 group-hover:text-yellow-800",
        descColor: "text-yellow-900/85",
        footerBorder: "border-yellow-300/80",
        accent: "text-yellow-700"
      }
    },
    {
      title: "Mehndi Night Decoration",
      hindiTitle: "मेहंदी नाइट मंडला डेकोर",
      desc: "Intricate mandala designs, henna hand cutouts & green-gold themes.",
      icon: Gem,
      tag: "Mehndi Special 💚",
      theme: {
        cardBg: "bg-gradient-to-br from-emerald-50 via-teal-50/80 to-emerald-100/60 border-emerald-200 hover:border-emerald-400 hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.22)]",
        iconBg: "bg-emerald-600 text-white border-emerald-300",
        badgeBg: "bg-emerald-200/90 text-emerald-950 border-emerald-300",
        hindiTagBg: "bg-white/90 text-emerald-950 border-emerald-200",
        titleColor: "text-emerald-950 group-hover:text-emerald-700",
        descColor: "text-emerald-900/80",
        footerBorder: "border-emerald-200/80",
        accent: "text-emerald-700"
      }
    },
    {
      title: "Couple Initials & Monogram",
      hindiTitle: "कपल इनिशियल्स व 3D हार्ट",
      desc: "Standing & hanging 3D letters with heart for pre-wedding & stage.",
      icon: Heart,
      tag: "Custom 💜",
      theme: {
        cardBg: "bg-gradient-to-br from-purple-50 via-fuchsia-50/80 to-purple-100/60 border-purple-200 hover:border-purple-400 hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.22)]",
        iconBg: "bg-brand-purple-700 text-white border-purple-300",
        badgeBg: "bg-purple-200/90 text-purple-950 border-purple-300",
        hindiTagBg: "bg-white/90 text-purple-950 border-purple-200",
        titleColor: "text-purple-950 group-hover:text-purple-700",
        descColor: "text-purple-900/80",
        footerBorder: "border-purple-200/80",
        accent: "text-brand-purple-700"
      }
    },
    {
      title: "Engagement Ring Platters",
      hindiTitle: "इंगेजमेंट रिंग थाल",
      desc: "Handcrafted thermocol & acrylic rotating trays with velvet cushions.",
      icon: PartyPopper,
      tag: "Ring Ceremony 💍",
      theme: {
        cardBg: "bg-gradient-to-br from-cyan-50 via-sky-50/80 to-cyan-100/60 border-cyan-200 hover:border-cyan-400 hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.22)]",
        iconBg: "bg-cyan-600 text-white border-cyan-300",
        badgeBg: "bg-cyan-200/90 text-cyan-950 border-cyan-300",
        hindiTagBg: "bg-white/90 text-cyan-950 border-cyan-200",
        titleColor: "text-cyan-950 group-hover:text-cyan-700",
        descColor: "text-cyan-900/80",
        footerBorder: "border-cyan-200/80",
        accent: "text-cyan-700"
      }
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-brand-rose-50/50 via-white to-brand-cream-50 relative overflow-hidden">
      
      {/* Decorative Floral background accents */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-brand-rose-300/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-brand-gold-300/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Compact */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-purple-100 via-brand-rose-100 to-brand-gold-100 text-brand-purple-950 border border-brand-gold-400/40 text-xs font-outfit font-extrabold uppercase tracking-wider mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-600 animate-spin-slow" />
            <span>Grand Indian Wedding Decor Studio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-brand-purple-950 tracking-tight mb-2">
            Make Your Wedding More Beautiful 💍
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-outfit font-medium">
            From auspicious <span className="text-brand-rose-600 font-bold">Shubh Vivah</span> boards to glittering stage names, crafted with love.
          </p>
        </div>

        {/* 2-Column Compact Showcase with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch mb-8">
          
          {/* Left Visual Royal Showcase Card - 100% Equal Height */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-full h-full flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-3 border-white relative bg-gradient-to-b from-brand-purple-950 via-slate-900 to-brand-purple-950 group min-h-[360px] flex flex-col justify-end">
              
              {/* Couple Image with Top Alignment */}
              <img
                src={IMAGES.weddingFeatures.stage}
                alt="Shree Bhagwan Wedding Special Royal Couple Decor"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Luxury Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950 via-brand-purple-950/40 to-transparent"></div>
              
              {/* Top Floating Festive Badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
                <span className="inline-flex items-center gap-1.5 bg-brand-purple-950/85 backdrop-blur-md text-brand-gold-300 text-[11px] font-outfit font-extrabold px-3 py-1 rounded-full border border-brand-gold-400/50 shadow-md">
                  <Crown className="w-3 h-3 text-brand-gold-400" />
                  <span>रॉयल वेडिंग स्पेशल</span>
                </span>
                <span className="bg-brand-rose-600/90 text-white text-[9px] font-outfit font-extrabold px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                  Handcrafted
                </span>
              </div>

              {/* Bottom Content Area - Compact */}
              <div className="relative z-20 p-5 text-white space-y-1.5 bg-gradient-to-t from-brand-purple-950 via-brand-purple-950/90 to-transparent pt-8">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-brand-purple-950 text-[10px] font-outfit font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow-xs">
                  <Sparkles className="w-2.5 h-2.5 text-brand-purple-950" />
                  <span>Wedding Special Studio</span>
                </span>
                
                <h3 className="font-serif font-black text-xl sm:text-2xl text-white tracking-tight leading-tight">
                  Handcrafted For Your Big Day
                </h3>
                
                <p className="font-outfit text-xs text-brand-cream-200 leading-snug">
                  Customized thermocol letters, glitter color matching your wedding attire theme, and safe delivery.
                </p>

                <div className="pt-1">
                  <Link
                    to="/marriage-designs"
                    className="inline-flex items-center gap-1 text-xs font-outfit font-bold text-brand-gold-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20"
                  >
                    <span>View All Designs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right 6 Wedding Services Grid - Color-Themed Compact 3x2 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
            {weddingServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden ${service.theme.cardBg} p-3.5 rounded-xl sm:rounded-2xl border shadow-2xs hover:shadow-md transition-all duration-200 group hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    {/* Top Bar: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-1.5 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg ${service.theme.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-all`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] font-sans font-bold ${service.theme.hindiTagBg} px-1.5 py-0.5 rounded border shadow-2xs`}>
                          {service.hindiTitle}
                        </span>
                      </div>
                      
                      <span className={`text-[9px] font-outfit font-extrabold ${service.theme.badgeBg} border px-2 py-0.5 rounded-full uppercase tracking-wider shadow-2xs`}>
                        {service.tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h4 className={`font-serif font-black text-sm sm:text-base ${service.theme.titleColor} mb-0.5 transition-colors tracking-tight relative z-10`}>
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className={`font-outfit text-xs ${service.theme.descColor} leading-snug font-medium relative z-10`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom Compact Prompt */}
                  <div className={`pt-2 mt-2 border-t ${service.theme.footerBorder} flex items-center justify-between text-[10px] font-outfit font-bold relative z-10`}>
                    <span className="text-slate-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>100% Customized</span>
                    </span>
                    <span className={`inline-flex items-center gap-0.5 ${service.theme.accent} group-hover:translate-x-1 transition-transform`}>
                      <span>Order</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Section CTAs - Compact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/marriage-designs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple-900 via-brand-purple-800 to-brand-rose-700 hover:from-brand-purple-950 hover:to-brand-rose-800 text-white font-outfit font-extrabold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <span>View All Marriage Designs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-outfit font-extrabold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Designer</span>
          </a>
        </div>

      </div>
    </section>
  );
}

