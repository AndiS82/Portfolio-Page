import './App.css';
import { Navbar } from './components/Navbar';
import { HiArrowRightCircle } from "react-icons/hi2";
import coding from "./img/CodingMacBook.jpg"
import { Skills } from './components/Skills';
import { createContext, useState } from 'react';


export const ThemeContext = createContext(null)
export const LanguageContext = createContext(null)

function App() {
const [theme, setTheme] = useState("light")
  const [german, setGerman]= useState(true)


  const toggleTheme = ()=>{
    setTheme((curr)=>(curr === "light"? "dark":"light"))
  }
  const toggleLanguage = () =>{
    setGerman((curr)=>(curr === "german"? "english":"german"))
    console.log(german)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <LanguageContext.Provider value={{german, toggleLanguage}}>
    <div className="App" id={theme}>

<header>
<Navbar toggleLanguage={toggleLanguage} toggleTheme={toggleTheme}/>
<div className='headerContainer'>
<h2>{german === true || german ==="german"? "Welcome to my Portfolio!":"Willkommen auf meiner Portfoliseite!"}</h2>
<h1>Hi there! I'm Andy, an upcoming Full Stack Web Designer!</h1>
<p>I'm currently on a quest to make the web fun and exciting - one pixel at a time!</p>
<h3 className='getInTouch'>Let's get in touch! {<HiArrowRightCircle className='icon'/>}</h3>
</div>
</header>
<section>
  <Skills/>
</section>
<main>
  <div>
    <img className='headerImg' src={coding}></img>
  </div>
  <div>
    <h2> Get In Touch!</h2>
    <form>

    </form>
  </div>
</main>
<footer>

</footer>
    </div>
  </LanguageContext.Provider>
  </ThemeContext.Provider>);
}

export default App;
