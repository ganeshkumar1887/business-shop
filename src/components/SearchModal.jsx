import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const popularTags = [
    "Teddy",
    "Birthday",
    "Wedding",
    "Mug",
    "Photo Frame",
    "LED Lamp",
    "Thermocol",
    "Radha Krishna",
    "Gift Hamper",
    "Couple",
    "Baby Shower",
    "Corporate",
    "Anniversary"
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    const matchName = p.name.toLowerCase().includes(q) || (p.nameEn && p.nameEn.toLowerCase().includes(q));
    const matchCategory = p.category.toLowerCase().includes(q) || (p.categoryEn && p.categoryEn.toLowerCase().includes(q));
    const matchSubcategory = p.subcategory && p.subcategory.toLowerCase().includes(q);
    const matchDesc = p.description.toLowerCase().includes(q);
    const matchTags = p.tags?.some(tag => tag.toLowerCase().includes(q));
    return matchName || matchCategory || matchSubcategory || matchDesc || matchTags;
  });

  const handleSelectProduct = (productId) => {
    onClose();
    navigate(`/products/${productId}`);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative mx-auto max-w-2xl bg-white rounded-3xl shadow-2xl border border-brand-cream-300 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-brand-cream-300 flex items-center gap-3 bg-brand-cream-50">
          <Search className="w-5 h-5 text-brand-purple-800 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search wedding welcome boards, thermocol names, gifts..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-brand-purple-900 bg-brand-cream-200 px-2.5 py-1 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-white border-b border-brand-cream-200 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-slate-400 font-bold uppercase tracking-wider shrink-0 text-[10px]">
            Suggestions:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 rounded-lg bg-brand-cream-100 hover:bg-brand-purple-100 text-slate-700 hover:text-brand-purple-900 font-medium transition-colors shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              <Sparkles className="w-8 h-8 text-brand-gold-400 mx-auto mb-2 opacity-70" />
              <p>Type keywords like "Wedding", "Easel", "Gold", or "Aarav" to search products</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              <p>No products found matching "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "Welcome Board" or "Thermocol".</p>
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => handleSelectProduct(p.id)}
                className="p-3 rounded-2xl hover:bg-brand-cream-50 border border-transparent hover:border-brand-cream-300 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 rounded-xl object-cover border border-brand-cream-200 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-brand-rose-600 uppercase">
                      {p.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-brand-purple-950 group-hover:text-brand-purple-800">
                      {p.name}
                    </h4>
                    <span className="text-xs font-semibold text-slate-600">
                      {p.customPrice ? 'Custom Price' : `₹${p.price}`}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-brand-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
}
