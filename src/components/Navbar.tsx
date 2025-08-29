"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { motion, useScroll } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="h-16 md:h-20 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <Link
            href="/"
            className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-xl font-bold text-indigo-600 dark:text-indigo-400 mr-3"
          >
            TD
          </Link>
          <span className=" text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-300 bg-clip-text text-transparent">
            Thilina Disanayaka
          </span>
        </motion.div>

        {/* Desktop Links */}
        <nav className="hidden sm:flex gap-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
            >
              <Link
                key={link.name}
                href={link.path}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                  pathname === link.path
                    ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className=" md:flex hidden items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <a
              href="https://github.com/dltmthilina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <a
              href="https://linkedin.com/in/thilinadisanayaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <a
              href="https://medium.com/@dltmthilinamaduranga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <BsMedium className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 1.6,
            duration: 0.8,
          }}
          className="md:flex hidden ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-indigo-600 font-bold hover:from-violet-700 hover:to-purple-700  hover:text-white transition-all duration-500"
        >
          <Link href="#contact">Hire Me</Link>
        </motion.div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? "auto" : 0 }}
          transition={{
            duration: 0.5,
          }}
          className="sm:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={clsx(
                  "w-full py-2 px-2 text-sm font-medium rounded-md transition",
                  pathname === link.path
                    ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 translation-colors duration-300"
              >
                <FiGithub className=" w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 translation-colors duration-300"
              >
                <FiLinkedin className=" w-5 h-5" />
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 font-bold"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      )}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "oklch(58.5% 0.233 277.117)",
        }}
      ></motion.div>
    </header>
  );
}
