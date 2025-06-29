import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

// Mock data (unchanged)
const branches = ['AI', 'AID', 'CSM', 'Cyber', 'CSD'];
const semesters = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];

const syllabusData = {
  AI: {
    '1-1': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1Arqyr_YWowyPQwiFwXEfvwx_0D56-FiT',
          description: 'Complete syllabus for AI 1-1',
        },
      ],
    },
    '1-2': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1rZJ9Uw4PH8q54g2QjJm6IahEHhLsNrj9',
          description: 'Complete syllabus for AI 1-2',
        },
      ],
    },
  },
  AID: {
    '1-1': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1Arqyr_YWowyPQwiFwXEfvwx_0D56-FiT',
          description: 'Complete syllabus for AID 1-1',
        },
      ],
    },
    '1-2': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1rZJ9Uw4PH8q54g2QjJm6IahEHhLsNrj9',
          description: 'Complete syllabus for AID 1-2',
        },
      ],
    },
  },
  CSM: {
    '1-1': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1Arqyr_YWowyPQwiFwXEfvwx_0D56-FiT',
          description: 'Complete syllabus for CSM 1-1',
        },
      ],
    },
    '1-2': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1rZJ9Uw4PH8q54g2QjJm6IahEHhLsNrj9',
          description: 'Complete syllabus for CSM 1-2',
        },
      ],
    },
  },
  Cyber: {
    '1-1': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1Arqyr_YWowyPQwiFwXEfvwx_0D56-FiT',
          description: 'Complete syllabus for Cyber 1-1',
        },
      ],
    },
    '1-2': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1rZJ9Uw4PH8q54g2QjJm6IahEHhLsNrj9',
          description: 'Complete syllabus for Cyber 1-2',
        },
      ],
    },
  },
  CSD: {
    '1-1': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1Arqyr_YWowyPQwiFwXEfvwx_0D56-FiT',
          description: 'Complete syllabus for CSD 1-1',
        },
      ],
    },
    '1-2': {
      syllabi: [
        {
          name: 'Full Syllabus',
          fileId: '1rZJ9Uw4PH8q54g2QjJm6IahEHhLsNrj9',
          description: 'Complete syllabus for CSD 1-2',
        },
      ],
    },
  },
};

const resourceData = {
  AI: {
    '1-1': {
      resources: [
        {
          name: 'Mathematics I Practice',
          fileId: 'YOUR_FILE_ID_6',
          description: 'Practice problems for Math I',
        },
        {
          name: 'AI Fundamentals Notes',
          fileId: 'YOUR_FILE_ID_7',
          description: 'Notes on AI fundamentals',
        },
        {
          name: 'C Programming Guide',
          fileId: 'YOUR_FILE_ID_8',
          description: 'C programming guide',
        },
      ],
    },
  },
};

