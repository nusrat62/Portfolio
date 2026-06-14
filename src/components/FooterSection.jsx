"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/nusrat62",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/nusrat-jahan-liza-526987394",
      label: "LinkedIn",
    },
    
  ];

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer className="relative bg-slate-950 text-white border-t border-slate-800 overflow-hidden">
      
      {/* subtle glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Nusrat Jahan Liza <span className="text-sky-400">.</span>
            </h2>

            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Full Stack Web Developer focused on building modern,
              responsive and scalable web applications using Next.js and MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-sky-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-sky-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-sky-400">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group bg-slate-800 hover:bg-sky-500 transition p-3 rounded-xl"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform block">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition"
            >
              <FaArrowUp />
              Back to top
            </button>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Nusrat Jahan Liza. Built with Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;