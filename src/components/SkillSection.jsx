"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const frontendSkills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
];

const toolsSkills = [
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGitAlt />,
  },
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-sky-500 transition duration-300"
    >
      <div className="text-5xl text-sky-400 mb-4">
        {skill.icon}
      </div>

      <h3 className="text-lg font-semibold">
        {skill.name}
      </h3>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 font-semibold uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Technologies I Use
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-sky-400">
            Frontend Development
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
              />
            ))}
          </div>
        </div>

        
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-sky-400">
            Backend Development
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
              />
            ))}
          </div>
        </div>

       
        <div>
          <h3 className="text-3xl font-bold mb-8 text-sky-400">
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {toolsSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;