const writtenData = {
  AI: {
    '1-1': {
      written: [
        { name: 'Physics', fileId: '1lRhvZweHaSde9mAw0M-ad1pPp9gIOReC', description: 'Physics handwritten notes' },
        { name: 'C Language', fileId: '1ikm_a1JcfkOC0O98chNEIqv_AuHKUP83', description: 'C Language handwritten notes' },
        { name: 'M2', fileId: '1tZNpOcftMzt2OgWTypZYLcfhTYavb5mp', description: 'Mathematics II handwritten notes' },
        { name: 'BEE', fileId: '1gx_Kx3kNF7sVK30ApqXZHb8pvdSifASq', description: 'Basic Electrical Engineering handwritten notes' },
        { name: 'Engineering Graphics', fileId: '1lsic3SwF9clsuBP_AXo59SJ6K_4aye22', description: 'Engineering Graphics handwritten notes' },
      ],
    },
    '1-2': {
      written: [
        { name: 'Data Structure', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'Data Structure handwritten notes' },
        { name: 'English', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'English handwritten notes' },
        { name: 'BCME', fileId: '', description: 'BCME handwritten notes' },
        { name: 'Chemistry', fileId: '1_JDKzl7z0td3E3DHsslXjEnqLog5zq5G', description: 'Chemistry handwritten notes' },
        { name: 'DEVC', fileId: '1ebRJwUKIGmorIqBd0uvfGjXo0Gj5-j3c', description: 'DEVC handwritten notes' },
      ],
    },
  },
  AID: {
    '1-1': {
      written: [
        { name: 'Physics', fileId: '1lRhvZweHaSde9mAw0M-ad1pPp9gIOReC', description: 'Physics handwritten notes' },
        { name: 'C Language', fileId: '1ikm_a1JcfkOC0O98chNEIqv_AuHKUP83', description: 'C Language handwritten notes' },
        { name: 'M2', fileId: '1tZNpOcftMzt2OgWTypZYLcfhTYavb5mp', description: 'Mathematics II handwritten notes' },
        { name: 'BEE', fileId: '1gx_Kx3kNF7sVK30ApqXZHb8pvdSifASq', description: 'Basic Electrical Engineering handwritten notes' },
        { name: 'Engineering Graphics', fileId: '1lsic3SwF9clsuBP_AXo59SJ6K_4aye22', description: 'Engineering Graphics handwritten notes' },
      ],
    },
    '1-2': {
      written: [
        { name: 'Data Structure', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'Data Structure handwritten notes' },
        { name: 'English', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'English handwritten notes' },
        { name: 'BCME', fileId: '', description: 'BCME handwritten notes' },
        { name: 'Chemistry', fileId: '1_JDKzl7z0td3E3DHsslXjEnqLog5zq5G', description: 'Chemistry handwritten notes' },
        { name: 'DEVC', fileId: '1ebRJwUKIGmorIqBd0uvfGjXo0Gj5-j3c', description: 'DEVC handwritten notes' },
      ],
    },
  },
  CSM: {
    '1-1': {
      written: [
        { name: 'Physics', fileId: '1lRhvZweHaSde9mAw0M-ad1pPp9gIOReC', description: 'Physics handwritten notes' },
        { name: 'C Language', fileId: '1ikm_a1JcfkOC0O98chNEIqv_AuHKUP83', description: 'C Language handwritten notes' },
        { name: 'M2', fileId: '1tZNpOcftMzt2OgWTypZYLcfhTYavb5mp', description: 'Mathematics II handwritten notes' },
        { name: 'BEE', fileId: '1gx_Kx3kNF7sVK30ApqXZHb8pvdSifASq', description: 'Basic Electrical Engineering handwritten notes' },
        { name: 'Engineering Graphics', fileId: '1lsic3SwF9clsuBP_AXo59SJ6K_4aye22', description: 'Engineering Graphics handwritten notes' },
      ],
    },
    '1-2': {
      written: [
        { name: 'Data Structure', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'Data Structure handwritten notes' },
        { name: 'English', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'English handwritten notes' },
        { name: 'BCME', fileId: '', description: 'BCME handwritten notes' },
        { name: 'Chemistry', fileId: '1_JDKzl7z0td3E3DHsslXjEnqLog5zq5G', description: 'Chemistry handwritten notes' },
        { name: 'DEVC', fileId: '1ebRJwUKIGmorIqBd0uvfGjXo0Gj5-j3c', description: 'DEVC handwritten notes' },
      ],
    },
  },
  Cyber: {
    '1-1': {
      written: [
        { name: 'Physics', fileId: '1lRhvZweHaSde9mAw0M-ad1pPp9gIOReC', description: 'Physics handwritten notes' },
        { name: 'C Language', fileId: '1ikm_a1JcfkOC0O98chNEIqv_AuHKUP83', description: 'C Language handwritten notes' },
        { name: 'M2', fileId: '1tZNpOcftMzt2OgWTypZYLcfhTYavb5mp', description: 'Mathematics II handwritten notes' },
        { name: 'BEE', fileId: '1gx_Kx3kNF7sVK30ApqXZHb8pvdSifASq', description: 'Basic Electrical Engineering handwritten notes' },
        { name: 'Engineering Graphics', fileId: '1lsic3SwF9clsuBP_AXo59SJ6K_4aye22', description: 'Engineering Graphics handwritten notes' },
      ],
    },
    '1-2': {
      written: [
        { name: 'Data Structure', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'Data Structure handwritten notes' },
        { name: 'English', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'English handwritten notes' },
        { name: 'BCME', fileId: '', description: 'BCME handwritten notes' },
        { name: 'Chemistry', fileId: '1_JDKzl7z0td3E3DHsslXjEnqLog5zq5G', description: 'Chemistry handwritten notes' },
        { name: 'DEVC', fileId: '1ebRJwUKIGmorIqBd0uvfGjXo0Gj5-j3c', description: 'DEVC handwritten notes' },
      ],
    },
  },
  CSD: {
    '1-1': {
      written: [
        { name: 'Physics', fileId: '1lRhvZweHaSde9mAw0M-ad1pPp9gIOReC', description: 'Physics handwritten notes' },
        { name: 'C Language', fileId: '1ikm_a1JcfkOC0O98chNEIqv_AuHKUP83', description: 'C Language handwritten notes' },
        { name: 'M2', fileId: '1tZNpOcftMzt2OgWTypZYLcfhTYavb5mp', description: 'Mathematics II handwritten notes' },
        { name: 'BEE', fileId: '1gx_Kx3kNF7sVK30ApqXZHb8pvdSifASq', description: 'Basic Electrical Engineering handwritten notes' },
        { name: 'Engineering Graphics', fileId: '1lsic3SwF9clsuBP_AXo59SJ6K_4aye22', description: 'Engineering Graphics handwritten notes' },
      ],
    },
    '1-2': {
      written: [
        { name: 'Data Structure', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'Data Structure handwritten notes' },
        { name: 'English', fileId: '1pCOG56VqKggXIddL3ny7buPT-8vNb2uw', description: 'English handwritten notes' },
        { name: 'BCME', fileId: '', description: 'BCME handwritten notes' },
        { name: 'Chemistry', fileId: '1_JDKzl7z0td3E3DHsslXjEnqLog5zq5G', description: 'Chemistry handwritten notes' },
        { name: 'DEVC', fileId: '1ebRJwUKIGmorIqBd0uvfGjXo0Gj5-j3c', description: 'DEVC handwritten notes' },
      ],
    },
  },
};

