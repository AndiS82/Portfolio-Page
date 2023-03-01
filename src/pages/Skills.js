import "./Skills.css"


export const Skills = ()=>{
    return(
        <section className="skillsSection">
            <div className="headlineContainer"><h2>Coding Skills</h2>
        <div className="skillsContainer">
        <div className="skillCard">
            <div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
            </div>
        </div>
        <div className="skillCard">CSS</div>
        <div className="skillCard">SASS</div>
        <div className="skillCard">JavaScript</div>
        <div className="skillCard">React.js</div>
        <div className="skillCard">Redux</div>
        <div className="skillCard">Express.js</div>
        <div className="skillCard">Node.js</div>
         </div>
         </div></section>
       
    )
}