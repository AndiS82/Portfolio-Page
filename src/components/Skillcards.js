import "./Skillcards.css"
import html5 from "../img/html5-original.svg";
import css from "../img/css.svg";
import sass from "../img/sass.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import redux from "../img/redux.svg";
import express from "../img/express-original.svg";
import node from "../img/nodejs-original.svg";
import { useContext } from "react";
import Languages from "../Data/Languages.json";


export const SkillCards = ({toggleLanguage, toggleTheme, LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {Skills} = Languages[Text]

    return(
        <section className="skillsSection">
            <div className="skillsWrapper">
            <div className={theme.theme === "light"?"headlineContainer":"headlineContainerDark"}>
                <h2>Coding Skills</h2>
        <div className="skillsContainer">
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}>
            <div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">HTML5</h4><img className="logo" src={html5}></img>
           </div> </div>
        </div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}>
        <div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">CSS</h4><img className="logo" src={css}></img>
           </div> </div>
        </div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">SASS</h4><img className="logo" src={sass}></img>
           </div> </div></div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">JavaScript</h4><img className="logo" src={javascript}></img>
           </div> </div></div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">React.js</h4><img className="logo" src={react}></img>
           </div> </div></div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">Redux.js</h4><img className="logo" src={redux}></img>
           </div> </div></div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">Express.js</h4><img className="logo" src={express}></img>
           </div> </div></div>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentage">
                <div className="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">Node.js</h4><img className="logo" src={node}></img>
           </div> </div></div>
         </div>
         <h5 className={theme.theme === "light"?"checkOutMyProfile":"checkOutMyProfileDark"}>Check out my GitHub profile for more!</h5>
         </div></div></section>
       
    )
}