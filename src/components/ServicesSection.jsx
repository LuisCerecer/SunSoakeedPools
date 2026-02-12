import React, { useState } from 'react';

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

const faqData = [
  {
    question: "Can you handle pool repairs in addition to cleaning?",
    answer: `Yes—within the common equipment issues we run into, we will provide you with:
Basic troubleshooting (circulation/pressure, leaks, valves, equipment performance)
Clear explanation of what’s needed before any work is done
If it’s outside scope, we’ll tell you upfront and point you in the right direction`
  },
  {
    question: "Can I customize my weekly pool care plan?",
    answer: `Yes. We don’t do a rigid checklist—your pool gets what it needs that week for your needs.
Heavy debris week: extra skimming, bottom netting, and vacuuming if needed
Buildup week: waterline and wall brushing
Every week: chlorine + pH adjusted to keep the water clear, sanitary, and comfortable
Certain times of year: deeper water checks when it makes sense (salt/alkalinity/calcium, etc.)`
  },
  {
    question: "What makes your pool cleaning services better?",
    answer: `It’s deliberate care + finishing details:
Focus on clarity + sanitation (chemistry treated as the “unsung hero”)
Fine-net detail work for a cleaner finish.
In-house special clarity finish: A surface solution that helps gather microscopic debris so it can be removed more completely
Clear communication so you’re not left guessing what happened at your pool`
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        {/* FAQ Section */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: '800',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {faqData.map((faq, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: openIndex === index ? '#f8fafc' : '#ffffff',
                  boxShadow: openIndex === index ? '0 10px 25px -5px rgba(0, 0, 0, 0.05)' : '0 2px 10px rgba(0,0,0,0.02)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    outline: 'none'
                  }}
                >
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#374151',
                    lineHeight: '1.4',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: openIndex === index ? '#0891b2' : '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                    marginLeft: '1.5rem'
                  }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openIndex === index ? '#ffffff' : '#64748b'}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div style={{
                  maxHeight: openIndex === index ? '1000px' : '0',
                  opacity: openIndex === index ? '1' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: openIndex === index ? '0 2rem 2rem 2rem' : '0 2rem'
                }}>
                  <div style={{
                    color: '#4b5563',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    whiteSpace: 'pre-line',
                    borderTop: openIndex === index ? '1px solid #f1f5f9' : 'none',
                    paddingTop: openIndex === index ? '1.5rem' : '0',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            FREE QUOTE
          </a>
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
