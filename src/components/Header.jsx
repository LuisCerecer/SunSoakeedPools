import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isNonHomePage = currentPath !== '/';
  const shouldHaveColor = isNonHomePage || scrolled;

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: shouldHaveColor ? 'rgba(15, 23, 42, 0.98)' : 'transparent',
        borderBottom: '1px solid rgba(148, 163, 184, 0.35)',
        zIndex: 1000,
        padding: '1rem 2rem',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={() => handleNavClick('/')}
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
            <NavButton path="/" label="HOME" currentPath={currentPath} onClick={handleNavClick} />
            <NavButton path="/About" label="ABOUT" currentPath={currentPath} onClick={handleNavClick} />
            <NavButton path="/Services" label="SERVICES" currentPath={currentPath} onClick={handleNavClick} />
            <NavButton path="/Process" label="PROCESS" currentPath={currentPath} onClick={handleNavClick} />
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
              onClick={() => handleNavClick('/Contact')}
              style={{
                backgroundColor: '#5dd3d3',
                color: '#1f2937',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
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
            <MobileNavButton path="/" label="HOME" currentPath={currentPath} onClick={handleNavClick} />
            <MobileNavButton path="/About" label="ABOUT" currentPath={currentPath} onClick={handleNavClick} />
            <MobileNavButton path="/Services" label="SERVICES" currentPath={currentPath} onClick={handleNavClick} />
            <MobileNavButton path="/Process" label="PROCESS" currentPath={currentPath} onClick={handleNavClick} />
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
              onClick={() => handleNavClick('/Contact')}
              style={{
                backgroundColor: '#5dd3d3',
                color: '#1f2937',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
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

function NavButton({ path, label, currentPath, onClick }) {
  const isActive = currentPath === path;
  return (
    <button
      onClick={() => onClick(path)}
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

function MobileNavButton({ path, label, currentPath, onClick }) {
  const isActive = currentPath === path;
  return (
    <button
      onClick={() => onClick(path)}
      style={{
        color: isActive ? '#5dd3d3' : '#fff',
        textDecoration: 'none',
        fontSize: '1.125rem',
        fontWeight: '600',
        letterSpacing: '1px',
        fontFamily: "'Montserrat', sans-serif",
        padding: '0.5rem 0 0.5rem 0.75rem',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        borderLeft: isActive ? '3px solid #5dd3d3' : '3px solid transparent',
        textTransform: 'uppercase'
      }}
    >
      {label}
    </button>
  );
}
