import "./AboutCard.css"
function AboutCard(){
    return(
        <div className="about_sec">
            <div className="about_shadow">
                <h1 className="about_header">About</h1>
                <br/>
                <p>
                    I come from Anaheim, California, having grown up both in the American suburbs and alongside Vietnamese markets in Little Saigon. 
                    My dad had bought a family computer, and I'd dabbled on it starting since I was four. This probably explains why I've majored in Computer Science today,
                    and why I navigate technology so quickly when my parents fail to adapt.
                    </p>

                <p>
                    I didn't have much exposure to Computer Science before coming to the University of California, Riverside. I've learned a lot, from my interests into Machine Learning and developing neural networks,
                    from struggling with algorithms in CS 141, or even when I had wrote my first "Hello World" program. Now, I look forward to applying the things that I've learned here in University,
                    in both my projects and professional career. I hope that I can use my knowledge to help others in some way, and to pay back my parents for all that they've done for me.
                </p>

                <a href="https://docs.google.com/document/d/1yV_6KALtBt9wm7Z6__E-PhpMSVUV2qg9/edit#heading=h.gjdgxs" target="_blank" className="resume"><p>Click here to look at my resume!</p></a>
            </div>
        </div>
    )
}

export default AboutCard;