import './components/Header.css';
import Header from './components/Header';
import './components/ProfileCard.css'
import ProfileCard from './components/ProfileCard.js';
import Footer from './components/Footer.js';
import AboutCard from './components/AboutCard.js';
function About() {
  return (
    <div>
        <Header/>
        <ProfileCard/>
        <AboutCard/>
        <Footer/>
    </div>
  );
}

export default About;
