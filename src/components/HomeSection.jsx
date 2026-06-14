"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sky-400 font-semibold tracking-widest uppercase">
              Hello There 👋
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
              I’m{" "}
              <span className="text-sky-400">
                Nusrat Jahan Liza
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-5">
              Full Stack Web Developer
            </h2>

            <p className="text-slate-400 mt-6 leading-relaxed max-w-xl">
              I build modern, responsive and scalable web applications using
              Next.js and MERN stack. My focus is clean UI, smooth UX and
              efficient backend systems that solve real-world problems.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 active:scale-[0.98] px-6 py-3 rounded-full font-semibold transition"
              >
                <FaDownload />
                Download Resume
              </a>

              <Link
                href="#projects"
                className="inline-flex items-center border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-full font-semibold transition"
              >
                View Projects
              </Link>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-6 mt-10">

              <a
                href="https://github.com/nusrat62"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-sky-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nusrat-jahan-liza-526987394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-sky-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">

              {/* outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 to-cyan-400/10 blur-2xl animate-pulse" />

              {/* border ring */}
              <div className="absolute inset-[6%] rounded-full border border-sky-400/30" />

              {/* image wrapper */}
              <div className="absolute inset-[10%] rounded-full overflow-hidden border-4 border-sky-500 shadow-[0_0_40px_rgba(14,165,233,0.4)]">

                <Image
                  src="/profilePhoto.png"
                  alt="Profile Photo"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeSection;