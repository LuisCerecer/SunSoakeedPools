import React from 'react';

const beforeAfterImages = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1769529632/before_after_filter_clean_1_fxuuyv.png'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1769529894/before_after_filter_clean_2_eo29fm.png'
  },
  {
    id: 3,
    image: '/beforeafter_martin.png'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1769529893/beforeafter_phillipe_fvwwdq.png'
  }
];

function BeforeAfterCard({ image, id }) {
  return (
    <div style={{
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      backgroundColor: '#f1f5f9',
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
        alt={`Before and after transformation ${id}`}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#f8fafc',
      borderTop: '1px solid #e5e7eb',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
          fontWeight: '700',
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '3rem'
        }}>
          Before and After
        </h2>

        <div className="before-after-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {beforeAfterImages.map((item) => (
            <BeforeAfterCard key={item.id} image={item.image} id={item.id} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .before-after-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
