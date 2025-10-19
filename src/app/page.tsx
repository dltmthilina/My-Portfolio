"use client";

import Hero3D from "@/sections/Hero3D";
import ProjectsSection from "@/sections/Projects";
import About from "@/sections/About";
import ExperienceSection from "@/sections/Experience";
import ContactSection from "@/sections/Contact";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import { Contact } from "lucide-react";

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
