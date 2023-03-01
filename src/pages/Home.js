import './Home.css';
import { Navbar } from '../components/Navbar';
import { HiArrowRightCircle } from "react-icons/hi2";
import { AboutMeComponent } from '../components/AboutMe';
import { Footer } from '../components/Footer';
import Languages from "../Data/Languages.json";
import {useContext } from 'react';
import CallMe from "../img/call me memoji.png"

function Home({toggleLanguage, toggleTheme, LanguageContext, ThemeContext}) {
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)
    const Text = german.german;
const {Home} = Languages[Text]


    console.log(theme)
return (
    
    <div className="Home" id={theme.theme}>
<header>
<Navbar toggleLanguage={toggleLanguage} toggleTheme={toggleTheme}/>
<div className={theme.theme === "light"?"headerContainer":"headerContainerDark"}>
<h2>{Home.h2}</h2>
<h1>{Home.h1}</h1>
<h1 id='fullStack'>{"<Full Stack Web Developer/>"}</h1>
<p>{Home.p}</p>
<h3 className={theme.theme === "light"?"getInTouch":"getInTouchDark"}>{Home.h3} {<HiArrowRightCircle className='icon'/>}</h3>
<div className='memojiContainer'>
<img className='callMeMemoji' src={CallMe} alt='Call me gesture memoji'></img>
</div>
</div>
</header>
<main>
<AboutMeComponent toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} LanguageContext={LanguageContext} ThemeContext={ThemeContext}/>
</main>
<footer>
<Footer toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} LanguageContext={LanguageContext} ThemeContext={ThemeContext}/>
</footer>
    </div>
)}

export default Home;