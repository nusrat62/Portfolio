"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    slug: "sport-nest",
    name: "Sport Nest",
    image: "/sportnest.jpg",
    description:
      "A modern car rental platform with booking system and authentication.",
    tech: ["Next.js", "MongoDB", "Express.js"],
   live: "https://sport-nest-ten.vercel.app/",
    github: "https://github.com/nusrat62/sport-nest",
  },
  {
    id: 2,
    slug: "qurbani-hat",
    name: "Qurbani Hat",
    image: "/qurbaniHat.jpg",
    description:
      "A modern full-stack tile gallery application with authentication, profile management, and responsive UI.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "BetterAuth",
      "Swiper",
    ],
    live: "https://a8-qurbani-hat.vercel.app/",
    github: "https://github.com/nusrat62/A8-qurbani-hat",
  },
  {
    id: 3,
    slug: "keenkeeper",
    name: "KeenKeeper",
    image: "/keenkeeper.jpg",
    description:
      "A friendship management and relationship tracker application with analytics dashboard and timeline system.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Recharts",
      "React Toastify",
    ],
    live: "https://b13-a7-keen-keeper-ytpl.vercel.app/",
    github: "https://github.com/nusrat62/B13-A7-keen-keeper",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-sky-400">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Here are some of my featured projects built with modern web technologies.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

             
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800 text-sky-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

             
                <div className="flex flex-wrap gap-3">

                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-medium"
                  >
                    View Details
                  </Link>


                  <Link
                    href={project.live}
                    target="_blank"
                    className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-xl text-sm"
                  >
                    Live
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;