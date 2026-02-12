import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MapSection from '../components/MapSection';
import FAQSection from '../components/FAQSection';
import BeforeAfter from '../components/BeforeAfter';
import ProcessSection from '../components/ProcessSection';
import Reviews from '../components/Reviews';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Reviews />
      <Services />
      <BeforeAfter />
      <ProcessSection />
      <MapSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
