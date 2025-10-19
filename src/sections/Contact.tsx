"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_890ozup",
        "template_3anajvq",
        form.current,
        "gknFygdfrC9cIAHGu"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current?.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-20 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffffff]">
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#12002f] via-[#1a0a3c] to-[#0b0510] p-8 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto flex flex-col items-center gap-4 text-left"
        >
          {/* Name */}
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <User className="w-5 h-5" />
            </span>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Email */}
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-5 h-5" />
            </span>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Message */}
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-4 text-gray-400">
              <MessageSquare className="w-5 h-5" />
            </span>
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          {/* Send Button */}
          <button
            type="submit"
            className="w-full max-w-md bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Separator */}
        <hr className="my-10 border-white/10" />

        {/* Social Block */}
        <div className="mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <Github className="w-6 h-6 text-white/90" />
            <a
              href="https://github.com/dltmthilina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white"
            >
              dltmthilina
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Linkedin className="w-6 h-6 text-white/90" />
            <a
              href="https://www.linkedin.com/in/thilinadisanayaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white"
            >
              thilinadisanayaka
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
