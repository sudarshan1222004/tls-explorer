// src/components/VideoLibrary.jsx (FINAL RESTORED VERSION)
import React from 'react';
import '../styles/VideoLibrary.css'; 
import '../styles/Global.css'; 
import { Youtube, BookOpen } from 'lucide-react'; 

const VideoLibrary = () => {
  const videos = [
    {
      id: 1,
      title: "Deep Dive: Perfect Forward Secrecy & ECDHE",
      description: "An essential look at how Diffie-Hellman ensures past communications remain secure by generating unique ephemeral keys.",
      embedCode: "sTqUoTEiaSQ" 
    },
    {
      id: 2,
      title: "TLS 1.3: The Evolution of Speed and Security",
      description: "Detailed comparison showing why TLS 1.3 reduces the handshake to just one Round Trip Time (1-RTT).",
      embedCode: "JA0vaIb4158" 
    },
    {
      id: 3,
      title: "Wireshark Walkthrough: Capturing the Handshake",
      description: "A technical deep dive showing the actual packets (Client Hello, Server Hello) in a network trace—excellent for technical analysis.",
      embedCode: "25_ftpJ-2ME" // David Bombal (Wireshark)
    },
    {
      id: 4,
      title: "Digital Certificates and the Chain of Trust",
      description: "Explains how Certificate Authorities issue certificates and how the browser verifies the entire trust hierarchy.",
      embedCode: "f7n-50m8l24" // New, highly relevant video on Certificates
    },
    {
      id: 5,
      title: "How Public Key Cryptography and Digital Signatures Explained",
      description: "This video clarifies how asymmetric encryption is used to verify a sender's identity and the role of certificates (PKI).",
      embedCode: "LG6q-G3uU6Y" 
    },
    {
      id: 6,
      title: "TLS Explained Simply: The Handshake in 5 Minutes",
      description: "A great primer on why we need encryption and the basic steps of authentication in the TLS process.",
      embedCode: "cuR05y_2Gxc" 
    },
  ];

  return (
    <div className="inner-page-container video-library-content">
      
      <div className="library-header-wrapper">
        <h2 className="library-header">Video Library to Watch and Understand</h2>
        <p className="library-intro">
          These curated videos offer visual and in-depth explanations of the cryptography concepts used in the TLS Handshake Explorer.
        </p>
      </div>
      
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <h3 className="video-title">
                <Youtube size={20} style={{marginRight: '8px', color: '#FF0000'}} /> 
                {video.title}
            </h3>
            <div className="video-player">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.embedCode}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-description">
                <BookOpen size={14} style={{marginRight: '5px', color: 'var(--color-secondary-blue)'}} /> 
                {video.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;