"use client";

import Hero3D from "@/sections/Hero3D";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeToggle />
      <Hero3D />
    </main>
  );
}
