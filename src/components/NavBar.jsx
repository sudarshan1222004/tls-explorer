// src/components/NavBar.jsx (PILL STYLE)
import React from 'react';
import { NAV_LINKS } from '../data/navLinks';
import '../styles/NavBar.css'; 

const LockLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const NavBar = ({ currentView, setView }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setView('Home')}>
        <LockLogo />
        TLS Handshake Explorer
      </div>
      <div className="nav-links-wrapper">
          <ul className="nav-links">
            <li>
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setView('Home'); }}
                    className={currentView === 'Home' ? 'active' : ''}
                >
                    Home
                </a>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
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