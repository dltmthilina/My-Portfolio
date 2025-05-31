"use client";

import Hero3D from "@/sections/Hero3D";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectsSection from "@/sections/Projects";
import About from "@/sections/About";
import ExperienceSection from "@/sections/Experience";
import ContactSection from "@/sections/Contact";

export default function HomePage() {
  return (
    <main className="">
      <Hero3D />
      <About />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
