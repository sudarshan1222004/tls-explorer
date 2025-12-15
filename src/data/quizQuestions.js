// src/data/quizQuestions.js

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary function of the Client Hello message in the TLS handshake?",
    options: [
      "To send the server its encrypted Session Key.",
      "To propose supported TLS versions, cipher suites, and a Client Random.",
      "To transmit the client's public certificate to the server.",
      "To acknowledge the successful decryption of the finished message.",
    ],
    answer: "To propose supported TLS versions, cipher suites, and a Client Random.",
  },
  {
    id: 2,
    question: "Which cryptographic principle does Ephemeral Diffie-Hellman (ECDHE) primarily ensure?",
    options: [
      "Code integrity.",
      "Denial of Service (DoS) protection.",
      "Perfect Forward Secrecy (PFS).",
      "Symmetric encryption speed.",
    ],
    answer: "Perfect Forward Forward Secrecy (PFS).",
  },
  {
    id: 3,
    question: "What is the main benefit of TLS 1.3's 1-RTT handshake over TLS 1.2's 2-RTT handshake?",
    options: [
      "Stronger SHA-256 hashing.",
      "Elimination of digital signatures.",
      "Reduced latency and faster connection establishment.",
      "Mandatory client-side certificate authentication.",
    ],
    answer: "Reduced latency and faster connection establishment.",
  },
  {
    id: 4,
    question: "Which component is authenticated using the server's Private Key during the handshake?",
    options: [
      "The Client Hello message.",
      "The server's digital Certificate.",
      "The shared Session Key.",
      "The Change Cipher Spec message.",
    ],
    answer: "The server's digital Certificate.",
  },
  {
    id: 5,
    question: "What type of encryption is primarily used for the bulk transfer of application data (after the handshake)?",
    options: [
      "Asymmetric encryption.",
      "Symmetric encryption (e.g., AES).",
      "Hashing (e.g., SHA-256).",
      "Elliptic Curve Cryptography (ECC).",
    ],
    answer: "Symmetric encryption (e.g., AES).",
  },
];