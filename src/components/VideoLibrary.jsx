// src/components/VideoLibrary.jsx (REPLACE ENTIRE CONTENT)
import React from 'react';
import '../styles/VideoLibrary.css'; // Assume you create this file

const VideoLibrary = () => {
  const videos = [
    {
      id: 1,
      title: "TLS Explained Simply: The Handshake in 5 Minutes",
      description: "A great primer on why we need encryption and the basic steps of authentication.",
      embedCode: "cuR05y_2Gxc" // F5 Networks - Breaking Down the TLS Handshake
    },
    {
      id: 2,
      title: "TLS 1.3: The Evolution of Speed and Security",
      description: "Detailed comparison showing why TLS 1.3 completes the handshake in just 1-RTT.",
      embedCode: "JA0vaIb4158" // Practical Networking - TLS 1.3 Handshake CHANGES
    },
    {
      id: 3,
      title: "Deep Dive: Perfect Forward Secrecy & ECDHE",
      description: "An essential look at how Diffie-Hellman ensures past communications remain secure, even if private keys are compromised.",
      embedCode: "sTqUoTEiaCQ" // Explained Simply - Key Exchange
    },
    {
        id: 4,
        title: "Wireshark Walkthrough: Capturing the Handshake",
        description: "A technical deep dive showing the actual packets (Client Hello, Server Hello) in a network trace.",
        embedCode: "25_ftpJ-2ME" // David Bombal - Wireshark Decryption
    },
  ];

  return (
    <div className="video-library-container">
      <h2>Video Library to Watch and Understand</h2>
      <p className="library-intro">
        These curated videos offer visual and in-depth explanations of the cryptography concepts used in the TLS Handshake Explorer.
      </p>
      
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <h3 className="video-title">{video.title}</h3>
            <div className="video-player">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.embedCode}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;