import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
import './components/Header.css';
import './components/Footer.css';
// import About from './About';
// import Education from './Education';
// import Projects from './Projects';
// import Extracurriculars from "./Extracurriculars";

const About = lazy(()=>import('./About'));
const Education = lazy(()=>import('./Education'));
const Projects = lazy(()=>import('./Projects'));
const Extracurriculars = lazy(()=>import('./Extracurriculars'));

function App() {
  return (
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><About/></Suspense>}>
          <Route path="/home" index element={<Suspense fallback={<div>Loading...</div>}><About/></Suspense>}/>
        </Route>
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About/></Suspense>}/>
        <Route path="/education" element={<Suspense fallback={<div>Loading...</div>}><Education/></Suspense>}/>
        <Route path="/projects" element={<Suspense fallback={<div>Loading...</div>}><Projects/></Suspense>}/>
        <Route path="/extracurriculars" element={<Suspense fallback={<div>Loading...</div>}><Extracurriculars/></Suspense>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
