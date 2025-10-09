// src/App.jsx 
import React, { useState } from 'react';
import HandshakeDemo from './components/HandshakeDemo';
import NavBar from './components/NavBar';
import HomeView from './components/HomeView'; 
import Notes from './components/Notes'; 
import ChatbotEmbed from './components/ChatbotEmbed';
import VideoLibrary from './components/VideoLibrary';

import './styles/Global.css'; 

function App() {
  const [currentView, setCurrentView] = useState('Home'); // Start on the Home Page

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
      <NavBar currentView={currentView} setView={setCurrentView} />
      <main className="main-content-area">
        {renderView()}
      </main>
      <footer>
        <p>© 2025 Cryptography Project Demo - TLS Handshake Explorer</p>
      </footer>
    </div>
  );
}

export default App;