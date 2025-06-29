import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBook, FaList, FaLink } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage'; // Adjust path if needed
import googleImg from '../assests/google.jpg'

const CompanyDetailsPage = () => {
  const { companyId } = useParams();

  // Company data (consider moving to a shared file, e.g., src/data/companies.js)
  const companies = {
    serviceBased: [
      {
        id: 'tcs',
        name: 'TCS',
        description: 'India’s largest IT services company, known for digital transformation solutions.',
        interviewProcess: ['Aptitude Test', 'Technical Interview', 'HR Round'],
        syllabus: ['Data Structures', 'OOPs', 'DBMS', 'Operating Systems'],
        resources: {
          coding: 'https://www.codechef.com/practice/tcs-nqt-questions',
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
          coding: 'https://www.geeksforgeeks.org/geeksforgeeks-practice-best-online-coding-platform/',
          mcqs: 'https://www.indiabix.com/placement-papers/infosys/',
          pdf: 'https://www.geeksforgeeks.org/prepare-infosys-complete-guide/',
        },
      },
      {
        id: 'wipro',
        name: 'Wipro',
        description: 'Indian multinational IT consulting and business process outsourcing company.',
        interviewProcess: ['Written Exam', 'Technical Interview', 'HR Interview'],
        syllabus: ['C/C++', 'OS Concepts', 'DBMS', 'Computer Networks'],
        resources: {
          coding: 'https://prepinsta.com/wipro-coding-questions/',
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
          coding: 'https://www.hackerrank.com/contests/accenture-coding/challenges',
          mcqs: 'https://www.indiabix.com/placement-papers/accenture/',
          pdf: 'https://prepinsta.com/how-to-prepare-for-accenture/',
        },
      },
      {
        id: 'capgemini',
        name: 'Capgemini',
        description: 'French multinational IT services and consulting company.',
        interviewProcess: ['Written Test', 'Group Discussion', 'Interview'],
        syllabus: ['Quantitative Aptitude', 'Logical Reasoning', 'Pseudocodes'],
        resources: {
          coding: 'https://www.hackerrank.com/contests/capgemini-practice-test/challenges',
          mcqs: 'https://www.indiabix.com/placement-papers/capgemini/',
          pdf: 'https://www.freshersnow.com/capgemini-syllabus/',
        },
      },
      {
        id: 'cognizant',
        name: 'Cognizant',
        description: 'American multinational IT services and consulting company.',
        interviewProcess: ['Aptitude Test', 'Technical Interview', 'HR Interview'],
        syllabus: ['DSA', 'OOPs', 'DBMS', 'Basic Programming'],
        resources: {
          coding: 'https://www.hackerrank.com/contests/cognizant-company-specific-technical-practice-test-1/challenges',
          mcqs: 'https://www.indiabix.com/placement-papers/cognizant/',
          pdf: 'https://www.freshersnow.com/cognizant-placement-papers/',
        },
      },
      {
        id: 'hcl',
        name: 'HCL Technologies',
        description: 'Global IT services company focused on digital, IoT, and cloud solutions.',
        interviewProcess: ['Aptitude Test', 'Technical Interview', 'HR Interview'],
        syllabus: ['Quantitative Aptitude', 'Logical Reasoning', 'C/C++', 'DBMS'],
        resources: {
          coding: 'https://prepinsta.com/hcl/',
          mcqs: 'https://www.indiabix.com/placement-papers/hcl/',
          pdf: 'https://www.geeksforgeeks.org/hcl-sde-sheet-interview-questions-and-answers/',
        },
      },
      {
        id: 'techmahindra',
        name: 'Tech Mahindra',
        description: 'Indian IT services company specializing in telecom and digital solutions.',
        interviewProcess: ['Online Test', 'Technical Interview', 'HR Round'],
        syllabus: ['Aptitude', 'Coding', 'Networking', 'OS'],
        resources: {
          coding: 'https://prepinsta.com/tech-mahindra-placement-papers/coding/',
          mcqs: 'https://www.indiabix.com/placement-papers/tech-mahindra/',
          pdf: 'https://faceprep.in/article/tech-mahindra-recruitment-pattern-important-topics-and-about-the-company/',
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
          pdf: 'https://bgibhopal.com/google-placement-process-a-step-by-step-guide-for-students/',
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
          pdf: 'https://prepinsta.com/microsoft/',
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
          pdf: 'https://www.geeksforgeeks.org/how-to-prepare-for-amazon-software-development-engineering-interview/',
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
          pdf: 'https://www.freshersnow.com/adobe-placement-papers/',
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
          pdf: 'https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/',
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
          pdf: 'https://blog.internshala.com/how-to-get-a-job-in-netflix/',
        },
      },
    ],
  };

  // Find the selected company
  const allCompanies = [...companies.serviceBased, ...companies.productBased];
  const selectedCompany = allCompanies.find((company) => company.id === companyId);

  if (!selectedCompany) {
    return (
      <AnimatedPage>
        <section className="min-h-screen bg-black py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center bg-[#0f172a] rounded-2xl shadow-xl p-6 sm:p-8 border border-cyan-700"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4">
                Company Not Found
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                The selected company does not exist.
              </p>
              <Link
                to="/companies"
                className="inline-block bg-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-cyan-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Back to companies"
              >
                Back to Companies
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      {/* Font Awesome for fallback icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <section className="min-h-screen bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-300 mb-4 leading-tight">
              {selectedCompany.name} Placement Guide
            </h2>
            {selectedCompany.id === 'google' && (
              <div className="flex justify-center my-4 sm:my-6">
                <img
                  src={googleImg}
                  alt="Google"
                  className="h-24 sm:h-32 w-auto rounded-xl shadow-lg border border-cyan-700"
                />
              </div>
            )}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Everything you need to prepare for {selectedCompany.name} interviews and placements.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a] rounded-2xl shadow-xl p-6 sm:p-8 border border-cyan-700"
          >
            <div className="prose max-w-none text-gray-200 space-y-6 sm:space-y-8">
              <p>{selectedCompany.description}</p>

              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4 flex items-center space-x-2 sm:space-x-3">
                  <FaList className="text-xl sm:text-2xl text-cyan-300" />
                  <span>Interview Process</span>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {selectedCompany.interviewProcess.map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-2 text-sm sm:text-base text-gray-200"
                    >
                      <span className="text-cyan-300">•</span>
                      <span>{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4 flex items-center space-x-2 sm:space-x-3">
                  <FaBook className="text-xl sm:text-2xl text-cyan-300" />
                  <span>Syllabus</span>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {selectedCompany.syllabus.map((topic, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-2 text-sm sm:text-base text-gray-200"
                    >
                      <span className="text-cyan-300">•</span>
                      <span>{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4 flex items-center space-x-2 sm:space-x-3">
                  <FaLink className="text-xl sm:text-2xl text-cyan-300" />
                  <span>Resources</span>
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <FaLaptopCode className="text-xl sm:text-2xl text-cyan-300" />
                    <a
                      href={selectedCompany.resources.coding}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                    >
                      Coding Practice Questions
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <FaLaptopCode className="text-xl sm:text-2xl text-cyan-300" />
                    <a
                      href={selectedCompany.resources.mcqs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                    >
                      MCQs and Quizzes
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <FaLaptopCode className="text-xl sm:text-2xl text-cyan-300" />
                    <a
                      href={selectedCompany.resources.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                    >
                      Preparation Guide
                    </a>
                  </motion.li>
                </ul>
              </section>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/companies"
                  className="inline-block bg-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-cyan-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Back to companies"
                >
                  Back to Companies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default CompanyDetailsPage;