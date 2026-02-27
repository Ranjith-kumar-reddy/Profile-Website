import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled, { keyframes } from "styled-components";

// Wrapper with deep space gradient background
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    #0a0a2e 0%,
    #050510 40%,
    #000000 100%
  );
  animation: ${fadeIn} 2s ease-in;
`;

// Nebula glow overlay
const NebulaOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(72, 0, 120, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 80, 160, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 60% 80%, rgba(0, 120, 100, 0.1) 0%, transparent 50%);
`;

// Layer 1 - small dense white stars
const StarLayer1 = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(7000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
};

// Layer 2 - medium blue/purple stars
const StarLayer2 = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, Math.PI / 3, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#88aaff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

// Layer 3 - large glowing pink/purple stars
const StarLayer3 = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1500), { radius: 1.0 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.z += delta / 20;
  });

  return (
    <group rotation={[Math.PI / 6, 0, Math.PI / 5]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

// Layer 4 - slow moving golden stars
const StarLayer4 = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 0.8 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 40;
    ref.current.rotation.z -= delta / 35;
  });

  return (
    <group rotation={[Math.PI / 3, Math.PI / 4, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffd700"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      {/* Nebula color overlays */}
      <NebulaOverlay />

      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {/* 4 layers of stars - different colors, sizes, speeds */}
          <StarLayer1 />
          <StarLayer2 />
          <StarLayer3 />
          <StarLayer4 />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
