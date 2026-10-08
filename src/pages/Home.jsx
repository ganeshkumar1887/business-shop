import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import CategorySection from '../components/CategorySection';
import LiveNamePreviewer from '../components/LiveNamePreviewer';
import ProductGrid from '../components/ProductGrid';
import GiftShopSection from '../components/GiftShopSection';
import CustomDesignSection from '../components/CustomDesignSection';
import WeddingSection from '../components/WeddingSection';
import GallerySection from '../components/GallerySection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowToOrder from '../components/HowToOrder';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function Home({ onQuickView, onOrderNow }) {
  return (
    <div>
      {/* Hero Banner */}
      <Hero />

      {/* Trust & Highlight Badges */}
      <TrustSection />

      {/* Find the Perfect Gift - 20 Gift Categories Showcase */}
      <GiftShopSection onQuickView={onQuickView} onOrderNow={onOrderNow} />

      {/* Interactive 3D Name Board Customizer Studio */}
      <LiveNamePreviewer />

      {/* Custom Design Workflow & WhatsApp Quote Form */}
      <CustomDesignSection />

      {/* Marriage & Wedding Showcase */}
      <WeddingSection />

      {/* Recent Work Gallery */}
      <GallerySection limit={8} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How To Order */}
      <HowToOrder />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* About The Shop */}
      <AboutSection />

      {/* Contact & Map Location */}
      <ContactSection />
    </div>
  );
}
