import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  Mail, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
            <span>Visit Our Local Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 tracking-tight">
            Contact &amp; Shop Location
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Have questions about wedding decoration, custom thermocol names, or want to pick up your order? Get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Contact Details & Action Buttons */}
          <div className="lg:col-span-6 bg-brand-cream-50 rounded-3xl p-6 sm:p-8 border border-brand-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <h3 className="font-serif font-bold text-2xl text-brand-purple-950 mb-4">
                Shop Information
              </h3>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brand-cream-300">
                <div className="w-11 h-11 rounded-xl bg-brand-purple-100 text-brand-purple-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    SHOP ADDRESS
                  </h4>
                  <p className="font-semibold text-slate-900 text-sm mt-0.5">
                    {SHOP_CONFIG.address.fullAddress}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: {SHOP_CONFIG.address.landmark}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-cream-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                      PHONE NUMBER
                    </h4>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">
                      {SHOP_CONFIG.phone}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Alt: {SHOP_CONFIG.alternatePhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-cream-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                      WHATSAPP NUMBER
                    </h4>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">
                      {SHOP_CONFIG.whatsappNumber}
                    </p>
                    <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                      Instant Chat Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brand-cream-300">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    OPENING HOURS
                  </h4>
                  <p className="font-semibold text-slate-900 text-sm mt-0.5">
                    Monday – Saturday: {SHOP_CONFIG.hours.weekdays}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sunday: {SHOP_CONFIG.hours.sunday} ({SHOP_CONFIG.hours.note})
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-brand-cream-300 mt-6">
              
              {/* Call Now */}
              <a
                href={`tel:${SHOP_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-purple-900 hover:bg-brand-purple-950 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Get Directions */}
              <a
                href={SHOP_CONFIG.maps.directDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-purple-950 font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

            </div>

          </div>

          {/* Right Embedded Google Map Showcase */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-cream-300 shadow-md relative min-h-[380px] bg-slate-100 flex flex-col">
            <iframe
              title="Shree Bhagwan Shop Location"
              src={SHOP_CONFIG.maps.embedUrl}
              className="w-full h-full min-h-[380px] flex-1 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="p-3 bg-white border-t border-brand-cream-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">
                📍 {SHOP_CONFIG.address.city}, {SHOP_CONFIG.address.state}
              </span>
              <a
                href={SHOP_CONFIG.maps.directDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
