// src/components/NavBar.jsx (FINAL CORRECTED CONTENT)
import React from 'react';
// The import for NAV_LINKS is usually unnecessary here, but leaving it for now
import '../styles/NavBar.css'; 
import { Lock } from 'lucide-react'; 

// The component receives the full list of links via the 'navLinks' prop from App.jsx
const NavBar = ({ currentView, setView, navLinks }) => { 
  return (
    <nav className="navbar">
      <div className="nav-content-wrapper">
        <div className="nav-logo" onClick={() => setView('Home')}>
          <Lock className="logo-icon" />
          <span style={{fontSize: '1.1em', lineHeight: '1.2'}}>TLS Handshake Explorer</span>
        </div>
        
        <ul className="nav-links">
          {/* CRITICAL FIX: Loop over the dynamic 'navLinks' prop instead of hardcoded array */}
          {navLinks.map((link) => ( 
            <li key={link.name}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setView(link.name); }}
                className={currentView === link.name ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;