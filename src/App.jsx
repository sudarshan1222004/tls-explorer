// src/App.jsx (FINAL NAVIGATION UPDATE WITH QUIZ)
import React, { useState } from 'react';
import './styles/App.css'; 
import './styles/Global.css'; 
import NavBar from './components/NavBar';
import HomeView from './components/HomeView';
import HandshakeDemo from './components/HandshakeDemo';
import Notes from './components/Notes';
import VideoLibrary from './components/VideoLibrary';
import ChatbotEmbed from './components/ChatbotEmbed';
import TLSQuiz from './components/TLSQuiz'; 

// Link definitions
const NAV_LINKS = [
  { name: 'Home', component: HomeView },
  { name: 'Interactive Demo', component: HandshakeDemo },
  { name: 'How It Works (Notes)', component: Notes },
  { name: 'Video Library', component: VideoLibrary },
  { name: 'Ask an Expert (Chatbot)', component: ChatbotEmbed },
  { name: 'Quiz Yourself', component: TLSQuiz } // <-- QUIZ LINK REGISTERED
];

// Helper to determine which component to render
const getComponentByName = (name) => {
  const link = NAV_LINKS.find(link => link.name === name);
  return link ? link.component : HomeView;
};

function App() {
  const [currentView, setCurrentView] = useState('Home');
  const ComponentToRender = getComponentByName(currentView);

  return (
    <div className="app-container">
      <NavBar 
        navLinks={NAV_LINKS} 
        currentView={currentView} 
        setView={setCurrentView} 
      />
      
      <main className="content">
        <ComponentToRender setView={setCurrentView} />
      </main>

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