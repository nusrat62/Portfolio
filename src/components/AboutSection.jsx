"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-slate-900 text-white py-24 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Know Who I Am
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold leading-snug">
              Passionate About Building Modern Web Applications
            </h3>

            <p className="text-slate-400 mt-6 leading-relaxed">
              I'm Nusrat Jahan Liza, a Full Stack Web Developer who enjoys building
              modern, responsive and user-friendly web applications.
            </p>

            <p className="text-slate-400 mt-4 leading-relaxed">
              I work with both frontend and backend technologies to create clean,
              scalable and efficient solutions. My focus is always on writing
              maintainable code and improving user experience.
            </p>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Outside coding, I enjoy playing cricket, exploring new technologies,
              and continuously improving my skills as a developer.
            </p>

            {/* Skill Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {/* Web Dev */}
              <div className="bg-slate-800/60 backdrop-blur border border-slate-700 p-5 rounded-2xl hover:border-sky-500 transition group">
                <FaCode className="text-3xl text-sky-400 mb-3 group-hover:scale-110 transition" />
                <h4 className="text-xl font-semibold">Web Development</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Building responsive and modern web apps.
                </p>
              </div>

              {/* Problem Solving */}
              <div className="bg-slate-800/60 backdrop-blur border border-slate-700 p-5 rounded-2xl hover:border-sky-500 transition group">
                <FaLaptopCode className="text-3xl text-sky-400 mb-3 group-hover:scale-110 transition" />
                <h4 className="text-xl font-semibold">Problem Solving</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Enjoy solving coding and logical challenges.
                </p>
              </div>

              {/* Learning */}
              <div className="sm:col-span-2 bg-slate-800/60 backdrop-blur border border-slate-700 p-5 rounded-2xl hover:border-sky-500 transition group">
                <FaBrain className="text-3xl text-sky-400 mb-3 group-hover:scale-110 transition" />
                <h4 className="text-xl font-semibold">Learning & Growth</h4>
                <p className="text-slate-400 text-sm mt-2">
                  I love learning new technologies and growing every day as a developer.
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:border-sky-500/40 transition">

              <h3 className="text-2xl font-bold mb-8 text-sky-400">
                Quick Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-slate-400 text-sm">Name</p>
                  <h4 className="text-lg font-semibold">Nusrat Jahan Liza</h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <h4 className="text-lg font-semibold break-all">
                    nj6111449@gmail.com
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <h4 className="text-lg font-semibold">
                    Cumilla, Bangladesh
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Experience</p>
                  <h4 className="text-lg font-semibold">
                    Full Stack Web Developer
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Languages</p>
                  <h4 className="text-lg font-semibold">
                    Bangla, English
                  </h4>
                </div>

              </div>
            </div>

            {/* glow */}
            <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-sky-500/20 blur-3xl rounded-full"></div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;