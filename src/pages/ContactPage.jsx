import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { Sparkles, MessageCircle, Send, Phone, MapPin, Clock, ArrowLeft, Home, Mail } from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `Hello ${SHOP_CONFIG.shopName},\n\n`;
    text += `*New Inquiry from Contact Page:*\n`;
    text += `• Name: ${formData.name}\n`;
    text += `• Phone: ${formData.phone}\n`;
    if (formData.eventDate) text += `• Event Date: ${formData.eventDate}\n`;
    if (formData.message) text += `• Message: ${formData.message}\n`;
    text += `\nPlease reply with availability and pricing details.`;
    
    const url = getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 lg:py-14 bg-brand-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back to Home Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between pb-1">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-brand-purple-50 text-brand-purple-950 font-bold text-xs sm:text-sm border border-brand-cream-300 shadow-2xs hover:shadow-sm hover:border-brand-purple-300 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-brand-purple-700 group-hover:-translate-x-1 transition-transform" />
            <Home className="w-4 h-4 text-brand-gold-600" />
            <span>Back to Home</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-brand-purple-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-purple-900 font-bold">Contact Shop</span>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
            <span>We Are Here For You</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-brand-purple-950 tracking-tight">
            Contact &amp; Visit Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Reach out directly for custom wedding decorations, bulk thermocol orders, or same-day gift inquiries.
          </p>
        </div>

        {/* Quick Contact Form + Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Message Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-brand-cream-300 shadow-sm">
            <h3 className="font-serif font-bold text-2xl text-brand-purple-950 mb-2">
              Send an Instant Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your message to connect directly with our workshop on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Gupta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Requirement or Query *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you want to order or inquire about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send to Shop on WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Contact Direct Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-white rounded-3xl p-6 border border-brand-cream-300 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple-100 text-brand-purple-900 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-brand-purple-950">Shop Address</h4>
                <p className="text-sm text-slate-700 mt-1">{SHOP_CONFIG.address.fullAddress}</p>
                <p className="text-xs text-slate-500 mt-0.5">Near {SHOP_CONFIG.address.landmark}</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-brand-cream-300 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-brand-purple-950">WhatsApp Direct</h4>
                <p className="text-sm font-bold text-slate-800 mt-1">{SHOP_CONFIG.whatsappNumber}</p>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">Available for instant custom designs &amp; quotes</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-brand-cream-300 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-brand-purple-950">Email Support</h4>
                <a href={`mailto:${SHOP_CONFIG.email}`} className="text-sm font-semibold text-brand-purple-900 hover:underline mt-1 block">
                  {SHOP_CONFIG.email}
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Send custom design inquiries &amp; business orders</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-brand-cream-300 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-brand-purple-950">Opening Hours</h4>
                <p className="text-sm text-slate-700 mt-1">Monday – Saturday: {SHOP_CONFIG.hours.weekdays}</p>
                <p className="text-xs text-slate-600 mt-0.5">Sunday: {SHOP_CONFIG.hours.sunday} ({SHOP_CONFIG.hours.note})</p>
              </div>
            </div>

          </div>

        </div>

        {/* Embedded Map Section */}
        <ContactSection />

      </div>
    </div>
  );
}
