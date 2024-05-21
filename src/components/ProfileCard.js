import Pfp from "./Pfp.js"
function ProfileCard() {
  return (
    <div className="card">
        {/* left part of profile card*/}
        <div className="left">
          <Pfp/>
        </div>
        {/* right part of profile card*/}
        <div className="right">
            <div className="shadow">
                <h1>Hi, I'm Kevin Pham.</h1>
                <p>I'm a fourth-year Computer Science student. My interests are ML/DM as well as NLP.</p>
                <p>I'm interested in creating creative design and creating learning models.</p>
                <br/>
                <p>I'm also an avid rap/R&B fan and I have a black belt in Taekwondo!</p>
                <p>Find some of my socials/information below!</p>
            </div>
        </div>
    </div>
  );
}

export default ProfileCard;