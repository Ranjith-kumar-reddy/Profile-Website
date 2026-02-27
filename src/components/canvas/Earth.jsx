import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Stars,
  Float,
  Trail,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

// Glowing ring around Earth
const GlowRing = () => {
  const ringRef = useRef();
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.003;
      ringRef.current.rotation.z += 0.001;
    }
  });
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[3.8, 0.08, 16, 100]} />
      <meshStandardMaterial
        color="#4fc3f7"
        emissive="#4fc3f7"
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Orbiting satellite dot
const Satellite = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.8) * 4.5;
    ref.current.position.y = Math.cos(t * 0.8) * 1.5;
    ref.current.position.z = Math.cos(t * 0.8) * 4.5;
  });
  return (
    <Trail width={0.05} length={6} color="#ffffff" attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>
    </Trail>
  );
};

// Earth model
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <primitive
        ref={earthRef}
        object={earth.scene}
        scale={3}
        position-y={0}
        rotation-y={0}
      />
    </Float>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Deep space background stars */}
      <Stars
        radius={120}
        depth={60}
        count={8000}
        factor={5}
        saturation={0.5}
        fade
        speed={0.5}
      />

      {/* Sparkles floating around */}
      <Sparkles
        count={80}
        scale={10}
        size={2}
        speed={0.4}
        color="#88ccff"
      />

      {/* Lighting setup */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={2}
        color="#ffffff"
        castShadow
      />
      {/* Blue atmosphere glow */}
      <pointLight position={[-6, 4, -4]} intensity={1.5} color="#1565c0" />
      {/* Warm sun glow */}
      <pointLight position={[8, 2, 4]} intensity={1} color="#ff7043" />
      {/* Cool rim light */}
      <pointLight position={[0, -5, 0]} intensity={0.5} color="#26c6da" />

      {/* Fog for space depth */}
      <fog attach="fog" args={["#050510", 60, 200]} />

      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />

        {/* Main Earth */}
        <Earth />

        {/* Glowing ring */}
        <GlowRing />

        {/* Orbiting satellite with trail */}
        <Satellite />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
