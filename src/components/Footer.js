import {useContext } from 'react';
import Languages from "../Data/Languages.json";

export const Footer = ({toggleLanguage, toggleTheme ,LanguageContext, ThemeContext})=>{
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {Home} = Languages[Text]
    return(<div className="Footer" id={theme.theme}>
        Foto von <a href="https://unsplash.com/@lorenzoherrera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lorenzo Herrera</a> auf <a href="https://unsplash.com/de/fotos/p0j-mE6mGo4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   </div> )
}