import {Parallax} from 'react-parallax';
import nature from './assets/nature.jpg';
const Nature = () => (
    <Parallax className="background" bgImage={nature} strength={300}>
        <h2 className="center">Traveling</h2>
        <p className="center2">I love traveling! I opt for going to National Parks. It makes me discover how small I am, and how appreciative I should be of nature.</p>
    </Parallax>
);

export default Nature; 