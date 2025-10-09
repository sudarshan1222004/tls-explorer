// src/components/HandshakeDemo.jsx
import React, { useState } from 'react';
import { HANDSHAKE_STEPS } from '../data/handshakeData';
import '../styles/HandshakeDemo.css';

const HandshakeDemo = () => {
  const [currentStep, setCurrentStep] = useState(0); 
  const currentData = HANDSHAKE_STEPS[currentStep];
  const maxSteps = HANDSHAKE_STEPS.length - 1;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, maxSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const isPacketVisible = currentData.messagePacket !== null;

  return (
    <div className="handshake-container">
      <h2>Interactive Demo: {currentData.title}</h2>
      <p className="subtitle">{currentData.subtitle}</p>

      {currentStep === 4 && (
        <div className="calculation-indicator">
          🔑 Master Secret Calculation Happening Independently! 🔑
        </div>
      )}

      <div className="handshake-flow-area">
        <div className="flow-panel client-panel">
          <h3>Client (Browser)</h3>
          <p className="action-text">{currentData.clientAction}</p>
        </div>

        <div className="flow-line-area">
          <div 
            className={`message-packet 
              ${isPacketVisible ? 'visible' : 'hidden'}
              ${currentData.direction}`} 
            style={{ borderColor: currentData.color }}
          >
            {currentData.messagePacket ? currentData.messagePacket.name : '...'}
          </div>
          <div className="connection-line"></div>
        </div>

        <div className="flow-panel server-panel">
          <h3>Server (Website Host)</h3>
          <p className="action-text">{currentData.serverAction}</p>
        </div>
      </div>
      
      {currentData.messagePacket && (
        <div className="message-details" style={{ borderColor: currentData.color }}>
          <h4>Data in Packet: {currentData.messagePacket.name}</h4>
          <ul>
            {currentData.messagePacket.content.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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