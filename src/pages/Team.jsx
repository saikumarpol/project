import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './bubble.module.css';

const teamMembers = [
  {
    name: 'SAI KUMAR POLA',
    role: 'TEAM LEAD',
    image: require('../assests/sai.jpg'),
    github: 'https://github.com/saikumarpol',
    linkedin: 'https://www.linkedin.com/in/sai-kumar-pola-3993851a1/',
    instagram: 'https://www.instagram.com/thisz__chinnu/', // Add actual Instagram URL
  },
  {
    name: 'HYMA BAIREDDY',
    role: 'DEVELOPER',
    image: require('../assests/hyma.jpg'),
    github: 'https://github.com/Hymabaireddy',
    linkedin: 'https://www.linkedin.com/in/baireddy-hyma-ba8644254/',
  },
  {
    name: 'GOWTHAM JUTTIGA',
    role: 'DEVELOPER',
    image: require('../assests/gowtham.jpg'),
    github: 'https://github.com/JuttigaGowtham',
    linkedin: 'https://www.linkedin.com/in/juttiga-gowtham-a5bb4b290/',
    instagram: 'https://www.instagram.com/_mr.nani._/', // Add actual Instagram URL
  },
  {
    name: 'SRAVYA MULLAPUDI',
    role: 'DEVELOPER',
    image: require('../assests/Sravya4.jpg'),
    github: 'https://github.com/sravyamullapudi26',
    linkedin: 'https://www.linkedin.com/in/sravya-mullapudi-ab8087254',
  },
  {
    name: 'BHAVANI PIILI',
    role: 'DEVELOPER',
    image: require('../assests/bhavani.jpg'),
    github: 'https://github.com/BhavaniPaili',
    linkedin: 'https://www.linkedin.com/in/bhavani-paili-84221a289/',
  },
];

const BubbleText = ({ text, className = '' }) => (
  <span className={className}>
    {text.split('').map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

const TeamPage = () => {
  const teamLead = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

  return (
    <section className="bg-black min-h-screen px-6 py-20 md:px-20 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <BubbleText
          text="Contact us"
          className="text-cyan-400 font-semibold text-sm uppercase mb-2 block"
        />
    <BubbleText
  text="Need help? We’re here for you 24/7."
  className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug break-words max-w-xs sm:max-w-md mx-auto"
/>



        <BubbleText
          text="Our dedicated team of growth experts is ready to help around the clock. Access 24/7 support through our award-winning network."
          className="text-gray-400 max-w-xl mx-auto block"
        />
      </div>

      {/* Section Title */}
      <BubbleText
        text="Meet Our Engineering Team"
        className="text-2xl md:text-3xl font-bold text-center text-cyan-300 mb-10 block"
      />

      {/* Team Lead Card */}
      <div className="flex justify-center mb-14">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#0f172a] border border-cyan-700 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden text-center w-full max-w-md"
        >
          <img
            src={teamLead.image}
            alt={teamLead.name}
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <BubbleText
              text={teamLead.name}
              className="text-xl font-bold text-white block mb-1"
            />
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Sr Research Translation Engineer at RCTS - IIIT Hyderabad
            </p>
            <BubbleText
              text={teamLead.role}
              className="text-sm text-cyan-400 block mb-3 uppercase"
            />
            <div className="flex items-center justify-center gap-4 text-cyan-300 mt-2 text-xl">
              <a href={teamLead.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={teamLead.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              {teamLead.instagram && (
                <a href={teamLead.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Other Team Members */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 justify-items-center">
        {otherMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e293b] border border-gray-700 rounded-xl shadow hover:shadow-cyan-600/20 transition-all duration-300 overflow-hidden text-center w-full max-w-xs"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <BubbleText
                text={member.name}
                className="text-base font-semibold text-white block"
              />
              <BubbleText
                text={member.role}
                className="text-xs text-gray-400 block mb-1"
              />
              <p className="text-[12px] text-gray-400 italic mb-2">
                {index === 0 && "BTECH 4th Year student at KIETW, Kakinada"}
                {index === 1 && "BTECH 4th Year student at KIET, Kakinada"}
                {index === 2 && "BTECH 4th Year student at KIETW, Kakinada"}
                {index === 3 && "BTECH 4th Year student at KIETW, Kakinada"}
              </p>
              <div className="flex items-center justify-center gap-4 text-cyan-300 text-xl">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
