
import { FaReact, FaNodeJs, FaAws, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

import { IconType } from "react-icons";

type Technology = {
  name: string;
  icon: IconType;
  className?: string;
};

type Project = {
  title: string;
  date: string;
  description: string[];
  images: string[];
  technologies: Technology[];
  github: {
    frontend?: string;
    backend?: string;
    both?: string;
  };
};

export const projects: Project[] = [
  {
    title: "CeylonTravelLife",
    date: "Jan 2025",
    description: [
      "A location-aware travel app",
      "Next.js 14 with TypeScript",
      "TailwindCSS for responsive design",
      "secure login with JWT",
      "RESTful APIs with Node.js and Express",
    ],
    images: ["/travel/01.jpg"],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, className: "text-blue-500" },
      { name: "TypeScript", icon: SiTypescript, className: "text-blue-700" },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        className: "text-cyan-500",
      },
      { name: "Node.js", icon: FaNodeJs, className: "text-green-600" },
      {
        name: "Express",
        icon: SiExpress,
        className: "text-gray-700 dark:text-white",
      },
      { name: "MongoDB", icon: SiMongodb, className: "text-green-700" },
    ],
    github: {
      both: "https://github.com/dltmthilina/travel-srilanka",
    },
  },
  {
    title: "Task Manager Fullstack Application",
    date: "Feb 2024",
    description: [
      "A secure portal with REST APIs",
      "JWT auth",
      "Test-driven development with Jest",
      "Mobile-first design",
      "Responsive UI with TailwindCSS",
      "Full-stack with React and Node.js",
      "MongoDB for data storage",
    ],
    images: ["/sms/01.jpg", "/sms/02.jpg"],
    technologies: [
      { name: "React", icon: FaReact, className: "text-blue-500" },
      { name: "Node.js", icon: FaNodeJs, className: "text-green-600" },
      {
        name: "Express",
        icon: SiExpress,
        className: "text-gray-700 dark:text-white",
      },
      { name: "MongoDB", icon: SiMongodb, className: "text-green-700" },
      { name: "TypeScript", icon: SiTypescript, className: "text-blue-700" },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        className: "text-cyan-500",
      },
      { name: "Jest", icon: SiNextdotjs, className: "text-blue-500" },
    ],
    github: {
      both: "https://github.com/dltmthilina/task_manager_fullstack",
    },
  },
  {
    title: "SkyWay - A Air Ticket Booking System",
    date: "Mar 2025",
    description: [
      "A full-featured air ticket booking system",
      "User authentication with JWT",
      "RESTful APIs for flight management",
      "Responsive design with TailwindCSS",
      "Admin dashboard for flight and booking management",
      "OOP approach with Java and Spring Boot",
      "Role-based access control",
      "Database management with MySQL",
    ],
    images: ["/skyway/01.jpg", "/skyway/02.jpg"],
    technologies: [
      { name: "React", icon: FaReact, className: "text-blue-500" },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        className: "text-cyan-500",
      },
      {
        name: "Java",
        icon: FaJava,
        className: "text-cyan-500",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        className: "text-cyan-500",
      },
      {
        name: "MYSQL",
        icon: SiMysql,
        className: "text-cyan-500",
      },
    ],
    github: {
      frontend: "https://github.com/dltmthilina/FlightSure-frontend",
      backend: "https://github.com/dltmthilina/FlightSure-backend",
    },
  },
  {
    title: "Portfolio Website",
    date: "Apr 2025",
    description: [
      "A personal portfolio website showcasing my projects and skills.",
      "Built with NextJS and TailwindCSS",
      "Responsive design for all devices",
      "Includes a blog section for sharing insights",
      "SEO optimized for better visibility",
      "Deployed on AWS S3 and CloudFront",
      "Uses Github Actions for CI/CD",
    ],
    images: ["/portfolio/01.jpg"],
    technologies: [
      { name: "React", icon: FaReact, className: "text-blue-500" },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        className: "text-cyan-500",
      },
      { name: "Next.js", icon: SiNextdotjs, className: "text-blue-500" },
      { name: "AWS", icon: FaAws, className: "text-blue-500" },
    ],
    github: {
      frontend: "https://github.com/dltmthilina/My-Portfolio",
    },
  },
];
