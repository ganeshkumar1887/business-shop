import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import OrderNowModal from './components/OrderNowModal';
import MobileBottomBar from './components/MobileBottomBar';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MarriageDesigns from './pages/MarriageDesigns';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [orderModalProduct, setOrderModalProduct] = useState(null);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  const handleOpenOrderModal = (product) => {
    setOrderModalProduct(product);
  };

  const handleCloseOrderModal = () => {
    setOrderModalProduct(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-cream-50 text-slate-800">
        
        {/* Sticky Navbar */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Main Content View */}
        <main className="flex-1 pb-16 sm:pb-0">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <Products 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route 
              path="/gifts" 
              element={
                <Products 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route 
              path="/products/:productId" 
              element={
                <ProductDetails 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route 
              path="/gifts/:productId" 
              element={
                <ProductDetails 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route 
              path="/marriage-designs" 
              element={
                <MarriageDesigns 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/wishlist" 
              element={
                <WishlistPage 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
            <Route 
              path="*" 
              element={
                <Home 
                  onQuickView={handleOpenQuickView} 
                  onOrderNow={handleOpenOrderModal} 
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Floating Tools */}
        <CartDrawer />
        <WhatsAppButton />
        <MobileBottomBar />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={handleCloseQuickView}
          onOrderNow={(prod) => {
            handleCloseQuickView();
            handleOpenOrderModal(prod);
          }}
        />
        <OrderNowModal 
          product={orderModalProduct} 
          isOpen={!!orderModalProduct} 
          onClose={handleCloseOrderModal} 
        />

      </div>
    </Router>
  );
}
