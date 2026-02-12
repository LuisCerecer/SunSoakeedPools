import React, { useState, useEffect } from 'react';
import { useNavigation } from '../App';


export default function Header() {
  const { currentPage, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  /** Scroll to the Services section on the homepage */
  const scrollToServices = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      navigate('home');
      // Wait for the home page to render before scrolling
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isNonHomePage = currentPage !== 'home';
  const shouldHaveColor = isNonHomePage || scrolled;

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: shouldHaveColor ? 'rgba(31, 41, 55, 0.98)' : 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        zIndex: 1000,
        padding: '1rem 2rem',
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              src="/image.png"
              alt="Logo"
              style={{
                height: '70px',
                width: 'auto'
              }}
            />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#fff'
            }}
            className="mobile-menu-button"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <nav style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center'
          }}
            className="desktop-nav">
            <NavButton page="home" label="HOME" currentPage={currentPage} onClick={handleNavClick} />
            <NavButton page="about" label="ABOUT" currentPage={currentPage} onClick={handleNavClick} />
            <button
              onClick={scrollToServices}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: '600',
                letterSpacing: '1px',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'color 0.2s ease',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              SERVICES
            </button>
            <NavButton page="process" label="PROCESS" currentPage={currentPage} onClick={handleNavClick} />
            <a
              href="tel:+19497362671"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              (949) 736-2671
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                backgroundColor: '#5dd3d3',
                color: '#1f2937',
                padding: '0.875rem 2rem',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                fontFamily: "'Montserrat', sans-serif",
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase'
              }}
            >
              FREE QUOTE
            </button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav style={{
            display: 'none',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            marginTop: '1rem'
          }}
            className="mobile-nav">
            <MobileNavButton page="home" label="HOME" currentPage={currentPage} onClick={handleNavClick} />
            <MobileNavButton page="about" label="ABOUT" currentPage={currentPage} onClick={handleNavClick} />
            <button
              onClick={scrollToServices}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                letterSpacing: '1px',
                fontFamily: "'Montserrat', sans-serif",
                padding: '0.5rem 0',
                textAlign: 'left',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              SERVICES
            </button>
            <MobileNavButton page="process" label="PROCESS" currentPage={currentPage} onClick={handleNavClick} />
            <a
              href="tel:+19497362671"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                letterSpacing: '1px',
                fontFamily: "'Montserrat', sans-serif",
                padding: '0.5rem 0',
                textAlign: 'left'
              }}
            >
              (949) 736-2671
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                backgroundColor: '#5dd3d3',
                color: '#1f2937',
                padding: '0.875rem 2rem',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                fontFamily: "'Montserrat', sans-serif",
                textAlign: 'center',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              FREE QUOTE
            </button>
          </nav>
        )}
      </header>

    </>
  );
}

function NavButton({ page, label, currentPage, onClick }) {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onClick(page)}
      style={{
        color: isActive ? '#5dd3d3' : '#fff',
        textDecoration: 'none',
        fontSize: '1.05rem',
        fontWeight: '600',
        letterSpacing: '1px',
        fontFamily: "'Montserrat', sans-serif",
        transition: 'color 0.2s ease',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase'
      }}
    >
      {label}
    </button>
  );
}

function MobileNavButton({ page, label, currentPage, onClick }) {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onClick(page)}
      style={{
        color: isActive ? '#5dd3d3' : '#fff',
        textDecoration: 'none',
        fontSize: '1.125rem',
        fontWeight: '600',
        letterSpacing: '1px',
        fontFamily: "'Montserrat', sans-serif",
        padding: '0.5rem 0',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        textTransform: 'uppercase'
      }}
    >
      {label}
    </button>
  );
}
