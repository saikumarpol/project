import React, { useState } from 'react';
import {
  FaHackerrank,
  FaCode,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { SiLeetcode, SiHackerearth } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

const platforms = [
  {
    name: 'HackerRank',
    icon: <FaHackerrank size={24} color="#2EC866" />,
    url: 'https://www.hackerrank.com/',
    info: 'HackerRank helps you practice coding problems in DSA, SQL, AI, and more. Widely used by top companies for assessments.',
    why: [
      '✅ Solve real-world coding problems',
      '✅ Build your programming foundation',
      '✅ Prepare for online assessments',
    ],
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={24} color="#FFA116" />,
    url: 'https://leetcode.com/',
    info: 'LeetCode is the best platform to prepare for tech interviews, with thousands of company-based questions.',
    why: [
      '✅ Practice company-specific DSA problems',
      '✅ Improve speed and accuracy',
      '✅ Get ready for coding interviews',
    ],
  },
  {
    name: 'CodeChef',
    icon: <FaCode size={24} color="#5B4AE0" />,
    url: 'https://www.codechef.com/',
    info: 'CodeChef is a competitive programming platform that hosts regular contests to boost problem-solving speed.',
    why: [
      '✅ Participate in global contests',
      '✅ Improve logical thinking',
      '✅ Earn ratings and recognition',
    ],
  },
  {
    name: 'HackerEarth',
    icon: <SiHackerearth size={24} color="#323754" />,
    url: 'https://www.hackerearth.com/',
    info: 'HackerEarth offers coding challenges, tutorials, and company hiring contests.',
    why: [
      '✅ Join hackathons and events',
      '✅ Learn via practical challenges',
      '✅ Get noticed by recruiters',
    ],
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={24} color="#0077B5" />,
    url: 'https://www.linkedin.com/',
    info: 'LinkedIn is a professional network to showcase your profile and connect with industry experts.',
    why: [
      '✅ Build your career identity',
      '✅ Network with recruiters',
      '✅ Share achievements and projects',
    ],
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={24} />,
    url: 'https://github.com/',
    info: 'GitHub is used to host and share code repositories. It’s essential for showcasing your work.',
    why: [
      '✅ Store and publish your code',
      '✅ Collaborate on open source',
      '✅ Impress companies with real work',
    ],
  },
];

const StudentInfoCard = () => {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black shadow-2xl rounded-2xl p-8 border border-cyan-800">
        <h2 className="text-3xl font-extrabold text-cyan-300 mb-10 text-center">
          🎓 Student Needed Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-stretch">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 24px rgba(34,211,238,0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              onClick={() => setModalIndex(idx)}
              className="flex flex-col items-center space-y-3 px-6 py-8 rounded-2xl text-xl font-bold bg-[#0f172a] text-white shadow-xl border border-cyan-700 transition-all duration-300 w-full cursor-pointer hover:bg-cyan-900/20 group relative"
            >
              <div className="text-4xl mb-2">{platform.icon}</div>
              <span className="relative font-semibold text-lg text-cyan-300 group-hover:text-white transition-colors duration-200">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalIndex(null)}
              className="bg-slate-900/60 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, rotate: '12deg' }}
                animate={{ scale: 1, rotate: '0deg' }}
                exit={{ scale: 0.9, rotate: '0deg' }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1e293b] text-white p-6 rounded-xl w-full max-w-lg shadow-xl border border-cyan-700 relative cursor-default"
              >
                <FiAlertCircle className="text-white/10 absolute text-[240px] rotate-12 -top-24 -left-24 z-0" />
                <div className="relative z-10">
                  <div className="bg-black w-16 h-16 mb-4 rounded-full text-3xl grid place-items-center mx-auto">
                    {platforms[modalIndex]?.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-2 text-cyan-300">
                    {platforms[modalIndex]?.name}
                  </h3>
                  <p className="text-center mb-4 text-gray-300">
                    {platforms[modalIndex]?.info}
                  </p>
                  <ul className="text-base text-cyan-100 list-disc pl-6 mb-4">
                    {platforms[modalIndex]?.why.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href={platforms[modalIndex]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-sm text-center block mt-4"
                  >
                    🔗 Visit: {platforms[modalIndex]?.url}
                  </a>
                  <div className="mt-6">
                    <button
                      onClick={() => setModalIndex(null)}
                      className="w-full py-2 rounded bg-cyan-700 hover:bg-cyan-600 transition font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StudentInfoCard;
