1 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
            <h3 style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1.5rem',
              textAlign: 'center',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Request a Free Quote
            </h3>

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
