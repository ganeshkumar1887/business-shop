import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('sb_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sb_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  const addToCart = (product, customization = {}) => {
    setCart(prev => {
      // Check if product with identical customization already exists
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && 
        item.customText === (customization.customText || '') &&
        item.eventDate === (customization.eventDate || '') &&
        item.preferredColor === (customization.preferredColor || '')
      );

      const qtyToAdd = customization.quantity || 1;

      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex].quantity += qtyToAdd;
        return newCart;
      } else {
        return [...prev, {
          ...product,
          cartItemId: `${product.id}-${Date.now()}`,
          quantity: qtyToAdd,
          customText: customization.customText || '',
          eventDate: customization.eventDate || '',
          preferredColor: customization.preferredColor || '',
          notes: customization.notes || '',
        }];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce((sum, item) => {
    if (!item.customPrice && item.price) {
      return sum + (item.price * item.quantity);
    }
    return sum;
  }, 0);

  const hasCustomPriceItems = cart.some(item => item.customPrice);

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      hasCustomPriceItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
