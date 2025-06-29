import React from 'react';
import analyzeResume from './utils/analyzeresume';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.min';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const UploadResume = ({ onAnalyze }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') {
      alert('Please upload a valid PDF file.');
      return;
    }

    const text = await extractTextFromPDF(file);
    const result = analyzeResume(text);
    onAnalyze(result);
  };

  const extractTextFromPDF = async (file) => {
    const typedarray = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjsLib.getDocument(typedarray).promise;
    let text = '';
    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const content = await page.getTextContent();
      text += content.items.map((s) => s.str).join(' ') + '\n';
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0f172a] rounded-2xl shadow-xl p-10 max-w-xl mx-auto mt-16 border border-cyan-700 text-white">
      <h2 className="text-3xl font-extrabold text-cyan-300 mb-4 text-center">
        Upload Your Resume (PDF)
      </h2>
      <p className="mb-6 text-gray-300 text-center text-lg max-w-md">
        Get instant, AI-powered feedback on your resume. Only PDF files are supported.
      </p>
      <label
        htmlFor="resume-upload"
        className="w-full flex flex-col items-center justify-center cursor-pointer bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-xl shadow-md transition-all duration-300 mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 5.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z"
          />
        </svg>
        <span>Click to select PDF</span>
        <input
          id="resume-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <span className="text-xs text-gray-400 mb-2">Max file size: 2MB</span>
    </div>
  );
};

export default UploadResume;
