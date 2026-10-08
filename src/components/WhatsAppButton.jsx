import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { getGeneralInquiryUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    "I want to order a Wedding Welcome Board",
    "I need a custom Thermocol Name design",
    "Can you share prices for Birthday decor?",
    "Do you take urgent / express orders?"
  ];

  const handleSendPrompt = (prompt) => {
    const url = getWhatsAppUrl(prompt);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = getWhatsAppUrl(customMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Chat Bubble Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-brand-cream-300 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                🎁
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{SHOP_CONFIG.shortName}</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  <span>Online • Quick Replies</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-brand-cream-50/60 space-y-3">
            <div className="bg-white p-3 rounded-2xl shadow-xs border border-brand-cream-200 text-xs text-slate-700 leading-relaxed">
              👋 Namaste! How can we help make your wedding or celebration special today?
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Quick Options:
              </p>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2 rounded-xl bg-white hover:bg-emerald-50 text-xs text-slate-800 font-medium border border-brand-cream-300 hover:border-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} className="pt-1 flex items-center gap-1.5">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-rose-500 rounded-full border-2 border-white animate-pulse"></span>
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
}
