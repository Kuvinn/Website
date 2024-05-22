import './GalleryCard.css';
import Nature from "./Nature.js";
import Work from "./Work.js";
import Coding from "./Coding.js";
function GalleryCard(){
    return(
    <div>
        <Work/>
        <Nature/>
        <Coding/>

    </div>
    )
}

export default GalleryCard;