import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaBook, FaUsers, FaFileAlt, FaCalendarAlt, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage'; // Assuming same wrapper as CodingResources
import BackButton from '../components/BackButton';
import googleImg from '../assests/google.jpg';
import microsoftImg from '../assests/microsoft.jpg';
import amazonImg from '../assests/amazon.jpg';
import adobeImg from '../assests/adobe.jpg';
import metaImg from '../assests/meta.jpg';
import appleImg from '../assests/apple.jpg';
import netflixImg from '../assests/netfleix.jpg';
import infysosImg from '../assests/infysos.jpg';
import techmahindraImg from '../assests/techmahindra.jpg';
import tcsImg from '../assests/tcs.jpg';
import wiproImg from '../assests/wipro.jpg';
import accentureImg from '../assests/accenture.jpg';
import cognizantImg from '../assests/cognizant.jpg';
import hclImg from '../assests/hcl.jpg';
import capgeminiImg from '../assests/capagemini.jpg';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

const CompanyPlacementPage = () => {
  // State for real-time prep resources
  const [prepResources, setPrepResources] = useState([]);
  const [showService, setShowService] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  // Company data with real-time links
  const companies = {
    serviceBased: [
      {
        id: 'tcs',
        name: 'TCS',
        description: 'India’s largest IT services company, known for digital transformation solutions.',
        interviewProcess: ['Aptitude Test', 'Technical Interview', 'HR Round'],
        syllabus: ['Data Structures', 'OOPs', 'DBMS', 'Operating Systems'],
        resources: {
          coding: 'https://www.hackerrank.com/challenges/tcs-codevita',
          mcqs: 'https://www.indiabix.com/placement-papers/tcs/',
          pdf: 'https://prepinsta.com/tcs-nqt/how-to-crack-tcs-nqt/',
        },
      },
      {
        id: 'infosys',
        name: 'Infosys',
        description: 'Global leader in next-gen digital services and consulting.',
        interviewProcess: ['Online Test', 'Technical + HR Interview'],
        syllabus: ['Puzzles', 'Networking Basics', 'DBMS'],
        resources: {
          coding: 'https://www.hackerearth.com/recruit/infosys/',
          mcqs: 'https://www.indiabix.com/placement-papers/infosys/',
          pdf: 'https://www.prepinsta.com/infosys/placement-papers/',
        },
      },
      {
        id: 'wipro',
        name: 'Wipro',
        description: 'Indian multinational IT consulting and business process outsourcing company.',
        interviewProcess: ['Written Exam', 'Technical Interview', 'HR Interview'],
        syllabus: ['C/C++', 'OS Concepts', 'DBMS', 'Computer Networks'],
        resources: {
          coding: 'https://www.hackerearth.com/recruit/wipro/',
          mcqs: 'https://www.indiabix.com/placement-papers/wipro/',
          pdf: 'https://www.prepinsta.com/wipro/placement-papers/',
        },
      },
      {
        id: 'accenture',
        name: 'Accenture',
        description: 'Multinational professional services company specializing in IT services.',
        interviewProcess: ['Cognitive & Technical Assessment', 'Interview'],
        syllabus: ['Aptitude', 'Coding', 'Communication'],
        resources: {
          coding: 'https://www.hackerrank.com/challenges/accenture-coding',
          mcqs: 'https://www.indiabix.com/placement-papers/accenture/',
          pdf: 'https://www.prepinsta.com/accenture/placement-papers/',
        },
      },
      {
        id: 'capgemini',
        name: 'Capgemini',
        description: 'French multinational IT services and consulting company.',
        interviewProcess: ['Written Test', 'Group Discussion', 'Interview'],
        syllabus: ['Quantitative Aptitude', 'Logical Reasoning', 'Pseudocodes'],
        resources: {
          coding: 'https://www.hackerearth.com/recruit/capgemini/',
          mcqs: 'https://www.indiabix.com/placement-papers/capgemini/',
          pdf: 'https://www.prepinsta.com/capgemini/placement-papers/',
        },
      },
      {
        id: 'cognizant',
        name: 'Cognizant',
        description: 'American multinational IT services and consulting company.',
        interviewProcess: ['Aptitude Test', 'Technical Interview', 'HR Interview'],
        syllabus: ['DSA', 'OOPs', 'DBMS', 'Basic Programming'],
        resources: {
          coding: 'https://www.hackerrank.com/challenges/cognizant-coding',
          mcqs: 'https://www.indiabix.com/placement-papers/cognizant/',
          pdf: 'https://www.prepinsta.com/cognizant/placement-papers/',
        },
      },
      {
        id: 'hcl',
        name: 'HCL Technologies',
        description: 'Global IT services company focused on digital, IoT, and cloud solutions.',
        interviewProcess: ['Aptitude Test', 'Technical Interview', 'HR Interview'],
        syllabus: ['Quantitative Aptitude', 'Logical Reasoning', 'C/C++', 'DBMS'],
        resources: {
          coding: 'https://www.hackerearth.com/recruit/hcl/',
          mcqs: 'https://www.indiabix.com/placement-papers/hcl/',
          pdf: 'https://www.prepinsta.com/hcl/placement-papers/',
        },
      },
      {
        id: 'techmahindra',
        name: 'Tech Mahindra',
        description: 'Indian IT services company specializing in telecom and digital solutions.',
        interviewProcess: ['Online Test', 'Technical Interview', 'HR Round'],
        syllabus: ['Aptitude', 'Coding', 'Networking', 'OS'],
        resources: {
          coding: 'https://www.hackerearth.com/recruit/tech-mahindra/',
          mcqs: 'https://www.indiabix.com/placement-papers/tech-mahindra/',
          pdf: 'https://www.prepinsta.com/tech-mahindra/placement-papers/',
        },
      },
    ],
    productBased: [
      {
        id: 'google',
        name: 'Google',
        description: 'Leading tech giant known for innovation in search, cloud, and AI.',
        interviewProcess: ['Online Coding Round', 'Technical Interviews (3-4)', 'Behavioral Interview'],
        syllabus: ['Algorithms', 'Data Structures', 'System Design', 'Problem Solving'],
        resources: {
          coding: 'https://leetcode.com/company/google/',
          mcqs: 'https://www.geeksforgeeks.org/google-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=google-interview-questions',
        },
      },
      {
        id: 'microsoft',
        name: 'Microsoft',
        description: 'Global leader in software, cloud computing, and AI solutions.',
        interviewProcess: ['Online Test', 'Technical Interviews (4-5)', 'HR Round'],
        syllabus: ['DSA', 'System Design', 'Coding', 'OOPs'],
        resources: {
          coding: 'https://leetcode.com/company/microsoft/',
          mcqs: 'https://www.geeksforgeeks.org/microsoft-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=microsoft-interview-questions',
        },
      },
      {
        id: 'amazon',
        name: 'Amazon',
        description: 'E-commerce and cloud computing pioneer with a focus on innovation.',
        interviewProcess: ['Online Assessment', 'Technical Interviews (4-5)', 'Bar Raiser Round'],
        syllabus: ['DSA', 'System Design', 'Leadership Principles', 'Coding'],
        resources: {
          coding: 'https://leetcode.com/company/amazon/',
          mcqs: 'https://www.geeksforgeeks.org/amazon-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=amazon-interview-questions',
        },
      },
      {
        id: 'adobe',
        name: 'Adobe',
        description: 'Leader in creative software and digital experience solutions.',
        interviewProcess: ['Online Test', 'Technical Interviews (3-4)', 'HR Interview'],
        syllabus: ['DSA', 'Algorithms', 'OS', 'Problem Solving'],
        resources: {
          coding: 'https://leetcode.com/company/adobe/',
          mcqs: 'https://www.geeksforgeeks.org/adobe-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=adobe-interview-questions',
        },
      },
      {
        id: 'facebook',
        name: 'Meta (Facebook)',
        description: 'Social media and tech innovator focused on connectivity and AI.',
        interviewProcess: ['Online Coding Round', 'Technical Interviews (3-4)', 'Behavioral Round'],
        syllabus: ['DSA', 'System Design', 'Algorithms', 'Coding'],
        resources: {
          coding: 'https://leetcode.com/company/facebook/',
          mcqs: 'https://www.geeksforgeeks.org/facebook-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=facebook-interview-questions',
        },
      },
      {
        id: 'apple',
        name: 'Apple',
        description: 'Global leader in consumer electronics and software innovation.',
        interviewProcess: ['Online Test', 'Technical Interviews (4-5)', 'Team Fit Interview'],
        syllabus: ['DSA', 'System Design', 'OS', 'Problem Solving'],
        resources: {
          coding: 'https://leetcode.com/company/apple/',
          mcqs: 'https://www.geeksforgeeks.org/apple-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=apple-interview-questions',
        },
      },
      {
        id: 'netflix',
        name: 'Netflix',
        description: 'Streaming and entertainment giant with cutting-edge tech infrastructure.',
        interviewProcess: ['Online Coding', 'Technical Interviews (3-4)', 'Culture Fit Interview'],
        syllabus: ['DSA', 'System Design', 'Cloud Computing', 'Coding'],
        resources: {
          coding: 'https://leetcode.com/company/netflix/',
          mcqs: 'https://www.geeksforgeeks.org/netflix-interview-preparation/',
          pdf: 'https://www.careercup.com/page?pid=netflix-interview-questions',
        },
      },
    ],
  };

  // Simulate fetching real-time preparation resources
  useEffect(() => {
    const fetchPrepResources = async () => {
      // Placeholder for real-time API (e.g., LeetCode, X posts, or GeeksforGeeks)
      const mockResources = [
        {
          id: 1,
          title: 'Latest DSA Problems on LeetCode',
          source: 'LeetCode',
          link: 'https://leetcode.com/problemset/all-code-essentials/',
        },
        {
          id: 2,
          title: 'Top System Design Questions for Amazon',
          source: 'GeeksforGeeks',
          link: 'https://www.geeksforgeeks.org/amazon-interview-preparation/',
        },
        {
          id: 3,
          title: 'TCS CodeVita Practice Challenges',
          source: 'HackerRank',
          link: 'https://prepinsta.com/tcs-codevita/practice-questions-with-answers/',
        },
      ];
      setPrepResources(mockResources);
    };

    fetchPrepResources();
  }, []);

  return (
    <AnimatedPage>
      {/* Font Awesome for fallback icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Back Button */}
      {/* <div className="mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
      </div> */}

      {/* Main Section */}
      <section className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 tracking-tight">
              Master Your Tech Placement
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Prepare for top companies with tailored resources and real-time updates.
            </p>
          </motion.div>

          {/* Real-Time Prep Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center">
              Real-Time Preparation Resources
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-center mb-8">
              Access the latest coding challenges, interview questions, and prep tips from top platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prepResources.map((resource, idx) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                  className="bg-[#1e293b] border border-cyan-700 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <FaCode className="text-2xl text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Source: {resource.source}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-700 text-white px-4 py-2 rounded-xl font-semibold hover:bg-cyan-600 transition-all duration-300"
                  >
                    Explore Now
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product-Based and Service-Based Companies Side by Side */}
          <div className="mb-16 w-full flex flex-col gap-16 justify-center items-stretch">
            {/* Product-Based Companies Horizontal Scroll Carousel */}
            <div className="bg-[#1e293b] rounded-2xl shadow-lg p-4 border border-cyan-700 max-w-7xl w-full mx-auto ">
              <h1 className="text-3xl font-bold text-cyan-300 mb-6 text-center">Product-Based Companies</h1>
              <HorizontalScrollCarousel
                cards={companies.productBased}
                renderCard={(company, idx) => (
                  <div
                    key={company.id}
                    className="bg-[#0f172a] rounded-2xl shadow-lg border border-cyan-700 flex flex-col items-center p-6 text-center h-[340px] w-[280px] group relative overflow-hidden"
                  >
                    <Link
                      to={`/company/${company.id}`}
                      className="flex flex-col items-center space-y-3 w-full h-full group"
                      aria-label={`View ${company.name} resources`}
                    >
                      {company.id === 'google' ? (
                        <img src={googleImg} alt="Google" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'microsoft' ? (
                        <img src={microsoftImg} alt="Microsoft" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'amazon' ? (
                        <img src={amazonImg} alt="Amazon" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'adobe' ? (
                        <img src={adobeImg} alt="Adobe" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'facebook' ? (
                        <img src={metaImg} alt="Meta (Facebook)" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'apple' ? (
                        <img src={appleImg} alt="Apple" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'netflix' ? (
                        <img src={netflixImg} alt="Netflix" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : (
                        <FaLaptopCode className="text-4xl text-cyan-400 mb-2" />
                      )}
                      <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{company.name}</span>
                      <span className="text-gray-400 text-sm mb-2">{company.description}</span>
                      <span className="inline-block mt-2 bg-cyan-700 text-white px-4 py-2 rounded-xl font-semibold group-hover:bg-cyan-600 transition-all duration-300">View Details</span>
                    </Link>
                  </div>
                )}
              />
            </div>

            {/* Service-Based Companies Horizontal Scroll Carousel */}
            <div className="bg-[#1e293b] rounded-2xl shadow-lg p-4 border border-cyan-700 max-w-7xl w-full mx-auto min-h-[250px]">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center">Service-Based Companies</h2>
              <HorizontalScrollCarousel
                cards={companies.serviceBased}
                renderCard={(company, idx) => (
                  <div
                    key={company.id}
                    className="bg-[#0f172a] rounded-2xl shadow-lg border border-cyan-700 flex flex-col items-center p-6 text-center h-[340px] w-[280px] group relative overflow-hidden"
                  >
                    <Link
                      to={`/company/${company.id}`}
                      className="flex flex-col items-center space-y-3 w-full h-full group"
                      aria-label={`View ${company.name} resources`}
                    >
                      {company.id === 'infosys' ? (
                        <img src={infysosImg} alt="Infosys" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'techmahindra' ? (
                        <img src={techmahindraImg} alt="Tech Mahindra" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'tcs' ? (
                        <img src={tcsImg} alt="TCS" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'wipro' ? (
                        <img src={wiproImg} alt="Wipro" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'accenture' ? (
                        <img src={accentureImg} alt="Accenture" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'cognizant' ? (
                        <img src={cognizantImg} alt="Cognizant" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'hcl' ? (
                        <img src={hclImg} alt="HCL" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      ) : company.id === 'capgemini'? (
                        <img src={capgeminiImg} alt="Capgemini" className="h-16 w-16 rounded-full object-cover border border-cyan-700 shadow mb-2" />
                      )
                      : (
                        <FaLaptopCode className="text-4xl text-cyan-400 mb-2" />
                      )}
                      <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{company.name}</span>
                      <span className="text-gray-400 text-sm mb-2">{company.description}</span>
                      <span className="inline-block mt-2 bg-cyan-700 text-white px-4 py-2 rounded-xl font-semibold group-hover:bg-cyan-600 transition-all duration-300">View Details</span>
                    </Link>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default CompanyPlacementPage;