import React from 'react';
import TopBanner from './components/TopBanner';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import WhyEssentialSection from './components/WhyEssentialSection';
import RecipesShowcase from './components/RecipesShowcase';
import BonusSection from './components/BonusSection';
import OffersSection from './components/OffersSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-green-50 to-red-100">
      <TopBanner />
      <HeroSection />
      <BenefitsSection />
      <WhyEssentialSection />
      <RecipesShowcase />
      <BonusSection />
      <OffersSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;