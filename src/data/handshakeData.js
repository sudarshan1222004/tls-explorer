// src/data/handshakeData.js

export const HANDSHAKE_STEPS = [
  {
    id: 0,
    title: "Initial Connection (TCP Handshake)",
    subtitle: "The Client initiates contact via TCP/IP on port 443.",
    clientAction: "Client attempts to establish a connection (SYN).",
    serverAction: "Server acknowledges the connection attempt (SYN-ACK). TCP connection is established.",
    messagePacket: null,
    direction: 'none',
    color: 'gray' 
  },
  {
    id: 1,
    title: "Step 1: Client Hello",
    subtitle: "What are your security preferences?",
    clientAction: "Client compiles its security preferences and a random number.",
    serverAction: "Server receives the request and analyzes the Client's capabilities.",
    messagePacket: {
      from: 'Client',
      to: 'Server',
      content: [
        { label: "TLS Version", value: "TLS 1.3, 1.2, etc." },
        { label: "Cipher Suites", value: "ECDHE-RSA-AES256-GCM-SHA384, etc." },
        { label: "Client Random", value: "[32-byte unique number]" }
      ],
      name: "CLIENT HELLO"
    },
    direction: 'client-to-server',
    color: 'cyan' 
  },
  {
    id: 2,
    title: "Step 2: Server Hello & Certificate",
    subtitle: "The Server responds and proves its identity.",
    clientAction: "Client is waiting for the Server's response and certificate.",
    serverAction: "Server selects the strongest mutually supported algorithms and sends its certificate for authentication.",
    messagePacket: {
      from: 'Server',
      to: 'Client',
      content: [
        { label: "Selected Version", value: "TLS 1.3" },
        { label: "Selected Cipher Suite", value: "ECDHE-RSA-AES256-GCM-SHA384" },
        { label: "Server Random", value: "[32-byte unique number]" },
        { label: "Server Certificate", value: "Contains Public Key and Identity." }
      ],
      name: "SERVER HELLO & Certificate"
    },
    direction: 'server-to-client',
    color: 'green' 
  },
  {
    id: 3,
    title: "Step 3: Authentication & Key Share",
    subtitle: "The client verifies the server and prepares the shared secret.",
    clientAction: "Client verifies the Server's Certificate. It sends its Diffie-Hellman share.",
    serverAction: "Server calculates its Diffie-Hellman share and is ready to generate the Master Secret.",
    messagePacket: {
      from: 'Client',
      to: 'Server',
      content: [
        { label: "Certificate Verify", value: "Checks CA signature and domain match." },
        { label: "Client Key Share", value: "Ephemeral Diffie-Hellman public parameters." }
      ],
      name: "CERTIFICATE & KEY SHARE"
    },
    direction: 'client-to-server',
    color: 'cyan' 
  },
  {
    id: 4,
    title: "Step 4: Master Secret Calculation",
    subtitle: "Both parties independently derive the session key.",
    clientAction: "Client uses the Client Random, Server Random, and Key Shares to independently calculate the **Master Secret**.",
    serverAction: "Server performs the identical calculation using the same three values to generate the identical **Master Secret**.",
    messagePacket: null,
    direction: 'none',
    color: 'yellow' 
  },
  {
    id: 5,
    title: "Step 5: Change Cipher Spec & Finished",
    subtitle: "Confirming readiness to switch to symmetric encryption.",
    clientAction: "Client confirms successful key generation and sends an encrypted 'Finished' message.",
    serverAction: "Server receives and decrypts the Client's 'Finished' message, then sends its own encrypted 'Finished' message.",
    messagePacket: {
      from: 'Client',
      to: 'Server',
      content: [
        { label: "Change Cipher Spec", value: "Signaling switch to Symmetric Encryption." },
        { label: "Finished", value: "Verification message encrypted with the new Session Key." }
      ],
      name: "FINISHED"
    },
    direction: 'client-to-server',
    color: 'purple' 
  },
  {
    id: 6,
    title: "Step 6: Encrypted Application Data",
    subtitle: "The secure channel is established.",
    clientAction: "Client can now send HTTP requests encrypted with the fast Symmetric Session Key.",
    serverAction: "Server decrypts the request and sends the response encrypted with the same Session Key.",
    messagePacket: {
      from: 'Both',
      to: 'Both',
      content: [
        { label: "Encryption Type", value: "Symmetric (AES-256 GCM)" },
        { label: "Speed", value: "Fast and efficient for bulk data transfer." }
      ],
      name: "ENCRYPTED DATA"
    },
    direction: 'data-flow',
    color: 'red' 
  },
];