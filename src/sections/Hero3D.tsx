"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedCube } from "@/components/AnimatedCube";

const bounds = { x: 6, y: 4, z: 6 };

export default function Hero3D() {
  return (
    <section
      id="home"
      className="relative bg-white dark:bg-gray-900 px-6 md:px-20 py-10 md:py-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10  relative z-10">
        {/* Left: Text Content */}
        <div className="m-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Thilina Disanayaka
          </h1>
          <p className="text-lg md:text-xl mt-3 text-gray-700 dark:text-gray-300">
            Fullstack Software Engineer
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition font-medium">
            Explore Portfolio
          </button> */}
        </div>

        {/* Right: 3D Canvas */}
        <div className="h-80 md:h-[400px]">
          <Canvas camera={{ position: [10, 0, 0] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[0, 5, 5]} intensity={1.2} />
            <AnimatedCube
              textureUrls={"/textures/js.png"}
              initialPosition={[0, 0, 0]}
              bounds={bounds}
            />
            <AnimatedCube
              textureUrls={"/textures/ts.svg"}
              initialPosition={[0, 0, 0]}
              bounds={bounds}
            />
            <AnimatedCube
              textureUrls={"/textures/react.png"}
              initialPosition={[0, 0, 0]}
              bounds={bounds}
            />
            <AnimatedCube
              textureUrls={"/textures/node.svg"}
              initialPosition={[0, 0, 0]}
              bounds={bounds}
            />
            <AnimatedCube
              textureUrls={"/textures/tailwind.png"}
              initialPosition={[0, 0, 0]}
              bounds={bounds}
            />

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
