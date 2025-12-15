// src/components/TLSQuiz.jsx
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions'; // <-- CRITICAL DATA IMPORT
import '../styles/TLSQuiz.css';
import '../styles/Global.css';
import { HelpCircle, CheckCircle, XCircle, RefreshCw, Trophy, ArrowRight } from 'lucide-react'; // <-- CRITICAL ICON IMPORTS

const TLSQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    // Record the user's answer
    const newAnswers = { ...userAnswers, [currentQuestion.id]: option };
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const totalQuestions = QUIZ_QUESTIONS.length;
  const progressPercent = ((currentQuestionIndex + (showResults ? 1 : 0)) / totalQuestions) * 100;

  // --- RENDERING ---
  if (showResults) {
    return (
      <div className="inner-page-container quiz-container results-view">
        <h1 className="quiz-header">
          <Trophy size={40} style={{marginRight: '15px', color: 'var(--color-primary-cyan)'}}/> Quiz Results
        </h1>
        <div className="score-summary">
          Your final score is: 
          <span className="final-score">{score} / {totalQuestions}</span>
        </div>
        
        <div className="result-feedback">
          {score === totalQuestions && <h2>Outstanding! You are a TLS Expert!</h2>}
          {score >= totalQuestions / 2 && score < totalQuestions && <h2>Great Job! You have a solid understanding of TLS.</h2>}
          {score < totalQuestions / 2 && <h2>Keep Practicing! Review the notes and demo for better results.</h2>}
        </div>

        <button onClick={handleRestart} className="restart-button">
          <RefreshCw size={20} style={{marginRight: '10px'}}/> Try Again
        </button>
        
        <div className="review-section">
          <h2>Review Answers</h2>
          {QUIZ_QUESTIONS.map((q, index) => (
            <div key={q.id} className="review-question-card">
              <p className="review-question-text">
                <span className="review-index">{index + 1}.</span> {q.question}
              </p>
              <div className="review-answer-info">
                <p className={`review-user-answer ${userAnswers[q.id] === q.answer ? 'correct' : 'incorrect'}`}>
                  Your Answer: {userAnswers[q.id] || 'Not Answered'}
                </p>
                {userAnswers[q.id] !== q.answer && (
                  <p className="review-correct-answer">
                    Correct Answer: {q.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- QUIZ IN PROGRESS ---
  return (
    <div className="inner-page-container quiz-container">
      <h1 className="quiz-header">
        <HelpCircle size={40} style={{marginRight: '15px', color: 'var(--color-primary-cyan)'}}/> TLS Handshake Quiz
      </h1>
      <p className="quiz-intro">Test your knowledge on cryptographic handshakes, cipher suites, and security principles.</p>
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
        <span className="progress-text">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
      </div>

      <div className="question-card">
        <h2 className="question-text">{currentQuestion.question}</h2>
        <div className="options-list">
          {currentQuestion.options.map((option, index) => {
            const isSelected = userAnswers[currentQuestion.id] === option;
            return (
              <button
                key={index}
                className={`option-button ${isSelected ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={showResults}
              >
                {isSelected ? <CheckCircle size={18} style={{marginRight: '8px'}} /> : <HelpCircle size={18} style={{marginRight: '8px'}}/>}
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="quiz-navigation">
        <button 
          onClick={handleNext} 
          className="next-button"
          disabled={!userAnswers[currentQuestion.id]}
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish & View Results'} 
          <ArrowRight size={20} style={{marginLeft: '10px'}}/>
        </button>
      </div>
    </div>
  );
};

export default TLSQuiz;