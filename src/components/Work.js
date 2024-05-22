import {Parallax} from 'react-parallax';
import work from './assets/work.JPG';
const Work = () => (
    <Parallax className="background" bgImage={work} strength={300}>
        <h2 className="center">Special Project Administrative Assistant</h2>
        <p className="center2">I used to work at the ECE Grad Office at UCR! It taught me a lot about professionalism, and about good work culture and habits.</p>
    </Parallax>
);

export default Work; 