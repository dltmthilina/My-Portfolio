"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Hero3D() {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 md:px-12">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [5, 5, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <mesh rotation={[0.4, 0.2, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#4F46E5" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Thilina Disanayaka
        </h1>
        <p className="text-lg md:text-2xl mt-2">FullStack Software Engineer</p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition">
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}
