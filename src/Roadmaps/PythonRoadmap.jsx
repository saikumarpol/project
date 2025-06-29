// src/components/PythonRoadmap.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import ReactFlow, { Background, Controls } from 'reactflow';
import { roadmaps } from '../data/roadmaps';

const PythonRoadmap = () => {
  return (
    <AnimatedPage>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="min-h-screen bg-backdrop py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Python Learning Roadmap
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this step-by-step roadmap to master Python for placements.
            </p>
          </motion.div>

          {/* Flowchart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div style={{ height: '1800px', width: '100%' }}>
              <ReactFlow
                nodes={roadmaps.Python.filter((item) => item.id)}
                edges={roadmaps.Python.filter((item) => item.source)}
                fitView
                style={{ background: '#f9fafb' }}
              >
                <Background color="#d1d5db" gap={16} />
                <Controls />
              </ReactFlow>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <Link
              to="/roadmaps"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
              aria-label="Back to Roadmaps"
            >
              Back to Roadmaps
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default PythonRoadmap;