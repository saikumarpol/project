import React, { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UploadResume from './Resume/UploadResume';
import AnalysisResult from './Resume/AnalysisResult';
import Mainquiz from '../Quiz/Mainquiz';
import { FaExternalLinkAlt, FaCode, FaUniversity, FaCalendarAlt, FaFileAlt, FaUserGraduate } from 'react-icons/fa';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const animatedLinks = [
  {
    heading: 'Resume Analyzer',
    subheading: 'Get instant feedback on your resume',
    imgSrc: 'https://www.resumego.net/wp-content/uploads/resumechecker4.png',
    content: 'analyzer',
  },
  {
    heading: 'Code Compiler',
    subheading: 'Write, run, and test code online',
    imgSrc: 'https://s3-cdn.cmlabs.co/page/2024/01/21/what-is-a-compiler-definition-types-functions-examples-446946.webp',
    content: 'compiler',
  },
  {
    heading: 'Quiz',
    subheading: 'Test your knowledge with interactive quizzes',
    imgSrc: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design_180786-81.jpg?semt=ais_items_boosted&w=740',
    content: 'quiz',
  },
  {
    heading: 'Student Portal',
    subheading: 'Access syllabus, calendar & resources',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
    content: 'studentportal',
  },
];

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

const Tools = () => {
  const [result, setResult] = useState(null);
  const [active, setActive] = useState(null);

  const analyzerRef = useRef(null);
  const compilerRef = useRef(null);
  const quizRef = useRef(null);
  const studentRef = useRef(null);

  const handleClick = (content) => {
    setActive(content);
    setTimeout(() => {
      const refMap = {
        analyzer: analyzerRef,
        compiler: compilerRef,
        quiz: quizRef,
        studentportal: studentRef,
      };
      refMap[content]?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <div className="tools-dropdown bg-black text-white rounded-2xl shadow-2xl p-8 min-w-[320px] max-w-6xl mx-auto pt-12 pb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-10 text-center tracking-tight">
          TechHub Tools
        </h2>

        <section className="bg-black text-white">
          <div className="mx-auto max-w-5xl">
            {animatedLinks.map((link) => (
              <AnimatedLink
                key={link.heading}
                heading={link.heading}
                subheading={link.subheading}
                imgSrc={link.imgSrc}
                onClick={() => handleClick(link.content)}
              />
            ))}
          </div>
        </section>

        <div className="mt-10">
          {active === 'analyzer' && (
            <div ref={analyzerRef} className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Resume Analyzer</h4>
              {!result ? (
                <UploadResume onAnalyze={setResult} />
              ) : (
                <AnalysisResult result={result} onReset={() => setResult(null)} />
              )}
              <NavLink to="/analyzer" className="mt-6 text-cyan-300 underline underline-offset-4 font-semibold hover:text-cyan-400">
                Full Page Analyzer
              </NavLink>
            </div>
          )}

          {active === 'compiler' && (
            <div ref={compilerRef} className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Code Compiler</h4>
              <FaCode className="text-5xl text-cyan-400 mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-white mb-2">Online Code Compiler</h2>
              <p className="text-gray-400 mb-4 text-center max-w-md">
                Write, run, and test code in multiple languages. Click below to open the external compiler.
              </p>
              <a
                href="https://compiler-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow hover:bg-cyan-600"
              >
                Open External Compiler App <FaExternalLinkAlt className="ml-1 text-cyan-400" />
              </a>
              <NavLink to="/compiler" className="mt-6 text-cyan-300 underline underline-offset-4 font-semibold hover:text-cyan-400">
                Full Page Compiler
              </NavLink>
            </div>
          )}

          {active === 'quiz' && (
            <div ref={quizRef} className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Quiz</h4>
              <p className="text-gray-400 mb-4 text-center max-w-md">Test your knowledge with our interactive quizzes.</p>
              <Mainquiz />
              <NavLink to="/mainquiz" className="mt-6 text-cyan-300 underline underline-offset-4 font-semibold hover:text-cyan-400">
                Full Page Quiz
              </NavLink>
            </div>
          )}

          {active === 'studentportal' && (
            <div ref={studentRef} className="relative z-10 mt-8">
              <div className="flex flex-col items-center text-center mb-10">
                <FaUniversity className="text-6xl text-cyan-400 mb-2 animate-bounce" />
                <motion.h1
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="text-4xl font-extrabold text-cyan-300"
                >
                  Welcome to the Student Hub
                </motion.h1>
                <p className="text-gray-400 mt-3 max-w-md">Access your academic resources, guides, and calendar with a single click.</p>
                <a
                  href="http://61.1.171.141/kiet/shome.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold text-base shadow hover:bg-cyan-600"
                >
                  Open Portal <FaExternalLinkAlt className="ml-1 text-sm" />
                </a>
              </div>

              <div className="bg-[#1e293b] rounded-2xl shadow-xl p-8 border border-cyan-700">
                <h2 className="text-2xl font-semibold text-cyan-300 mb-6 text-center">Quick Downloads</h2>
                <ul className="flex flex-col gap-4">
                  {resources.map((res, i) => (
                    <motion.li
                      key={res.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-[#0f172a] rounded-xl px-4 py-3 border border-cyan-700 hover:shadow-lg"
                    >
                      {res.icon}
                      <a href={res.url} download className="text-base font-medium text-white hover:text-cyan-300 flex-1">{res.name}</a>
                      <span className="text-xs text-gray-400">PDF</span>
                      {res.isNew && (
                        <span className="ml-2 px-2 py-0.5 bg-cyan-500 text-white text-xs rounded-full font-bold animate-pulse">
                          NEW
                        </span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 text-center">
                <p className="italic text-gray-400 text-lg font-semibold">
                  “Success is the sum of small efforts, repeated day in and day out.”
                </p>
                <Link to="/" className="block mt-4 text-cyan-300 hover:text-cyan-400 text-sm">← Back to Home</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AnimatedLink = ({ heading, imgSrc, subheading, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href="#"
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-cyan-700 py-6 cursor-pointer"
    >
      <div>
        <motion.span className="text-3xl md:text-5xl font-bold text-gray-400 group-hover:text-cyan-300">
          {heading.split('').map((l, i) => (
            <motion.span key={i} className="inline-block">{l}</motion.span>
          ))}
        </motion.span>
        <span className="block mt-2 text-base text-gray-400 group-hover:text-cyan-300">{subheading}</span>
      </div>
      <motion.img
        style={{ top, left, translateX: '-50%', translateY: '-50%' }}
        variants={{ initial: { scale: 0 }, whileHover: { scale: 1 } }}
        transition={{ type: 'spring' }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 md:h-40 md:w-56 rounded-lg object-cover"
        alt=""
      />
      <motion.div className="relative z-10 p-4">
        <FiArrowRight className="text-5xl text-cyan-400" />
      </motion.div>
    </motion.a>
  );
};

export default Tools;
