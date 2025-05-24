import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-indigo-100 via-white to-purple-50 py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 sm:p-12 text-center hover:shadow-2xl transition duration-300"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-indigo-700 mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            I am a passionate Full-Stack Developer with a Bachelor’s degree in Computer Applications (8.7 CGPA).
            I specialize in Java, Spring Boot, ReactJS, MySQL, and front-end technologies like HTML, CSS, and JavaScript.
            I love creating efficient, user-friendly systems and have built projects including a <strong>Student Management System</strong>, <strong>ATM and Banking Management System</strong>, and a <strong>Medical Agency Management System</strong>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
