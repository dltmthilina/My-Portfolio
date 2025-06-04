"use client";

import { FaCalendarAlt } from "react-icons/fa";

const projects = [
  {
    title: "CeylonTravelLife",
    date: "Jan 2025",
    description:
      "A location-aware travel app with secure login and CI/CD deployment.",
  },
  {
    title: "Student Management System",
    date: "Feb 2024",
    description:
      "A secure portal with REST APIs, JWT auth, and test-driven development.",
  },
  {
    title: "Project Three",
    date: "Dec 2023",
    description:
      "A sample project placeholder for visual balance and layout testing.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-gray-900 py-20 px-6 md:px-20 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 absolute bottom-6">
                <FaCalendarAlt className="mr-2 text-indigo-500" />
                {project.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
