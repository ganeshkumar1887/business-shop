import React from 'react';
import { 
  ShoppingBag, 
  Send, 
  CheckCircle, 
  PackageCheck, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import { getGeneralInquiryUrl } from '../utils/whatsapp';

export default function HowToOrder() {
  const steps = [
    {
      step: "Step 1",
      title: "Choose Product or Design",
      desc: "Pick any design from our catalog or prepare your own reference photo / rough sketch.",
      icon: ShoppingBag,
      color: "from-purple-600 to-indigo-600"
    },
    {
      step: "Step 2",
      title: "Send on WhatsApp",
      desc: "Share your couple/birthday names, event date, color preference, or custom dimensions.",
      icon: Send,
      color: "from-rose-600 to-pink-600"
    },
    {
      step: "Step 3",
      title: "Confirm Quote & Mockup",
      desc: "We confirm the best price, carving timeline, and design mockup for your final approval.",
      icon: CheckCircle,
      color: "from-amber-600 to-yellow-600"
    },
    {
      step: "Step 4",
      title: "Collect or Get Delivery",
      desc: "Collect your safely packed board from our shop or have it delivered for your celebration.",
      icon: PackageCheck,
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-brand-cream-100 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-purple-900 bg-brand-purple-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Super Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-purple-950 mt-3 tracking-tight">
            How to Order in 4 Easy Steps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No complicated checkouts. We handle all custom designs through friendly WhatsApp conversations.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Line on Desktop */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-brand-cream-300 shadow-sm hover:shadow-luxury transition-all duration-300 text-center relative group"
              >
                {/* Step Pill */}
                <span className="inline-block bg-brand-cream-200 text-brand-purple-950 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {item.step}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif font-bold text-base text-brand-purple-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Action Button */}
        <div className="text-center">
          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order on WhatsApp Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
