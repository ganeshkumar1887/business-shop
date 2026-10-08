import React from 'react';
import { Sparkles, Heart, Award, Users, CheckCircle } from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { IMAGES } from '../data/images';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Imagery Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-brand-cream-200 group">
              <img
                src={IMAGES.about.shopFront}
                alt="Shree Bhagwan Thermocol and Gift Workshop Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel text-slate-900 border border-brand-gold-400/40 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-purple-900">आपके शहर की अपनी दुकान</p>
                  <p className="font-serif font-extrabold text-lg text-brand-purple-950">२० वर्षों का अटूट विश्वास</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500 text-brand-purple-950 flex items-center justify-center font-extrabold text-lg shadow-sm">
                  20+
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>हमारे बारे में (About Us)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-purple-950 tracking-tight leading-tight">
              आपके शहर की २० साल पुरानी और आपकी अपनी दुकान
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="font-medium text-brand-purple-950/90 text-lg">
                <strong>{SHOP_CONFIG.shopName}</strong> पिछले २० वर्षों से हर शादी, बारात, निकाह, जन्मदिन एवं धार्मिक उत्सव को अपनी आकर्षक थर्मोकोल कला से यादगार और खूबसूरत बना रही है।
              </p>
              <p>
                हमारे यहाँ 3D दूल्हा-दुल्हन नेम प्लेट, बारात कहाँ से कहाँ तक बोर्ड, मोर फूल तबला, मोर कलश, निकाह मुबारक व इस्लामिक बोर्ड्स, सिंगल व डबल हार्ट विथ स्टार जैसे सभी शानदार डिजाइन्स बेहतरीन फिनिशिंग और सही दाम पर उपलब्ध हैं।
              </p>
            </div>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">100% कस्टमाइज्ड कारीगरी</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">चमकीली 3D ग्लिटर फिनिश</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">शादी-विवाह स्पेशल विशेषज्ञ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">समय पर डिलीवरी व सही दाम</span>
              </div>
            </div>

            {/* 4 Counter Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-cream-300">
              {SHOP_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-brand-purple-950 block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
