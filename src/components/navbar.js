import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css"


const Navbar = () => {
    
    return(
        
           <nav>
            <ul className="nav">
                <li >
                    <NavLink to="/" className="headings">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="headings">About</NavLink>
                </li>
                <li>
                    <NavLink to="/wiki" className="headings">Wiki</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="headings">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="headings">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/download" className="headings">Download</NavLink>
                </li>
            </ul>
           </nav>
        
    )
}
export default Navbar