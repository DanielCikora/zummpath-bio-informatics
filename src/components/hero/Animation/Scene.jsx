import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Helix from "./Helix"; // Component you'll create for the DNA helix

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, -25, 15], // Adjust camera position for diagonal view
        fov: 30, // Adjust FOV to make the helix fit better
      }}
      className='hero-canvas absolute w-full h-full top-0 left-0 z-10'
    >
      {/* OrbitControls can be customized or removed */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />

      {/* Lighting for the DNA Helix */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* DNA Helix */}
      <Helix />
    </Canvas>
  );
};

export default Scene;