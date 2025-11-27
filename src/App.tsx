import React from 'react';
import TopBanner from './components/TopBanner';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import WhyEssentialSection from './components/WhyEssentialSection';
import RecipesShowcase from './components/RecipesShowcase';
import BonusSection from './components/BonusSection';
import OffersSection from './components/OffersSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <HeroSection />
      <BenefitsSection />
      <WhyEssentialSection />
      <RecipesShowcase />
      <BonusSection />
      <OffersSection />
      <WhyDifferentSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;