import React, { useState } from 'react';
import { motion, useDragControls, useMotionValue, useAnimate } from 'framer-motion';
import useMeasure from 'react-use-measure';
import AnimatedPage from '../components/AnimatedPage';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import { FaPython, FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';
import styles from '../pages/bubble.module.css';

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

// DragCloseDrawer component
const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] });
    const yStart = typeof y.get() === 'number' ? y.get() : 0;
    await animate('#drawer', { y: [yStart, height] });
    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ ease: 'easeInOut' }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-[#0f172a] border border-cyan-700 shadow-lg"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-[#0f172a] p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-cyan-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 sm:p-6 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Roadmaps = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Language selection data
  const languages = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'C', icon: 'fas fa-code' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
  ];

  // Roadmap nodes and edges
  const roadmaps = {
    Python: [
      { id: '1', data: { label: 'Introduction to Python' }, position: { x: 250, y: 0 }, style: { background: '#0ea5e9', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '5', data: { label: 'Functions' }, position: { x: 250, y: 400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '6', data: { label: 'Data Structures' }, position: { x: 250, y: 500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '7', data: { label: 'String Manipulation' }, position: { x: 250, y: 600 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '8', data: { label: 'Modules & Packages' }, position: { x: 250, y: 700 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '9', data: { label: 'File I/O' }, position: { x: 250, y: 800 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '10', data: { label: 'Exception Handling' }, position: { x: 250, y: 900 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '11', data: { label: 'OOP Basics' }, position: { x: 250, y: 1000 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '12', data: { label: 'OOP Advanced' }, position: { x: 250, y: 1100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '13', data: { label: 'Libraries: NumPy, pandas' }, position: { x: 250, y: 1200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '14', data: { label: 'Web Scraping' }, position: { x: 250, y: 1300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '15', data: { label: 'Web Development: Flask, Django' }, position: { x: 250, y: 1400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '16', data: { label: 'Testing: pytest' }, position: { x: 250, y: 1500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '17', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1600 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '18', data: { label: 'Projects: CLI Apps, APIs' }, position: { x: 250, y: 1700 }, style: { background: '#06b6d4', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { source: '1', target: '2', animated: true, style: { stroke: '#22d3ee' } },
      { source: '2', target: '3', animated: true, style: { stroke: '#22d3ee' } },
      { source: '3', target: '4', animated: true, style: { stroke: '#22d3ee' } },
      { source: '4', target: '5', animated: true, style: { stroke: '#22d3ee' } },
      { source: '5', target: '6', animated: true, style: { stroke: '#22d3ee' } },
      { source: '6', target: '7', animated: true, style: { stroke: '#22d3ee' } },
      { source: '7', target: '8', animated: true, style: { stroke: '#22d3ee' } },
      { source: '8', target: '9', animated: true, style: { stroke: '#22d3ee' } },
      { source: '9', target: '10', animated: true, style: { stroke: '#22d3ee' } },
      { source: '10', target: '11', animated: true, style: { stroke: '#22d3ee' } },
      { source: '11', target: '12', animated: true, style: { stroke: '#22d3ee' } },
      { source: '12', target: '13', animated: true, style: { stroke: '#22d3ee' } },
      { source: '13', target: '14', animated: true, style: { stroke: '#22d3ee' } },
      { source: '14', target: '15', animated: true, style: { stroke: '#22d3ee' } },
      { source: '15', target: '16', animated: true, style: { stroke: '#22d3ee' } },
      { source: '16', target: '17', animated: true, style: { stroke: '#22d3ee' } },
      { source: '17', target: '18', animated: true, style: { stroke: '#22d3ee' } },
    ],
    C: [
      { id: '1', data: { label: 'Introduction to C' }, position: { x: 250, y: 0 }, style: { background: '#0ea5e9', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '5', data: { label: 'Functions' }, position: { x: 250, y: 400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '6', data: { label: 'Arrays' }, position: { x: 250, y: 500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '7', data: { label: 'Strings' }, position: { x: 250, y: 600 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '8', data: { label: 'Pointers' }, position: { x: 250, y: 700 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '9', data: { label: 'Dynamic Memory' }, position: { x: 250, y: 800 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '10', data: { label: 'Structures' }, position: { x: 250, y: 900 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '11', data: { label: 'File I/O' }, position: { x: 250, y: 1000 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '12', data: { label: 'Preprocessor' }, position: { x: 250, y: 1100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '13', data: { label: 'Debugging: GDB' }, position: { x: 250, y: 1200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '14', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '15', data: { label: 'Algorithms: Sorting, Searching' }, position: { x: 250, y: 1400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '16', data: { label: 'Projects: Database, Games' }, position: { x: 250, y: 1500 }, style: { background: '#06b6d4', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { source: '1', target: '2', animated: true, style: { stroke: '#22d3ee' } },
      { source: '2', target: '3', animated: true, style: { stroke: '#22d3ee' } },
      { source: '3', target: '4', animated: true, style: { stroke: '#22d3ee' } },
      { source: '4', target: '5', animated: true, style: { stroke: '#22d3ee' } },
      { source: '5', target: '6', animated: true, style: { stroke: '#22d3ee' } },
      { source: '6', target: '7', animated: true, style: { stroke: '#22d3ee' } },
      { source: '7', target: '8', animated: true, style: { stroke: '#22d3ee' } },
      { source: '8', target: '9', animated: true, style: { stroke: '#22d3ee' } },
      { source: '9', target: '10', animated: true, style: { stroke: '#22d3ee' } },
      { source: '10', target: '11', animated: true, style: { stroke: '#22d3ee' } },
      { source: '11', target: '12', animated: true, style: { stroke: '#22d3ee' } },
      { source: '12', target: '13', animated: true, style: { stroke: '#22d3ee' } },
      { source: '13', target: '14', animated: true, style: { stroke: '#22d3ee' } },
      { source: '14', target: '15', animated: true, style: { stroke: '#22d3ee' } },
      { source: '15', target: '16', animated: true, style: { stroke: '#22d3ee' } },
    ],
    'C++': [
      { id: '1', data: { label: 'Introduction to C++' }, position: { x: 250, y: 0 }, style: { background: '#0ea5e9', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '5', data: { label: 'Functions' }, position: { x: 250, y: 400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '6', data: { label: 'Arrays & Strings' }, position: { x: 250, y: 500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '7', data: { label: 'Pointers & References' }, position: { x: 250, y: 600 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '8', data: { label: 'OOP Basics' }, position: { x: 250, y: 700 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '9', data: { label: 'OOP Advanced' }, position: { x: 250, y: 800 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '10', data: { label: 'STL' }, position: { x: 250, y: 900 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '11', data: { label: 'Algorithms' }, position: { x: 250, y: 1000 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '12', data: { label: 'File I/O' }, position: { x: 250, y: 1100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '13', data: { label: 'Exception Handling' }, position: { x: 250, y: 1200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '14', data: { label: 'Templates' }, position: { x: 250, y: 1300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '15', data: { label: 'Debugging: GDB, Valgrind' }, position: { x: 250, y: 1400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '16', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '17', data: { label: 'Competitive Programming' }, position: { x: 250, y: 1600 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '18', data: { label: 'Projects: Console Apps, Algorithms' }, position: { x: 250, y: 1700 }, style: { background: '#06b6d4', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { source: '1', target: '2', animated: true, style: { stroke: '#22d3ee' } },
      { source: '2', target: '3', animated: true, style: { stroke: '#22d3ee' } },
      { source: '3', target: '4', animated: true, style: { stroke: '#22d3ee' } },
      { source: '4', target: '5', animated: true, style: { stroke: '#22d3ee' } },
      { source: '5', target: '6', animated: true, style: { stroke: '#22d3ee' } },
      { source: '6', target: '7', animated: true, style: { stroke: '#22d3ee' } },
      { source: '7', target: '8', animated: true, style: { stroke: '#22d3ee' } },
      { source: '8', target: '9', animated: true, style: { stroke: '#22d3ee' } },
      { source: '9', target: '10', animated: true, style: { stroke: '#22d3ee' } },
      { source: '10', target: '11', animated: true, style: { stroke: '#22d3ee' } },
      { source: '11', target: '12', animated: true, style: { stroke: '#22d3ee' } },
      { source: '12', target: '13', animated: true, style: { stroke: '#22d3ee' } },
      { source: '13', target: '14', animated: true, style: { stroke: '#22d3ee' } },
      { source: '14', target: '15', animated: true, style: { stroke: '#22d3ee' } },
      { source: '15', target: '16', animated: true, style: { stroke: '#22d3ee' } },
      { source: '16', target: '17', animated: true, style: { stroke: '#22d3ee' } },
      { source: '17', target: '18', animated: true, style: { stroke: '#22d3ee' } },
    ],
    Java: [
      { id: '1', data: { label: 'Introduction to Java' }, position: { x: 250, y: 0 }, style: { background: '#0ea5e9', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '5', data: { label: 'Methods' }, position: { x: 250, y: 400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '6', data: { label: 'Arrays' }, position: { x: 250, y: 500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '7', data: { label: 'Strings' }, position: { x: 250, y: 600 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '8', data: { label: 'OOP Basics' }, position: { x: 250, y: 700 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '9', data: { label: 'OOP Advanced' }, position: { x: 250, y: 800 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '10', data: { label: 'Collections' }, position: { x: 250, y: 900 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '11', data: { label: 'Exception Handling' }, position: { x: 250, y: 1000 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '12', data: { label: 'File I/O' }, position: { x: 250, y: 1100 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '13', data: { label: 'Multithreading' }, position: { x: 250, y: 1200 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '14', data: { label: 'Java Libraries: JDBC, JavaFX' }, position: { x: 250, y: 1300 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '15', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1400 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '16', data: { label: 'Build Tools: Maven/Gradle' }, position: { x: 250, y: 1500 }, style: { background: '#1e293b', border: '1px solid #22d3ee', padding: 10, color: '#fff' } },
      { id: '17', data: { label: 'Projects: GUI Apps, Spring Boot APIs' }, position: { x: 250, y: 1600 }, style: { background: '#06b6d4', color: '#fff', border: '1px solid #22d3ee', padding: 10 } },
      { source: '1', target: '2', animated: true, style: { stroke: '#22d3ee' } },
      { source: '2', target: '3', animated: true, style: { stroke: '#22d3ee' } },
      { source: '3', target: '4', animated: true, style: { stroke: '#22d3ee' } },
      { source: '4', target: '5', animated: true, style: { stroke: '#22d3ee' } },
      { source: '5', target: '6', animated: true, style: { stroke: '#22d3ee' } },
      { source: '6', target: '7', animated: true, style: { stroke: '#22d3ee' } },
      { source: '7', target: '8', animated: true, style: { stroke: '#22d3ee' } },
      { source: '8', target: '9', animated: true, style: { stroke: '#22d3ee' } },
      { source: '9', target: '10', animated: true, style: { stroke: '#22d3ee' } },
      { source: '10', target: '11', animated: true, style: { stroke: '#22d3ee' } },
      { source: '11', target: '12', animated: true, style: { stroke: '#22d3ee' } },
      { source: '12', target: '13', animated: true, style: { stroke: '#22d3ee' } },
      { source: '13', target: '14', animated: true, style: { stroke: '#22d3ee' } },
      { source: '14', target: '15', animated: true, style: { stroke: '#22d3ee' } },
      { source: '15', target: '16', animated: true, style: { stroke: '#22d3ee' } },
      { source: '16', target: '17', animated: true, style: { stroke: '#22d3ee' } },
    ],
  };

  const languageIcons = {
    Python: FaPython,
    Java: FaJava,
    C: SiC,
    'C++': SiCplusplus,
  };

  const Card = ({ title, Icon, onClick }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full p-4 rounded-xl bg-[#1e293b] border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
      style={{ minHeight: 120 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-cyan-700/30 group-hover:text-cyan-400/50 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-3xl text-cyan-300 group-hover:text-white relative z-10 transition-colors duration-300" />
      <BubbleText
        text={title}
        className="font-medium text-lg text-white group-hover:text-white relative z-10 duration-300"
      />
      <BubbleText
        text="Roadmap"
        className="text-gray-400 group-hover:text-gray-200 relative z-10 duration-300 text-sm"
      />
    </motion.button>
  );

  // Open drawer when language is selected
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setDrawerOpen(true);
  };

  // Close drawer and reset language
  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedLanguage(null), 300); // Wait for animation
  };

  return (
    <AnimatedPage>
      {/* Font Awesome for language icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-12"
          >
            <BubbleText
              text="Learn to Code with Our Roadmaps"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300 mb-6"
            />
            <BubbleText
              text=""
              className="text-gray-400 text-sm sm:text-down md:text-lg max-w-2xl mx-auto"
            />
          </motion.div>

          {/* Language Selection as Cards */}
          {!selectedLanguage && (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 mb-12 sm:mb-16 lg:mb-20">
              {languages.map((lang, idx) => {
                const Icon = languageIcons[lang.name] || FaPython;
                return (
                  <Card
                    key={lang.name}
                    title={lang.name}
                    Icon={Icon}
                    onClick={() => handleLanguageChange(lang.name)}
                  />
                );
              })}
            </div>
          )}

          {/* Roadmap Drawer - only show after language is selected */}
          <DragCloseDrawer open={drawerOpen} setOpen={handleDrawerClose}>
            {selectedLanguage && (
              <div className="bg-[#0f172a] p-4 sm:p-6 rounded-xl shadow-lg border border-cyan-700">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-6 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 border border-cyan-700 font-semibold text-sm sm:text-base"
                  onClick={handleDrawerClose}
                >
                  ← Back to Languages
                </motion.button>
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-6 flex items-center space-x-2">
                  {languageIcons[selectedLanguage] && (
                    <span className="text-2xl">
                      {React.createElement(languageIcons[selectedLanguage])}
                    </span>
                  )}
                  <BubbleText text={`${selectedLanguage} Learning Roadmap`} />
                </h3>
                <div style={{ height: '1800px', width: '100%' }}>
                  <ReactFlow
                    nodes={roadmaps[selectedLanguage].filter((item) => item.id)}
                    edges={roadmaps[selectedLanguage].filter((item) => item.source)}
                    fitView
                    style={{ background: '#0f172a' }}
                  >
                    <Background color="#22d3ee" gap={16} />
                    <Controls className="bg-[#1e293b] border border-cyan-700 text-white" />
                  </ReactFlow>
                </div>
              </div>
            )}
          </DragCloseDrawer>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Roadmaps;