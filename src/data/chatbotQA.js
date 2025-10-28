// src/data/chatbotQA.js (FINAL KNOWLEDGE BASE)

export const CHATBOT_QA = [
  {
    question: "hi",
    answer: "HI,i am Gopal .feel free to ask any querires regarding TLS handshake"
  },
  {
    question: "What is a TLS handshake?",
    answer: "The TLS handshake is a negotiation process between a client (browser) and a server to establish a secure, encrypted connection. It verifies the server's identity, agrees on encryption methods, and generates a shared secret key (Session Key)."
  },
  {
    question: "What is the difference between TLS 1.2 and TLS 1.3?",
    answer: "TLS 1.3 is faster (1-RTT handshake vs 2-RTT) and more secure. It mandates Perfect Forward Secrecy (PFS) by exclusively using Ephemeral Diffie-Hellman (ECDHE) and removed support for all older, insecure ciphers found in TLS 1.2."
  },
  {
    question: "What is Perfect Forward Secrecy?",
    answer: "PFS ensures that if an attacker compromises the server's main long-term Private Key in the future, they cannot decrypt any data from past sessions. This is because every session uses a unique, temporary (ephemeral) Session Key."
  },
  {
    question: "How does certificate authentication work?",
    answer: "The server sends its digital Certificate. The client verifies the Certificate's signature against a list of trusted Certificate Authorities (CAs). If the signature is valid, the client trusts the server's Public Key and proceeds with the key exchange."
  },
  {
    question: "What is a cipher suite?",
    answer: "A cipher suite is a set of cryptographic algorithms agreed upon during the handshake. It defines the methods for key exchange, bulk encryption (like AES-256), and message integrity (hashing)."
  },
  {
    question: "What is the difference between symmetric and asymmetric encryption?",
    answer: "Asymmetric (Public Key) uses two separate keys for complex tasks like identity verification. Symmetric uses one shared key for both encryption and decryption, making it much faster and efficient for transferring bulk data."
  }
];