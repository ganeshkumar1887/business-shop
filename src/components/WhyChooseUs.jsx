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
  CheckCircle2
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Palette,
      title: "मनपसंद (कस्टमाइज्ड) डिजाइन",
      desc: "आपकी पसंद, नाम, तारीख और थीम के अनुसार हर अक्षर और डिजाइन को विशेष रूप से तराशा जाता है।",
      badge: "100% कस्टमाइज्ड"
    },
    {
      icon: Sparkles,
      title: "आकर्षक 3D ग्लिटर आर्ट",
      desc: "चमकीले नॉन-फेडिंग ग्लिटर, शार्प कटिंग और मनमोहक 3D उभार जो रोशनी में बेहद खूबसूरत दिखते हैं।",
      badge: "प्रीमियम कारीगरी"
    },
    {
      icon: Crown,
      title: "शादी-विवाह स्पेशल बोर्ड्स",
      desc: "दूल्हा-दुल्हन स्वागत बोर्ड, स्टेज नेमप्लेट, मोर तबला, निकाह मुबारक व बारात के खास बोर्ड।",
      badge: "रॉयल लुक"
    },
    {
      icon: ShieldCheck,
      title: "मजबूत एवं टिकाऊ थर्मोकोल",
      desc: "हम हाई-डेंसिटी थर्मोकोल का उपयोग करते हैं जो मजबूत रहता है और आसानी से नहीं टूटता।",
      badge: "टिकाऊ क्वालिटी"
    },
    {
      icon: Tag,
      title: "उचित एवं किफायती दाम",
      desc: "सीधा हमारे कारीगरों की दुकान से, बिना किसी बिचौलिए के सबसे सही और वाजिब रेट।",
      badge: "बेस्ट रेट्स"
    },
    {
      icon: Sliders,
      title: "हिंदी व अंग्रेजी में उपलब्ध",
      desc: "आप अपनी सुविधा अनुसार हिंदी, इंग्लिश में मनपसंद फॉन्ट, साइज और कलर चुन सकते हैं।",
      badge: "आपकी पसंद"
    },
    {
      icon: MessageSquare,
      title: "आसान व्हाट्सऐप ऑर्डर",
      desc: "बस अपना नाम, तारीख व विवरण भेजें; तुरंत ऑर्डर बुक करें और समय पर डिलीवरी पाएं।",
      badge: "तुरंत बुकिंग"
    },
    {
      icon: HeartHandshake,
      title: "२०+ वर्षों का अटूट विश्वास",
      desc: "शहर के हजारों संतुष्ट परिवारों और इवेंट प्लानर्स का सबसे भरोसेमंद और पुराना ठिकाना।",
      badge: "20+ साल का विश्वास"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-gold-100 text-brand-gold-900 border border-brand-gold-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-700" />
            <span>श्री भगवान थर्मोकोल आर्ट की खासियत</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-purple-950 tracking-tight">
            हमें क्यों चुनें? (Why Choose Us)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            सच्ची लगन, बेहतरीन कारीगरी और २० वर्षों के भरोसे के साथ हर उत्सव को यादगार बनाते हैं।
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-brand-cream-50/80 hover:bg-white rounded-3xl p-6 border border-brand-cream-300 hover:border-brand-purple-300 shadow-sm hover:shadow-luxury transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-brand-cream-300 flex items-center justify-center text-brand-purple-900 shadow-xs group-hover:scale-110 group-hover:bg-brand-purple-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-brand-rose-600 bg-brand-rose-50 border border-brand-rose-100 px-2.5 py-1 rounded-full">
                    {pt.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h3 className="font-serif font-bold text-base text-brand-purple-950 group-hover:text-brand-purple-800 transition-colors">
                    {pt.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
