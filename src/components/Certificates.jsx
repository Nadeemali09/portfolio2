import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certificates = [
  {
    title: "Master Diploma in Computer Software & Hardware",
    issuer: "J2SIT INSTITUTE",
  },
  {
    title: "Certified in VS Code, IntelliJ IDEA, NetBeans, Eclipse",
    issuer: "Various IDE Platforms",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Certificates = () => {
  return (
    <section
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-20"
      id="certificates"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Certificates
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-2xl hover:bg-indigo-100 transform hover:-translate-y-2 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <FaAward className="text-indigo-500 text-3xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
