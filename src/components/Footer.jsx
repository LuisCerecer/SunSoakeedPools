import React from 'react';
import { useNavigation } from '../App';

export default function Footer() {
  const { navigate } = useNavigation();

  const handleNavClick = (page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: '#fff',
      padding: '3rem 2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.5rem',
        justifyContent: 'space-between',
        alignItems: 'start'
      }}>
        {/* 1. Logo */}
        <div style={{ flex: '0 0 auto', maxWidth: '200px' }}>
          <img
            src="/image.png"
            alt="Logo"
            style={{
              maxHeight: '80px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* 2. Address */}
        <div style={{ flex: '0 0 auto' }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#5dd3d3',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            ADDRESS
          </h3>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#d1d5db'
          }}>
            532 Marketview,<br />
            Irvine, CA 92602
          </p>
        </div>

        {/* 3. Phone */}
        <div style={{ flex: '0 0 auto' }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#5dd3d3',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            PHONE
          </h3>
          <a
            href="tel:9497362671"
            style={{
              fontSize: '1rem',
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            (949) 736-2671
          </a>
        </div>

        {/* 4. Map (Expanded) */}
        <div style={{ flex: '1 1 300px', minWidth: '250px', height: '200px', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.9878211701475!2d-117.78328720684829!3d33.72813093258166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdc8190ccb9bf%3A0x2de26fc97b169977!2s532%20Marketview%2C%20Irvine%2C%20CA%2092602!5e1!3m2!1sen!2sus!4v1770856397841!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* 5. Hours */}
        <div style={{ flex: '0 0 auto' }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#5dd3d3',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            HOURS OF OPERATION
          </h3>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            color: '#d1d5db'
          }}>
            <div>Monday: 8:00am - 8:00pm</div>
            <div>Tuesday: 8:00am - 8:00pm</div>
            <div>Wednesday: 8:00am - 8:00pm</div>
            <div>Thursday: 8:00am - 8:00pm</div>
            <div>Friday: 8:00am - 8:00pm</div>
            <div>Saturday: 8:00am - 8:00pm</div>
            <div style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Sunday: Closed</div>
          </div>
        </div>

        {/* 6. Links */}
        <div style={{ flex: '0 0 auto' }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#5dd3d3',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            LINKS
          </h3>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <FooterLink onClick={() => handleNavClick('home')}>Home</FooterLink>
            <FooterLink onClick={() => handleNavClick('about')}>About</FooterLink>
            <FooterLink onClick={() => handleNavClick('process')}>Process</FooterLink>
            <FooterLink onClick={() => handleNavClick('contact')}>Contact</FooterLink>
            <FooterLink onClick={() => handleNavClick('contact')}>Free Quote</FooterLink>
          </nav>
        </div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '2rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: '0.875rem'
      }}>
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        color: '#d1d5db',
        textDecoration: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'color 0.2s',
        padding: 0,
        textAlign: 'left'
      }}
      onMouseEnter={(e) => e.target.style.color = '#5dd3d3'}
      onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
    >
      {children}
    </button>
  );
}
