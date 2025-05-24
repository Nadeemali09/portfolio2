import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Nadeem Ali</h1>
          <p className="text-lg md:text-xl">Full-Stack Developer | Java, Spring Boot, ReactJS</p>
          <div className="mt-6 space-x-4">
            <a href="mailto:nadeemali731011@gmail.com" className="bg-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-500 transition">Contact Me</a>
            <a href="#projects" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Projects</a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.3)' }}
        >
          <img
            src="image.jpg" // Replace with your image path
            alt="Nadeem Ali"
            className="w-60 h-60 rounded-full object-cover transition-all duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
