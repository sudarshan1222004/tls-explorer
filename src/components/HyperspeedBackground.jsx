// src/components/HyperspeedBackground.jsx (PARTICLES ALTERNATIVE)

import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Environment } from '@react-three/drei';

const ParticlesBackground = () => {
  // Simple rotation effect for the camera to simulate movement
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.05) * 5;
    state.camera.position.z = 15 + Math.cos(state.clock.elapsedTime * 0.1) * 3;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Dark Environment Setup */}
      <color attach="background" args={['#070617']} /> 
      <Environment preset="night" />

      {/* Sparkles 1: Cyan/Blue accent */}
      <Sparkles
        count={500}
        speed={0.1}
        opacity={1}
        size={1}
        scale={[20, 20, 20]}
        color={"#00BFFF"} 
      />
      {/* Sparkles 2: Purple accent */}
      <Sparkles
        count={300}
        speed={0.2}
        opacity={0.8}
        size={1}
        scale={[20, 20, 20]}
        color={"#D856BF"} 
      />
    </>
  );
};

const HyperspeedBackground = () => (
    // The Canvas renders the 3D scene
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }} className="hyperspeed-canvas">
        <ParticlesBackground />
    </Canvas>
);

export default HyperspeedBackground;