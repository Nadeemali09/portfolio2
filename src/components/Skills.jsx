import React from 'react';
import { motion } from 'framer-motion';

// Define skill categories with unique colors for better card identity
const skills = [
  {
    category: 'Languages',
    items: ['Java (Core & Advanced)', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'C/C++'],
    color: 'from-blue-100 to-white',
    border: 'border-blue-400'
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Spring MVC', 'Hibernate', 'ReactJS', 'Tailwind CSS'],
    color: 'from-green-100 to-white',
    border: 'border-green-400'
  },
  {
    category: 'Tools',
    items: ['MySQL', 'Workbench', 'DataLoader', 'Maven', 'VS Code', 'IntelliJ IDEA', 'NetBeans', 'Eclipse'],
    color: 'from-yellow-100 to-white',
    border: 'border-yellow-400'
  },
  {
    category: 'Concepts',
    items: ['OOP', 'Collection Framework', 'Multithreading', 'Exception Handling'],
    color: 'from-purple-100 to-white',
    border: 'border-purple-400'
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'People Management', 'Stakeholder Management'],
    color: 'from-pink-100 to-white',
    border: 'border-pink-400'
  }
];

// Motion variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ category, items, color, border }, i) => (
            <motion.div
              key={category}
              className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-md border-l-4 ${border}
                          hover:shadow-xl hover:scale-105 transition duration-300`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {items.map((item, index) => (
                  <li key={index} className="text-md">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
