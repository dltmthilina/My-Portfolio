"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="relative z-10  text-white px-6 md:px-10 py-12 "
    >
      <div className="mt-4 mx-auto  items-center  ">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-br from-[#9d55f0] to-[#6665f1] border-4 border-white/10">
            {/* Placeholder Avatar */}
            <Image
              width={256} // or your actual image width
              height={256}
              src="/me.jpeg"
              alt="Thilina"
              className="w-full h-full object-cover object-center scale-125 mt-16"
            />
          </div>
          <div className="max-w-2xl mx-auto mt-2">
            <p className="text-lg md:text-xl mb-8 font-medium leading-relaxed text-white/90">
              <span className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r  drop-shadow-lg">
                Hi, I'm Thilina Disanayaka.
              </span>
              <br />
              <span className=" mt-3">
                I’m a creative problem solver and full-stack engineer who loves
                building things that make a difference. My journey started with
                curiosity and a knack for tech, and now I’ve architected,
                designed, and shipped products for startups and global clients
                alike. From MongoDB to AWS, I thrive in the full stack—turning
                ideas into robust, beautiful digital experiences. I’m always
                exploring new tools, frameworks, and creative ways to push the
                boundaries of what’s possible. Let’s build something amazing
                together!
              </span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {[
                {
                  name: "ReactJS",
                  icon: <FaReact className="text-[#61dafb]" />,
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript className="text-[#3178c6]" />,
                },
                {
                  name: "NodeJS",
                  icon: <FaNodeJs className="text-[#68a063]" />,
                },
                { name: "MySQL", icon: <SiMysql size={16} /> },
                {
                  name: "MongoDB",
                  icon: <SiMongodb className="text-[#47a248]" />,
                },
                {
                  name: "TailwindCSS",
                  icon: <SiTailwindcss className="text-[#38bdf8]" />,
                },
                { name: "Redux", icon: <SiRedux /> },
                {
                  name: "Express",
                  icon: <SiExpress />,
                },
                {
                  name: "AdonisJS",
                  icon: <SiAdonisjs />,
                },
                { name: "Jest", icon: <SiJest className="text-[#c21325]" /> },
                {
                  name: "Docker",
                  icon: <FaDocker className="text-[#2496ed]" />,
                },
                { name: "AWS", icon: <FaAws className="text-[#ff9900]" /> },
                { name: "Git", icon: <SiGit className="text-[#f05032]" /> },
                { name: "GitHub", icon: <SiGithub /> },
              ].map((tool) => (
                <span
                  key={tool.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#232946] to-[#9d55f0] text-white/90 border border-white/10 shadow-lg text-sm font-semibold hover:scale-105 transition-transform duration-200"
                >
                  {tool.icon}
                  <span className="font-bold drop-shadow-sm">{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
