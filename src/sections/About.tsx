"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiJest,
  SiAdonisjs,
  SiMysql,
  SiMongoose,
  SiLucid,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white  px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center  ">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
            {/* Placeholder Avatar */}
            <img
              src="/me.jpeg"
              alt="Thilina"
              className="w-full h-full object-cover object-center scale-125 mt-16"
            />
          </div>
          <div>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>Software Engineer with 3+ years of hands-on experience</li>
              <li>
                Passionate about building modern, scalable web applications
              </li>
              <li>Strong focus on clean code and seamless user experience</li>
              <li>Enjoys collaborating in agile, cross-functional teams</li>
              <li>Continuous learner and technology enthusiast</li>
            </ul>
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-2">Skills & Tools</h3>
          <div className="space-y-3">
            <div>
              <span className="font-medium">Frontend:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <FaReact />
                  ReactJS
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiTypescript />
                  TypeScript
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiTailwindcss />
                  TailwindCSS
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiRedux />
                  Redux
                </span>
              </div>
            </div>
            <div>
              <span className="font-medium">Backend:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 dark:bg-green-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <FaNodeJs />
                  NodeJS
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 dark:bg-green-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiExpress />
                  ExpressJS
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 dark:bg-green-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiAdonisjs />
                  AdonisJS
                </span>
              </div>
            </div>
            <div>
              <span className="font-medium">Database:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiMongodb />
                  MongoDB
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiMysql />
                  MySQL
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiMongoose />
                  Mongoose ORM
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiLucid />
                  Lucid ORM
                </span>
              </div>
            </div>
            <div>
              <span className="font-medium">DevOps & Tools:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <FaDocker />
                  Docker
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <FaAws />
                  AWS
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiJest />
                  Jest
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiGit />
                  Git
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full text-sm font-medium shadow">
                  <SiGithub />
                  GitHub & GitHub Actions
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
