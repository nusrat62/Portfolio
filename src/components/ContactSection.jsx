"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-slate-950 text-white overflow-hidden"
    >
      {/* subtle glow background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-sky-400">Me</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Let’s build something amazing together. Feel free to reach out for
            collaboration, freelance work, or project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-sky-500/40 transition">

            <h3 className="text-2xl font-semibold mb-6 text-sky-400">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-sky-500/20 p-4 rounded-2xl">
                  <FaEnvelope className="text-sky-400 text-xl" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="font-medium">nj6111449@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-sky-500/20 p-4 rounded-2xl">
                  <FaPhoneAlt className="text-sky-400 text-xl" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="font-medium">+8801816378257</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/nusrat62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-sky-500 p-4 rounded-2xl transition"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nusrat-jahan-liza-526987394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-sky-500 p-4 rounded-2xl transition"
                >
                  <FaLinkedinIn className="text-xl group-hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-sky-500/40 transition">

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 resize-none transition"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 active:scale-[0.98] transition py-3 rounded-xl font-semibold"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;