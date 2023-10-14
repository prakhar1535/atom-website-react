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
import Background from "./components/background"


function App() {


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
</BrowserRouter>
    
    )
}
export default App