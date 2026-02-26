import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const backgroundImages = [
  '/phillipe_after.jpeg',
  '/anoop_1.jpeg',
  '/brenda_1.jpeg',
  '/img_7049.jpg'
];

const serviceOptions = [
  'Weekly Pool Maintenance',
  'Pool inspection',
  'Pool Repair',
  'Other'
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    additional: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      let formatted = digits;

      if (digits.length > 3 && digits.length <= 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else if (digits.length > 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      }

      setFormData(prev => ({ ...prev, phone: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        Name: formData.name,
        Number: formData.phone,
        Email: '',
        Message: formData.additional,
        Service: formData.service || ''
      };

      const response = await fetch('https://n8n.treulogic.work/webhook/38273e17-9028-4812-adeb-5edb9cf041cd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', service: '', additional: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Background image carousel */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={currentImageIndex === index ? 'hero-bg-kenburns' : ''}
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

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.45) 100%)',
        zIndex: 2
      }} />

      {/* Top gradient behind header for readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '140px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35), transparent)',
        zIndex: 3,
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 4,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)'
      }}>
        <div className="hero-content" style={{
          maxWidth: '1300px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2rem, 5vw, 4rem)',
          flexWrap: 'wrap'
        }}>
          {/* Left side — Text content */}
          <div style={{
            flex: '1 1 480px',
            minWidth: '300px'
          }}>
            {/* Star ratings */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#facc15" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '500'
              }}>
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '1.5rem',
              lineHeight: '1.12',
              letterSpacing: '-0.02em',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Pool Service in Orange &amp; South Orange County
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
              fontWeight: '400',
              maxWidth: '540px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Consistent weekly care that keeps your pool looking beautiful.
              <br />
              Every visit includes proper skimming, brushing, and balanced chemistry.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <a
                href="tel:+19497362671"
                style={{
                  backgroundColor: '#0891b2',
                  color: '#fff',
                  fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                  fontWeight: '600',
                  padding: '0.9rem 2rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(8, 145, 178, 0.4)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (949) 736-2671
              </a>

              {/* Secondary CTA — Get a Free Quote */}
              <button
                onClick={() => navigate('/Contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                  fontWeight: '600',
                  padding: '0.9rem 2rem',
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                Get a Free Quote
              </button>
            </div>
          </div>

          {/* Right side — Quote Form */}
          <div id="hero-quote-form" style={{
            flex: '0 1 420px',
            minWidth: '300px',
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #5dd3d3',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1.5rem',
              textAlign: 'center',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Request a Free Quote
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  fontSize: '0.95rem',
                  border: '1.5px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  fontFamily: "'Montserrat', sans-serif",
                  boxSizing: 'border-box',
                  backgroundColor: '#f9fafb',
                  color: '#1f2937'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0891b2';
                  e.target.style.boxShadow = '0 0 0 3px rgba(8, 145, 178, 0.12)';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = '#f9fafb';
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  fontSize: '0.95rem',
                  border: '1.5px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  fontFamily: "'Montserrat', sans-serif",
                  boxSizing: 'border-box',
                  backgroundColor: '#f9fafb',
                  color: '#1f2937'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0891b2';
                  e.target.style.boxShadow = '0 0 0 3px rgba(8, 145, 178, 0.12)';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = '#f9fafb';
                }}
              />

              <div style={{ position: 'relative' }}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '0.95rem',
                    border: '1.5px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    fontFamily: "'Montserrat', sans-serif",
                    boxSizing: 'border-box',
                    backgroundColor: '#f9fafb',
                    color: formData.service ? '#1f2937' : '#9ca3af',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    cursor: 'pointer',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0891b2';
                    e.target.style.boxShadow = '0 0 0 3px rgba(8, 145, 178, 0.12)';
                    e.target.style.backgroundColor = '#fff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                >
                  <option value="" disabled>Choose Service*</option>
                  {serviceOptions.map(opt => (
                    <option key={opt} value={opt} style={{ color: '#1f2937' }}>{opt}</option>
                  ))}
                </select>
              </div>

              <textarea
                name="additional"
                placeholder="Additional details (optional)"
                value={formData.additional}
                onChange={handleInputChange}
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  fontSize: '0.95rem',
                  border: '1.5px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  fontFamily: "'Montserrat', sans-serif",
                  boxSizing: 'border-box',
                  backgroundColor: '#f9fafb',
                  color: '#1f2937',
                  resize: 'vertical',
                  minHeight: '80px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0891b2';
                  e.target.style.boxShadow = '0 0 0 3px rgba(8, 145, 178, 0.12)';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = '#f9fafb';
                }}
              />

              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: '#dcfce7',
                  border: '1px solid #86efac',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  color: '#166534',
                  fontSize: '0.9rem',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  Thank you! We'll get back to you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  color: '#dc2626',
                  fontSize: '0.9rem',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  backgroundColor: isSubmitting ? '#9ca3af' : '#0891b2',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '700',
                  padding: '0.95rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: '0.5px',
                  marginTop: '0.25rem'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Request Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
