// src/data/handshakeData.js (FINAL COMPLETE DATA SET)

export const HANDSHAKE_STEPS = [
  {
    id: 0,
    title: "Initial Connection",
    subtitle: "The Client initiates contact via TCP/IP on port 443.",
    clientAction: "Client performs the TCP handshake (SYN, SYN-ACK, ACK) to open a reliable connection channel with the server.",
    serverAction: "Server receives the request and establishes the TCP connection.",
    messagePacket: null,
    direction: 'none',
    color: 'gray' 
  },
  {
    id: 1,
    title: "Client Hello",
    subtitle: "Client sends security parameters to the Server.",
    clientAction: "Client sends its supported TLS versions,list Cipher Suites, and Client Random number.",
    serverAction: "Server receives the hello and analyzes the offered capabilities.",
    messagePacket: {
      from: 'Client',
      to: 'Server',
      content: [
        { label: "TLS Version", value: "TLS 1.3, 1.2, etc." },
        { label: "Cipher Suites", value: "ECDHE-RSA-AES256-GCM-SHA384, etc." },
        { label: "Client Random", value: "32-byte unique number" }
      ],
      name: "CLIENT HELLO"
    },
    direction: 'client-to-server',
    color: 'cyan' 
  },
  {
    id: 2,
    title: "Server Hello & Certificate",
    subtitle: "The Server responds and proves its identity.",
    clientAction: "Client is waiting for the Server's proof and chosen settings.",
    serverAction: "Server selects the best mutual algorithms, sends its Server Random, and provides its Digital Certificate.",
    messagePacket: {
      from: 'Server',
      to: 'Client',
      content: [
        { label: "Selected Cipher", value: "TLS_AES_256_GCM_SHA384" },
        { label: "Server Random", value: "32-byte unique number" },
        { label: "Certificate", value: "Contains Server Public Key and ID." }
      ],
      name: "SERVER HELLO"
    },
    direction: 'server-to-client',
    color: 'green' 
  },
  {
    id: 3,
    title: "Certificate Authentication",
    subtitle: "Client verifies the server's authenticity.",
    clientAction: "Client verifies the Certificate's signature against a trusted CA list, confirming the Server's identity.",
    serverAction: "Server is ready to complete the key exchange.",
    messagePacket: null,
    direction: 'none',
    color: 'yellow' 
  },
  {
    id: 4,
    title: "Key Exchange",
    subtitle: "Client and Server negotiate the shared secret key.",
    clientAction: "Client sends its Ephemeral Diffie-Hellman public key share.",
    serverAction: "Server receives the share, and both parties **independently calculate the Master Secret**.",
    messagePacket: {
      from: 'Client',
      to: 'Server',
      content: [
        { label: "Client Key Share", value: "Ephemeral Diffie-Hellman parameters" }
      ],
      name: "KEY EXCHANGE"
    },
    direction: 'client-to-server',
    color: 'purple' 
  },
  {
    id: 5,
    title: "Handshake Finished",
    subtitle: "Both parties confirm session key usability.",
    clientAction: "Client sends the encrypted 'Finished' message, verifying the Session Key is working.",
    serverAction: "Server sends its own encrypted 'Finished' message.",
    messagePacket: {
      from: 'Both',
      to: 'Both',
      content: [
        { label: "Message", value: "Verification of Master Secret" },
        { label: "Encryption", value: "First message encrypted with Session Key" }
      ],
      name: "FINISHED"
    },
    direction: 'server-to-client',
    color: 'red' 
  },
  {
    id: 6,
    title: "Encrypted Communication",
    subtitle: "Secure symmetric channel is established.",
    clientAction: "Client and server now exchange application data (HTTP) using the fast Session Key.",
    serverAction: "All data is secured (authenticated, encrypted, and integrity checked).",
    messagePacket: null,
    direction: 'data-flow',
    color: 'green' 
  },
];