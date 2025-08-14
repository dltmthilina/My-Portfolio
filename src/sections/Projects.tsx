"use client";

import { useEffect, useState } from "react";
import { FaCalendarAlt, FaReact, FaGithub } from "react-icons/fa";
import { projects } from "../app/projects/ProjectData";
import Image from "next/image";

function ProjectImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="h-48 w-full overflow-hidden rounded-xl mb-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
      <Image
        loading="lazy"
        src={images[index]}
        alt="Project screenshot"
        className="object-cover w-full h-full transition-all duration-500"
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-gray-900 py-10 px-6 md:px-20 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Carousel */}
              <ProjectImageCarousel images={project.images} />

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-sm font-medium"
                  >
                    {tech.icon && <tech.icon className={tech.className} />}
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
              <ul className="mb-4 leading-relaxed space-y-2">
                {project.description.map((desc: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-1 text-indigo-500">
                      <FaReact size={14} />
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {(project.github.frontend ||
                project.github.backend ||
                project.github.both) && (
                <div className="flex gap-3 mb-4">
                  {project.github.both && (
                    <a
                      href={project.github.both}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                  )}
                  {project.github.frontend && (
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
                    >
                      <FaGithub /> Frontend
                    </a>
                  )}
                  {project.github.backend && (
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
                    >
                      <FaGithub /> Backend
                    </a>
                  )}
                </div>
              )}
              {/* Date */}
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-auto">
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
