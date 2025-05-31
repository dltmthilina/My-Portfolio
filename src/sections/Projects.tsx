"use client";

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
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {project.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
