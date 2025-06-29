/**
 * File: src/components/CodingResources.jsx
 */
import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { BookOpenIcon, PencilIcon, StarIcon } from '@heroicons/react/24/outline';
import { Document, Page, pdfjs } from 'react-pdf';
import PythonTutorial from '../tutorials/PythonTutorial';
import CTutorial from '../tutorials/CTutorial';
import CppTutorial from '../tutorials/CppTutorial';
import JavaTutorial from '../tutorials/JavaTutorial';
import Git from '../tutorials/git&gihub';
import DSATutorial from '../tutorials/Dsa';
import FlaskTutorial from '../tutorials/FlaskTutorial';
import FullStackTutorial from '../tutorials/FullStackTutorial';
import FrontendTutorial from '../tutorials/frontend';
import BackendTutorial from '../tutorials/backend';
import ReactTutorial from '../tutorials/ReactTutorial';
import BackButton from '../components/BackButton';
import StudentInfoCard from '../components/StudentInfoCard';
import Cint from '../tutorials/Cint';
import Cppint from '../tutorials/Cppint';
import Javaint from '../tutorials/Javaint';
import Dsaint from '../tutorials/Dsaint';
import PythonInterviewQuestions from '../tutorials/PythonInterviewQuestions';
import FlaskProjects from '../tutorials/flaskproject';
import FrontendProjects from '../tutorials/frontendprojects';
import Fullstackprojects from '../tutorials/Fullstackprojects';
import Backendprojects from '../tutorials/backendprojects';
import Reactproject from '../tutorials/Reactproject';
import Dsaps from '../ps/Dsaps';
import Cppps from '../ps/Cppps';
import cps from '../ps/cps';
import Javaps from '../ps/Javaps';
import Pythonps from '../ps/Pythonps';
import Javayt from '../ps/Javayt';
import Dsayt from '../ps/Dsayt';
import pyt from '../ps/pyt';
import cyt from '../ps/cyt';
import cpyt from '../ps/cpsyt';
import Cpq from '../Quiz/Cpq';
import Cq from '../Quiz/Cq';
import Dsaq from '../Quiz/Dsaq';
import Javaq from '../Quiz/Javaq';
import Pyq from '../Quiz/Pyq';
import { FaPython, FaJava, FaGitAlt, FaReact, FaHtml5, FaLaptopCode, FaQuestion } from 'react-icons/fa';
import { SiC, SiCplusplus, SiFlask, SiNodedotjs, SiGraphql } from 'react-icons/si';
import styles from './bubble.module.css'; // Import BubbleText styles


