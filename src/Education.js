import Header from "./components/Header";
import Footer from "./components/Footer";
import EducationCard from "./components/EducationCard";
import SkillsCard from "./components/SkillsCard";
import Redirect from "./components/Redirect";
import AboutRedirect from "./components/AboutRedirect";
import ProjectsRedirect from "./components/ProjectsRedirect";
import ExtraRedirect from "./components/ExtraRedirect";
import {Suspense} from 'react';
function Education(){
    return(
        <>
        <Header/>
        <Suspense fallback={<div>Loading...</div>}><EducationCard/></Suspense>
        <Suspense fallback={<div>Loading...</div>}><SkillsCard/></Suspense>
        <Suspense fallback={<div>Loading...</div>}><Redirect/>
        <AboutRedirect/>
        <ProjectsRedirect/>
        <ExtraRedirect/></Suspense>

        <Footer/>
        </>
    )
}

export default Education;