const previousPapersData = {
  AI: {
    '1-1': {
      papers: [
        { name: 'Physics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Physics paper' },
        { name: 'C Language', fileId: '1Mo8ITdYW6MuHvifIJpVZytKOU5hsuRBG', description: 'Previous year C Language paper' },
        { name: 'M2', fileId: '', description: 'Previous year Mathematics II paper' },
        { name: 'BEE', fileId: '1-fL2r0ID0B6hEmdn-B657_OBMNjngU5i', description: 'Previous year BEE paper' },
        { name: 'Engineering Graphics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Engineering Graphics paper' },
      ],
    },
    '1-2': {
      papers: [
        { name: 'Data Structure', fileId: '', description: 'Previous year Data Structure paper' },
        { name: 'English', fileId: '', description: 'Previous year English paper' },
        { name: 'BCME', fileId: '1tXrUe5vqPhA6IMoQj4PJf_m7mwrdNJgN', description: 'Previous year BCME paper' },
        { name: 'Chemistry', fileId: '105cwb14mT8O317_Fw023CSXo6FLBnvfw', description: 'Previous year Chemistry paper' },
        { name: 'DEVC', fileId: '', description: 'Previous year DEVC paper' },
      ],
    },
  },
  AID: {
    '1-1': {
      papers: [
        { name: 'Physics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Physics paper' },
        { name: 'C Language', fileId: '1Mo8ITdYW6MuHvifIJpVZytKOU5hsuRBG', description: 'Previous year C Language paper' },
        { name: 'M2', fileId: '', description: 'Previous year Mathematics II paper' },
        { name: 'BEE', fileId: '1-fL2r0ID0B6hEmdn-B657_OBMNjngU5i', description: 'Previous year BEE paper' },
        { name: 'Engineering Graphics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Engineering Graphics paper' },
      ],
    },
    '1-2': {
      papers: [
        { name: 'Data Structure', fileId: '', description: 'Previous year Data Structure paper' },
        { name: 'English', fileId: '', description: 'Previous year English paper' },
        { name: 'BCME', fileId: '1tXrUe5vqPhA6IMoQj4PJf_m7mwrdNJgN', description: 'Previous year BCME paper' },
        { name: 'Chemistry', fileId: '105cwb14mT8O317_Fw023CSXo6FLBnvfw', description: 'Previous year Chemistry paper' },
        { name: 'DEVC', fileId: '', description: 'Previous year DEVC paper' },
      ],
    },
  },
  CSM: {
    '1-1': {
      papers: [
        { name: 'Physics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Physics paper' },
        { name: 'C Language', fileId: '1Mo8ITdYW6MuHvifIJpVZytKOU5hsuRBG', description: 'Previous year C Language paper' },
        { name: 'M2', fileId: '', description: 'Previous year Mathematics II paper' },
        { name: 'BEE', fileId: '1-fL2r0ID0B6hEmdn-B657_OBMNjngU5i', description: 'Previous year BEE paper' },
        { name: 'Engineering Graphics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Engineering Graphics paper' },
      ],
    },
    '1-2': {
      papers: [
        { name: 'Data Structure', fileId: '', description: 'Previous year Data Structure paper' },
        { name: 'English', fileId: '', description: 'Previous year English paper' },
        { name: 'BCME', fileId: '1tXrUe5vqPhA6IMoQj4PJf_m7mwrdNJgN', description: 'Previous year BCME paper' },
        { name: 'Chemistry', fileId: '105cwb14mT8O317_Fw023CSXo6FLBnvfw', description: 'Previous year Chemistry paper' },
        { name: 'DEVC', fileId: '', description: 'Previous year DEVC paper' },
      ],
    },
  },
  Cyber: {
    '1-1': {
      papers: [
        { name: 'Physics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Physics paper' },
        { name: 'C Language', fileId: '1Mo8ITdYW6MuHvifIJpVZytKOU5hsuRBG', description: 'Previous year C Language paper' },
        { name: 'M2', fileId: '', description: 'Previous year Mathematics II paper' },
        { name: 'BEE', fileId: '1-fL2r0ID0B6hEmdn-B657_OBMNjngU5i', description: 'Previous year BEE paper' },
        { name: 'Engineering Graphics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Engineering Graphics paper' },
      ],
    },
    '1-2': {
      papers: [
        { name: 'Data Structure', fileId: '', description: 'Previous year Data Structure paper' },
        { name: 'English', fileId: '', description: 'Previous year English paper' },
        { name: 'BCME', fileId: '1tXrUe5vqPhA6IMoQj4PJf_m7mwrdNJgN', description: 'Previous year BCME paper' },
        { name: 'Chemistry', fileId: '105cwb14mT8O317_Fw023CSXo6FLBnvfw', description: 'Previous year Chemistry paper' },
        { name: 'DEVC', fileId: '', description: 'Previous year DEVC paper' },
      ],
    },
  },
  CSD: {
    '1-1': {
      papers: [
        { name: 'Physics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Physics paper' },
        { name: 'C Language', fileId: '1Mo8ITdYW6MuHvifIJpVZytKOU5hsuRBG', description: 'Previous year C Language paper' },
        { name: 'M2', fileId: '', description: 'Previous year Mathematics II paper' },
        { name: 'BEE', fileId: '1-fL2r0ID0B6hEmdn-B657_OBMNjngU5i', description: 'Previous year BEE paper' },
        { name: 'Engineering Graphics', fileId: '1Ej45RyjKq2V1kiqVafBPOc2mA6HWfzwG', description: 'Previous year Engineering Graphics paper' },
      ],
    },
    '1-2': {
      papers: [
        { name: 'Data Structure', fileId: '', description: 'Previous year Data Structure paper' },
        { name: 'English', fileId: '', description: 'Previous year English paper' },
        { name: 'BCME', fileId: '1tXrUe5vqPhA6IMoQj4PJf_m7mwrdNJgN', description: 'Previous year BCME paper' },
        { name: 'Chemistry', fileId: '105cwb14mT8O317_Fw023CSXo6FLBnvfw', description: 'Previous year Chemistry paper' },
        { name: 'DEVC', fileId: '1sYSAvkk0z5eQtA7gnwKLS-iyEuSU0DuU', description: 'Previous year DEVC paper' },
      ],
    },
  },
};

