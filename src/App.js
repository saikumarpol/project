import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BootingScreen from './components/BootingScreen';

import Home from './pages/Home';
import Academics from './pages/Academics';
import Placements from './pages/Placements';
import StudentPortal from './pages/StudentPortal';
import Roadmaps from './Roadmaps/Roadmaps';
import Team from './pages/Team';
import R23 from './pages/R23';

import PythonTutorial from './tutorials/PythonTutorial';
import CTutorial from './tutorials/CTutorial';
import JavaTutorial from './tutorials/JavaTutorial';
import CppTutorial from './tutorials/CppTutorial';
import Git from './tutorials/git&gihub';
import FlaskTutorial from './tutorials/FlaskTutorial';
import DSATutorial from './tutorials/Dsa';
import FrontendTutorial from './tutorials/frontend';
import BackendTutorial from './tutorials/backend';
import ReactTutorial from './tutorials/ReactTutorial';
import FullStackTutorial from './tutorials/FullStackTutorial';
import PythonInterviewQuestions from './tutorials/PythonInterviewQuestions';
import FlaskProject from './tutorials/flaskproject';
import FrontendProjects from './tutorials/frontendprojects';
import CompanyPlacementPage from './placements/companies';
import CompanyDetailsPage from './placements/CompanyDetailsPage';

import Compiler from './components/compiler';
import UploadResume from './components/Resume/UploadResume';
import AnalysisResult from './components/Resume/AnalysisResult';
import Tools from './components/Tools';
import Cint from './tutorials/Cint';
import Cppint from './tutorials/Cppint';
import Javaint from './tutorials/Javaint';
import Dsaint from './tutorials/Dsaint';

import './App.css';
import Reactproject from './tutorials/Reactproject';
import Backendprojects from './tutorials/backendprojects';
import Fullstackprojects from './tutorials/Fullstackprojects';
import Pythonps from './ps/Pythonps';
import Javaps from './ps/Javaps';
import Cps from './ps/cps';
import Cppps from './ps/Cppps';
import Dsaps from './ps/Dsaps';
import Dsayt from './ps/Dsayt';
import Javayt from './ps/Javayt';
import Pyt from './ps/pyt';
import Cyt from './ps/cyt';
import Cpyt from './ps/cpsyt';
import Pyq from './Quiz/Pyq';
import Javaq from './Quiz/Javaq';
import Dsaq from './Quiz/Dsaq';
import Cq from './Quiz/Cq';
import Cpq from './Quiz/Cpq';
import Mainquiz from './Quiz/Mainquiz';

// Conditional Footer Wrapper
function FooterWrapper() {
  const location = useLocation();
  const hiddenPaths = [
    '/',
    '/team',
    '/roadmaps',
    '/placements',
    '/companies',
    '/CompanyDetailsPage',
    '/resources',
    '/studentportal',
    '/compiler',
    '/r23',
    '/Mainquiz',
  ];
  return hiddenPaths.includes(location.pathname) ? null : <Footer />;
}

// Resume Analyzer Wrapper Page
// Resume Analyzer Wrapper Page
function ResumeAnalyzerPage() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      {!result ? (
        <UploadResume onAnalyze={setResult} />
      ) : (
        <AnalysisResult result={result} onReset={() => setResult(null)} />
      )}
    </div>
  );
}


function App() {
  const [booting, setBooting] = useState(true);
  const location = useLocation();
  // Hide footer for quiz pages, analyzer, tool, and academics
  const hideFooter = location.pathname.startsWith('/quiz') || location.pathname === '/analyzer' || location.pathname === '/tool' || location.pathname === '/academics'  || location.pathname === '/mainquiz' || location.pathname.startsWith('/company/');

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (booting) return <BootingScreen />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Academics />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/placements" element={<CompanyPlacementPage />} />
          <Route path="/studentportal" element={<StudentPortal />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pythontutorial" element={<PythonTutorial />} />
          <Route path="/cptutorial" element={<CTutorial />} />
          <Route path="/cpptutorial" element={<CppTutorial />} />
          <Route path="/javatutorial" element={<JavaTutorial />} />
          <Route path="/gittutorial" element={<Git />} />
          <Route path="/flasktutorial" element={<FlaskTutorial />} />
          <Route path="/dsa" element={<DSATutorial />} />
          <Route path="/frontendtutorial" element={<FrontendTutorial />} />
          <Route path="/backendtutorial" element={<BackendTutorial />} />
          <Route path="/reacttutorial" element={<ReactTutorial />} />
          <Route path="/fullstacktutorial" element={<FullStackTutorial />} />
          <Route path="/pythonint" element={<PythonInterviewQuestions />} />
          <Route path="/companies" element={<CompanyPlacementPage />} />
          <Route path="/company/:companyId" element={<CompanyDetailsPage />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/r23" element={<R23 />} />
          <Route path="/analyzer" element={<ResumeAnalyzerPage />} />
          <Route path="/tool" element={<Tools />} />
          <Route path="/flaskproject" element={<FlaskProject />} />
          {/* Quiz routes for Python, Java, and C (basic and advanced) */}

          {/* Default quiz page for backward compatibility */}
          <Route path ="/cint" element={<Cint />} />
          <Route path ="/cppint" element={<Cppint />} />
          <Route path ="/javaint" element={<Javaint />} />
          <Route path ="/dsaint" element={<Dsaint />} />
          <Route path = '/frontendprojects' element={<FrontendProjects />} />
          <Route path='/reactproject' element={<Reactproject/>}/>
          <Route path='/backendprojects' element={<Backendprojects/>}/>
          <Route path ='/fullstackproject' element={<Fullstackprojects/>}/>
          <Route path ='/pythonps' element={<Pythonps/>}/>
          <Route path ='/javaps' element={<Javaps/>}/>
          <Route path ='/cps' element={<Cps/>}/>
          <Route path ='/CPPS' element={<Cppps/>}/>
          <Route path ='/dsaps' element={<Dsaps/>}/>
          <Route path='/dsayt' element={<Dsayt/>}/>
          <Route path ='/javayt' element={<Javayt/>}/>
          <Route path='/pyt' element={<Pyt/>}/>
          <Route path ='/cyt' element={<Cyt/>}/>
          <Route path ='/cpsyt' element={<Cpyt/>}/>
          <Route path ='/pyq' element={<Pyq/>}/>
          <Route path='/javaq' element={<Javaq />} />
          <Route path='/dsaq' element={<Dsaq />} />
          <Route path='/cq' element={<Cq />} />
          <Route path='/cpq' element={<Cpq />} />
          <Route path ='/mainquiz' element={<Mainquiz/>} />
         
        </Routes>
      </main>
      {!hideFooter && <FooterWrapper />}
    </div>
  );
}

export default App;