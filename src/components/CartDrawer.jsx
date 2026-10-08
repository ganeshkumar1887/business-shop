import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  Sparkles, 
  ArrowRight,
  Send
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getCartCheckoutUrl } from '../utils/whatsapp';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartCount, 
    cartTotal,
    hasCustomPriceItems 
  } = useCart();

  const [checkoutMode, setCheckoutMode] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    eventDate: '',
    address: '',
    notes: ''
  });

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone) {
      alert("Please provide your Name and Phone number to proceed.");
      return;
    }
    const url = getCartCheckoutUrl(cart, customerInfo);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-brand-cream-300 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 bg-brand-cream-50 border-b border-brand-cream-300 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-purple-900 text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-brand-purple-950">
                  Your Shopping Cart
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {cartCount} item{cartCount !== 1 ? 's' : ''} in cart
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items or Checkout Form */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4">
            
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-brand-cream-100 flex items-center justify-center text-3xl">
                  🛍️
                </div>
                <h4 className="font-serif font-bold text-lg text-brand-purple-950">
                  Your cart is empty
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our custom wedding boards, gifts, and thermocol designs to add items to your cart.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block bg-brand-purple-900 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md"
                >
                  Start Browsing
                </button>
              </div>
            ) : !checkoutMode ? (
              
              /* Items List */
              <>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-brand-cream-200">
                  <span className="text-slate-500 font-medium">Cart Items</span>
                  <button 
                    onClick={clearCart} 
                    className="text-brand-rose-600 hover:underline font-semibold"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="p-3.5 rounded-2xl bg-brand-cream-50/70 border border-brand-cream-300 space-y-2.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 rounded-xl bg-slate-900 border border-brand-cream-300 shrink-0 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-bold text-sm text-brand-purple-950 truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs font-semibold text-brand-purple-900 mt-0.5">
                            {item.customPrice ? (
                              <span className="text-brand-rose-600 bg-brand-rose-50 px-2 py-0.5 rounded text-[11px]">
                                Custom Price (Quote)
                              </span>
                            ) : (
                              `₹${item.price} each`
                            )}
                          </p>

                          {/* Item Customizations if present */}
                          {(item.customText || item.eventDate || item.preferredColor) && (
                            <div className="mt-1.5 p-2 rounded-lg bg-white border border-brand-cream-200 text-[11px] text-slate-600 space-y-0.5">
                              {item.customText && (
                                <p><span className="font-semibold text-slate-800">Custom Text:</span> "{item.customText}"</p>
                              )}
                              {item.eventDate && (
                                <p><span className="font-semibold text-slate-800">Date:</span> {item.eventDate}</p>
                              )}
                              {item.preferredColor && (
                                <p><span className="font-semibold text-slate-800">Finish:</span> {item.preferredColor}</p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Delete item button */}
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-1.5 text-slate-400 hover:text-brand-rose-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity adjustment & Subtotal */}
                      <div className="flex items-center justify-between pt-1 text-xs">
                        <div className="flex items-center gap-2 bg-white rounded-xl border border-brand-cream-300 p-1">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="p-1 hover:bg-slate-100 rounded-lg text-slate-700"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-slate-900 px-2 text-xs">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="p-1 hover:bg-slate-100 rounded-lg text-slate-700"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="font-bold text-sm text-brand-purple-950">
                          {item.customPrice ? 'Custom' : `₹${item.price * item.quantity}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              
              /* WhatsApp Checkout Customer Form */
              <form id="cart-checkout-form" onSubmit={handleWhatsAppCheckout} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-brand-cream-300">
                  <span className="font-bold text-sm text-brand-purple-950">Customer &amp; Event Details</span>
                  <button
                    type="button"
                    onClick={() => setCheckoutMode(false)}
                    className="text-xs font-semibold text-brand-purple-800 hover:underline"
                  >
                    ← Back to Cart
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Event Date (Approx)
                  </label>
                  <input
                    type="date"
                    value={customerInfo.eventDate}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Delivery Address / Shop Pickup
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Self Pickup or Colony / Area Name"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Special Notes or Reference Details
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific requests or instructions..."
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
                  ></textarea>
                </div>
              </form>
            )}

          </div>

          {/* Footer Actions */}
          {cart.length > 0 && (
            <div className="p-5 bg-brand-cream-50 border-t border-brand-cream-300 space-y-3">
              
              {/* Totals */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Estimated Subtotal</p>
                  <p className="text-lg font-serif font-bold text-brand-purple-950">
                    ₹{cartTotal} {hasCustomPriceItems && '+ Custom Quote'}
                  </p>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                  WhatsApp Direct Order
                </span>
              </div>

              {!checkoutMode ? (
                <button
                  onClick={() => setCheckoutMode(true)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple-900 to-brand-rose-700 hover:from-brand-purple-950 hover:to-brand-rose-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <span>Proceed to WhatsApp Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  form="cart-checkout-form"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Place Order on WhatsApp</span>
                </button>
              )}

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
