import Header from "./components/Header";
import Footer from "./components/Footer";
import EducationCard from "./components/EducationCard";
import SkillsCard from "./components/SkillsCard";
import Redirect from "./components/Redirect";
import AboutRedirect from "./components/AboutRedirect";
import ProjectsRedirect from "./components/ProjectsRedirect";
import ExtraRedirect from "./components/ExtraRedirect";
function Education(){
    return(
        <>
        <Header/>
        <EducationCard/>
        <SkillsCard/>
        <Redirect/>
        <AboutRedirect/>
        <ProjectsRedirect/>
        <ExtraRedirect/>
        <Footer/>
        </>
    )
}

export default Education;