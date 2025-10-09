// src/components/NavBar.jsx (REPLACED CONTENT)
import React from 'react';
import { NAV_LINKS } from '../data/navLinks'; // Requires navLinks.js
import '../styles/NavBar.css'; 
import { Lock } from 'lucide-react'; 

const NavBar = ({ currentView, setView }) => {
  return (
    <nav className="navbar">
      <div className="nav-content-wrapper">
        <div className="nav-logo" onClick={() => setView('Home')}>
          <Lock className="logo-icon" />
          <span style={{fontSize: '1.1em', lineHeight: '1.2'}}>TLS Handshake Explorer</span>
        </div>
        
        <ul className="nav-links">
          {['Home', 'Interactive Demo', 'How It Works (Notes)', 'Video Library', 'Ask an Expert (Chatbot)'].map((name) => (
            <li key={name}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setView(name); }}
                className={currentView === name ? 'active' : ''}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;