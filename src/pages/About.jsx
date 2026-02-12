import React from 'react';
import Footer from '../components/Footer';

export default function About() {
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
                alt="Steven DeBolt"
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
            flexDirection: 'row' // Keep standard flow, text first in DOM if we want text left.
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
            marginBottom: '4rem'
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

        </div>
      </div>
      <Footer />
    </>
  );
}
