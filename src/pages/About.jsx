import React, { useState } from 'react';
import { useNavigation } from '../App';
import Footer from '../components/Footer';
import ContactFormSection from '../components/ContactFormSection';

const faqData = [
  {
    question: "How much expertise do you have?",
    answer: `OCSunSoakedPools is owner-operated by Steven DeBolt who has multiple years of experience under his belt, he is an expert on:
Debris control (surface + bottom) using the right tools for the week (coarse net / fine net / vacuum as needed)
Water chemistry (chlorine + pH + alkalinity + salt + phosphates + TDS)
Equipment awareness (spotting common issues early)
Client communication`
  },
  {
    question: "What makes your pool cleaning service better?",
    answer: `It’s detail-driven care with a clear goal: visible clarity + peace of mind.
Chemistry is treated as the “unsung hero” (sanitation + comfort, not just appearance)
Fine-net detail work for a cleaner finish when the pool needs it
A clarity “finish” step (when appropriate): a surface solution that helps gather microscopic debris so it can be removed more completely
Weekly communication that keeps you informed, so you’re not left guessing what happened at your pool`
  },
  {
    question: "What makes us the preferred choice for pool and spa care in your city?",
    answer: `We prioritize deliberate care—so the pool feels “in order” week to week, not just temporarily cleaned.
Service adjusted to real conditions (weather, debris, pool usage), not a rigid checklist
A consistent standard: clean surfaces, stable chemistry, and a pool that’s comfortable to use
A simple philosophy: maintain it like it’s our own, so it stays ready for family time`
  }
];

export default function About() {
  const { navigate } = useNavigation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div style={{
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '4rem',
        backgroundColor: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '4rem',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            About Us
          </h1>

          {/* Block 1: Meet Steven DeBolt */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            marginBottom: '6rem',
            flexWrap: 'wrap',
            flexDirection: 'row'
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <img
                src="https://res.cloudinary.com/dy089iwsg/image/upload/v1770911779/Front_facing_x8k0fq.jpg"
                alt="Steven DeBolt professional pool cleaning expert and business owner"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1.5rem',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Meet Steven DeBolt
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Hello, I’m Steven DeBolt, owner of OC Sun Soaked Pools. I’m a South Orange County local (Laguna Hills) who has always loved the way water changes a space—whether that’s a backyard pool or a day at the beach. For me, pools aren’t just “maintenance.” They’re where families make regular memories, and where a clean, cared-for backyard can feel calm and put together even when life is busy.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                lineHeight: '1.8',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                I’m a husband and a dad of three, and a devoted Catholic. I know what it’s like to want the best for your family and the standard for such: showing up consistently, taking the time to do things right, and communicating clearly. My faith is central to my life, and it shapes how I serve people—honestly, thoughtfully, and with respect. When you reach out, you’re talking to a real person tied to the work and accountable for the result.
              </p>
            </div>
          </div>

          {/* Block 2: What OC Sun Soaked Pools stands for */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            marginBottom: '6rem',
            flexWrap: 'wrap',
            flexDirection: 'row'
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1.5rem',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                What OC Sun Soaked Pools stands for
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                We believe good pool care is deliberate care. That means your pool doesn’t get a rigid, one-size checklist—it gets what it actually needs that week based on debris, weather, and water condition. Every visit focuses on the fundamentals that keep a pool clean and swim-ready: removing debris, brushing when buildup shows up, vacuuming when needed, and keeping the water chemistry dialed in. Chemistry is the “unsung hero” of a healthy pool—balanced water prevents algae, protects equipment, and makes the water feel better on your skin.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                lineHeight: '1.8',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                We also pay attention to finishing details that many people skip. When it makes sense, we do fine-net work to remove smaller particles (like dirt, sand, and pollen) and bring out a cleaner-looking finish. At certain times of year, we take a deeper look at water quality metrics beyond the basics so the pool stays stable long-term. The goal is simple: you shouldn’t have to guess whether your pool was cared for—you should be able to feel it when you look at it, and understand it from clear communication after each visit.
              </p>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img
                src="https://res.cloudinary.com/dy089iwsg/image/upload/v1770911777/Logo_on_the_back_ln3kbz.jpg"
                alt="OC Sun Soaked Pools Team"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>

          {/* Block 3: Business Card */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '6rem'
          }}>
            <img
              src="https://res.cloudinary.com/dy089iwsg/image/upload/v1770911775/Business_card_afpkhg.png"
              alt="Steven DeBolt Business Card"
              style={{
                maxWidth: '600px',
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
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
      </div>
      <ContactFormSection />
      <Footer />
    </>
  );
}
