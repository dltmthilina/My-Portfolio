"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Thilina.dev
        </Link>

        {/* Links */}
        <div className="flex space-x-4 text-sm md:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={clsx(
                "px-3 py-2 rounded-md transition-colors font-medium",
                pathname === link.path
                  ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
