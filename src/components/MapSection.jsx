import React from 'react';

export default function MapSection() {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e5e7eb',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          borderTop: '3px solid #0891b2',
          marginBottom: '2rem'
        }} />

        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '700',
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '2rem',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          Proudly serving Orange County and surrounding cities
        </h2>

        <div style={{
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(8, 145, 178, 0.15)',
          border: '2px solid #e5e7eb'
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983222.6970363811!2d-118.43981641114867!3d33.63906386446969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc925c54d5f7cf%3A0xdea6c3618ff0d607!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1770845268496!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{
              border: 0,
              display: 'block'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service area map"
          />
        </div>
      </div>
    </section>
  );
}
