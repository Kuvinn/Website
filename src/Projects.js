import Header from "./components/Header";
import Footer from "./components/Footer";
import Redirect from './components/Redirect.js';
import AboutRedirect from './components/AboutRedirect.js';
import EducationRedirect from './components/EducationRedirect.js';
import ExtraRedirect from './components/ExtraRedirect.js';
import ProjectsCard from "./components/ProjectsCard.js";
function Projects(){
    return(
        <>
        <Header/>
        <ProjectsCard/>
        <Redirect/>
        <AboutRedirect/>
        <EducationRedirect/>
        <ExtraRedirect/>
        <Footer/>
        </>
    )
}

export default Projects;