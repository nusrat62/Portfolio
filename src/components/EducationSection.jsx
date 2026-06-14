"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "BSc in Computer Science & Engineering",
    institution:
      "Bangladesh Army International University of Science and Technology",
    duration: "Present",
    description:
      "Currently pursuing a Bachelor of Science in Computer Science and Engineering (CSE) with a strong focus on software development, web technologies, problem solving, and modern programming practices.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (HSC)",
    institution: "Ibna Taimiya School & College",
    duration: "Science Group • GPA 4.92",
    description:
      "Completed Higher Secondary Certificate with strong foundation in science, logic building, and analytical thinking that led to software development journey.",
    icon: <FaSchool />,
  },
  {
    id: 3,
    title: "Secondary School Certificate (SSC)",
    institution: "Comilla Modern High School",
    duration: "Science Group • GPA 5.00",
    description:
      "Built strong academic foundation in science and mathematics, developed problem-solving mindset and interest in technology.",
    icon: <FaSchool />,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 font-semibold tracking-widest uppercase">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Academic Journey
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            My educational background that shaped my technical skills and problem-solving mindset.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700 ml-3">

          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-14 ml-10 relative"
            >
              {/* Icon */}
              <div className="absolute -left-[54px] top-2 bg-gradient-to-br from-sky-500 to-blue-600 text-white p-3 rounded-full shadow-lg ring-4 ring-slate-900">
                {education.icon}
              </div>

              {/* Card */}
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-7 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {education.title}
                  </h3>

                  <span className="text-sm bg-sky-500/10 text-sky-400 px-4 py-1 rounded-full border border-sky-500/20">
                    {education.duration}
                  </span>
                </div>

                <h4 className="text-slate-300 text-lg mt-2">
                  {education.institution}
                </h4>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;