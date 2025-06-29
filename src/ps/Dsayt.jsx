// src/components/Dsayt.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const youtubeVideos = [
  {
    id: '4_HOnhB64Dg',
    title: 'DSA Full Course - Apna College',
    channel: 'Apna College'
  },
  {
    id: 'RBSGKlAvoiM',
    title: 'DSA Crash Course for Interviews',
    channel: 'CodeHelp - by Babbar'
  },
  {
    id: '8hly31xKli0',
    title: 'DSA Basics to Advanced',
    channel: 'Simplilearn'
  },
  
  {
    id: 'B31LgI4Y4DQ',
    title: 'Data Structures You Must Know',
    channel: 'Fireship'
  }
];

const VideoCard = ({ video, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    onClick={() => onClick(video.id)}
    className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative pb-[66.66%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-xl text-gray-800">{video.title}</h3>
      <p className="text-sm text-gray-500 mt-1">By {video.channel}</p>
    </div>
  </motion.div>
);

const VideoModal = ({ videoId, onClose }) => (
  <AnimatePresence>
    {videoId && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl aspect-video"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Dsayt = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-600 mb-8 text-center"
      >
        📘 Data Structures YouTube Tutorials
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Watch the best YouTube tutorials explaining core Data Structures concepts. Click any video to view it in a popup player.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {youtubeVideos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} onClick={setSelectedVideo} />
        ))}
      </div>

      <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default Dsayt;