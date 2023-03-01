import Languages from "../Data/Languages.json";
import { useContext } from "react";
import image from "../img/C64.jpg";
import "./AboutMe.css"

export const AboutMeComponent = ({toggleLanguage, toggleTheme ,LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
    const {AboutMe} = Languages[Text]


    return(
        <div className="aboutMe">
            <img className="C64" src={image}></img>
<h2>{AboutMe.h2}</h2>
<p>{AboutMe.p}</p>
        </div>
    )
}