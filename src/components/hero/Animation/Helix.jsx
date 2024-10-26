import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Helix = () => {
  const helixRef = useRef();

  // Rotate the DNA helix slowly
  useFrame(() => {
    if (helixRef.current) {
      helixRef.current.rotation.x += 0.002; // Spin the helix on X-axis
    }
  });
  const helix = [];
  const numStrands = 30; // Decrease number of segments for a cleaner look
  const curveHeight = 10; // Reduce height to bring components closer
  const radius = 2.5; // Decrease radius to bring opposing dots closer together
  // Create two interwoven strands for the DNA
  for (let i = 0; i < numStrands; i++) {
    // DNA twist angle
    const angle = (i / numStrands) * Math.PI * 2 * 2; // Keep similar twist
    // First Strand Position
    const x1 = Math.cos(angle) * radius;
    const y = (i / numStrands) * curveHeight - curveHeight / 2;
    const z1 = Math.sin(angle) * radius;
    // Second Strand Position (shifted by half-turn)
    const x2 = Math.cos(angle + Math.PI) * radius;
    const z2 = Math.sin(angle + Math.PI) * radius;
    // Nucleotides on each strand
    helix.push(
      <mesh key={`strand1-${i}`} position={[y, x1, z1]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color='#1ABC9C' />
      </mesh>
    );
    helix.push(
      <mesh key={`strand2-${i}`} position={[y, x2, z2]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color='#1ABC9C' />
      </mesh>
    );
    // Direct Line between the spheres
    const positions = [
      [y, x1, z1], // Start point
      [y, x2, z2], // End point
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(
      positions.map((pos) => new THREE.Vector3(...pos))
    );
    // Push the line geometry
    helix.push(
      <line key={`line-${i}`}>
        <primitive object={geometry} attach='geometry' />
        <lineBasicMaterial color='#4CC1A1' linewidth={2} />
      </line>
    );
  }
  // Rotate the helix to 30 degrees around the Z-axis
  return (
    <group ref={helixRef} rotation={[Math.PI / 2, 0, Math.PI / 6]}>
      {helix}
    </group>
  );
};
export default Helix;
