"use client";

import Hero3D from "@/sections/Hero3D";
import About from "@/sections/About";
import ContactSection from "@/sections/Contact";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";

export default function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const experienceRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  return (
    <div>
      <Navbar
        refs={{
          Home: homeRef,
          About: aboutRef,
          Projects: projectsRef,
          Experience: experienceRef,
          Contact: contactRef,
        }}
      />
      <div
        className="pointer-events-none h-full absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 animate-glow-move"
        aria-hidden="true"
      >
        <div className="w-[100px] h-screen rounded-full bg-gradient-to-tr from-[#9d55f0] via-[#6665f1] to-[#00e0ff] opacity-70 blur-3xl" />
      </div>
      <div className="bg-gradient-to-br from-[#12002f] via-[#1a0a3c] to-[#0b0510]">
        <div ref={homeRef}>
          <Hero3D />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
