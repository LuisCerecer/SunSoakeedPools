import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';

export default function Services() {
    return (
        <div style={{ paddingTop: '100px' }}>
            <ServicesSection />
            <ContactFormSection />
            <Footer />
        </div>
    );
}
