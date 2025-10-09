// src/components/HandshakeDemo.jsx (FINAL AESTHETIC FIX)

import React, { useState } from 'react';
import { HANDSHAKE_STEPS } from '../data/handshakeData'; 
import '../styles/HandshakeDemo.css';
import '../styles/Global.css'; 
import { RefreshCw, ArrowLeft, ArrowRight, Server, Laptop, ShieldCheck, CheckCircle, Key, ArrowLeftRight, FileText, Shield, Compass } from 'lucide-react'; 

const HandshakeDemo = () => {
  if (!HANDSHAKE_STEPS || HANDSHAKE_STEPS.length === 0) {
      return (
          <div className="inner-page-container" style={{textAlign: 'center', padding: '100px', color: 'red'}}>
              <h2>Data Error: HANDSHAKE_STEPS data is missing or empty.</h2>
              <p>Please check src/data/handshakeData.js for correct content.</p>
          </div>
      );
  }

  const [currentStep, setCurrentStep] = useState(0); 
  const maxSteps = HANDSHAKE_STEPS.length - 1;
  const currentData = HANDSHAKE_STEPS[currentStep];

  // --- Icon Mapping Function ---
  const getStepIcon = (stepId) => {
    switch (stepId) {
        case 1: return Laptop; 
        case 2: return FileText; 
        case 3: return Shield; 
        case 4: return Key; 
        case 5: return CheckCircle; 
        case 6: return Lock; 
        default: return ArrowLeftRight; 
    }
  };

  // --- Logic Functions ---
  const handleNext = () => { if (currentStep < maxSteps) setCurrentStep(currentStep + 1); };
  const handlePrev = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };
  const handleReset = () => { setCurrentStep(0); };

  // Dynamic Headline Logic
  const getHeadline = (step) => {
    if (!currentData) return "Loading...";
    return currentData.title;
  };

  const isPacketVisible = currentData.messagePacket !== null;
  const animationKey = currentStep; 

  return (
    <div className="inner-page-container">
      <div className="demo-header-text">
        <h1 className="main-title">Interactive TLS Handshake Demo</h1>
        <p className="subtitle">Step through the handshake process and watch how a secure connection is established</p>
      </div>

      <div className="demo-main-grid">
        
        {/* === LEFT COLUMN: INTERACTIVE FLOW PANEL === */}
        <div className="flow-panel-wrapper">
            <div className="flow-diagram-section">
                
                <div className="icon-display client-icon">
                    <Laptop size={48} />
                    <p>Client<br/><span>Browser</span></p>
                </div>
                
                <div className="flow-line-area">
                    <div className="connection-line"></div>
                    
                    {currentStep !== 0 && ( 
                        <div 
                            key={animationKey} 
                            className={`message-packet ${isPacketVisible ? 'visible' : 'hidden'} ${currentData.direction}`} 
                        >
                            {currentData.messagePacket ? currentData.messagePacket.name : ''}
                        </div>
                    )}
                </div>

                <div className="icon-display server-icon">
                    <Server size={48} />
                    <p>Server<br/><span>Website</span></p>
                </div>
            </div>

            <div className="flow-details-section">
                <h3 className="details-header">
                    <ShieldCheck size={20} style={{marginRight: '10px'}}/>
                    {getHeadline(currentStep)} 
                    <span className="step-count-label">Step {currentStep + 1} of {maxSteps + 1}</span>
                </h3>
                
                <div className="details-content-and-controls">
                    
                    <div className="content-area">
                        
                        <p className="details-description">
                            {currentData.subtitle}
                        </p>
                        
                        <div className="main-content-detail">
                            <p className="detail-title">{currentData.title}</p>
                            <p className="detail-text">{currentData.clientAction}</p>
                            
                            {currentData.messagePacket && currentData.messagePacket.content.length > 0 && (
                                <div className="packet-content-box">
                                    {currentData.messagePacket.content.map((item, index) => (
                                        <span key={index}>**{item.label}**: {item.value}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {currentStep === 4 && (
                            <p className="key-exchange-info">
                                Keys: Client and Server independently calculate the **Master Secret** using ECDHE.
                            </p>
                        )}
                    </div>
                    
                    {/* --- NAVIGATION CONTROLS (Position is locked below content) --- */}
                    <div className="navigation-controls-locked">
                        <button onClick={handlePrev} disabled={currentStep === 0} className="nav-button prev-button">
                            <ArrowLeft size={18} style={{marginRight: '5px'}}/> Previous
                        </button>
                        <button onClick={handleNext} disabled={currentStep === maxSteps} className="nav-button next-button">
                            Next Step <ArrowRight size={18} style={{marginLeft: '5px'}}/>
                        </button>
                        <button onClick={handleReset} className="nav-button reset-button">
                            <RefreshCw size={16} /> Reset Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* === RIGHT COLUMN: STEP NAVIGATOR === */}
        <div className="step-navigator-panel">
            <h3 className="navigator-header">
                <Compass size={20} style={{marginRight: '10px', color: '#00BFFF'}} />
                Handshake Steps
            </h3>
            <div className="step-list">
                {HANDSHAKE_STEPS.map((step, index) => (
                    <div 
                        key={index} 
                        className={`step-item ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        <div className="step-number">
                            {index < currentStep ? <CheckCircle size={16} /> : index + 1}
                        </div>
                        <div className="step-info">
                            <p className="step-title">{step.title}</p>
                            <p className="step-summary">
                                {step.subtitle.substring(0, 45)}...
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default HandshakeDemo;