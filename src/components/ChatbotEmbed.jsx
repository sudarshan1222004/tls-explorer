// src/components/ChatbotEmbed.jsx
import React, { useState } from 'react';
import { CHATBOT_QA } from '../data/chatbotQA';
import '../styles/ChatbotEmbed.css'; // We will create this CSS file next

const ChatbotEmbed = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Set the first question as default/active when component loads
  React.useEffect(() => {
    if (CHATBOT_QA.length > 0 && selectedQuestion === null) {
      setSelectedQuestion(CHATBOT_QA[0]);
    }
  }, [selectedQuestion]);

  return (
    <div className="chatbot-container">
      <h2>Ask an Expert: The Handshake Bot 🤖</h2>
      <p className="chatbot-intro">
        Select a question below to see a detailed response from our expert system.
      </p>

      <div className="chat-interface">
        {/* Left Panel: Suggested Questions / Chat History */}
        <div className="question-panel">
          <h3>Popular TLS Questions</h3>
          <ul className="question-list">
            {CHATBOT_QA.map((qa) => (
              <li 
                key={qa.question}
                onClick={() => setSelectedQuestion(qa)}
                className={selectedQuestion && selectedQuestion.question === qa.question ? 'active' : ''}
              >
                {qa.question}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel: Answer / Chat Output */}
        <div className="answer-panel">
          <div className="chat-bubble bot-message">
            <span className="bot-name">Handshake Bot:</span>
            {selectedQuestion 
              ? selectedQuestion.answer 
              : "Hello! Select a question on the left, or imagine typing your own doubt here to get an expert answer!"
            }
          </div>
          
          <div className="chat-input-placeholder">
            <input type="text" placeholder="Type your question about TLS..." disabled />
            <button disabled>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotEmbed;