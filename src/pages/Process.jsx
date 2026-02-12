import React from 'react';
import ProcessSection from '../components/ProcessSection';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';

export default function Process() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <ProcessSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
