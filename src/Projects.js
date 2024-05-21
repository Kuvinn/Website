import Header from "./components/Header";
import Footer from "./components/Footer";
import Redirect from './components/Redirect.js';
import AboutRedirect from './components/AboutRedirect.js';
import EducationRedirect from './components/EducationRedirect.js';
import ExtraRedirect from './components/ExtraRedirect.js';
import ProjectsCard from "./components/ProjectsCard.js";
import {Suspense} from "react";
function Projects(){
    return(
        <>
        <Header/>
        {/* <Suspense fallback={<div>Loading...</div>}><ProjectsCard/></Suspense> */}
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