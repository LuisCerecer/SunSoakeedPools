import React from 'react';

const reviews = [
  {
    name: "Rod D.",
    initial: "R",
    text: "We have lived in Lake Forest for the last 25 years and have gone through a number of pool services. OC Sun Soaked Pool Service is by far the best pool service we have ever had. Knowledgeable, professional, great customer service, fair price and outstanding communication. Steven's attention to detail is amazing! Highly recommended!",
    avatarColor: "#5dd3d3"
  },
  {
    name: "Martin V.",
    initial: "M",
    text: "I've used this company for the past year and their service has been exceptional. Their new software keeps me updated on weekly visits and includes data on work completion and current chemical percentages/levels. They have fair pricing and a very responsive staff. If looking for a new pool cleaning service, l definitely recommend OC Sun Soaked Pool service.",
    avatarColor: "#1f2937"
  },
  {
    name: "Kathy S.",
    initial: "K",
    text: "The owner, Steven, is professional, easy to communicate with, and clearly knows what he's doing. He takes his work seriously and cares about doing a good job. OC Sun Soaked Pool Service is a solid local option and definitely worth checking out.",
    avatarColor: "#5dd3d3"
  }
];

export default function Reviews() {
  return (
    <section style={{
      padding: '5rem 1.5rem',
      backgroundColor: '#f0f9f9',
      borderTop: '1px solid #e5e7eb',
      position: 'relative'
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
          What Our Customers Say
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          marginBottom: '3.5rem',
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          Real reviews from real customers
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            (949) 736-2671
          </a>

          <a
            href="/contact"
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
              fontFamily: "'Montserrat', sans-serif"
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
            FREE QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '1.75rem',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '380px',
      transition: 'all 0.3s ease',
      cursor: 'default'
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: review.avatarColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: review.avatarColor === '#1f2937' ? '#fff' : '#1f2937',
            fontSize: '1.25rem',
            fontWeight: '700',
            fontFamily: "'Montserrat', sans-serif",
            flexShrink: 0
          }}>
            {review.initial}
          </div>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#1f2937',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            {review.name}
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dy089iwsg/image/upload/v1769549907/yelp-logo_768x512_schuuq.png"
          alt="Yelp"
          style={{
            height: '32px',
            width: 'auto'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        gap: '0.25rem',
        marginBottom: '1.25rem'
      }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#fbbf24"
            stroke="#fbbf24"
            strokeWidth="1"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      <p style={{
        fontSize: '0.95rem',
        lineHeight: '1.7',
        color: '#4b5563',
        margin: 0,
        fontFamily: "'Montserrat', sans-serif",
        flex: 1
      }}>
        {review.text}
      </p>
    </div>
  );
}
