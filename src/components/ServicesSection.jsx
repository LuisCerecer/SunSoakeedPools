import React from 'react';
import { useNavigation } from '../App';

const services = [
  {
    title: 'Pool Cleaning',
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1769529407/IMG_3211-2_1_fbsaoe.jpg'
  },
  {
    title: 'Weekly Pool Maintenance',
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1769529534/IMG_6905_yuxdxl.jpg'
  },
  {
    title: 'Filter Cleaning',
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1772056642/IMG_2731_fqelqo.jpg'
  }
];

function ServiceCard({ title, image }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      aspectRatio: '16 / 12'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(8, 145, 178, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover'
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
        padding: '3rem 1.5rem 1.5rem'
      }}>
        <h3 style={{
          color: '#fff',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontWeight: '600',
          textAlign: 'center',
          margin: 0,
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { navigate } = useNavigation();
  return (
    <section id="services" style={{
      padding: '5rem 2rem',
      backgroundColor: '#f8fafc',
      borderTop: '1px solid #e5e7eb',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
          fontWeight: '700',
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '3rem'
        }}>
          Services we can do for your pool
        </h2>

        <div className="services-top-row" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <ServiceCard title={services[0].title} image={services[0].image} />
          <ServiceCard title={services[1].title} image={services[1].image} />
        </div>

        <div className="services-bottom-row" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3.5rem'
        }}>
          <div className="services-bottom-card" style={{
            width: '50%',
            minWidth: '280px',
            maxWidth: '450px'
          }}>
            <ServiceCard title={services[2].title} image={services[2].image} />
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="tel:9497362671"
            style={{
              backgroundColor: '#5dd3d3',
              color: '#1f2937',
              padding: '1rem 2.25rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              border: '2px solid #5dd3d3',
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: '0 4px 12px rgba(93, 211, 211, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4bc2c2';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(93, 211, 211, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#5dd3d3';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(93, 211, 211, 0.3)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (949) 736-2671
          </a>

          <button
            onClick={() => navigate('contactus')}
            style={{
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '1rem 2.25rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              border: '2px solid #1f2937',
              fontFamily: "'Montserrat', sans-serif",
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(31, 41, 55, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1f2937';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            FREE QUOTE
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-top-row {
            grid-template-columns: 1fr !important;
          }
          .services-bottom-card {
            width: 100% !important;
            max-width: none !important;
          }
        }
      `}</style>
    </section>
  );
}
