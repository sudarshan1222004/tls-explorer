// src/components/HomeView.jsx (REPLACED ENTIRE CONTENT - FINAL STABLE VERSION)
import React from 'react';
import { NAV_LINKS } from '../data/navLinks';
import '../styles/HomeView.css';
import '../styles/Global.css'; 
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react'; 

// =================================================================
// FEATURE DATA ARRAY 
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
// HOME VIEW COMPONENT (Includes all visual fixes)
// =================================================================
const HomeView = ({ setView }) => {
  const interactiveDemoLink = NAV_LINKS.find(link => link.name === 'Interactive Demo');
  const notesLink = NAV_LINKS.find(link => link.name === 'How It Works (Notes)');

  return (
    <div className="home-container"> 
      
      {/* Background layer must be here for the fixed aesthetic */}
      <div className="home-bg-static-layer"></div>

      {/* 1. HERO SECTION (Alignment and Content) */}
      <section className="hero-section-final">
        <div className="hero-content-block">
          <h1 className="hero-title">
            Establish Trust: The Journey <br /> of <span className="highlight-text">a TLS Handshake</span>
          </h1>
          <p className="hero-subtitle">
            Discover how millions of secure connections are established every second. Explore the cryptographic dance that keeps your data safe.
          </p>
          <div className="hero-actions">
            {/* Expanded Primary Button */}
            <button 
              onClick={() => setView(interactiveDemoLink?.name || 'Interactive Demo')} 
              className="hero-button primary-gradient large-button"
            >
              Launch Interactive Demo <ArrowRight size={20} style={{marginLeft: '8px'}} />
            </button>
            {/* Expanded Secondary Button */}
            <button 
              onClick={() => setView(notesLink?.name || 'How It Works (Notes)')} 
              className="hero-button secondary-solid large-button"
            >
              Explore the Steps
            </button>
          </div>
        </div>

        {/* 2. FEATURE CARDS AREA (Bottom of Viewport) */}
        <div className="feature-cards-area">
            <div className="feature-card-grid">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
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
              })} 
            </div>
        </div>

      </section>
      
    </div> 
  );
};

export default HomeView;