// src/components/HomeView.jsx (REPLACE ENTIRE CONTENT)
import React from 'react';
import { NAV_LINKS } from '../data/navLinks';
import '../styles/HomeView.css';
import '../styles/Global.css'; 


// =================================================================
// SVG ICON DEFINITIONS 
// =================================================================
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);


// =================================================================
// FEATURE DATA ARRAY
// =================================================================
const features = [
  { 
    title: "Secure by Design", 
    description: "Learn how TLS protects data integrity, confidentiality, and authenticity through cryptographic protocols.", 
    icon: ShieldIcon 
  },
  { 
    title: "End-to-End Encryption", 
    description: "Understand the journey from asymmetric key exchange to fast symmetric session encryption.", 
    icon: LockIcon 
  },
  { 
    title: "Lightning Fast", 
    description: "Discover how TLS 1.3 achieves secure connections in just one round trip time (1-RTT).", 
    icon: LightningIcon 
  },
];


// =================================================================
// HOME VIEW COMPONENT
// =================================================================
const HomeView = ({ setView }) => {
  const interactiveDemoLink = NAV_LINKS.find(link => link.name === 'Interactive Demo');
  const notesLink = NAV_LINKS.find(link => link.name === 'How It Works (Notes)');

  return (
    <div className="home-container">
      
      {/* A. Hero Section - Centered content in the viewport */}
      <section className="hero-section-final">
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
            Launch Interactive Demo &rarr;
          </button>
          <button 
            onClick={() => setView(notesLink?.name || 'How It Works (Notes)')} 
            className="hero-button secondary-solid"
          >
            Explore the Steps
          </button>
        </div>
      </section>

      {/* B. Feature Cards Section - Placed below the hero */}
      <section className="feature-cards-section-bottom">
        <div className="feature-card-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <feature.icon />
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))} 
        </div>
      </section>

    </div> 
  );
};

export default HomeView;