import React, { useState } from 'react';
import { Sparkles, MessageCircle, MapPin, Calendar, Heart, Wand2, ArrowRight } from 'lucide-react';
import { getLiveCustomizerUrl } from '../utils/whatsapp';

export default function LiveNamePreviewer() {
  const [groomName, setGroomName] = useState('डा. दिग्विजय');
  const [brideName, setBrideName] = useState('डा. मीनू मोहन');
  const [baratFrom, setBaratFrom] = useState('तरवैया बंगरा');
  const [baratTo, setBaratTo] = useState('खलपुरा');
  const [eventDate, setEventDate] = useState('11.7.2026');

  const handleOrderCustomizer = () => {
    const url = getLiveCustomizerUrl({
      groomName,
      brideName,
      baratFrom,
      baratTo,
      eventDate
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-brand-cream-50 relative overflow-hidden border-y border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Wand2 className="w-3.5 h-3.5 text-brand-purple-700" />
            <span>Interactive 3D Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 tracking-tight">
            लाइव 3D नाम एवं बारात बोर्ड प्रीव्यू
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            दूल्हा-दुल्हन का नाम, बारात का स्थान (कहाँ से - कहाँ तक) व विवाह तिथि दर्ज करें और तुरंत लाइव 3D बोर्ड देखें!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls Panel: Groom, Bride, Barat From, Barat To, Date */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-brand-cream-300 space-y-4">
            
            <div className="flex items-center gap-2 pb-2 border-b border-brand-cream-200">
              <Heart className="w-4 h-4 text-brand-rose-600 fill-brand-rose-600" />
              <span className="text-xs font-extrabold text-brand-purple-950 uppercase tracking-wider">
                विवाह एवं बारात विवरण दर्ज करें
              </span>
            </div>

            {/* 1. Groom & Bride Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  दूल्हे का नाम (Groom Name) *
                </label>
                <input
                  type="text"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                  placeholder="उदा. डा. दिग्विजय या विकास"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  दुल्हन का नाम (Bride Name) *
                </label>
                <input
                  type="text"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  placeholder="उदा. डा. मीनू मोहन या बबिता"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>
            </div>

            {/* 2. Barat From & Barat To (बारात कहाँ से, कहाँ तक) */}
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>बारात कहाँ से (Barat From) *</span>
                </label>
                <input
                  type="text"
                  value={baratFrom}
                  onChange={(e) => setBaratFrom(e.target.value)}
                  placeholder="उदा. तरवैया बंगरा / सिधवल"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-rose-600" />
                  <span>बारात कहाँ तक / स्थल (Barat To) *</span>
                </label>
                <input
                  type="text"
                  value={baratTo}
                  onChange={(e) => setBaratTo(e.target.value)}
                  placeholder="उदा. खलपुरा / द मंडप पैलेस सिवान"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
                />
              </div>
            </div>

            {/* 3. Wedding Date */}
            <div className="pt-1">
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-purple-700" />
                <span>विवाह / शुभ तिथि (Wedding Date) *</span>
              </label>
              <input
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                placeholder="उदा. 11.7.2026 या 7.7.26"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 bg-brand-cream-50/40"
              />
            </div>

            {/* Submit Action Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={handleOrderCustomizer}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>यह बोर्ड व्हाट्सएप पर ऑर्डर करें</span>
              </button>
            </div>

          </div>

          {/* Right Live Simulation Board Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-tr from-slate-950 via-brand-purple-950 to-slate-900 shadow-2xl border-2 border-brand-gold-500/40 overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center text-center">
              
              {/* Background ambient gold lights */}
              <div className="absolute inset-0 bg-radial from-amber-400/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Auspicious header */}
              <div className="relative z-10 mb-5">
                <span className="text-brand-gold-300 font-cinzel tracking-[0.25em] uppercase text-xs sm:text-sm font-bold block bg-white/10 px-4 py-1.5 rounded-full border border-brand-gold-400/30 backdrop-blur-md">
                  ✨ शुभ विवाह स्पेशल 3D नेम बोर्ड ✨
                </span>
              </div>

              {/* Main Simulated 3D Thermocol Board Container */}
              <div className="relative z-10 p-6 sm:p-8 rounded-3xl max-w-lg w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                
                {/* 3D Cutout Names */}
                <div className="py-4 px-2">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <span className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-amber-900 thermocol-glitter-gold px-4 py-2 rounded-xl thermocol-cutout-preview border border-amber-400 inline-block shadow-lg">
                      {groomName || 'दूल्हा'}
                    </span>
                    
                    <span className="text-xl sm:text-2xl font-serif font-black text-brand-gold-300 px-2 animate-pulse">
                      संग
                    </span>

                    <span className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-amber-900 thermocol-glitter-gold px-4 py-2 rounded-xl thermocol-cutout-preview border border-amber-400 inline-block shadow-lg">
                      {brideName || 'दुल्हन'}
                    </span>
                  </div>
                </div>

                {/* Barat Route and Date Display */}
                <div className="mt-4 pt-3 border-t border-white/15 space-y-2">
                  {(baratFrom || baratTo) && (
                    <div className="inline-flex items-center gap-1.5 bg-black/40 text-brand-cream-100 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{baratFrom || 'स्थान'} से {baratTo || 'गंतव्य'}</span>
                    </div>
                  )}

                  {eventDate && (
                    <div className="block text-brand-gold-300 text-xs sm:text-sm font-bold tracking-wide">
                      शुभ विवाह तिथि: {eventDate}
                    </div>
                  )}
                </div>

                {/* Subtitle */}
                <div className="mt-4 text-brand-cream-200/80 text-[11px] font-sans tracking-wider uppercase">
                  <span>हैंडक्राफ्टेड 3D थर्मोकोल कटआउट • हाई डेंसिटी व ग्लिटर फिनिश</span>
                </div>
              </div>

              {/* Order on WhatsApp CTA directly from preview */}
              <div className="relative z-10 mt-6 w-full max-w-md">
                <button
                  onClick={handleOrderCustomizer}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order This Exact Board on WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
