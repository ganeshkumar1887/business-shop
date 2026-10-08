import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Crown, 
  Sparkles, 
  Camera, 
  PartyPopper, 
  ArrowRight,
  MessageCircle,
  Gem
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function WeddingSection() {
  const weddingServices = [
    {
      title: "Bride & Groom Name Boards",
      desc: "Glittering 3D thermocol stage and mandap names crafted in custom scripts.",
      icon: Heart,
      tag: "Stage Favorite"
    },
    {
      title: "Wedding Welcome Boards",
      desc: "Grand easel entry boards to greet your guests with royal aesthetic floral borders.",
      icon: Crown,
      tag: "Entry Must-Have"
    },
    {
      title: "Haldi Ceremony Props",
      desc: "Vibrant yellow thermocol cutouts, backdrop sets, and funny family dialogue props.",
      icon: Sparkles,
      tag: "Trending"
    },
    {
      title: "Mehndi Night Decoration",
      desc: "Intricate mandala designs, henna hand thermocol cutouts, and green-gold themed props.",
      icon: Gem,
      tag: "Festive"
    },
    {
      title: "Couple Initials & Monograms",
      desc: "Large standing or hanging letters with heart connectors for pre-wedding and stage.",
      icon: Heart,
      tag: "Personalized"
    },
    {
      title: "Wedding Photo Booth Props",
      desc: "Pack of desi photobooth cutouts with quotes for memorable guest photography.",
      icon: Camera,
      tag: "Fun Activity"
    },
    {
      title: "Engagement Ring Platters",
      desc: "Handcrafted thermocol and acrylic rotating ring trays with couple name tags.",
      icon: Gem,
      tag: "Ring Ceremony"
    },
    {
      title: "Reception Grand Stage Names",
      desc: "5 to 8-foot wide high-density thermocol lettering with warm backlights.",
      icon: PartyPopper,
      tag: "Grand Scale"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-rose-50/50 via-white to-brand-cream-50 relative overflow-hidden">
      
      {/* Decorative Floral background accents */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-rose-300/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-gold-300/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose-100 text-brand-rose-800 border border-brand-rose-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-brand-rose-600 text-brand-rose-600" />
            <span>Grand Indian Wedding Decor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-brand-purple-950 tracking-tight mb-4">
            Make Your Wedding More Beautiful 💍
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From auspicious Shubh Vivah welcome boards to sparkling bride-groom stage monograms, we make every wedding function extraordinary.
          </p>
        </div>

        {/* 2-Column Showcase: Interactive Visual Banner & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative aspect-[4/5] bg-brand-cream-200 group">
              <img
                src={IMAGES.weddingFeatures.stage}
                alt="Shree Bhagwan Wedding Stage and Mandap Decor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950/85 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-brand-gold-500 text-brand-purple-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Wedding Special Studio
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Handcrafted For Your Big Day
                </h3>
                <p className="text-xs sm:text-sm text-brand-cream-200">
                  Customized thermocol letters, glitter color matching your wedding attire theme, and safe delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Right 8 Wedding Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {weddingServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/90 hover:bg-white p-5 rounded-2xl border border-brand-cream-300 hover:border-brand-rose-300 shadow-sm hover:shadow-luxury transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-rose-50 border border-brand-rose-100 flex items-center justify-center text-brand-rose-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-brand-purple-900 bg-brand-purple-50 px-2 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-brand-purple-950 mb-1 group-hover:text-brand-rose-700 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Section CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/marriage-designs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple-900 via-brand-purple-800 to-brand-rose-700 hover:from-brand-purple-950 hover:to-brand-rose-800 text-white font-bold px-8 py-3.5 rounded-2xl shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 transition-all text-sm sm:text-base"
          >
            <span>View Marriage Designs Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult Wedding Designer on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
