import { Navbar } from "../components/Navbar"
import "./Skills.css"
import Languages from "../Data/Languages.json";
import {useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { SkillCards } from "../components/Skillcards";

export const Skills = ({toggleLanguage, toggleTheme, LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {Home} = Languages[Text];
const navigate = useNavigate();
    return(
        <section className="skillsSection" id={theme.theme}>
            <Navbar toggleLanguage={toggleLanguage} toggleTheme={toggleTheme}/>
            <div>
            <SkillCards toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} LanguageContext={LanguageContext} ThemeContext={ThemeContext}/>
            </div></section>
       
    )
}