import React, { useState, useEffect } from 'react';
import { useNavigation } from '../App';

const backgroundImages = [
  '/phillipe_after.jpeg',
  '/anoop_1.jpeg',
  '/brenda_1.jpeg',
  '/img_7049.jpg'
];

export default function Hero() {
  const { navigate } = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden'
    }}>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 1
          }}
        />
      ))}

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 2
      }} />

      <div style={{
        position: 'relative',
        zIndex: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '900px'
        }}>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1.25rem',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em'
          }}>
            Orange County Professional Pool Services
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '2.5rem',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
            lineHeight: '1.6',
            fontWeight: '400',
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            Operated by certified pool professional with exceptional service.<br />
            Crystal-clear water with consistent weekly maintenance, insured service you can trust.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="tel:+19497362671"
              style={{
                backgroundColor: '#0891b2',
                color: '#fff',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                fontWeight: '600',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(8, 145, 178, 0.4)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              (949) 736-2671
            </a>
            <button
              onClick={() => navigate('contact')}
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                fontWeight: '600',
                padding: '1rem 2rem',
                border: '2px solid #fff',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.2s ease'
              }}
            >
              FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
