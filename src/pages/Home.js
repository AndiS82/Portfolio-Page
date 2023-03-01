import './Home.css';
import { Navbar } from '../components/Navbar';
import { HiArrowRightCircle } from "react-icons/hi2";
import {useContext } from 'react';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';

function Home({toggleLanguage, toggleTheme, LanguageContext, ThemeContext}) {
    const german = useContext(LanguageContext)
    const theme = useContext(ThemeContext)


    console.log(theme)
return (
    
    <div className="Home" id={theme.theme}>
<header>
<Navbar toggleLanguage={toggleLanguage} toggleTheme={toggleTheme}/>
<div className={theme.theme === "light"?"headerContainer":"headerContainerDark"}>
<h2>{german.german ==="german"? "Welcome to my Portfolio!":"Willkommen auf meiner Portfolioseite!"}</h2>
<h1>{german.german ==="german"? "Hi there! I'm Andy":"Hallo! Ich bin Andreas,"}</h1>
<h1 id='fullStack'>{"<Full Stack Web Developer/>"}</h1>
<p>{german.german === "german"? "I'd absolutely love to make your web presence fun and exciting - one pixel at a time!":"Ich werde deinen Web-Auftritt cool und aufregend in Szene setzen - Pixel für Pixel!"}</p>
<h3 className={theme.theme === "light"?"getInTouch":"getInTouchDark"}>{german.german === "german"? "Let's get in touch!":"Kontaktiere mich!"} {<HiArrowRightCircle className='icon'/>}</h3>
</div>
</header>
<main>
<AboutMe/>
</main>
<footer>
<Footer/>
</footer>
    </div>
)}

export default Home;