// src/components/Notes.jsx (FINAL ACADEMIC NOTES)
import React from 'react';
import '../styles/Notes.css'; 
import '../styles/Global.css'; 
import { Download, Shield, Lock, Zap, FileText, CheckCircle, Key, Code, Clock, Github, ArrowRight } from 'lucide-react'; 

const Notes = () => {
  return (
    <div className="inner-page-container notes-content">
      
      {/* --- Main Header --- */}
      <div className="main-header-block">
        <h2 className="notes-header">How TLS Handshake Works</h2>
        <p className="header-subtitle">A comprehensive guide to understanding Transport Layer Security</p>
      </div>

      {/* 1. What is TLS? Block */}
      <div className="content-card large-card card-main-definition">
        <div className="card-header">
            <Shield className="header-icon cyan" size={24} />
            <h3 className="card-title">What is TLS?</h3>
        </div>
        <p className="card-text">
            The **Transport Layer Security (TLS)** handshake is a cryptographic protocol that provides secure communication over a computer network. It is the successor to SSL (Secure Sockets Layer) and is widely used to secure web traffic, email, and other data transfers.
        </p>
      </div>
      
      {/* 2. Key Concepts Blocks */}
      <h3 className="section-title">Key Concepts</h3>
      <div className="concept-grid">
        
        {/* Block A: Asymmetric vs Symmetric */}
        <div className="concept-block concept-two-tier">
            <div className="concept-title-wrapper">
                <Lock className="concept-icon blue" size={24} />
                <h4 className="concept-header">Asymmetric vs. Symmetric Encryption</h4>
            </div>
            <p className="concept-detail">
                **Asymmetric Encryption (Public Key Cryptography):** Uses a pair of keys (public and private). Secure but computationally expensive. Used during the handshake for authentication and key exchange (e.g., RSA, ECDHE).
            </p>
            <p className="concept-detail">
                **Symmetric Encryption:** Uses a single shared secret key. It’s fast and efficient. Used for encrypting the actual data after the handshake is complete (e.g., AES-256-GCM).
            </p>
        </div>

        {/* Block B: Certificate Authority */}
        <div className="concept-block">
            <div className="concept-title-wrapper">
                <CheckCircle className="concept-icon green" size={24} />
                <h4 className="concept-header">Certificate Authority (CA)</h4>
            </div>
            <p className="concept-detail full-detail">
                A trusted third-party organization that issues digital certificates. The CA verifies the identity of the certificate holder and digitally signs the certificate. During the TLS handshake, the client verifies the server's certificate by checking the CA's signature.
            </p>
        </div>
        
        {/* Block C: Cipher Suite */}
        <div className="concept-block">
            <div className="concept-title-wrapper">
                <Code className="concept-icon cyan" size={24} />
                <h4 className="concept-header">Cipher Suite</h4>
            </div>
            <p className="concept-detail full-detail">
                The specific set of cryptographic algorithms (for key exchange, encryption, and hashing) agreed upon by the client and server during the handshake. This defines the security parameters for the established session.
            </p>
        </div>
      </div>
      
      {/* 3. TLS 1.2 Handshake (Legacy) */}
      <h3 className="section-title warning-title">TLS 1.2 Handshake (Legacy)</h3>
      <div className="comparison-grid">
        <div className="comparison-card legacy-card">
            <Clock className="comparison-icon warning" size={24} />
            <h4 className="comparison-header-title">2-RTT Handshake</h4>
            <p className="comparison-detail">TLS 1.2 required two full round-trip times before encrypted data can be sent, resulting in higher latency for establishing connections.</p>
        </div>
        <div className="comparison-card legacy-card">
            <Key className="comparison-icon warning" size={24} />
            <h4 className="comparison-header-title">Optional RSA Key Exchange</h4>
            <p className="comparison-detail">TLS 1.2 allowed RSA key exchange, which does not provide Perfect Forward Secrecy, exposing past sessions if the server key is compromised.</p>
        </div>
      </div>

      {/* 4. TLS 1.3 Handshake (Modern) */}
      <h3 className="section-title success-title">TLS 1.3 Handshake (Modern)</h3>
      <div className="comparison-grid">
        <div className="comparison-card modern-card">
            <Zap className="comparison-icon success" size={24} />
            <h4 className="comparison-header-title">1-RTT Handshake</h4>
            <p className="comparison-detail">TLS 1.3 reduces the handshake to just one round-trip time by sending key shares in the first message, significantly improving connection speed.</p>
        </div>
        <div className="comparison-card modern-card">
            <Lock className="comparison-icon success" size={24} />
            <h4 className="comparison-header-title">Mandatory Perfect Forward Secrecy</h4>
            <p className="comparison-detail">TLS 1.3 exclusively uses Ephemeral Diffie-Hellman (ECDHE), guaranteeing that session keys cannot be derived even if long-term keys are compromised.</p>
        </div>
      </div>

      {/* 5. Master Secret Block */}
      <div className="content-card master-secret-card">
        <div className="card-header">
            <Key className="header-icon cyan" size={24} />
            <h3 className="card-title">Master Secret / Session Key</h3>
        </div>
        <p className="card-text">
            The Master Secret is derived from the Client Random, Server Random, and key exchange data. Keys are unique to each session and never transmitted, guaranteeing **Perfect Forward Secrecy (PFS)**.
        </p>
      </div>
      
      {/* --- 6. Final Links Blocks (GitHub/Colab) --- */}
      <h3 className="section-title final-links-title">Project Resources</h3>
      <div className="final-links-grid">
          
          <a href="https://github.com/sudarshan1222004/tls-explorer.git" target="_blank" rel="noopener noreferrer" className="link-card github-link">
              <Github size={36} className="link-icon" />
              <h4>GitHub Repository</h4>
              <p>View the full source code and commit history for this project on GitHub.</p>
              <ArrowRight size={20} className="link-arrow"/>
          </a>
          
          <a href="https://colab.research.google.com/drive/1tbOdYI89rLSfxoYA8hAKl_x11WduRuB8?usp=sharing" target="_blank" rel="noopener noreferrer" className="link-card collab-link">
              <Code size={36} className="link-icon" />
              <h4>Colab Live Demo Link</h4>
              <p>Access the live development environment for review and assessment.</p>
              <ArrowRight size={20} className="link-arrow"/>
          </a>
      </div>

      <div className="download-area">
        <button className="download-button primary-gradient">
          <Download size={20} style={{marginRight: '10px'}}/>
          Download Full Notes 
        </button>
      </div>

    </div>
  );
};

export default Notes;