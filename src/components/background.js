import React from "react";
import back from "../g8.svg"
import "../css/background.css"

const Background = () =>{
    return(
        <div className="background">
           <img 
           className="back"
           src={back}
           alt="background"
           />
        </div>
    )
}

export default Background