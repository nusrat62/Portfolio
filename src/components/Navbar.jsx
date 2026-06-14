"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX, HiDownload } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Education", path: "#education" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-sky-500/5">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
          >
            Nusrat.
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="relative text-slate-300 hover:text-sky-400 transition-all duration-300 font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/20"
          >
            <HiDownload size={18} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 mt-4 bg-slate-900/70 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-slate-300 hover:text-sky-400 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white py-3 rounded-xl font-medium transition-all duration-300"
            >
              <HiDownload size={18} />
              Download Resume
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;