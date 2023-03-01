import "./Navbar.css"
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";
import deutsch from "../img/German-flag-emoji.png";
import english from "../img/British-flag-emoji.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Languages from "../Data/Languages.json";
import Hello from "../img/hello memoji.png";



export const Navbar = ({toggleLanguage, toggleTheme}) => {
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)

const Text = german.german;
const {Navbar} = Languages[Text]

console.log(theme.theme)

return(
    <nav className={theme.theme === "light"?"navbarWrapper":"navbarWrapperDark"}>
        <div className="memojiContainer">    
            <img className="helloMemoji" src={Hello} alt={"Wave Memoji"}></img>
        </div>
    <nav className="navbarMain">
<h4>Home</h4>
<Link to="section" smooth={true}><h4>Skills</h4></Link> 
<h4>{Navbar.projects}</h4>
    </nav>
    <div className="navbarSocialMedia">
<a href="https://www.linkedin.com/in/andreas-schneider-bb1b21262/"  className="navbarA">{<GrLinkedin className="LI"/>}</a>
<a href="https://github.com/AndiS82" className="navbarA">{<GrGithub  className="Git"/>}</a>
    </div>
    <div  className="navButtonDiv">
    <button className="navbarButton">{german.german === "german"? "Contact Me!":"Schreib mir! "}</button>
    <button className="navbarButton" onClick={toggleLanguage}>{german.german === "german"?<img className="flag" src={english}></img> : <img className="flag" src={deutsch}></img>}</button>
    </div>
    <div>
    <button className="themeButton" onClick={toggleTheme}>{theme.theme === "light"? <HiOutlineMoon className="reactIcon" />:<HiOutlineSun className="reactIcon"/>}</button>
    </div>
    </nav>
)
}
