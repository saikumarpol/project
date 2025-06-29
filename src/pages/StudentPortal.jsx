import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaUniversity,
  FaCalendarAlt,
  FaFileAlt,
  FaUserGraduate,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const StudentPortal = () => {
  const resources = [
    {
      name: 'BTech Syllabus 2025',
      url: '/downloads/syllabus-2025.pdf',
      icon: <FaFileAlt className="text-xl text-cyan-400" />,
      isNew: true,
    },
    {
      name: 'Placement Guide',
      url: '/downloads/placement-guide.pdf',
      icon: <FaUserGraduate className="text-xl text-cyan-400" />,
    },
    {
      name: 'Academic Calendar',
      url: '/downloads/academic-calendar.pdf',
      icon: <FaCalendarAlt className="text-xl text-cyan-400" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Blurred animated background blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full blur-3xl z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl z-10"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <FaUniversity className="text-6xl text-cyan-400 mb-2 animate-bounce" />
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="text-4xl font-extrabold text-cyan-300 drop-shadow-md"
          >
            Welcome to the Student Hub
          </motion.h1>
          <p className="text-gray-400 mt-3 max-w-md">
            Access your academic resources, guides, and calendar with a single click.
          </p>
          <motion.a
            href="http://61.1.171.141/kiet/shome.asp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold text-base shadow-md hover:bg-cyan-600 transition-all duration-300"
          >
            Open Portal <FaExternalLinkAlt className="ml-1 text-sm" />
          </motion.a>
        </div>

        {/* Quick Downloads Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1e293b] rounded-2xl shadow-xl p-8 border border-cyan-700"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6 text-center">
            Quick Downloads
          </h2>
          <ul className="flex flex-col gap-4">
            {resources.map((res, i) => (
              <motion.li
                key={res.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-[#0f172a] rounded-xl px-4 py-3 border border-cyan-700 hover:shadow-lg transition"
              >
                {res.icon}
                <a
                  href={res.url}
                  download
                  className="text-base font-medium text-white hover:text-cyan-300 transition flex-1"
                >
                  {res.name}
                </a>
                <span className="text-xs text-gray-400">PDF</span>
                {res.isNew && (
                  <span className="ml-2 px-2 py-0.5 bg-cyan-500 text-white text-xs rounded-full font-bold animate-pulse">
                    NEW
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="italic text-gray-400 text-lg font-semibold">
            “Success is the sum of small efforts, repeated day in and day out.”
          </p>
          <Link
            to="/"
            className="block mt-4 text-cyan-300 hover:text-cyan-400 transition text-sm"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StudentPortal;