import React, { useState } from 'react';
import { 
  Lightbulb, 
  Sparkles, 
  Palette, 
  Truck, 
  MessageCircle, 
  Upload, 
  Send,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { getCustomDesignQuoteUrl } from '../utils/whatsapp';

export default function CustomDesignSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding / Shadi',
    namesToDisplay: '',
    dimension: 'Standard Size (4x2.5 ft)',
    preferredColor: 'Royal Gold Glitter',
    description: ''
  });

  const steps = [
    {
      num: "01",
      title: "Share Your Idea",
      desc: "Send us your reference photo, sketch, wedding invitation card, or simply tell us the couple/celebrant names.",
      icon: Lightbulb,
      color: "bg-amber-100 text-amber-800 border-amber-300"
    },
    {
      num: "02",
      title: "Choose Your Design",
      desc: "We recommend font styles, thermocol thickness, glitter finish (Gold, Rose Gold, Silver), and backdrop sizes.",
      icon: Palette,
      color: "bg-purple-100 text-purple-800 border-purple-300"
    },
    {
      num: "03",
      title: "We Handcraft It",
      desc: "Our master artisans cut high-density thermocol with precision, applying durable glitter and decorative borders.",
      icon: Sparkles,
      color: "bg-rose-100 text-rose-800 border-rose-300"
    },
    {
      num: "04",
      title: "Collect / Get Order",
      desc: "Pick up your safely packed finished design directly from our shop or arrange convenient local delivery.",
      icon: Truck,
      color: "bg-emerald-100 text-emerald-800 border-emerald-300"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getCustomDesignQuoteUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-purple-950 via-brand-purple-900 to-brand-rose-950 text-white relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-400/20 text-brand-gold-300 border border-brand-gold-400/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Custom Thermocol Cutting &amp; Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight mb-4">
            Have Your Own Design in Mind?
          </h2>
          <p className="text-brand-cream-200 text-base sm:text-lg leading-relaxed">
            Send us your idea, name, photo or reference design and we can create a customized thermocol design specially for your occasion.
          </p>
        </div>

        {/* 4-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-brand-gold-400/60 shadow-lg hover:shadow-glow-gold transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-serif font-extrabold text-brand-gold-300/80">
                    {step.num}
                  </span>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${step.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-brand-gold-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-cream-200/90 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Quote Generator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-800 shadow-2xl border border-brand-cream-200 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-purple-950 mb-2">
              Request Your Custom Design Quote
            </h3>
            <p className="text-sm text-slate-600">
              Fill in your celebration details below to generate a direct WhatsApp message. You can also attach reference photos in the chat!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Occasion / Event Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm bg-white"
                >
                  <option value="Wedding / Shadi">Wedding / Shadi</option>
                  <option value="Wedding Welcome Board">Wedding Welcome Board</option>
                  <option value="Bride & Groom Stage Monogram">Bride & Groom Stage Monogram</option>
                  <option value="Haldi / Mehndi Ceremony">Haldi / Mehndi Ceremony</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary Party">Anniversary Party</option>
                  <option value="Baby Shower / Naamkaran">Baby Shower / Naamkaran</option>
                  <option value="Corporate / Festive Event">Corporate / Festive Event</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Names / Text to Display *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Weds Simran or Aarav Turns 1"
                  value={formData.namesToDisplay}
                  onChange={(e) => setFormData({ ...formData, namesToDisplay: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Size / Format
                </label>
                <select
                  value={formData.dimension}
                  onChange={(e) => setFormData({ ...formData, dimension: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm bg-white"
                >
                  <option value="Standard Size (3 x 2 Feet)">Standard Size (3 x 2 Feet)</option>
                  <option value="Large Welcome Board (4 x 2.5 Feet)">Large Welcome Board (4 x 2.5 Feet)</option>
                  <option value="Grand Stage Backdrop (6 x 3 Feet)">Grand Stage Backdrop (6 x 3 Feet)</option>
                  <option value="Single Letter / Name Cutout">Single Letter / Name Cutout</option>
                  <option value="Custom Measurement">Custom Measurement (Discuss on WhatsApp)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Glitter &amp; Finish
                </label>
                <select
                  value={formData.preferredColor}
                  onChange={(e) => setFormData({ ...formData, preferredColor: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm bg-white"
                >
                  <option value="Royal Gold Glitter">Royal Gold Glitter (Most Popular)</option>
                  <option value="Rose Gold Sparkle">Rose Gold Sparkle</option>
                  <option value="Ruby Red Glitter">Ruby Red Glitter</option>
                  <option value="Diamond Silver">Diamond Silver</option>
                  <option value="Multi-color Festive Theme">Multi-color Festive Theme</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Special Idea / Description
              </label>
              <textarea
                rows={2}
                placeholder="Share any special design requirements, font preference, or background theme..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-600 text-sm"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Upload className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You can attach photos directly inside WhatsApp after clicking send.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Your Design on WhatsApp</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
