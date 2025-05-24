import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-20" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-400 text-xl" />
              <a href="mailto:nadeemali731011@gmail.com" className="hover:text-indigo-300 transition">
                nadeemali731011@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-indigo-400 text-xl" />
              <span>+91 7310709411</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-400 text-xl" />
              <a
                href="https://linkedin.com/in/Nadeem-ali-7765b431b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-gray-300 text-xl" />
              <a
                href="https://github.com/Nadeemali09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Send a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded transition w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
     
  );
};

export default Contact;
