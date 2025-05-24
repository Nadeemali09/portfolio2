import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Student Management System",
    tech: "Java, Advanced Java, Collections, MySQL",
    description: "Handles student enrollment, updating, and search. Improved data quality by 33%.",
    color: "from-green-100 to-white"
  },
  {
    title: "ATM and Banking Management System",
    tech: "Core Java, AWT, Swing, Multithreading",
    description: "Supports secure transactions, account management, and authentication.",
    color: "from-yellow-100 to-white"
  },
  {
    title: "Medical Agency Management System",
    tech: "Spring Boot, HTML, CSS, JS, MySQL",
    description: "Features medicine creation, editing, deletion, and search functionalities.",
    color: "from-indigo-100 to-white"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br ${proj.color} p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border-l-4 border-indigo-400`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 italic mb-3">{proj.tech}</p>
              <p className="text-gray-700">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
