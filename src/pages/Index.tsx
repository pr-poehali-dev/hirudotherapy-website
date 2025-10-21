import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CertificatesSection from '@/components/CertificatesSection';
import ServicesSection from '@/components/ServicesSection';
import IndicationsSection from '@/components/IndicationsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ResultsSection from '@/components/ResultsSection';
import PricesSection from '@/components/PricesSection';
import FAQSection from '@/components/FAQSection';
import ContactsSection from '@/components/ContactsSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />

      <HeroSection onContactClick={() => scrollToSection('contacts')} />

      <AboutSection />

      <CertificatesSection />

      <ServicesSection />

      <IndicationsSection />

      <ReviewsSection />

      <ResultsSection />

      <PricesSection />

      <FAQSection />

      <ContactsSection />

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Яковлева Ольга Васильевна. Гирудотерапия</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
