import React, { useState } from 'react';

export default function ContactFormSection() {
  const [contactMethod, setContactMethod] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        Email: formData.email,
        Message: formData.message,
        Service: ''
      };

      const response = await fetch('https://n8n.treulogic.work/webhook/38273e17-9028-4812-adeb-5edb9cf041cd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    fontSize: '1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: "'Montserrat', sans-serif",
    boxSizing: 'border-box',
    backgroundColor: '#fff'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '0.5rem',
    fontFamily: "'Montserrat', sans-serif"
  };

  return (
    <section style={{
      padding: '5rem 1.5rem',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '0.75rem',
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          Contact us today for a free consultation
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          marginBottom: '3rem',
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif"
        }}>

        </p>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          border: '1px solid #e0f2f2'
        }}>
          <div className="contact-grid" style={{
            display: 'grid',
            minHeight: contactMethod === 'schedule' ? '700px' : '480px',
            transition: 'min-height 0.3s ease'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #0f172a 100%)',
              padding: 'clamp(2rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img
                src="/image.png"
                alt="Logo"
                style={{
                  height: '45px',
                  width: 'auto',
                  marginBottom: '2rem',
                  alignSelf: 'flex-start'
                }}
              />

              <h3 style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '0.75rem',
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.3'
              }}>
                Get In Touch With Us
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                Thank you for considering us as your pool professional.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(93, 211, 211, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5dd3d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#fff',
                      marginBottom: '0.15rem',
                      fontFamily: "'Montserrat', sans-serif"
                    }}>
                      Phone Number
                    </div>
                    <a
                      href="tel:9497362671"
                      style={{
                        fontSize: '0.95rem',
                        color: '#5dd3d3',
                        textDecoration: 'none'
                      }}
                    >
                      (949) 736-2671
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(93, 211, 211, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5dd3d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#fff',
                      marginBottom: '0.15rem',
                      fontFamily: "'Montserrat', sans-serif"
                    }}>
                      Email
                    </div>
                    <a
                      href="mailto:steven@ocsunsoakedpools.com"
                      style={{
                        fontSize: '0.95rem',
                        color: '#5dd3d3',
                        textDecoration: 'none'
                      }}
                    >
                      steven@ocsunsoakedpools.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #e5e7eb',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#374151',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  Request by
                </span>
                <div style={{
                  display: 'inline-flex',
                  padding: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#f1f5f9',
                  gap: '0'
                }}>
                  <MethodToggle
                    label="Email"
                    isSelected={contactMethod === 'email'}
                    onClick={() => setContactMethod('email')}
                  />
                  <MethodToggle
                    label="Schedule a call"
                    isSelected={contactMethod === 'schedule'}
                    onClick={() => setContactMethod('schedule')}
                  />
                </div>
              </div>

              {contactMethod === 'email' && (
                <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <label style={labelStyle}>
                        Name <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#5dd3d3';
                          e.target.style.boxShadow = '0 0 0 3px rgba(93, 211, 211, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e5e7eb';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Phone <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#5dd3d3';
                          e.target.style.boxShadow = '0 0 0 3px rgba(93, 211, 211, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e5e7eb';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>
                      Email <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#5dd3d3';
                        e.target.style.boxShadow = '0 0 0 3px rgba(93, 211, 211, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '100px'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#5dd3d3';
                        e.target.style.boxShadow = '0 0 0 3px rgba(93, 211, 211, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div style={{
                      backgroundColor: '#dcfce7',
                      border: '1px solid #86efac',
                      borderRadius: '8px',
                      padding: '1rem',
                      marginBottom: '1rem',
                      color: '#166534',
                      fontSize: '0.95rem'
                    }}>
                      Thank you! Your message has been sent successfully. We will get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div style={{
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '8px',
                      padding: '1rem',
                      marginBottom: '1rem',
                      color: '#dc2626',
                      fontSize: '0.95rem'
                    }}>
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: isSubmitting ? '#9ca3af' : '#5dd3d3',
                        color: '#1f2937',
                        fontSize: '1rem',
                        fontWeight: '700',
                        padding: '0.875rem 2.5rem',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s',
                        fontFamily: "'Montserrat', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                      {!isSubmitting && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {contactMethod === 'schedule' && (
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#4b5563',
                    lineHeight: '1.6',
                    marginBottom: '1.25rem',
                    textAlign: 'center',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    Skip an in-home visit. Hop on a video call, show us your pool, and we will walk you through what to check and how to improve it—fast, clear, and free.
                  </p>
                  <div style={{
                    flex: 1,
                    minHeight: '580px'
                  }}>
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1NXs5TgffmbKy9QdX2WnQo9bWF26lMaSydAXmIq-MaVLVXGn4PIguw9Ce3POZaOYFg1vKDM8WH?gv=true"
                      style={{
                        border: 0,
                        width: '100%',
                        height: '100%',
                        minHeight: '580px'
                      }}
                      frameBorder="0"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodToggle({ label, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '0.5rem 1.25rem',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1rem',
        fontWeight: isSelected ? '600' : '500',
        color: isSelected ? '#1f2937' : '#6b7280',
        backgroundColor: isSelected ? '#5dd3d3' : 'transparent',
        transition: 'background-color 0.2s, color 0.2s, font-weight 0.2s'
      }}
    >
      {label}
    </button>
  );
}
