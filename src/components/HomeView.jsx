// src/components/HomeView.jsx (REPLACED ENTIRE CONTENT - FINAL SAFE VERSION)
import React from 'react';
import { NAV_LINKS } from '../data/navLinks';
import '../styles/HomeView.css';
import '../styles/Global.css'; 

// --- 1. SAFE SVG ICON DEFINITIONS (REPLACES lucide-react imports) ---
const ArrowRight = ({ size, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const Shield = ({ size, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const Lock = ({ size, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const Zap = ({ size, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

// =================================================================
// 2. FEATURE DATA ARRAY (Uses local SVG functions)
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
// 3. HOME VIEW COMPONENT
// =================================================================
const HomeView = ({ setView }) => {
  const interactiveDemoLink = NAV_LINKS.find(link => link.name === 'Interactive Demo');
  const notesLink = NAV_LINKS.find(link => link.name === 'How It Works (Notes)');

  return (
    <div className="home-container"> 
      
      {/* Background layer must be here for the fixed aesthetic */}
      <div className="home-bg-static-layer"></div>

      {/* 1. HERO SECTION (Alignment Fix) */}
      <section className="hero-section-final">
        <div className="hero-content-block">
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
                    {/* Render the local SVG function */}
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