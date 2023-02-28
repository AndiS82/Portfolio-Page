import "./Navbar.css"
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { useState, useContext } from "react";
import { LanguageContext } from "../App";


export const Navbar = ({toggleLanguage}) => {
    const german = useContext(LanguageContext)

const [nose, setNose] = useState(false)

console.log(german.german)

const Nose = () =>{
    setNose(prev=> !prev)
}

return(
    <nav className="navbarWrapper">
        <div className="toggleContainer">
    <label className="logoContainer">
        <input type="checkbox" onChange={Nose} className="checkbox"></input>
    </label>
    <p className="navbarP">{nose === true? ">" :"<"}</p>
        <p className="mouth">{nose === true? "‿" : "︵"}</p></div>
    <nav className="navbarMain">
<h4>Home</h4>
<h4>Skills</h4>
<h4>Projects</h4>
    </nav>
    <div className="navbarSocialMedia">
<p className="navbarP">{<GrLinkedin/>}</p>
<p className="navbarP">{<GrGithub/>}</p>
    </div>
    <div  className="navButtonDiv">
        <button className=""></button>
    <button className="navbarButton" onClick={toggleLanguage}>{german.german === "german"? "English?":"Deutsch?"}</button>
    </div>
    </nav>
)
}
