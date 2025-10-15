"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedCube } from "@/components/AnimatedCube";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const bounds = { x: 6, y: 4, z: 6 };

function TypingAnimation({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Speed of typing (100ms per character)

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="text-xl font-semibold md:text-2xl text-white">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block ml-1 w-1 h-6 bg-gradient-to-b from-[#9d55f0] to-[#6665f1]"
      ></motion.span>
    </span>
  );
}

export default function Hero3D() {
  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-br from-[#12002f] via-[#1a0a3c] to-[#0b0510] px-6 py-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 animate-glow-move"
        aria-hidden="true"
      >
        <div className="w-[100px] h-[600px] rounded-full bg-gradient-to-tr from-[#9d55f0] via-[#6665f1] to-[#00e0ff] opacity-70 blur-3xl" />
      </div>
      <div className="mx-auto grid md:grid-cols-2 gap-10  relative z-10">
        {/* Left: Text Content */}
        <div className="flex flex-col ml-12  mt-8 w-full">
          <div className="flex flex-col ">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-white ">
              Fullstack
            </p>
            <span className=" text-3xl md:text-3xl lg:text-4xl font-bold mt-3 bg-gradient-to-r to-[#6665f1] from-[#9d55f0]  bg-clip-text text-transparent">
              Software Engineer
            </span>
            <div className="mt-4">
              <TypingAnimation text="Tech Enthusiast" />
            </div>
          </div>
          <div className="flex flex-wrap gap-3  mt-4">
            {["ReactJS", "TypeScript", "NodeJS", "MySQL", "MongoDB"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-[#9d55f0]/30 to-[#6665f1]/30 text-white border border-white/20 shadow-sm hover:from-[#9d55f0]/50 hover:to-[#6665f1]/50 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/dltmthilina"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white  transition-colors text-2xl"
              aria-label="GitHub"
            >
              <span
                className="absolute -inset-1 rounded-full blur-md opacity-70 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, #9d55f0 0%, #6665f1 100%)",
                  zIndex: 0,
                }}
              ></span>
              <span className="relative z-10">
                <FaGithub className="text-white" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/thilinadisanayaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
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
