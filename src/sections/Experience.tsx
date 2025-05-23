"use client";

import { motion } from "framer-motion";

const experience = [
  {
    title: "Software Engineer (Project-based)",
    company: "Aldtan (Pvt) Ltd",
    duration: "Dec 2024 – Present",
    location: "Payagala, Sri Lanka",
    description:
      "Designed UI/UX in Figma and developed mobile-first, responsive apps using ReactJS, TypeScript, and Shadcn. Worked closely with tech leads to deliver user-focused solutions.",
  },
  {
    title: "Software Engineer",
    company: "Informatics International Ltd",
    duration: "Apr 2024 – Nov 2024",
    location: "Bambalapitiya, Sri Lanka",
    description:
      "Built scalable apps using ReactJS, TypeScript, Material-UI. Collaborated across teams with Agile practices. Used Webpack module federation for scalable code.",
  },
  {
    title: "Software Engineer",
    company: "Egreen",
    duration: "Sep 2022 – Mar 2024",
    location: "Horana, Sri Lanka",
    description:
      "Created responsive UIs with ReactJS, Redux, TailwindCSS, and MobX. Resolved platform-specific issues and implemented caching for PWA support.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400 pl-6 space-y-10">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-900 shadow-lg" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {item.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.duration} — {item.location}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
