"use client";

import { useEffect, useState } from "react";
import { FaCalendarAlt, FaReact, FaGithub } from "react-icons/fa";
import { ImageProp, projects } from "../app/projects/ProjectData";
import Image from "next/image";

function ProjectImageCarousel({ images }: { images: ImageProp[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="h-36 w-full overflow-hidden rounded-xl mb-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg">
      <Image
        width={images[index].width}
        height={images[index].height}
        loading="lazy"
        src={images[index].src}
        alt={images[index].alt}
        className="object-cover w-full h-full transition-all duration-500"
      />
    </div>
  );
}

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section
      id="projects"
      className="py-10 px-6 md:px-20 text-gray-900 transparent-bg"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffffff]">
        Projects
      </h2>
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isOpen = expanded === index;
            return (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-[#232946] to-[#9d55f0] rounded-2xl p-4 shadow-xl border border-white/10 transition-all duration-300 flex flex-col min-h-[270px]"
              >
                {/* Image Carousel */}
                <ProjectImageCarousel images={project.images} />

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-white/90 shadow-sm"
                    >
                      {tech.icon && <tech.icon className={tech.className} />}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-1 group-hover:text-[#ffb86b] text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Short Description (first line only) */}
                <div className="mb-2 text-sm text-white/80">
                  {project.description[0]}
                </div>

                {/* Expand/Collapse Arrow */}
                <button
                  className="absolute right-4 top-4 bg-black rounded-full p-1 transition-colors z-20"
                  aria-label={isOpen ? "Hide details" : "Show more details"}
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <svg
                    className={`w-5 h-5 text-white transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* More Details (absolute overlay) */}
                {isOpen && (
                  <div className="absolute inset-0 z-10 bg-[#232946]/95 rounded-2xl p-4 flex flex-col animate-fadeIn border border-[#ffb86b]/20 shadow-2xl">
                    <button
                      className="absolute right-4 top-4 bg-white/10 hover:bg-white/20 rounded-full p-1 transition-colors"
                      aria-label="Hide details"
                      onClick={() => setExpanded(null)}
                    >
                      <svg
                        className="w-5 h-5 text-white rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <ul className="leading-relaxed space-y-2 mb-2 mt-8">
                      {project.description
                        .slice(1)
                        .map((desc: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-white/80"
                          >
                            <span className="mt-1 text-[#ffb86b]">
                              <FaReact size={12} />
                            </span>
                            <span>{desc}</span>
                          </li>
                        ))}
                    </ul>
                    {(project.github.frontend ||
                      project.github.backend ||
                      project.github.both) && (
                      <div className="flex gap-2 mb-2">
                        {project.github.both && (
                          <a
                            href={project.github.both}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-white hover:bg-[#ffb86b]/20 transition"
                          >
                            <FaGithub /> GitHub Repo
                          </a>
                        )}
                        {project.github.frontend && (
                          <a
                            href={project.github.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-white hover:bg-[#ffb86b]/20 transition"
                          >
                            <FaGithub /> Frontend
                          </a>
                        )}
                        {project.github.backend && (
                          <a
                            href={project.github.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-white hover:bg-[#ffb86b]/20 transition"
                          >
                            <FaGithub /> Backend
                          </a>
                        )}
                      </div>
                    )}
                    <div className="flex items-center text-xs text-white/60 mt-auto">
                      <FaCalendarAlt className="mr-2 text-[#ffb86b]" />
                      {project.date}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
