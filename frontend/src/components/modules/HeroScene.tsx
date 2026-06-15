import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Stars,
  Torus,
  Icosahedron,
} from "@react-three/drei";
import * as THREE from "three";

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.35;
    const y = state.pointer.y * 0.25;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.05
    );
  });
  return <group ref={group}>{children}</group>;
}

function SpinningKnot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.35}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color="#6d5efc"
        emissive="#3b1d8f"
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.9}
        distort={0.32}
        speed={1.6}
      />
    </mesh>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#a78bfa" />
      <pointLight position={[-5, -3, 2]} intensity={2.2} color="#22d3ee" />
      <pointLight position={[4, -4, 4]} intensity={1.5} color="#f472b6" />

      <Stars radius={60} depth={40} count={1800} factor={3} saturation={0} fade speed={1} />

      <ParallaxRig>
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
          <SpinningKnot />
        </Float>

        <Float speed={2} rotationIntensity={1} floatIntensity={1.6}>
          <Icosahedron args={[0.5, 0]} position={[2.6, 1.3, -1]}>
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#0e7490"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </Icosahedron>
        </Float>

        <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.4}>
          <Torus args={[0.45, 0.16, 24, 80]} position={[-2.7, -1.2, -1]}>
            <meshStandardMaterial
              color="#f472b6"
              emissive="#9d174d"
              emissiveIntensity={0.35}
              roughness={0.25}
              metalness={0.7}
            />
          </Torus>
        </Float>

        <Float speed={2.4} rotationIntensity={1.2} floatIntensity={2}>
          <Icosahedron args={[0.28, 0]} position={[-2.2, 1.6, 0.5]}>
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#5b21b6"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </Icosahedron>
        </Float>
      </ParallaxRig>
    </Canvas>
  );
}

export default HeroScene;
