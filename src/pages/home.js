import React, { useState , useEffect } from "react";
import "../css/home.css"



const Home = () =>{
    const texts = ["We are Robotics", "We are Reality" , "We are Best" , "We are ATOM" , "We are No.1"]; 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [atom, setAtom] = useState(texts[currentIndex]);

    useEffect(() => {
   
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 700);

        return () => {
            clearInterval(interval); 
        };
    }, []);

    useEffect(() => {
        setAtom(texts[currentIndex]);
    }, [currentIndex]);

return(
    <div className="header">
        <h1 >Welcome To <span className="atom-robotics" >ATOM Robotics</span> </h1>
        <div className="heading_contain">
        <h6 className="head">{atom}</h6>
        </div>
        <div className="button_grp">
            <a href="https://linktr.ee/a.t.o.m_robotics_lab" target="_blank"><button className="button" type="submit">Contact Us</button></a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZVT2Fe0cWHGbEaG_1kTMZ6PIN3-Gf-etlu5Apdbid7y-Zrg/viewform" target="_blank"><button className="button selection" type="submit">Selection Task 2023</button></a>
        </div>
    </div>
)
}
export default Home