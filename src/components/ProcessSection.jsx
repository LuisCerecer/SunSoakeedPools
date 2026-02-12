import React, { useState } from 'react';

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

const faqData = [
  {
    question: "What’s included in a typical weekly maintenance visit?",
    answer: `Weekly maintenance is the consistent work that keeps the pool clean, clear, and sanitary—based on what it needs that week.

Skim surface debris every visit (leaves and anything that fell in since the last service)

Bottom netting when debris sinks (coarse net for heavier debris)

Fine-net “polish” when needed (dirt, sand, pollen, smaller particles)

Brush the waterline and walls when buildup or clinging debris appears

Vacuum as needed when debris is too heavy for netting alone

Chemistry adjusted (chlorine + pH) for sanitation and comfortable water

Seasonal deeper checks when appropriate (alkalinity, salt for salt pools, phosphates, TDS, metals, calcium)`
  },
  {
    question: "How do you adjust service for seasonal conditions (heat, wind, debris, rain) in South OC?",
    answer: `We adjust based on what’s actually happening in your pool that week—no rigid checklist.

Wind or heavier debris weeks: more skimming, bottom netting, and vacuuming

Hot stretches: chemistry is monitored closely (chlorine + pH) to keep water sanitized and comfortable

After rain: water chemistry can shift, so rebalancing is handled as needed

Periodic deeper water checks: done when it makes sense to keep overall water quality dialed in`
  },
  {
    question: "If something breaks, what does your repair process look like, and do you offer urgent repair help?",
    answer: `Yes—we handle most common equipment issues, and the process is straightforward.

Diagnosis: identify what’s going on (circulation/pressure, leaks, valves, equipment performance)

Estimate: explain what’s needed before any work is done

Repair: proceed only after you’re clear on the fix

If it’s outside our scope of expertise, we’ll tell you upfront and point you in the right direction

We’re always ready to help with urgent situations. For time-sensitive issues, just give us a call—if we can move quickly on your route, we will.`
  }
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
