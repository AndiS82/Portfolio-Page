import './App.css';
import Home from "./pages/Home";
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export const ThemeContext = createContext("light")
export const LanguageContext = createContext("german")

function App() {
const [theme, setTheme] = useState("light")
  const [german, setGerman]= useState("german")


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
<Router>
  <Routes>
    <Route path='/' element={<Home toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} ThemeContext={ThemeContext} LanguageContext={LanguageContext}/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
</Router>
  </LanguageContext.Provider>
  </ThemeContext.Provider>);
}

export default App;
