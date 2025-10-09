// src/components/HandshakeDemo.jsx (REPLACED ENTIRE CONTENT)

import React, { useState } from 'react';
import { HANDSHAKE_STEPS } from '../data/handshakeData';
import '../styles/HandshakeDemo.css';

const HandshakeDemo = () => {
  // 1. Hooks (MUST be at the top)
  const [currentStep, setCurrentStep] = useState(0); 
  
  // 2. Variables and Logic
  const currentData = HANDSHAKE_STEPS[currentStep];
  const maxSteps = HANDSHAKE_STEPS.length - 1;

  // Navigation handlers
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, maxSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // Dynamic Headline Logic
  const getHeadline = (step) => {
      if (step === 0) return "Connection Initiation: Let's Begin the Negotiation";
      if (step === maxSteps) return "Secure Channel Established: Start Encrypting!";
      if (step === 4) return "Key Derivation: Achieving Perfect Forward Secrecy";
      return currentData.title;
  };
  
  // Logic for animation
  const isPacketVisible = currentData.messagePacket !== null;
  const isMoving = isPacketVisible && currentStep !== 0; 
  const animationKey = currentStep; 

  // 3. Main JSX Return (Must be the LAST thing)
  return (
    <div className="handshake-container">
      {/* Use the dynamic headline */}
      <h2>{getHeadline(currentStep)}</h2>
      <p className="subtitle">{currentData.subtitle}</p>

      {/* Special visual element for the Master Secret calculation step (Step 4) */}
      {currentStep === 4 && (
        <div className="calculation-indicator">
          🔑 Master Secret Calculation Happening Independently! (Forward Secrecy Achieved) 🔑
        </div>
      )}

      {/* The main Client/Server split view */}
      <div className="handshake-flow-area">
        {/* === Client Side === */}
        <div className="flow-panel client-panel">
          <h3>Client (Browser)</h3>
          <p className="action-text">{currentData.clientAction}</p>
        </div>

        {/* === Message Packet / Flow Line === */}
        <div className="flow-line-area">
          <div 
            key={animationKey} /* Forces re-animation on step change */
            className={`message-packet 
              ${isMoving ? 'visible' : 'hidden'}
              ${currentData.direction}`} 
            style={{ borderColor: currentData.color }}
          >
            {currentData.messagePacket ? currentData.messagePacket.name : '...'}
          </div>
          <div className="connection-line"></div>
        </div>

        {/* === Server Side === */}
        <div className="flow-panel server-panel">
          <h3>Server (Website Host)</h3>
          <p className="action-text">{currentData.serverAction}</p>
        </div>
      </div>
      
      {/* Message Details (shows data being sent) */}
      {currentData.messagePacket && (
        <div className="message-details">
          <h4>Data in Transit: {currentData.messagePacket.name}</h4>
          <ul>
            {currentData.messagePacket.content.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="navigation-controls">
        <button onClick={handlePrev} disabled={currentStep === 0}>
          &larr; Previous Step
        </button>
        <span className="step-counter">
          Step {currentStep + 1} of {maxSteps + 1}
        </span>
        <button onClick={handleNext} disabled={currentStep === maxSteps}>
          Next Step &rarr;
        </button>
      </div>
    </div>
  );
};

export default HandshakeDemo;