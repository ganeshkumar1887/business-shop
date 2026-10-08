import React from 'react';
import { Palette, Crown, Gem, MessageSquareShare } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: Palette,
      title: "Custom Designs",
      description: "Personalized designs crafted exactly according to your theme, names, dimensions, and color requirements.",
      color: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      icon: Crown,
      title: "Wedding Special",
      description: "Grand thermocol stage monograms, entry welcome boards, Haldi/Mehndi props, and ring platters.",
      color: "from-amber-500 to-yellow-600",
      bgLight: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      icon: Gem,
      title: "Quality Products",
      description: "High-density thermocol, premium glitter finishes, fine wooden frames, and carefully curated gift items.",
      color: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
      icon: MessageSquareShare,
      title: "Easy Ordering",
      description: "No complicated forms. Simply send your reference photo or requirement directly to us on WhatsApp.",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-brand-cream-50/70 hover:bg-white rounded-2xl p-6 border border-brand-cream-300 hover:border-brand-purple-300 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${feature.bgLight} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-purple-950 mb-2 group-hover:text-brand-purple-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 pt-3 border-t border-brand-cream-200 flex items-center text-xs font-semibold text-brand-purple-900 group-hover:text-brand-rose-600 transition-colors">
                  <span>Learn more</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
