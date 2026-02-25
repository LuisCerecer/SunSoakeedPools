import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://n8n.treulogic.work/webhook/38273e17-9028-4812-adeb-5edb9cf041cd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f9f9' }}>
      <div style={{
        paddingTop: '140px',
        padding: '140px 1.5rem 4rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '1rem',
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          FREE QUOTE
        </h1>

        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          lineHeight: '1.6',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Tell us about your pool and get a free quote from our team.
        </p>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          padding: 'clamp(1.5rem, 4vw, 2rem)',
          border: '1px solid #e0f2f2'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
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

            <div style={{ marginBottom: '1rem' }}>
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

            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>
                Service
              </label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="e.g., Pool Cleaning, Repairs, etc."
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
                placeholder="Tell us more about your pool and what you need help with..."
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
                Thank you! We've received your quote request. We'll be in touch soon!
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
                Something went wrong. Please try again or call us at (949) 736-2671.
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                {!isSubmitting && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
