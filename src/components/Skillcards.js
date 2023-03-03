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
import wink from "../img/wink emoji.png";
import Languages from "../Data/Languages.json";


export const SkillCards = ({ LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {SkillCard} = Languages[Text]

    return(
        <section className="skillsSection">
            <div className="skillsWrapper">
            <div className={theme.theme === "light"?"headlineContainer":"headlineContainerDark"}>
                <h2 className="const">{SkillCard.h2}<span className="span1">{SkillCard.span1}<span className="span2">{SkillCard.span2}<span className="span3">{SkillCard.span3}</span></span></span></h2>
        <div className="skillsContainer">
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}>
            <div className="percentageHTML">
                <div className="dotHTML"></div>
                <svg className="svgHTML">
                    <circle className="circle" cx="70" cy="70" r="70"></circle>
                    <circle className="circleHTML2" cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>95<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">HTML5</h4><img className="logo" src={html5}></img>
           </div> </div>
        </div>
        <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}>
        <div className="percentageCSS">
                <div className="dotCSS"></div>
                <svg className="svgCSS">
                    <circle className="circleCSS" cx="70" cy="70" r="70"></circle>
                    <circle className="circleCSS2" cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>85<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">CSS</h4><img className="logo" src={css}></img>
           </div> </div>
           
        </div>
        <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}>
            <div className="percentageSASS">
                <div className="dotSASS"></div>
                <svg className="svgSASS">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>65<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">SASS</h4><img className="logo" src={sass}></img>
           </div> </div></div>
           <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentageJS">
                <div className="dotJS"></div>
                <svg className="svgJS">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>80<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">JavaScript</h4><img className="logo" src={javascript}></img>
           </div> </div></div>
           <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}>
            <div className="percentageR">
                <div className="dotR"></div>
                <svg className="svgR">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>80<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">React.js</h4><img className="logo" src={react}></img>
           </div> </div></div>
           <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentageRX">
                <div className="dotRX"></div>
                <svg className="svgRX">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>70<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">Redux.js</h4><img className="logo" src={redux}></img>
           </div> </div></div>
           <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentageEX">
                <div className="dotEX"></div>
                <svg className="svgEX">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>75<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">Express.js</h4><img className="logo" src={express}></img>
           </div> </div></div>
           <h3 className="comma">,</h3>
        <div className={theme.theme === "light"?"skillCard":"skillCardDark"}><div className="percentageN">
                <div className="dotN"></div>
                <svg className="svgN">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                
                <div className="number">
                <h3>75<span>%</span></h3>
                
                </div>
                <div className="skillLogoContainer">
                <h4 className="skillName">Node.js</h4><img className="logo" src={node}></img>
           </div> </div></div>
           <h3 className="closedArray">{SkillCard.closedArray}</h3>
         </div>
         <a href="https://github.com/AndiS82" className={theme.theme === "light"?"checkOutMyProfile":"checkOutMyProfileDark"}>Check out my GitHub profile for more!{<img className="winkMemoji" src={wink}></img>}</a>
         <h2></h2>
         </div></div></section>
       
    )
}