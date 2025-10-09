// src/components/Notes.jsx (REPLACE CONTENT)
import React from 'react';

const Notes = () => {
  return (
    <div className="notes-container" style={{padding: '20px'}}>
      <h2>How It Works: TLS Protocol Details</h2>
      
      <p style={{color: '#94a3b8'}}>The Transport Layer Security (TLS) handshake is a cryptographic protocol that establishes a secure, encrypted connection between a client (like your browser) and a server. It is a foundational element of HTTPS.</p>

      <h3 style={{color: 'var(--color-primary-cyan)'}}>Phase 1: Key Exchange Philosophy</h3>
      <p>The handshake uses a hybrid approach:</p>
      <ul>
        <li><strong>Asymmetric Encryption (Handshake):</strong> Uses Public/Private Key pairs for initial authentication (proving identity) and securely agreeing on a shared secret key.</li>
        <li><strong>Symmetric Encryption (Session):</strong> Uses a single, shared **Session Key** derived during the handshake to encrypt all bulk data transfer. This is significantly faster than asymmetric encryption.</li>
      </ul>

      <h3 style={{color: 'var(--color-primary-cyan)'}}>TLS 1.3 vs. TLS 1.2: The Core Difference</h3>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px', border: '1px solid #4ade80', padding: '15px', borderRadius: '8px', backgroundColor: '#1e293b'}}>
        <div>
          <h4 style={{color: 'var(--color-secondary-green)'}}>TLS 1.2 (Legacy)</h4>
          <ul>
            <li><strong>Round Trip Time (RTT):</strong> Requires **2 RTT** to complete the handshake, slowing initial load time.</li>
            <li><strong>Forward Secrecy:</strong> Optional. Often used **RSA Key Exchange**, which risked session keys if the server's private key was compromised later.</li>
            <li><strong>Cipher Suites:</strong> Supports many deprecated, less secure cipher suites.</li>
          </ul>
        </div>
        <div>
          <h4 style={{color: 'var(--color-secondary-green)'}}>TLS 1.3 (Modern)</h4>
          <ul>
            <li><strong>Round Trip Time (RTT):</strong> Only requires **1 RTT**, significantly improving performance.</li>
            <li><strong>Forward Secrecy:</strong> **Mandatory.** It exclusively uses **Ephemeral Diffie-Hellman (ECDHE)**, ensuring that a compromise of the server's long-term private key cannot decrypt past traffic.</li>
            <li><strong>Cipher Suites:</strong> Removed support for all old, insecure ciphers, streamlining the process.</li>
          </ul>
        </div>
      </div>
      
      <h3 style={{color: 'var(--color-primary-cyan)', marginTop: '30px'}}>Key Concept: Perfect Forward Secrecy (PFS)</h3>
      <p>PFS is the primary security improvement in TLS 1.3. It ensures that the compromise of a server's long-term private key does not compromise the session keys of past sessions. This is achieved because the session key is based on a **temporary (ephemeral)** key exchange (ECDHE) that is discarded after the session ends.</p>

      <div style={{border: '1px dashed #4ade80', padding: '15px', marginTop: '20px', textAlign: 'center'}}>
        Download Full Assignment Notes (PDF Placeholder)
      </div>
    </div>
  );
};

export default Notes;