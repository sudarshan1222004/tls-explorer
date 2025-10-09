// src/components/VideoLibrary.jsx
import React from 'react';

const VideoLibrary = () => {
  return (
    <div style={{padding: '20px'}}>
      <h2>Video Library to Watch and Understand</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
        <div style={{backgroundColor: '#1e293b', padding: '10px', borderRadius: '8px', border: '1px solid #22d3ee'}}>
          <h4>Video 1: TLS Explained Simply</h4>
          <div style={{height: '150px', backgroundColor: '#0f172a'}}> [YouTube Embed Placeholder] </div>
        </div>
        <div style={{backgroundColor: '#1e293b', padding: '10px', borderRadius: '8px', border: '1px solid #22d3ee'}}>
          <h4>Video 2: Deep Dive with Wireshark</h4>
          <div style={{height: '150px', backgroundColor: '#0f172a'}}> [YouTube Embed Placeholder] </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;