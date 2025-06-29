import React from 'react';

const AnalysisResult = ({ result, onReset }) => (
  <div className="bg-[#0f172a] rounded-2xl shadow-xl p-10 max-w-xl mx-auto mt-16 border border-cyan-700 flex flex-col items-center text-white">
    <h2 className="text-3xl font-extrabold text-cyan-300 mb-6 text-center">
      Your Resume Score:
      <span className="ml-3 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white text-2xl font-bold shadow-md">
        {result.score}/100
      </span>
    </h2>

    <h3 className="text-xl font-semibold text-white mb-3 mt-4 flex items-center gap-2">
      <span role="img" aria-label="Breakdown">🔍</span> Breakdown
    </h3>
    <ul className="w-full mb-6 divide-y divide-cyan-800">
      {Object.entries(result.feedback).map(([key, val]) => (
        <li
          key={key}
          className="flex justify-between py-2 px-3 text-sm sm:text-base text-gray-300"
        >
          <span className="font-semibold">{key}</span>
          <span>{val}</span>
        </li>
      ))}
    </ul>

    {result.suggestions.length > 0 && (
      <>
        <h3 className="text-xl font-semibold text-white mb-3 mt-4 flex items-center gap-2">
          <span role="img" aria-label="Suggestions">💡</span> Suggestions
        </h3>
        <ul className="w-full mb-6 space-y-2">
          {result.suggestions.map((sug, idx) => (
            <li
              key={idx}
              className="py-2 px-4 bg-[#1e293b] border border-cyan-700 rounded-lg text-gray-200 text-sm sm:text-base"
            >
              {sug}
            </li>
          ))}
        </ul>
      </>
    )}

    <button
      onClick={onReset}
      className="mt-4 px-6 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold shadow-md transition-all duration-300"
    >
      🔁 Upload Another
    </button>
  </div>
);

export default AnalysisResult;
