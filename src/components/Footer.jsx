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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}>
        <div>
          <img
            src="/image.png"
            alt="Logo"
            style={{
              height: '60px',
              width: 'auto',
              marginBottom: '1rem'
            }}
          />
        </div>

        <div>
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
            Google Business Profile<br />
            Address
          </p>
        </div>

        <div>
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
              transition: 'color 0.2s'
            }}
          >
            (949) 736-2671
          </a>
        </div>

        <div>
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

        <div>
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
