import { Navbar } from "../components/Navbar";
import Languages from "../Data/Languages.json";
import {useContext } from 'react';
import { useNavigate } from "react-router-dom";

export const Contact = ({toggleLanguage, toggleTheme, LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {Home} = Languages[Text]
const navigate = useNavigate()


    return(
        <div className="Contact">
<Navbar/>
        </div>
    )
}