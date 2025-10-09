// src/data/chatbotQA.js

export const CHATBOT_QA = [
  {
    question: "What is the primary goal of the TLS Handshake?",
    answer: "The primary goal is to securely negotiate and establish a temporary, shared **Symmetric Session Key** between the client and the server. This key is then used to encrypt all the bulk data transferred during the session (e.g., website content)."
  },
  {
    question: "What is the 'Client Hello' message?",
    answer: "The 'Client Hello' is the first message the client sends. It tells the server the client's supported **TLS versions** (e.g., 1.3, 1.2), a list of preferred **Cipher Suites**, and a **Client Random** number, which is used later to generate the session key."
  },
  {
    question: "What is a Cipher Suite?",
    answer: "A Cipher Suite is a set of algorithms used for a secure connection. It defines the algorithms for: 1) **Key Exchange** (e.g., ECDHE), 2) **Authentication** (e.g., RSA or ECDSA), 3) **Symmetric Encryption** (e.g., AES-256), and 4) **Hashing/Integrity** (e.g., SHA384)."
  },
  {
    question: "How does the server prove its identity?",
    answer: "The server proves its identity by sending its **Digital Certificate** (SSL/TLS Certificate). The client verifies this certificate by checking if it is signed by a trusted **Certificate Authority (CA)** and that the domain name matches the certificate's details."
  },
  {
    question: "What is Perfect Forward Secrecy (PFS)?",
    answer: "PFS is a security property that ensures that even if the server's long-term **Private Key** is compromised in the future, an attacker cannot decrypt data from *past* TLS sessions. This is achieved by using **Ephemeral** (temporary) **Diffie-Hellman** keys for every new session."
  },
  {
    question: "Why is TLS 1.3 faster than 1.2?",
    answer: "TLS 1.3 is faster primarily because it reduces the handshake time from **two Round Trip Times (2-RTT)** to just **one RTT (1-RTT)**. It achieves this by sending key exchange parameters in the initial 'Client Hello' message, allowing the server to calculate the secret immediately."
  },
  {
    question: "What is the purpose of the 'Finished' message?",
    answer: "The 'Finished' message is the final message of the handshake, sent by both parties. It is the first message that is **encrypted** using the newly derived **Session Key**. It acts as a final integrity check to prove that both parties correctly calculated the identical session key and completed the handshake successfully."
  }
];