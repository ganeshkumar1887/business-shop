import React from 'react';
import { 
  Sparkles, 
  Palette, 
  Crown, 
  ShieldCheck, 
  Tag, 
  Sliders, 
  MessageSquare, 
  HeartHandshake,
  CheckCircle2,
  Gem,
  Award,
  Clock,
  ThumbsUp
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Palette,
      title: "मनपसंद (कस्टमाइज्ड) डिजाइन",
      desc: "आपकी पसंद, नाम, तारीख और थीम के अनुसार हर अक्षर, फोंट और डिजाइन को विशेष रूप से तराशा जाता है।",
      badge: "100% Custom",
      iconBg: "from-purple-500 to-indigo-600",
      glowColor: "shadow-purple-500/25",
      badgeBg: "bg-purple-100 text-purple-800 border-purple-300"
    },
    {
      icon: Gem,
      title: "आकर्षक 3D ग्लिटर आर्ट",
      desc: "चमकीले नॉन-फेडिंग ग्लिटर, शार्प लेजर फिनिश और मनमोहक 3D उभार जो स्टेज रोशनी में चमकते हैं।",
      badge: "3D Glitter Finish",
      iconBg: "from-amber-400 to-amber-600",
      glowColor: "shadow-amber-500/25",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300"
    },
    {
      icon: Crown,
      title: "शादी-विवाह स्पेशल बोर्ड्स",
      desc: "दूल्हा-दुल्हन स्टेज नेम, स्वागत ईजल बोर्ड, मोर तबला, मंगल कलश व निकाह मुबारक के शाही बोर्ड्स।",
      badge: "Royal Wedding",
      iconBg: "from-rose-500 to-pink-600",
      glowColor: "shadow-rose-500/25",
      badgeBg: "bg-rose-100 text-rose-800 border-rose-300"
    },
    {
      icon: ShieldCheck,
      title: "मजबूत एवं टिकाऊ थर्मोकोल",
      desc: "हाई-डेंसिटी प्रीमियम थर्मोकोल और मजबूत बेस का उपयोग जो सुरक्षित रहता है और लंबे समय तक चलता है।",
      badge: "High Density",
      iconBg: "from-emerald-500 to-teal-600",
      glowColor: "shadow-emerald-500/25",
      badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      icon: Tag,
      title: "उचित एवं किफायती दाम",
      desc: "सीधा हमारे कारीगरों की वर्कशॉप से, बिना किसी बिचौलिए या कमीशन के सबसे वाजिब और बेस्ट रेट्स।",
      badge: "Direct Workshop Rates",
      iconBg: "from-blue-500 to-cyan-600",
      glowColor: "shadow-blue-500/25",
      badgeBg: "bg-blue-100 text-blue-800 border-blue-300"
    },
    {
      icon: Sliders,
      title: "हिंदी व अंग्रेजी में उपलब्ध",
      desc: "अपनी पसंद अनुसार हिंदी व इंग्लिश दोनों भाषाओं में खूबसूरत फोंट्स, साइज और कलर्स का पूरा विकल्प।",
      badge: "Bilingual Fonts",
      iconBg: "from-violet-500 to-purple-600",
      glowColor: "shadow-violet-500/25",
      badgeBg: "bg-violet-100 text-violet-800 border-violet-300"
    },
    {
      icon: MessageSquare,
      title: "आसान व्हाट्सऐप ऑर्डरिंग",
      desc: "बस अपना नाम, तारीख और डिजाइन भेजें — तुरंत लाइव कोटेशन पाएं और आसान डिलीवरी का लाभ उठाएं।",
      badge: "Instant WhatsApp Quote",
      iconBg: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/25",
      badgeBg: "bg-green-100 text-green-800 border-green-300"
    },
    {
      icon: HeartHandshake,
      title: "२०+ वर्षों का अटूट विश्वास",
      desc: "शहर के हजारों संतुष्ट परिवारों, वेडिंग प्लानर्स और ग्राहकों का सबसे भरोसेमंद और पुराना प्रतिष्ठान।",
      badge: "20+ Years Legacy",
      iconBg: "from-amber-500 to-red-600",
      glowColor: "shadow-red-500/25",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-brand-cream-50/50 to-white relative overflow-hidden border-b border-brand-cream-300">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* 🌟 LUXURY SECTION HEADER */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Top Sparkling Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-gold-100 via-amber-50 to-brand-rose-100 border border-brand-gold-300 shadow-sm backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-xs sm:text-sm font-outfit font-extrabold uppercase tracking-widest text-brand-purple-950">
              Shree Bhagwan Artisan Trust &amp; Legacy
            </span>
            <Sparkles className="w-4 h-4 text-brand-rose-500" />
          </div>

          {/* Regal Main Title */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-brand-purple-950 leading-tight">
              हमें क्यों चुनें?
            </h2>
            <p className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-purple-900 via-brand-rose-700 to-amber-700 bg-clip-text text-transparent uppercase tracking-wider">
              Why Choose Shree Bhagwan Thermocol &amp; Gifts
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 font-outfit text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            सच्ची लगन, बेहतरीन कारीगरी और <span className="font-bold text-brand-purple-900">२० वर्षों के अटूट विश्वास</span> के साथ आपके हर उत्सव को हमेशा के लिए यादगार बनाते हैं।
          </p>

          {/* Decorative Gold Filigree Divider */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-brand-gold-500 rounded-full"></span>
            <Crown className="w-5 h-5 text-brand-gold-600" />
            <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-brand-gold-500 rounded-full"></span>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 🏆 8 LUXURY FEATURE CARDS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-b from-white via-white to-brand-cream-50/60 hover:to-white rounded-3xl p-6 sm:p-7 border-2 border-brand-cream-300 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 overflow-hidden cursor-default"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                {/* Card Top: Icon Pod & Badge */}
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    
                    {/* Vibrant 3D Icon Pod */}
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${pt.iconBg} text-white flex items-center justify-center shadow-lg ${pt.glowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Quality Pill Badge */}
                    <span className={`text-[11px] font-outfit font-extrabold px-3 py-1 rounded-full border shadow-2xs ${pt.badgeBg}`}>
                      {pt.badge}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <div className="flex items-start gap-2 pt-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <h3 className="font-outfit font-black text-lg text-brand-purple-950 group-hover:text-brand-purple-800 transition-colors leading-snug">
                      {pt.title}
                    </h3>
                  </div>

                  {/* Feature Description */}
                  <p className="font-outfit text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>

                {/* Bottom decorative accent bar on hover */}
                <div className="relative z-10 mt-6 pt-3 border-t border-brand-cream-200 flex items-center justify-between text-xs font-outfit font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                  <span className="text-[11px] tracking-wide">0{idx + 1} / 08 • Guaranteed</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
