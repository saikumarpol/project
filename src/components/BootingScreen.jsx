import React from 'react';
import './BootingScreen.css';

const ComputerLogo = () => (
  <svg
    className="booting-logo"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="12" width="48" height="32" rx="4" fill="#222" stroke="#38bdf8" strokeWidth="3"/>
    <rect x="20" y="48" width="24" height="6" rx="2" fill="#38bdf8"/>
    <rect x="28" y="54" width="8" height="4" rx="1" fill="#222"/>
    <circle cx="16" cy="20" r="2" fill="#38bdf8"/>
    <circle cx="24" cy="20" r="2" fill="#38bdf8"/>
    <circle cx="32" cy="20" r="2" fill="#38bdf8"/>
  </svg>
);

const BootingScreen = () => {
  return (
    <div className="booting-screen">
      <div className="booting-logo-text">
        <ComputerLogo />
        <h1 className="booting-title hd-black">
          {"TECHHUB".split("").map((char, i) => (
            <span key={i} className="booting-letter">{char}</span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default BootingScreen;
