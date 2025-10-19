"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion, useScroll } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
  { name: "Experience" },
  { name: "Contact" },
];

type NavbarProps = {
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
};

export default function Navbar({ refs }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  useActiveSection(refs, setActiveSection);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-tr from-[#12002f] via-[#1a0a3c] to-[#0b0510] overflow-x-hidden">
      <div className="flex justify-between items-center px-4 h-16 md:px-10">
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
          <span className=" text-xl font-bold bg-gradient-to-r from-[#9d55f0] to-[#6665f1] bg-clip-text text-transparent">
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
              <button
                key={link.name}
                onClick={() => {
                  refs[link.name]?.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMenuOpen(false);
                  setActiveSection(link.name);
                }}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                  activeSection === link.name
                    ? "bg-gradient-to-r from-[#9d55f0] to-[#6665f1] text-transparent bg-clip-text font-bold"
                    : "text-white "
                )}
              >
                {link.name}
              </button>
            </motion.div>
          ))}
        </nav>

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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:hidden bg-gradient-to-br from-[#12002f] via-[#1a0a3c] to-[#0b0510] shadow-lg px-4 py-5 space-y-5"
          >
            <nav className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    refs[link.name]?.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMenuOpen(false);
                  }}
                  className={clsx(
                    "w-full py-2  text-sm font-medium rounded-md transition",
                    activeSection === link.name
                      ? "bg-gradient-to-r from-[#9d55f0] to-[#6665f1] "
                      : "bg-transparent "
                  )}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
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
          backgroundColor: "#7623d5ff",
        }}
      ></motion.div>
    </header>
  );
}
