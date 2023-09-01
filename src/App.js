import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Wiki from './pages/wiki'
import Blog from './pages/blog'
import Projects from './pages/projects'
import Download from './pages/download'
import Navbar from './components/navbar'
import './App.css'
import { motion } from "framer-motion";
import cursor from "./cursor.svg"
import Background from "./components/background"


function App() {
    const [mouseposition , setMousePosition] = useState(
       {
        x:0,
        y:0
       }
    )
    console.log(mouseposition)
  
    useEffect(
        () =>{
            const mousemove = e =>{
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }
            window.addEventListener("mousemove" , mousemove)
            return () => {
                window.removeEventListener("mousemove", mousemove)
            } 
                },
                []
    )
    const variants = {
        default : {
            x: mouseposition.x ,
            y: mouseposition.y ,
            mixBlendMode: "difference"
        }
        
    }


    return(
      
    
    <BrowserRouter>
       
       
       <Navbar/>
       <Background/>
    <Routes>
 
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="wiki" element={<Wiki />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="download" element={<Download />}/>
    
    </Routes>
    <motion.img
    src={cursor}
    alt="cursor"
    className="cursor"
    variants={variants}
    animate="default"
    />
       
    
    </BrowserRouter>
    
    )
}
export default App