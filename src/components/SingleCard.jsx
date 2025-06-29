// import React, { useEffect, useRef, useState } from 'react';
// import styles from './SingleCard.module.css';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaHome, FaMapSigns, FaBook, FaBuilding, FaUserGraduate, FaCode, FaUsers, FaUserPlus } from 'react-icons/fa';

// // Card links with icons
// const cardItems = [
//   { to: '/', label: 'Home', icon: <FaHome /> },
//   { to: '/r23', label: 'R23', icon: <FaBook /> },
//   { to: '/roadmaps', label: 'Roadmaps', icon: <FaMapSigns /> },
//   { to: '/resources', label: 'Resources', icon: <FaBook /> },
//   { to: '/companies', label: 'Placements', icon: <FaBuilding /> },
//   { to: '/studentportal', label: 'Studentportal', icon: <FaUserGraduate /> },
//   { to: '/compiler', label: 'Compiler', icon: <FaCode /> },
//   { to: '/team', label: 'Team', icon: <FaUsers /> },
// ];

// // Container fade-up
// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//       when: 'beforeChildren',
//       staggerChildren: 0.12,
//     },
//   },
// };

// // Fade-up for text elements (badge, title, subtitle)
// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// // Each card in the grid
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: 'easeOut' },
//   },
// };

// const SingleCard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   // Hide back button on home page
//   const showBack = location.pathname !== '/';

//   // Floating animation for cards
//   const floatVariants = {
//     initial: { y: 0 },
//     animate: {
//       y: [0, -10, 0],
//       transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
//     },
//   };

//   return (
//     <div className="w-full px-4 py-8 flex flex-col items-center justify-center min-h-screen">
//       {/* Main Card Content */}
//       <motion.div
//         className={styles.wrapper}
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {showBack && (
//           <button
//             onClick={() => navigate(-1)}
//             style={{
//               position: 'fixed',
//               top: 18,
//               left: 18,
//               zIndex: 2000,
//               background: '#fff',
//               color: '#2563eb',
//               border: '1px solid #e0e7ef',
//               borderRadius: 8,
//               padding: '0.5rem 1.1rem 0.5rem 0.8rem',
//               fontSize: '1rem',
//               fontWeight: 600,
//               display: 'flex',
//               alignItems: 'center',
//               boxShadow: '0 2px 8px #2563eb11',
//               cursor: 'pointer',
//               transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
//             }}
//           >
//             <FaArrowLeft style={{ marginRight: 6 }} /> Back
//           </button>
//         )}
//         <div className={styles.container}>
//           <motion.span className={styles.badge} variants={textVariants}>
//             TECHHUB
//           </motion.span>

//           <motion.h1 className={styles.title} variants={textVariants}>
//             <motion.span
//               style={{ display: 'inline-block' }}
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: { transition: { staggerChildren: 0.06 } },
//               }}
//             >
//               {Array.from('Start carrier with TECHHUB').map((char, i) => {
//                 // Highlight 'TECHHUB' (positions 19-25) in blue
//                 const isTechHub = i >= 19;
//                 return (
//                   <motion.span
//                     key={i}
//                     variants={{
//                       hidden: { opacity: 0, y: 10 },
//                       visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
//                     }}
//                     style={
//                       isTechHub
//                         ? { display: 'inline-block', color: '#2563eb', fontWeight: 800 }
//                         : { display: 'inline-block' }
//                     }
//                   >
//                     {char}
//                   </motion.span>
//                 );
//               })}
//             </motion.span>
//           </motion.h1>

//           <motion.p className={styles.subtitle} variants={textVariants}>
//             TechHub helps B.Tech students and developers build projects, learn faster,
//             and prepare for placements using AI-powered tools and curated resources.
//           </motion.p>

//           <motion.div className={styles.grid} variants={containerVariants} layout>
//             {cardItems.map((item, index) => (
//               <motion.div
//                 key={item.label}
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.12, rotate: 3, boxShadow: '0 8px 32px #38bdf855' }}
//                 whileTap={{ scale: 0.96, rotate: -2 }}
//                 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}
//                 initial={{ y: 0 }}
//                 animate={{ y: [0, -10, 0] }}
//                 layout
//                 transition={{ delay: 0.2 + index * 0.1, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <NavLink to={item.to} className={styles.card} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                   <span className={styles.icon} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 8 }}>
//                     {item.icon}
//                   </span>
//                   <p className={styles.label}>{item.label}</p>
//                 </NavLink>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SingleCard;


