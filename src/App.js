import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './components/Header.css';
import './components/Footer.css';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Extracurriculars from "./Extracurriculars";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}>
          <Route path="/home" index element={<About/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/extracurriculars" element={<Extracurriculars/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
