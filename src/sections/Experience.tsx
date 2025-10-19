"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experience = [
  {
    title: "Full Stack Software Engineer",
    company: "Aldtan (Pvt) Ltd",
    duration: "Dec 2024 – Present",
    location: "Payagala, Sri Lanka",
    description: [
      "Designed UI/UX in Figma",
      "Practiced mobile-first approach.",
      "Developed frontend applications using ReactJS, TypeScript, and Shadcn.",
      "Implemented backend services with NodeJS and AdonisJS.",
      "Integrated RESTful APIs and optimized database queries.",
      "Code splitting and lazy loading for performance with Vite.",
      "Use AWS lambda for serverless functions to handle report generation.",
      "Collaborated with tech leads and product owners to deliver user-focused solutions.",
      "Implemented reusable components and optimized performance.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Informatics International Ltd",
    duration: "Apr 2024 – Nov 2024",
    location: "Bambalapitiya, Sri Lanka",
    description: [
      "Built scalable apps using ReactJS, TypeScript, and Material-UI.",
      "Worked in Agile teams for rapid feature delivery.",
      "Integrated Webpack module federation for scalable codebases.",
      "Mentored junior developers and reviewed code for best practices.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Egreen",
    duration: "Sep 2022 – Mar 2024",
    location: "Horana, Sri Lanka",
    description: [
      "Created responsive UIs with ReactJS, Redux, TailwindCSS, and MobX.",
      "Resolved platform-specific issues and improved PWA support.",
      "Implemented caching strategies for offline functionality.",
      "Collaborated with cross-functional teams to deliver new features.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-10 px-6 md:px-20">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffffff]">
          Experience
        </h2>

        {/* Timeline container with gradient line */}
        <div className="relative pl-10 space-y-8">
          <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#9d55f0] via-[#6665f1] to-[#00e0ff] rounded-full opacity-80" />

          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative"
            >
              {/* Card */}
              <div className="pl-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-5 hover:bg-white/[0.08] transition-all shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-[#9d55f0] to-[#6665f1] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  {/* Chips */}
                  <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/10 text-white/90">
                      <Briefcase className="w-3.5 h-3.5" /> {item.company}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/10 text-white/90">
                      <Calendar className="w-3.5 h-3.5" /> {item.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/10 text-white/90">
                      <MapPin className="w-3.5 h-3.5" /> {item.location}
                    </span>
                  </div>

                  {/* Description bullets */}
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-800 dark:text-gray-200">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#ffffff]"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[var(--color-gradient-end)]" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
