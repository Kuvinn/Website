
function Header(){
    return (
        <div className="header">
            <nav>
                <ul className="navlist">
                    <li className="home"><a href="home">Home</a></li>
                    <li className="about"><a href="about">About</a></li>
                    <li className="education"><a href="education">Education</a></li>
                    <li className="projects"><a href="projects">Projects</a></li>
                    <li className="extracurriculars"><a href="extracurriculars">Extracurriculars</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header