const R23 = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState('syllabus');
  const [selectedBranch, setSelectedBranch] = useState('AI');
  const [selectedSemester, setSelectedSemester] = useState('1-1');
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [error, setError] = useState(null);

  // Unified data access
  const getData = () => {
    try {
      switch (selectedCategory) {
        case 'syllabus':
          return syllabusData[selectedBranch]?.[selectedSemester]?.syllabi || [];
        case 'resources':
          return resourceData[selectedBranch]?.[selectedSemester]?.resources || [];
        case 'written':
          return writtenData[selectedBranch]?.[selectedSemester]?.written || [];
        case 'previous':
          return previousPapersData[selectedBranch]?.[selectedSemester]?.papers || [];
        default:
          return [];
      }
    } catch (err) {
      setError('Error accessing data. Please check the data structure.');
      return [];
    }
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedBranch('AI');
    setSelectedSemester('1-1');
    const data = getData();
    if (data.length > 0) {
      setSelectedFileId(data[0].fileId);
      setError(null);
    } else {
      setSelectedFileId(null);
      setError('No documents available for this category.');
    }
  };

  // Handle branch change
  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    setSelectedSemester('1-1');
    const data = getData();
    if (data.length > 0) {
      setSelectedFileId(data[0].fileId);
      setError(null);
    } else {
      setSelectedFileId(null);
      setError('No documents available for this branch.');
    }
  };

  // Handle semester change
  const handleSemesterChange = (sem) => {
    setSelectedSemester(sem);
    const data = getData();
    if (data.length > 0) {
      setSelectedFileId(data[0].fileId);
      setError(null);
    } else {
      setSelectedFileId(null);
      setError('No documents available for this semester.');
    }
  };

  // Handle PDF selection
  const handlePdfSelect = (fileId) => {
    setSelectedFileId(fileId);
    setError(null);
  };

  // Render PDF preview
  const renderPdfPreview = () => (
    <div className="flex flex-col items-center w-full">
      {error ? (
        <div className="text-red-500 text-center text-sm sm:text-base">
          <p>{error}</p>
          <p className="mt-2">
            If you see a Google Drive error like "You may be offline or with limited connectivity. Try downloading instead.", please use the Download PDF button below. <br />
            This usually means the file is too large, not supported for preview, or not shared publicly.
          </p>
        </div>
      ) : selectedFileId ? (
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-auto">
          <iframe
            src={`https://drive.google.com/file/d/${selectedFileId}/preview`}
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded-lg"
            title="PDF Preview"
            onError={() => setError('Failed to load PDF. Please check the file ID and sharing settings.')}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-gray-400 text-center text-sm sm:text-base">Select a document to view.</p>
      )}
    </div>
  );

  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 md:px-20 py-12 sm:py-16 lg:py-20 text-white">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <BubbleText
          text="B.Tech R23 Resources"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300 mb-4 block"
        />
        <BubbleText
          text="Explore syllabi, handwritten notes, and previous papers for your B.Tech journey."
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto block"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        {['syllabus', 'written', 'previous'].map((category, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all shadow-md border ${
              selectedCategory === category
                ? 'bg-cyan-600 text-white border-cyan-700'
                : 'bg-[#1e293b] text-gray-200 border-gray-700 hover:bg-cyan-700/50'
            }`}
          >
            {category === 'syllabus'
              ? 'JNTU Syllabus'
              : category === 'written'
              ? 'Written PDFs'
              : 'Previous Papers'}
          </motion.button>
        ))}
      </div>

      {/* Sidebar and Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Sidebar for Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0f172a] border border-cyan-700 rounded-xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-4"
        >
          <BubbleText
            text={
              selectedCategory === 'syllabus'
                ? 'Syllabus'
                : selectedCategory === 'resources'
                ? 'Resources'
                : selectedCategory === 'written'
                ? 'Written PDFs'
                : 'Previous Papers'
            }
            className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mb-4 sm:mb-6"
          />

          {/* Branch Selection */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => handleBranchChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-[#1e293b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm sm:text-base"
            >
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Semester Selection */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => handleSemesterChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-[#1e293b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm sm:text-base"
            >
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  Sem {sem}
                </option>
              ))}
            </select>
          </div>

          {/* Document List */}
          <div>
            <BubbleText
              text="Documents"
              className="text-sm font-medium text-gray-400 mb-3 block"
            />
            <ul className="space-y-3">
              {getData().map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => handlePdfSelect(item.fileId)}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg text-sm sm:text-base transition-all border ${
                      selectedFileId === item.fileId
                        ? 'bg-cyan-600 text-white border-cyan-700'
                        : 'bg-[#1e293b] text-gray-200 border-gray-700 hover:bg-cyan-700/50'
                    }`}
                  >
                    <BubbleText
                      text={item.name}
                      className="font-semibold text-white block"
                    />
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </button>
                </motion.li>
              ))}
            </ul>
            {selectedFileId && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://drive.google.com/uc?export=download&id=${selectedFileId}`}
                download
                className="mt-4 sm:mt-6 inline-block bg-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-cyan-700 transition border border-cyan-700 text-sm sm:text-base"
              >
                Download PDF
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* PDF Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 bg-[#0f172a] border border-cyan-700 rounded-xl shadow-lg p-4 sm:p-6"
        >
          <BubbleText
            text="Document Viewer"
            className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mb-4 sm:mb-6"
          />
          {renderPdfPreview()}
        </motion.div>
      </div>
    </section>
  );
};

export default R23;