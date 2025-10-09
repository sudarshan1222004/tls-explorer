// src/App.jsx (REPLACED ENTIRE CONTENT)
import React, { useState } from 'react';
import HomeView from './components/HomeView'; 
import NavBar from './components/NavBar';
import HandshakeDemo from './components/HandshakeDemo';
import Notes from './components/Notes'; 
import ChatbotEmbed from './components/ChatbotEmbed';
import VideoLibrary from './components/VideoLibrary';

import './styles/Global.css'; 
import './index.css'; // Ensure the index CSS is being referenced

function App() {
  const [currentView, setCurrentView] = useState('Home'); 

  const renderView = () => {
    switch (currentView) {
      case 'Interactive Demo':
        return <HandshakeDemo />;
      case 'How It Works (Notes)':
        return <Notes />;
      case 'Video Library':
        return <VideoLibrary />;
      case 'Ask an Expert (Chatbot)':
        return <ChatbotEmbed />;
      case 'Home':
      default:
        return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <div className="tls-app">
      {/* 1. FIXED NAVBAR (Outside main content flow) */}
      <NavBar currentView={currentView} setView={setCurrentView} /> 
      
      {/* 2. Main Content Wrapper (Handles the padding for the fixed navbar) */}
      <div className="main-content-area"> 
        <main>
          {renderView()}
        </main>
      </div>
      
     <footer>
        <p>
          © 2025 Cryptography Project Demo | Designed and Developed by 
          <a 
            href="https://sudarshanmadival.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--color-primary-cyan)', 
              marginLeft: '5px', 
              textDecoration: 'none' 
            }}
          >
            Sudarshan Madival (Portfolio)
          </a>
        </p>
      </footer>
    </div>
  );
}


export default App;