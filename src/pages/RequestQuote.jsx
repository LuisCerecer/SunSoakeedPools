import React, { useState } from 'react';
import Footer from '../components/Footer';

const serviceOptions = [
  'Weekly Pool Maintenance',
  'Pool Equipment Repair',
  'Green Pool Cleanup',
  'Filter Cleaning',
  'Salt System Service',
  'Pool Inspection',
  'Other'
];

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    additional: ''
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
      const response = await fetch('https://tecwave123.app.n8n.cloud/webhook/510bb3dc-9ad6-47ce-8aa0-fbaef79ad2d6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
          Contact us today for a free consultation
        </h1>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          padding: 'clamp(1.5rem, 3vw, 2.25rem)'
        }}>
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
      <Footer />
    </div>
  );
}
