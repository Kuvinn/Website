import {Parallax} from 'react-parallax';
import yosemite from './assets/yosemite.jpg';
const Coding = () => (
    <Parallax className="background" bgImage={yosemite} strength={300}>
        <h2 className="center">Coding Projects</h2>
        <p className="center2">I'm about to graduate soon! That means I have more time to work on projects I care about, using what I've learned throughout my time in school.</p>
    </Parallax>
);

export default Coding; 