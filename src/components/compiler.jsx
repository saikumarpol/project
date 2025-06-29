// import React, { useEffect } from 'react';

// const Compiler = () => {
//   useEffect(() => {
//     // Redirect to the external Vercel app
//     window.location.href = "https://compiler-eta.vercel.app/"; 
//   }, []);

//   return null; // No need to render anything
// };

// export default Compiler;

import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Compiler = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f172a] px-4 py-10">
      <div className="bg-[#1e293b] rounded-2xl shadow-xl p-10 flex flex-col items-center border border-cyan-700 w-full max-w-xl">
        <FaCode className="text-5xl text-cyan-300 mb-4 animate-bounce" />
        <h2 className="text-3xl font-extrabold text-cyan-300 mb-2">Online Code Compiler</h2>
        <p className="text-gray-300 mb-6 text-center text-base sm:text-lg">
          Instantly write, run, and test code in multiple languages. Click below to launch the external compiler in a new tab.
        </p>
        <a
          href="https://compiler-eta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Open External Compiler App <FaExternalLinkAlt className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Compiler;
