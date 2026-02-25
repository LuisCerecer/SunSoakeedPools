import React, { useState } from 'react';

const faqData = [
    {
        question: "What does weekly pool service include?",
        answer: `Weekly service is the consistent work that keeps your pool clean, clear, and sanitary from one visit to the next. Not every tool is used on every visit—your pool gets what it needs based on debris, weather, and water condition.

Every visit: skim leaves and debris from the surface and address anything that has collected since the last visit.

As needed: brush the waterline and walls to remove clinging debris; net the bottom with a coarse net for heavier debris; use a fine net to “polish” the water by removing smaller particles (dirt, sand, pollen).

Chemistry: chlorine and pH are adjusted to keep the pool sanitized (algae control) and comfortable on the skin.

Seasonal comprehensive water checks: when appropriate, a more complete check can include alkalinity, salt (for salt pools), phosphates, total dissolved solids, metals, and calcium.

All of what your pool needs—and none of what it doesn’t.`
    },
    {
        question: "How much can I expect to pay for pool service?",
        answer: `Pool service pricing is driven by pool size, debris load, pool type (chlorine vs. salt), current condition, and whether you need repairs or extra add-ons (such as filter cleanings).

While we can’t provide pricing for an initial cleanup—since it depends heavily on the pool’s condition—the average range for routine service most often lands around $175 per month, which includes visits on a weekly cadence.`
    },
    {
        question: "How do I know the status of my pool after each visit?",
        answer: `After each visit, we send a brief update that covers what was handled that day and the state of the water chemistry. The point is simple: you shouldn’t have to guess whether the pool was cared for—you should be able to see that it was and understand it at a glance.`
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={{
            padding: '5rem 1.5rem',
            backgroundColor: '#f8fafc',
            fontFamily: "'Montserrat', sans-serif"
        }}>
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                    fontWeight: '800',
                    color: '#1f2937',
                    textAlign: 'center',
                    marginBottom: '3.5rem',
                    letterSpacing: '-0.02em'
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
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.75rem 2rem',
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
                                    fontSize: '1.15rem',
                                    fontWeight: '700',
                                    color: '#374151',
                                    lineHeight: '1.4'
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
                                    lineHeight: '1.8',
                                    fontSize: '1.05rem',
                                    whiteSpace: 'pre-line',
                                    borderTop: openIndex === index ? '1px solid #f1f5f9' : 'none',
                                    paddingTop: openIndex === index ? '1.5rem' : '0'
                                }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
