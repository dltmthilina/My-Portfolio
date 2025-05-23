"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "CeylonTravelLife",
    description:
      "A location-aware travel web app to explore Sri Lanka. Built using MERN stack with JWT auth, Docker, and CI/CD pipelines.",
    tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Docker", "Jenkins"],
    repo: "https://github.com/dltmthilina",
  },
  {
    title: "Student Management System",
    description:
      "A student portal with secure login, file upload, test-driven REST APIs, and PWA support.",
    tech: ["ReactJS", "NodeJS", "JWT", "MongoDB", "Jest", "Docker"],
    repo: "https://github.com/dltmthilina",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 hover:shadow-indigo-500/40 transition-all border dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-white px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                >
                  View on GitHub →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
