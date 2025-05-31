"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-50 dark:bg-gray-950 py-20 px-6 md:px-20 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        {/* Contact Form */}
        <form className="grid gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-40 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a href="mailto:dltmthilinamaduranga@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 hover:text-indigo-600 transition" />
          </a>
          <a
            href="https://github.com/dltmthilina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 hover:text-indigo-600 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/thilinadisanayaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-indigo-600 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
