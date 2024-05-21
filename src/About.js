import './components/Header.css';
import Header from './components/Header';
import './components/ProfileCard.css'
import ProfileCard from './components/ProfileCard.js';
import Footer from './components/Footer.js';
import AboutCard from './components/AboutCard.js';
import Redirect from './components/Redirect.js';
import EducationRedirect from './components/EducationRedirect.js';
import ProjectsRedirect from './components/ProjectsRedirect.js';
import ExtraRedirect from './components/ExtraRedirect.js';
function About() {
  return (
    <div>
        <Header/>
        <ProfileCard/>
        <AboutCard/>
        <Redirect/>
        <EducationRedirect/>
        <ProjectsRedirect/>
        <ExtraRedirect/>
        <Footer/>
    </div>
  );
}

export default About;
