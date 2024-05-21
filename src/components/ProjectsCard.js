import "./ProjectsCard.css";
function ProjectsCard(){
    return(
        <div className="projects_sec">
            <h1 className="projects_header">Projects</h1>
            <p className="projects_desc"> 
                <h3>Short Tale (C++)</h3>
                <p>Text-based, terminal-ran role-playing game. Used inheritance and composite design pattern in agile-scrum cycle using Kanban board for Software Construction course.</p>
                <h3>Resume Website (HTML/CSS/JS)</h3>
                <p>Project designed to self-teach web-development elements. Using various tutorials to replicate creative website design and to develop personal ideas.</p>
                <h3>Neural Networks / Logistic Regression</h3>
                <p>Developed a neural network to understand and improve testing error with logistic regression on movie and iris datasets. Was done in conjunction with AI and ML / DM classes.</p>
            </p>
        </div>
    )
}

export default ProjectsCard;