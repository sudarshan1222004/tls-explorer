// src/components/ChatbotEmbed.jsx (FINAL AESTHETIC & KEYBOARD FUNCTIONALITY)
import React, { useState, useEffect, useRef } from 'react';
import { CHATBOT_QA } from '../data/chatbotQA';
import '../styles/ChatbotEmbed.css';
import '../styles/Global.css';
import { MessageCircle, Zap, Send, CornerDownRight, Plus } from 'lucide-react';

// Extended Questions List
const EXTENDED_QA = [
    ...CHATBOT_QA,
    { question: "What are the common causes of TLS handshake failure?", answer: "Failures are typically caused by expired or invalid SSL/TLS Certificates, an unsupported TLS version chosen by the client, or incompatible cipher suites (no match between client and server)." },
    { question: "What is an Ephemeral Key?", answer: "An ephemeral key is a temporary key used only once for a specific session. In TLS 1.3, Ephemeral Diffie-Hellman (ECDHE) keys ensure Perfect Forward Secrecy." },
    { question: "What is 1-RTT?", answer: "1-RTT stands for One Round Trip Time. In TLS 1.3, the handshake is completed in a single back-and-forth communication cycle, drastically speeding up connection establishment compared to the 2-RTT required by TLS 1.2." }
];

const BotResponses = {
    DEFAULT: "I'm the Handshake Bot, online and ready to help! Click a suggested question or type a common query below.",
    TYPED: "I see you typed a question! Since I'm currently running in static demo mode, please select one of the suggested questions on the right for a detailed, pre-written answer.",
    ERROR: "Sorry, I didn't recognize that command. Please ask about TLS, Ciphers, or Certificates."
};


const ChatbotEmbed = () => {
  const chatHistoryRef = useRef(null);
  const [inputText, setInputText] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 0,
      text: BotResponses.DEFAULT,
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  // Effect to scroll to the bottom whenever history updates
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const addMessage = (text, sender) => {
    const newMessage = {
        id: chatHistory.length + 1,
        text: text,
        sender: sender,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    setChatHistory((prev) => [...prev, newMessage]);
  };
  
  const handleQuestionClick = (qa) => {
    // Clear input box
    setInputText('');
    
    // 1. Add user question
    addMessage(qa.question, 'user');

    // 2. Add bot's answer after a short delay
    setTimeout(() => {
        addMessage(qa.answer, 'bot');
    }, 500);

    setSelectedAnswer(qa.question);
  };

  const handleSend = () => {
    if (inputText.trim() === '') return;
    
    // 1. Add user's typed message
    addMessage(inputText, 'user');
    
    // 2. Bot replies with a static message explaining demo mode
    setTimeout(() => {
        addMessage(BotResponses.TYPED, 'bot');
    }, 500);

    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
  };


  return (
    <div className="inner-page-container chatbot-container">
      <div className="main-header-block">
        <h1 className="chatbot-main-title">
          <MessageCircle size={36} style={{marginRight: '15px'}}/> Ask an Expert
        </h1>
        <p className="chatbot-subtitle">
          Get instant answers about TLS handshakes, certificates, and cryptography
        </p>
      </div>

      <div className="chat-main-grid">
        
        {/* === LEFT COLUMN: CHAT WINDOW === */}
        <div className="chat-window-panel">
          <div className="chat-header">
            <h3 className="chat-bot-status">Handshake Bot</h3>
            <p className="chat-bot-online">Online - Always ready to help</p>
          </div>
          
          <div className="chat-history" ref={chatHistoryRef}>
            {chatHistory.map((message) => (
              <div 
                key={message.id} 
                className={`message-bubble ${message.sender}`}
              >
                <div className="message-text">{message.text}</div>
                <div className="message-time">{message.time}</div>
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input 
                type="text" 
                placeholder="Type your question about TLS..." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}><Send size={20} /></button>
          </div>
        </div>

        {/* === RIGHT COLUMN: SUGGESTED QUESTIONS === */}
        <div className="suggested-questions-panel">
          <h3 className="suggested-header">
            <Zap size={20} style={{marginRight: '10px'}}/> Suggested Questions
          </h3>
          <div className="suggested-list">
            {EXTENDED_QA.map((qa) => (
              <button
                key={qa.question}
                onClick={() => handleQuestionClick(qa)}
                className={`question-button ${selectedAnswer === qa.question ? 'active' : ''}`}
              >
                <Plus size={16} style={{marginRight: '8px'}}/> {qa.question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotEmbed;