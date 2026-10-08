import React from 'react';
import { Sparkles, Heart, Award, Users, CheckCircle, ShieldCheck, Palette, MessageSquare, PhoneCall, Clock, MapPin } from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { IMAGES } from '../data/images';
import WhyChooseUs from '../components/WhyChooseUs';
import { openWhatsAppGeneral } from '../utils/whatsapp';

export default function AboutPage() {
  return (
    <div className="py-10 lg:py-16 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-100 text-brand-gold-900 border border-brand-gold-300 text-xs sm:text-sm font-bold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-gold-700" />
            <span>२० वर्षों की अनूठी कला एवं अटूट विश्वास</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-brand-purple-950 tracking-tight leading-tight">
            आपके शहर की २० साल पुरानी और आपकी अपनी दुकान
          </h1>
          <p className="text-brand-rose-700 font-bold text-lg sm:text-xl mt-2 font-serif">
            {SHOP_CONFIG.shopName}
          </p>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
            पिछले २० वर्षों से हर शादी, बारात, निकाह, जन्मदिन एवं धार्मिक उत्सव को अपनी आकर्षक थर्मोकोल कला से यादगार और खूबसूरत बना रहे हैं।
          </p>
        </div>

        {/* Story & Image Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-brand-cream-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="inline-block px-3 py-1 bg-brand-rose-50 text-brand-rose-700 rounded-lg text-xs font-bold uppercase tracking-wider border border-brand-rose-200">
                हमारी पहचान व विशेषता
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-purple-950">
                हर उत्सव में चार चाँद लगाने वाली पारंपरिक एवं आधुनिक थर्मोकोल कला
              </h2>
              <p>
                <strong>{SHOP_CONFIG.shopName}</strong> आपके शहर की सबसे पुरानी, प्रतिष्ठित और भरोसेमंद थर्मोकोल आर्ट व गिफ्ट शॉप है। पिछले २० वर्षों से हम आपके परिवार के हर महत्वपूर्ण मांगलिक अवसर और शादी-ब्याह को खास बनाने के लिए समर्पित हैं।
              </p>
              <p>
                हमारे यहाँ शादी विवाह के लिए <strong>3D दूल्हा-दुल्हन नेम प्लेट, बारात कहाँ से कहाँ तक बोर्ड, मोर फूल तबला, मोर कलश, इस्लामिक व निकाह मुबारक डिजाइन, सिंगल हार्ट एंड स्टार, डबल हार्ट विथ स्टार, बर्थडे व एनिवर्सरी बोर्ड्स</strong> खास कारीगरी के साथ तैयार किए जाते हैं।
              </p>
              <p>
                हम मजबूत एवं उच्च क्वालिटी थर्मोकोल शीट्स, चमकीले नॉन-फेडिंग ग्लिटर और मनमोहक रंगों का उपयोग करते हैं, जिससे आपका बोर्ड शादी की रोशनी में बेहद चमकदार और रॉयल दिखता है। आपकी पसंद अनुसार हिंदी या अंग्रेजी में नाम और तारीख सीधे तराशी जाती है।
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={openWhatsAppGeneral}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>व्हाट्सऐप पर बात करें</span>
                </button>
                <a
                  href={`tel:${SHOP_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-brand-purple-50 hover:bg-brand-purple-100 text-brand-purple-900 border border-brand-purple-200 font-bold px-5 py-3 rounded-2xl transition-all text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-brand-purple-700" />
                  <span>{SHOP_CONFIG.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-cream-100 aspect-[4/3] bg-brand-cream-200 group">
                <img
                  src={IMAGES.about.shopFront}
                  alt="Shree Bhagwan Thermocol Art Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <p className="font-serif font-bold text-lg text-brand-gold-300">श्री भगवान थर्मोकोल आर्ट</p>
                  <p className="text-xs text-slate-200">२०+ वर्षों का अनुभव • 100% कस्टमाइज्ड हैंडमेड डिजाइन्स</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOP_CONFIG.stats.map((st, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 text-center border border-brand-cream-300 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-black text-brand-purple-950 block mb-1">
                {st.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-brand-rose-600 block mb-1">
                {st.label}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {st.suffix}
              </span>
            </div>
          ))}
        </div>

        {/* Highlights Banner */}
        <div className="bg-gradient-to-r from-brand-purple-950 via-brand-purple-900 to-brand-purple-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-gold-500/20 border border-brand-gold-400/30 flex items-center justify-center text-brand-gold-300 mb-3 mx-auto md:mx-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-brand-gold-300">२० साल का अनुभव</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                शहर के हजारों परिवारों और इवेंट प्लानर्स का पहली पसंद व सबसे विश्वसनीय नाम।
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-rose-500/20 border border-brand-rose-400/30 flex items-center justify-center text-brand-rose-300 mb-3 mx-auto md:mx-0">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-brand-gold-300">मनपसंद कस्टमाइजेशन</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                दूल्हा-दुल्हन का नाम, बारात का रूट, तारीख और मनपसंद कलर व फॉन्ट के अनुसार तैयार।
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3 mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-brand-gold-300">सीधा दुकान से उचित मूल्य</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                बिना किसी बिचौलिए के सीधा हमारे कारीगरों द्वारा निर्मित, बेहतरीन क्वालिटी और सही दाम।
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <WhyChooseUs />

      </div>
    </div>
  );
}
