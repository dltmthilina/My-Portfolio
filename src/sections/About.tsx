"use client";

import { motion } from "framer-motion";

const skills = [
  "ReactJS",
  "TypeScript",
  "TailwindCSS",
  "NodeJS",
  "MongoDB",
  "Redux",
  "ExpressJS",
  "Docker",
  "Jest",
  "AWS",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white  px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-68 h-68 rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
            {/* Placeholder Avatar */}
             <img
      src="/me.jpeg"
      alt="Thilina"
      className="w-full h-full object-cover object-center scale-1"
      
    />
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I’m a Software Engineer with 2+ years of experience building web
            apps using React, TypeScript, NodeJS, and modern UI frameworks. I
            thrive in collaborative environments and focus on clean, scalable
            code and seamless user experiences.
          </p>

          <h3 className="text-xl font-semibold mb-2">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white rounded-full text-sm font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
