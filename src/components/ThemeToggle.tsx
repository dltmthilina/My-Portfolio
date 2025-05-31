"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const handleToggle = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="absolute top-6 left-6 z-40 bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex shadow-lg">
      <button
        onClick={() => handleToggle("light")}
        className={`px-4 py-1 rounded-full text-sm font-medium transition ${
          theme === "light"
            ? "bg-white text-indigo-600 dark:bg-gray-100"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => handleToggle("dark")}
        className={`px-4 py-1 rounded-full text-sm font-medium transition ${
          theme === "dark"
            ? "bg-gray-900 text-white dark:bg-gray-700"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Dark
      </button>
    </div>
  );
}
