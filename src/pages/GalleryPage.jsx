import React from 'react';
import GallerySection from '../components/GallerySection';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function GalleryPage() {
  return (
    <div className="py-10 lg:py-16 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
            <span>Artisan Design Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-brand-purple-950 tracking-tight">
            Our Complete Gallery &amp; Showcase
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Click on any design to open the high-resolution lightbox viewer or inquire directly on WhatsApp for your custom variation!
          </p>
        </div>

        {/* Gallery Component */}
        <GallerySection />

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-brand-purple-950 to-brand-rose-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Have a photo from Pinterest or Instagram?
          </h2>
          <p className="text-brand-cream-200 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Simply send us any reference picture on WhatsApp and our craftsmen will replicate the design in high-density thermocol.
          </p>
          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-2xl shadow-lg transition-all text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Reference Photo on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
