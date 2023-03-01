import { Navbar } from "../components/Navbar"
import "./Skills.css"
import Languages from "../Data/Languages.json";
import {useContext } from 'react';
import { useNavigate } from "react-router-dom";

export const Skills = ({toggleLanguage, toggleTheme, LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {Home} = Languages[Text];
const navigate = useNavigate();
    return(
        <section className="skillsSection">
            <Navbar/>
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