import Header from "./components/Header";
import Footer from "./components/Footer";
import Redirect from './components/Redirect.js';
import AboutRedirect from './components/AboutRedirect.js';
import EducationRedirect from './components/EducationRedirect.js';
import ProjectsRedirect from './components/ProjectsRedirect.js';
function Extracurriculars(){
    return(
        <>
        <Header/>
        <Redirect/>
        <AboutRedirect/>
        <EducationRedirect/>
        <ProjectsRedirect/>
        <Footer/>
        </>
    )
}

export default Extracurriculars;