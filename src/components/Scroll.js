import "./Scroll.css"
import {useEffect, useState} from 'react';
import { SlArrowUpCircle } from "react-icons/sl";

export const Scroll=()=> {
const [isVisible, setIsVisible ]= useState(false)

const scrollToTop = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

useEffect(()=>{
    const toggleVisibility = ()=>{
        if(window.pageYOffset >500){
            setIsVisible(true);
        } else{
            setIsVisible(false)
        }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () =>window.removeEventListener("scroll", toggleVisibility);
}, []);

return(
    <div className="scrollToTop">
        {isVisible &&(
                <button onClick={scrollToTop}>
                    <SlArrowUpCircle className="reactIcon"/>
                </button>
            )
        }
    </div>
)
}