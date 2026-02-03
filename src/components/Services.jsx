import React from 'react';

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
    image: '/img_6181.jpg'
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

export default function Services() {
  return (
    <section style={{
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
          justifyContent: 'center'
        }}>
          <div className="services-bottom-card" style={{
            width: '50%',
            minWidth: '280px',
            maxWidth: '450px'
          }}>
            <ServiceCard title={services[2].title} image={services[2].image} />
          </div>
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
