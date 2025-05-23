"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="absolute top-6 right-6 z-30">
      <button
        onClick={toggleTheme}
        className="relative flex items-center w-14 h-8 rounded-full px-1 bg-gray-200 dark:bg-gray-700 shadow-inner transition-colors duration-300"
      >
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full shadow-md"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ left: theme === "dark" ? "calc(100% - 28px)" : "4px" }}
        />
        <Sun className="w-4 h-4 text-yellow-500 z-10 ml-1" />
        <Moon className="w-4 h-4 text-blue-400 z-10 ml-auto mr-1" />
      </button>
    </div>
  );
}