import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const IMG_PADDING = 12;

export const TextParallaxContentExample = () => {
  const academicsCode = `/**\n * File: src/components/CodingResources.jsx\n */\nimport React, { useState } from 'react';\nimport { motion, AnimatePresence } from 'framer-motion';\nimport AnimatedPage from '../components/AnimatedPage';\nimport { BookOpenIcon, PencilIcon, StarIcon } from '@heroicons/react/24/outline';\nimport { Document, Page, pdfjs } from 'react-pdf';\nimport PythonTutorial from '../tutorials/PythonTutorial';\nimport CTutorial from '../tutorials/CTutorial';\nimport CppTutorial from '../tutorials/CppTutorial';\nimport JavaTutorial from '../tutorials/JavaTutorial';\nimport Git from '../tutorials/git&gihub';\nimport DSATutorial from '../tutorials/Dsa';\nimport FlaskTutorial from '../tutorials/FlaskTutorial';\nimport FullStackTutorial from '../tutorials/FullStackTutorial';\nimport FrontendTutorial from '../tutorials/frontend';\nimport BackendTutorial from '../tutorials/backend';\nimport ReactTutorial from '../tutorials/ReactTutorial';\nimport BackButton from '../components/BackButton';\n// ...rest of Academics.jsx code...`;

  const navigate = useNavigate();
  const [showAcademicsCode, setShowAcademicsCode] = useState(false);

  return (
    <div className="bg-black text-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Start career with TECHHUB."
      >
        <ExampleContent onLearnMore={() => navigate("/academics")} hideButton />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Resources for developers."
      >
        <ExampleContent
          customText={`Welcome to the Resources page — your personalized library for academic and technical growth. This section offers a wide range of programming resources covering languages like C, C++, Java, Python, JavaScript, and more to strengthen your coding fundamentals and problem-solving skills.\n\nDive deeper into your interests with domain-specific resources across fields such as Web Development, Data Science, Artificial Intelligence, Cybersecurity, Cloud Computing, and IoT.\n\nWhether you're preparing for exams, upskilling for internships, or working on real-world projects, our organized and regularly updated materials help you learn faster and smarter.`}
          onLearnMore={() => navigate("/academics")}
        />
        {showAcademicsCode && (
          <div className="mt-8 bg-gray-900 text-white rounded-xl p-6 overflow-x-auto mx-auto max-w-5xl px-4">
            <pre className="whitespace-pre-wrap text-xs md:text-base">
              {academicsCode}
            </pre>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
              onClick={() => setShowAcademicsCode(false)}
            >
              Close
            </button>
          </div>
        )}
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Placement for the students."
      >
        <ExampleContent onLearnMore={() => navigate("/placements")} />
      </TextParallaxContent>
    </div>
  );
};

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative min-h-[90vh] sm:min-h-screen">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        top: IMG_PADDING,
        scale,
      }}
      className={`
        sticky z-0 overflow-hidden rounded-3xl w-full
        h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[95vh]
        min-h-[300px]
      `}
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/60"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white text-center"
    >
      <p className="mb-2 text-xl md:mb-4 md:text-3xl text-cyan-400">
        {subheading}
      </p>
      <p className="text-4xl font-bold md:text-7xl text-white">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ customText, onLearnMore, hideButton }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-gray-400 md:text-2xl">
        {customText ||
          `TechHub is your all-in-one learning and preparation platform designed specifically for students stepping into the world of technology. Whether you're gearing up for placements, mastering a programming language, or exploring the latest development tools, TechHub provides curated resources to guide your journey. From coding roadmaps and interview prep kits to technical blogs, project ideas, and mock assessments — everything you need to learn, practice, and grow is right here. Empower your learning with expert-led content, organized by subject, semester, and skill level, all in one hub built for student success.`}
      </p>
      {!hideButton && (
        <button
          className="w-full rounded bg-cyan-600 px-9 py-4 text-xl text-white transition-colors hover:bg-cyan-700 md:w-fit"
          onClick={onLearnMore}
        >
          Learn more <FiArrowUpRight className="inline" />
        </button>
      )}
    </div>
  </div>
);

export default TextParallaxContentExample;
