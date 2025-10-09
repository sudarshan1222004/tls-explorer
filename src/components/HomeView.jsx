// src/components/HomeView.jsx (REPLACED ENTIRE CONTENT - FINAL SYNTAX FIX)

import React from 'react';
import { NAV_LINKS } from '../data/navLinks';
import '../styles/HomeView.css';
import '../styles/Global.css'; 
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react'; 

// =================================================================
// FEATURE DATA ARRAY (Required for the cards section)
// =================================================================
const features = [
  { 
    title: "Secure by Design", 
    description: "Learn how TLS protects data integrity, confidentiality, and authenticity through cryptographic protocols.", 
    icon: Shield,
    color: '#00BFFF' 
  },
  { 
    title: "End-to-End Encryption", 
    description: "Understand the journey from asymmetric key exchange to fast symmetric session encryption.", 
    icon: Lock,
    color: '#3b82f6'
  },
  { 
    title: "Lightning Fast", 
    description: "Discover how TLS 1.3 achieves secure connections in just one round trip time (1-RTT).", 
    icon: Zap,
    color: '#4ade80'
  },
];


// =================================================================
// HOME VIEW COMPONENT (Cleaned and Error-Free)
// =================================================================
const HomeView = ({ setView }) => {
  const interactiveDemoLink = NAV_LINKS.find(link => link.name === 'Interactive Demo');
  const notesLink = NAV_LINKS.find(link => link.name === 'How It Works (Notes)');

  return (
    <div className="home-container"> 
      
      {/* Background layer must be here for the fixed aesthetic */}
      <div className="home-bg-static-layer"></div>

      {/* 1. HERO SECTION (Title and Buttons) */}
      <section className="hero-section-main">
        <h1 className="hero-title">
          Establish Trust: The Journey <br /> of <span className="highlight-text">a TLS Handshake</span>
        </h1>
        <p className="hero-subtitle">
          Discover how millions of secure connections are established every second. Explore the cryptographic dance that keeps your data safe.
        </p>
        <div className="hero-actions">
          <button 
            onClick={() => setView(interactiveDemoLink?.name || 'Interactive Demo')} 
            className="hero-button primary-gradient"
          >
            Launch Interactive Demo <ArrowRight size={20} style={{marginLeft: '8px'}} />
          </button>
          <button 
            onClick={() => setView(notesLink?.name || 'How It Works (Notes)')} 
            className="hero-button secondary-solid"
          >
            Explore the Steps
          </button>
        </div>
      </section>

      {/* 2. VIDEO SECTION (Scrolls into view) */}
      <section className="scroll-section video-section">
        <h2 className="section-headline">Watch the Process</h2>
        <div className="video-placeholder-box">
            <video 
                autoPlay 
                loop 
                muted 
                controls 
                className="embedded-video"
            >
                {/* Ensure the path is correct: /intro.mp4 */}
                <source src="/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </section>

      {/* 3. FEATURE CARDS SECTION (Scrolls further down) */}
      <section className="scroll-section feature-cards-section">
        <h2 className="section-headline">Why TLS Matters</h2>
        <div className="feature-card-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            // --- CRITICAL FIX: Explicit RETURN statement ---
            return (
              <div key={index} 
                   className="feature-card" 
                   style={{borderLeft: `4px solid ${feature.color}`}}
              >
                <IconComponent size={30} className="feature-icon" style={{color: feature.color}} />
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            );
            // ---------------------------------------------
          })} 
        </div>
      </section>
      
    </div> 
  );
};

export default HomeView;