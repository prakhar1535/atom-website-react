import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Wiki from "./pages/wiki";
import Blog from "./pages/blog";
import Projects from "./pages/projects";
import Download from "./pages/download";
import Navbar from "./components/navbar";
import "./App.css";
import { motion } from "framer-motion";
import cursor from "./cursor.svg";
import Background from "./components/background";

function App() {
  const [mouseposition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [currentPage, setCurrentPage] = useState("home"); // Default page = "home"

  useEffect(() => {
    const mousemove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const variants = {
    default: {
      x: mouseposition.x,
      y: mouseposition.y,
      mixBlendMode: "difference",
    },
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "blog":
        return <Blog />;
      case "wiki":
        return <Wiki />;
      case "projects":
        return <Projects />;
      case "download":
        return <Download />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar />
      <Background />
      {renderPage()}
      <motion.img
        src={cursor}
        alt="cursor"
        className="cursor"
        variants={variants}
        animate="default"
      />
    </div>
  );
}

export default App;
