import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Crown, Gem, MessageSquareShare, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      num: "01",
      icon: Palette,
      title: "Custom Designs",
      hindiTag: "100% मनपसंद डिजाइन",
      description: "Personalized thermocol names, logos & boards crafted exactly to your theme, dimensions, and glitter colors.",
      link: "/marriage-designs",
      linkText: "Design in 3D Studio",
      gradient: "from-purple-600 via-indigo-600 to-purple-800",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-purple-500/30",
      accentBorder: "group-hover:border-purple-400 group-hover:shadow-purple-500/15",
      glowBg: "bg-purple-500/10",
      tagColor: "bg-purple-50 text-purple-800 border-purple-200"
    },
    {
      num: "02",
      icon: Crown,
      title: "Wedding Special",
      hindiTag: "शाही विवाह डेकोर",
      description: "Grand stage monograms, entry welcome boards, Haldi/Mehndi props, Kalash & Peacock royal motifs.",
      link: "/marriage-designs",
      linkText: "Explore Wedding Decor",
      gradient: "from-amber-500 via-yellow-600 to-orange-600",
      iconBg: "bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-amber-500/30",
      accentBorder: "group-hover:border-amber-400 group-hover:shadow-amber-500/15",
      glowBg: "bg-amber-500/10",
      tagColor: "bg-amber-50 text-amber-900 border-amber-200"
    },
    {
      num: "03",
      icon: Gem,
      title: "Premium Quality",
      hindiTag: "प्रीमियम फिनिशिंग",
      description: "High-density thermocol, waterproof multi-color glitter sheets, fine wooden framing & long-lasting shine.",
      link: "/products",
      linkText: "Browse Gift Catalog",
      gradient: "from-rose-500 via-pink-600 to-rose-700",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-500/30",
      accentBorder: "group-hover:border-rose-400 group-hover:shadow-rose-500/15",
      glowBg: "bg-rose-500/10",
      tagColor: "bg-rose-50 text-rose-800 border-rose-200"
    },
    {
      num: "04",
      icon: MessageSquareShare,
      title: "Easy WhatsApp Order",
      hindiTag: "डायरेक्ट चैट ऑर्डर",
      description: "No complicated checkout. Simply share your name, date, or reference photo directly on WhatsApp for instant quote.",
      link: "https://wa.me/919934444555?text=Hello%20Shree%20Bhagwan%20Thermocol,%20I%20want%20to%20inquire%20about%20a%20design.",
      linkText: "Chat on WhatsApp",
      isExternal: true,
      gradient: "from-emerald-500 via-teal-600 to-emerald-700",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/30",
      accentBorder: "group-hover:border-emerald-400 group-hover:shadow-emerald-500/15",
      glowBg: "bg-emerald-500/10",
      tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-cream-50/60 to-white relative overflow-hidden border-b border-brand-cream-300">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-purple-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-brand-gold-200/25 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            
            const cardContent = (
              <div 
                className={`group relative h-full bg-white rounded-3xl p-6 sm:p-7 border-2 border-brand-cream-300 ${feature.accentBorder} shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 overflow-hidden cursor-pointer`}
              >
                {/* Large Subtle Background Number Watermark */}
                <span className="absolute -top-4 -right-2 text-7xl font-outfit font-black text-slate-100/70 select-none group-hover:text-slate-200/80 transition-colors pointer-events-none">
                  {feature.num}
                </span>

                {/* Top Glowing Ambient Blob */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.glowBg} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />

                {/* Card Top Section: Icon & Hindi Tag */}
                <div className="relative z-10 space-y-4">
                  
                  <div className="flex items-center justify-between">
                    {/* Glowing Icon Pod */}
                    <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Hindi Accent Pill */}
                    <span className={`text-[11px] font-outfit font-extrabold px-3 py-1 rounded-full border shadow-2xs ${feature.tagColor}`}>
                      {feature.hindiTag}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl text-brand-purple-950 tracking-tight leading-snug group-hover:text-brand-purple-800 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-outfit text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Card Bottom CTA Link */}
                <div className="relative z-10 mt-6 pt-4 border-t border-brand-cream-200 flex items-center justify-between text-xs font-outfit font-extrabold text-brand-purple-950 group-hover:text-brand-rose-600 transition-colors">
                  <span className="tracking-wide">{feature.linkText}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-cream-100 group-hover:bg-brand-purple-950 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );

            if (feature.isExternal) {
              return (
                <a 
                  key={idx} 
                  href={feature.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block h-full no-underline"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link 
                key={idx} 
                to={feature.link} 
                className="block h-full no-underline"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
