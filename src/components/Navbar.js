import "./Navbar.css"
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useState, useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";
import deutsch from "../img/German-flag-emoji.png";
import english from "../img/British-flag-emoji.png";
import { Link, animateScroll as scroll } from "react-scroll";



export const Navbar = ({toggleLanguage, toggleTheme}) => {
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)

const [nose, setNose] = useState(false)


const Nose = () =>{
    setNose(prev=> !prev)
}

console.log(theme.theme)

return(
    <nav className="navbarWrapper">
        <div className="toggleContainer">
    <label className="logoContainer">
        <input type="checkbox" onChange={Nose} className="checkbox"></input>
    </label>
    <p className="nose">{nose === true? ">" :"<"}</p>
        <p className="mouth">{nose === true? "‿" : "︵"}</p></div>
    <nav className="navbarMain">
<h4>Home</h4>
<Link to="section" smooth={true}><h4>Skills</h4></Link> 
<h4>{german.german==="german"?"Projects":"Projekte"}</h4>
    </nav>
    <div className="navbarSocialMedia">
<p className="navbarP">{<GrLinkedin className="reactIcon"/>}</p>
<p className="navbarP">{<GrGithub className="reactIcon"/>}</p>
    </div>
    <div  className="navButtonDiv">
    <button className="navbarButton">{german.german === "german"? "Contact Me!":"Schreib mir! "}</button>
    <button className="navbarButton" onClick={toggleLanguage}>{german.german === "german"?<img className="flag" src={deutsch}></img> : <img className="flag" src={english}></img>}</button>
    </div>
    <div>
    <button className="themeButton" onClick={toggleTheme}>{theme.theme === "light"? <HiOutlineMoon className="reactIcon" />:<HiOutlineSun className="reactIcon"/>}</button>
    </div>
    </nav>
)
}