// BubbleText component
const BubbleText = ({ text, className = '' }) => (
  <span className={className}>
    {text.split('').map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

// Set up react-pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Map tutorial URLs to components
const tutorialComponents = {
  '/pythontutorial': PythonTutorial,
  '/ctutorial': CTutorial,
  '/cpptutorial': CppTutorial,
  '/javatutorial': JavaTutorial,
  '/flasktutorial': FlaskTutorial,
  '/gittutorial': Git,
  '/dsatutorial': DSATutorial,
  '/frontendtutorial': FrontendTutorial,
  '/backendtutorial': BackendTutorial,
  '/reacttutorial': ReactTutorial,
  '/fullstacktutorial': FullStackTutorial,
  '/pythonint': PythonInterviewQuestions,
  '/cint': Cint,
  '/cppint': Cppint,
  '/javaint': Javaint,
  '/dsaint': Dsaint,
  '/flaskproject': FlaskProjects,
  '/frontendprojects': FrontendProjects,
  '/reactproject': Reactproject,
  '/backendprojects': Backendprojects,
  '/fullstackproject': Fullstackprojects,
  '/pythonps': Pythonps,
  '/javaps': Javaps,
  '/cps': cps,
  '/cpps': Cppps,
  '/dsaps': Dsaps,
  '/dsayt': Dsayt,
  '/javayt': Javayt,
  '/pyt': pyt,
  '/cyt': cyt,
  '/cpyt': cpyt,
  '/pyq': Pyq,
  '/javaq': Javaq,
  '/dsaq': Dsaq,
  '/cq': Cq,
  '/cpq': Cpq,
};

// Map language icons
const languageIcons = {
  Python: <FaPython className="text-[#3776AB] text-xl sm:text-2xl" />,           // Python Blue
  C: <SiC className="text-[#A8B9CC] text-xl sm:text-2xl" />,                     // C Light Blue
  'C++': <SiCplusplus className="text-[#00599C] text-xl sm:text-2xl" />,        // C++ Blue
  Java: <FaJava className="text-[#007396] text-xl sm:text-2xl" />,              // Java Blue
  Flask: <SiFlask className="text-[#000000] text-xl sm:text-2xl" />,            // Flask Black
  Git: <FaGitAlt className="text-[#F05032] text-xl sm:text-2xl" />,             // Git Orange
  DSA: <SiGraphql className="text-[#E10098] text-xl sm:text-2xl" />,            // GraphQL Pink
  Frontend: <FaHtml5 className="text-[#E34F26] text-xl sm:text-2xl" />,         // HTML5 Orange
  Backend: <SiNodedotjs className="text-[#339933] text-xl sm:text-2xl" />,      // Node.js Green
  React: <FaReact className="text-[#61DAFB] text-xl sm:text-2xl" />,            // React Cyan
  'Full Stack': <FaLaptopCode className="text-[#0F172A] text-xl sm:text-2xl" /> // Dark Slate (Custom)
};


// Programming and Domain languages
const programmingLanguages = [
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'C', icon: 'fas fa-code' },
  { name: 'C++', icon: 'fas fa-code' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'DSA', icon: 'fas fa-database' },
];

const domainLanguages = [
  { name: 'Flask', icon: 'fab fa-flask' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Frontend', icon: 'fab fa-html5' },
  { name: 'Backend', icon: 'fas fa-server' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Full Stack', icon: 'fas fa-laptop-code' },
];

const CodingResources = () => {
  // State management
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const codingData = {
    Python: {
      resources: [
        { name: 'Python Tutorial', url: '/pythontutorial', type: 'tutorial' },
        { name: 'Video Tutorial', url: '/pyt', type: 'tutorial' },
        { name: 'Problem Statements', url: '/pythonps', type: 'practice' },
        { name: 'Top 100 Placement Interview Questions', url: '/pythonint', type: 'placement' },
        { name: 'Python Quiz', url: '/pyq', type: 'quiz' },
      ],
    },
    C: {
      resources: [
        { name: 'C Tutorial', url: '/ctutorial', type: 'tutorial' },
        { name: 'Video Tutorial', url: '/cyt', type: 'tutorial' },
        { name: 'Problem Statements', url: '/cps', type: 'practice' },
        { name: 'Interview Questions', url: '/cint', type: 'placement' },
        { name: 'C Quiz', url: '/cq', type: 'quiz' },
      ],
    },
    'C++': {
      resources: [
        { name: 'C++ Tutorial', url: '/cpptutorial', type: 'tutorial' },
        { name: 'Video Tutorial', url: '/cpyt', type: 'tutorial' },
        { name: 'Problem Statements', url: '/cpps', type: 'practice' },
        { name: 'Interview Questions', url: '/cppint', type: 'placement' },
        { name: 'C++ Quiz', url: '/cpq', type: 'quiz' },
      ],
    },
    Java: {
      resources: [
        { name: 'Java Tutorial', url: '/javatutorial', type: 'tutorial' },
        { name: 'Video Tutorial', url: '/javayt', type: 'tutorial' },
        { name: 'Problem Statements', url: '/javaps', type: 'practice' },
        { name: 'Interview Questions', url: '/javaint', type: 'placement' },
        { name: 'Java Quiz', url: '/javaq', type: 'quiz' },
      ],
    },
    DSA: {
      resources: [
        { name: 'DSA Tutorial', url: '/dsatutorial', type: 'tutorial' },
        { name: 'Video Tutorial', url: '/dsayt', type: 'tutorial' },
        { name: 'Problem Statements', url: '/dsaps', type: 'practice' },
        { name: 'Interview Questions', url: '/dsaint', type: 'placement' },
        { name: 'DSA Quiz', url: '/dsaq', type: 'quiz' },
      ],
    },
    Flask: {
      resources: [
        { name: 'Flask Tutorial', url: '/flasktutorial', type: 'tutorial' },
        { name: 'Flask Project Ideas', url: '/flaskproject', type: 'tutorial' },
      ],
    },
    Git: {
      resources: [
        { name: 'Git & GitHub Tutorial', url: '/gittutorial', type: 'tutorial' },
      ],
    },
    Frontend: {
      resources: [
        { name: 'Frontend Tutorial', url: '/frontendtutorial', type: 'tutorial' },
        { name: 'Frontend Project Ideas', url: '/frontendprojects', type: 'tutorial' },
      ],
    },
    Backend: {
      resources: [
        { name: 'Backend Tutorial', url: '/backendtutorial', type: 'tutorial' },
        { name: 'Backend Project Ideas', url: '/backendprojects', type: 'tutorial' },
      ],
    },
    React: {
      resources: [
        { name: 'React Tutorial', url: '/reacttutorial', type: 'tutorial' },
        { name: 'React Project Ideas', url: '/reactproject', type: 'tutorial' },
      ],
    },
    'Full Stack': {
      resources: [
        { name: 'Full Stack Tutorial', url: '/fullstacktutorial', type: 'tutorial' },
        { name: 'Full Stack Project Ideas', url: '/fullstackproject', type: 'tutorial' },
      ],
    },
  };

  // Handle language selection
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setSelectedResource(codingData[lang]?.resources[0] || null);
    setPageNumber(1);
  };

  // Handle resource selection
  const handleResourceChange = (resource) => {
    setSelectedResource(resource);
    setPageNumber(1);
  };

  // PDF load success callback
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Get icon for resource type
  const getResourceIcon = (type) => {
    switch (type) {
      case 'tutorial':
        return <BookOpenIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />;
      case 'practice':
        return <PencilIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />;
      case 'placement':
        return <StarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />;
      case 'quiz':
        return <FaQuestion className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />;
      default:
        return null;
    }
  };

  // Get the tutorial component
  const TutorialComponent = selectedResource?.url ? tutorialComponents[selectedResource.url] : null;

  // AnimatedCompanyGrid component (placeholder)
  const AnimatedCompanyGrid = () => null;

  // Animation constants
  const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
  const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
  const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
  const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

  const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
  };

  const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
  };

  // CardBox for animated language/domain_album cards
  const CardBox = ({ label, icon, onClick }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e) => {
      const box = e.target.getBoundingClientRect();
      const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" };
      const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" };
      const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" };
      const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" };
      const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort((a, b) => a.proximity - b.proximity);
      return sortedProximity[0].side;
    };

    const handleMouseEnter = (e) => {
      const side = getNearestSide(e);
      animate(scope.current, {
        clipPath: ENTRANCE_KEYFRAMES[side],
      });
    };

    const handleMouseLeave = (e) => {
      const side = getNearestSide(e);
      animate(scope.current, {
        clipPath: EXIT_KEYFRAMES[side],
      });
    };

    return (
      <motion.div
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex flex-col items-center space-y-2 px-4 py-6 rounded-xl bg-[#1e293b] border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 w-full cursor-pointer h-full min-h-[100px] sm:min-h-[120px] md:min-h-[140px] justify-center"
        tabIndex={0}
        aria-label={`Select ${label} resources`}
      >
        {icon && <span className="text-2xl sm:text-3xl">{icon}</span>}
        <BubbleText
          text={label}
          className="relative text-white font-semibold text-base sm:text-lg md:text-xl tracking-tight"
        />
        <div
          ref={scope}
          style={{ clipPath: BOTTOM_RIGHT_CLIP }}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-800 text-white flex items-center justify-center font-bold text-base sm:text-lg md:text-xl tracking-tight opacity-90 pointer-events-none"
        >
          <BubbleText text={label} />
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatedPage>
      {/* Font Awesome for fallback icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Main Section */}
      <section className="min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-20 text-white">
        <div className="max-w-full sm:max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <BubbleText
              text="Unlock Your Coding Potential"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300 mb-4"
            />
            <BubbleText
              text=""
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
            />
            <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center">
              <AnimatedCompanyGrid />
            </div>
          </motion.div>

          {/* Languageਕ Language Tabs as Individual Cards */}
          {!selectedLanguage && (
            <div className="mb-8 sm:mb-12 lg:mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-center items-stretch">
              {/* Programming Languages */}
              {programmingLanguages.map((lang, idx) => (
                <CardBox
                  key={lang.name}
                  label={lang.name}
                  icon={languageIcons[lang.name] || <i className={`${lang.icon} text-2xl sm:text-3xl text-cyan-300`}></i>}
                  onClick={() => handleLanguageChange(lang.name)}
                />
              ))}
              {/* Domain Languages */}
              {domainLanguages.map((lang, idx) => (
                <CardBox
                  key={lang.name}
                  label={lang.name}
                  icon={languageIcons[lang.name] || <i className={`${lang.icon} text-2xl sm:text-3xl text-cyan-300`}></i>}
                  onClick={() => handleLanguageChange(lang.name)}
                />
              ))}
            </div>
          )}

          {/* Back Button */}
          {selectedLanguage && (
            <div className="mb-6 sm:mb-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 border border-cyan-700 font-semibold text-sm sm:text-base transition"
                onClick={() => { setSelectedLanguage(null); setSelectedResource(null); }}
              >
                ← Back to Resource Categories
              </motion.button>
            </div>
          )}

          {/* Content Grid */}
          {selectedLanguage && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Sidebar: Resource List */}
              <motion.div
                key={selectedLanguage}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 bg-[#0f172a] border border-cyan-700 rounded-xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-4"
              >
                <BubbleText
                  text={`${selectedLanguage} Resources`}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-4 sm:mb-6"
                />
                <ul className="space-y-2 sm:space-y-3">
                  {codingData[selectedLanguage]?.resources?.map((resource, idx) => (
                    <motion.li
                      key={resource.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <button
                        onClick={() => handleResourceChange(resource)}
                        className={`w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg text-white hover:bg-cyan-700/50 transition-all duration-300 text-sm sm:text-base border ${
                          selectedResource?.name === resource.name
                            ? 'bg-cyan-600 border-cyan-700'
                            : 'bg-[#1e293b] border-gray-700'
                        } focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black`}
                        aria-label={`View ${resource.name}`}
                      >
                        {getResourceIcon(resource.type)}
                        <BubbleText text={resource.name} className="truncate" />
                      </button>
                    </motion.li>
                  )) || (
                    <li className="text-gray-400 text-center text-sm sm:text-base">No resources available</li>
                  )}
                </ul>
              </motion.div>

              {/* Main Content: Tutorial or PDF Viewer */}
              <motion.div
                key={selectedResource?.name || 'no-resource'}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-[#0f172a] border border-cyan-700 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white flex items-center space-x-2 sm:space-x-3">
                    {languageIcons[selectedLanguage]}
                    <BubbleText
                      text={selectedResource ? selectedResource.name : 'Select a Resource'}
                      className="truncate"
                    />
                  </h3>
                  {selectedResource?.pdf && numPages && (
                    <div className="flex items-center space-x-2 sm:space-x-3 bg-[#1e293b] p-2 sm:p-3 rounded-lg mt-4 sm:mt-0">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                        disabled={pageNumber === 1}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-cyan-600 rounded-lg shadow-sm disabled:opacity-50 hover:bg-cyan-700 transition-all duration-200 text-xs sm:text-sm text-white border border-cyan-700"
                        aria-label="Previous page"
                      >
                        Prev
                      </motion.button>
                      <span className="text-xs sm:text-sm font-medium text-gray-400">
                        Page {pageNumber} of {numPages}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
                        disabled={pageNumber === numPages}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-cyan-600 rounded-lg shadow-sm disabled:opacity-50 hover:bg-cyan-700 transition-all duration-200 text-xs sm:text-sm text-white border border-cyan-700"
                        aria-label="Next page"
                      >
                        Next
                      </motion.button>
                    </div>
                  )}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedResource?.name || 'no-resource'}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="border border-cyan-700 rounded-lg overflow-auto max-h-[calc(100vh-120px)] sm:max-h-[calc(100vh-160px)] lg:max-h-[calc(100vh-200px)] p-4 sm:p-6 bg-[#1e293b]"
                  >
                    {selectedResource ? (
                      selectedResource.pdf ? (
                        <div className="overflow-x-auto">
                          <Document
                            file={selectedResource.pdf}
                            onLoadSuccess={onDocumentLoadSuccess}
                            className="flex justify-center"
                            loading={
                              <div className="p-4 sm:p-6 text-center">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="inline-block h-6 w-6 sm:h-8 sm:w-8 border-4 border-t-cyan-300 border-gray-700 rounded-full"
                                />
                                <p className="mt-2 text-gray-400 text-sm sm:text-base">Loading PDF...</p>
                              </div>
                            }
                            error={<p className="p-4 sm:p-6 text-red-500 text-sm sm:text-base">Failed to load PDF. Please check the file path.</p>}
                          >
                            <Page
                              pageNumber={pageNumber}
                              renderTextLayer={true}
                              renderAnnotationLayer={true}
                              className="shadow-md rounded-lg"
                              width={Math.min(900, window.innerWidth - 40)}
                            />
                          </Document>
                        </div>
                      ) : TutorialComponent ? (
                        <div className="prose prose-sm sm:prose-base max-w-none text-gray-200">
                          <TutorialComponent />
                        </div>
                      ) : (
                        <p className="p-4 sm:p-6 text-red-500 text-center text-sm sm:text-base">
                          Tutorial component not found for {selectedResource.url}.
                        </p>
                      )
                    ) : (
                      <div className="p-4 sm:p-6 text-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <p className="text-gray-400 text-sm sm:text-lg font-medium">
                            Select a resource to start your learning journey!
                          </p>
                          <motion.div
                            className="mt-4 h-12 w-12 sm:h-16 sm:w-16 mx-auto text-cyan-300"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            {languageIcons[selectedLanguage]}
                          </motion.div>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          )}

         {/* Student Info Card Section - Show only when no language is selected */}
{!selectedLanguage && (
  <div className="mt-12 sm:mt-16 lg:mt-24">
    <StudentInfoCard />
  </div>
)}

        </div>
      </section>
    </AnimatedPage>
  );
};

export default CodingResources;