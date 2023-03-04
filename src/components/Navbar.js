import "./Navbar.css"
import { GrLinkedin, GrGithub,} from "react-icons/gr";
import { SlArrowLeftCircle } from "react-icons/sl";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useContext, useRef, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import deutsch from "../img/German-flag-emoji.png";
import english from "../img/British-flag-emoji.png";
import Languages from "../Data/Languages.json";
import Hello from "../img/hello memoji.png";
import Coding from "../img/coding memoji.png";
import Thumbsup from "../img/thumbsup memoji.png";
import CallMe from "../img/call me memoji.png";
import { useNavigate, NavLink } from "react-router-dom";



export const Navbar = ({toggleLanguage, toggleTheme}) => {
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
const pathname = window.location.pathname;

const Text = german.german;
const {Navbar} = Languages[Text];
const [memoji, setMemoji]=useState(Hello);
const navigate = useNavigate()


const changeMemoji =()=>{
if(pathname==="/"){
    setMemoji(Hello)
} else if(pathname === "/skills"){
    setMemoji(Coding)
} else if(pathname === "/projects"){
    setMemoji(Thumbsup)
} else {
    setMemoji(CallMe)
}
}

console.log(memoji)
return(
    <nav className={theme.theme === "light"?"navbarWrapper":"navbarWrapperDark"} >
        <button className="backButton" onClick={()=> navigate(-1)}>{<SlArrowLeftCircle className="backIcon"/>}</button>
        <div className="memojiContainerNav">    
            <img className="helloMemoji" onLoad={changeMemoji} src={memoji} alt={"Wave Memoji"}></img>
        </div>
    <nav className="navbarMain">
    <NavLink className="Link" to={"/"}><h4 className="navbarH">Home</h4></NavLink>
<NavLink className="Link" to={"/skills"}><h4 className="navbarH">Skills</h4></NavLink> 
<NavLink className="Link" to={"/projects"}><h4 className="navbarH">{Navbar.projects}</h4></NavLink>
    </nav>
    <div className="navbarSocialMedia">
<a href="https://www.linkedin.com/in/andreas-schneider-bb1b21262/"  className="navbarA">{<GrLinkedin className="LI"/>}</a>
<a href="https://github.com/AndiS82" className="navbarA">{<GrGithub  className="Git"/>}</a>
    </div>
    <div  className="navButtonDiv">
    <NavLink className="Link" to={"/contact"}><h4 className="navbarH">{Navbar.contactMe}</h4></NavLink>
    <button className="navbarButton" onClick={toggleLanguage}>{german.german === "german"?<img className="flag" src={english}></img> : <img className="flag" src={deutsch}></img>}</button>
    </div>
    <div>
    <button className="themeButton" onClick={toggleTheme}>{theme.theme === "light"? <HiOutlineMoon className="reactIcon" />:<HiOutlineSun className="reactIcon"/>}</button>
    </div>
    </nav>
)
}
