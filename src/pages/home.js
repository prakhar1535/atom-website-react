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
        <h6 className="head" >{atom}</h6>
    </div>
)
}
export default Home