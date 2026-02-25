import React from 'react';
import { useNavigation } from '../App';

const processSteps = [
  {
    number: "1",
    title: "Get a Free Consultation",
    description: "Fill out our quick form or give us a call to schedule a free consultation.",
    image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1769550963/1_dz1o4g.png"
  },
  {
    number: "2",
    title: "Create a Tailored Plan",
    description: "We will work with you to work out the most convenient and effective plan to have your pool to the highest standards.",
    image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1769550963/IMG_2390_d1rwbj.jpg"
  },
  {
    number: "3",
    title: "Get a Weekly Report",
    description: "We will provide you with weekly chemical and monitor readings regarding the status of your pool.",
    image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1769551073/IMG_6958_ab2g2l.jpg"
  },
  {
    number: "4",
    title: "Enjoy",
    description: "Enjoy the comfort of a clean and well maintained pool.",
    image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1769551073/IMG_3964_kmxzid.jpg"
  }
];

export default function ProcessSection() {
  const { navigate } = useNavigation();
  return (
    <section style={{
      padding: '5rem 1.5rem',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e5e7eb',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
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
          Process
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          marginBottom: '3.5rem',
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          Our simple 4-step process to pool perfection
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {processSteps.map((step, index) => (
            <ProcessCard key={index} step={step} />
          ))}
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
    </section>
  );
}

function ProcessCard({ step }) {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
      }}
    >
      <div style={{
        padding: '1.5rem 1.5rem 1rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#5dd3d3',
          color: '#1f2937',
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          {step.number}
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '0.75rem',
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: '1.3'
        }}>
          {step.title}
        </h3>
      </div>

      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img
          src={step.image}
          alt={step.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{
        padding: '1.5rem',
        flex: 1
      }}>
        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#4b5563',
          margin: 0,
          fontFamily: "'Montserrat', sans-serif"
        }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}
