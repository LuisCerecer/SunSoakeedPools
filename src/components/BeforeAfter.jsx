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
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1772056983/beforeafter_Martin_loiyyv.png'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1769529893/beforeafter_phillipe_fvwwdq.png'
  }
];

function BeforeAfterCard({ image, id }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      backgroundColor: '#f1f5f9',
      aspectRatio: '16 / 12'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.01)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(8, 145, 178, 0.25)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
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
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ position: 'relative', display: 'inline-block', width: '100%', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: '700',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Before and After
          </h2>
          <div style={{
            width: '40px',
            height: '3px',
            backgroundColor: '#5dd3d3',
            margin: '0 auto'
          }} />
        </div>

        <div className="before-after-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {beforeAfterImages.map((item) => (
            <BeforeAfterCard key={item.id} image={item.image} id={item.id} />
          ))}
        </div>

        <div className="before-after-copy" style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            lineHeight: '1.6',
            color: '#475569',
            margin: '0',
            fontWeight: '500'
          }}>
            Consistent weekly care that keeps your pool beautiful. Every visit includes skimming, brushing, chemistry testing, and professional water balancing.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .before-after-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .before-after-copy {
            padding: 1.5rem !important;
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
