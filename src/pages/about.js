import React, { useState, useEffect } from 'react';
import '../css/about.css';

const About = () => {
  const images = [
    '/assets/about_us.png',
    '/assets/about_us2.png',
    '/assets/about_us3.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const text =
    "With the introduction of Robotics & AI. Intelligent & Advanced robots are now being used everywhere to either assist humans or execute tasks that otherwise wouldn't have been possible by humans. As engineering students, these technologies intrigue us to become a part of this industrial revolution on the brink of innovation.";

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let imageInterval;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        imageInterval = setInterval(imageplayer, 2000);
      }
    }, 5);

    return () => {
      clearInterval(typingInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const imageplayer = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="about">
      <div className="header">
        <h1 className="head_text text-left">
          <span className="blue_gradient text">About Us</span>
        </h1>
      </div>
      <div className="content">
        <div className="bordered-div">
          <img
            src={images[currentImageIndex]}
            alt="Carousel"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="paragraph">{displayText}</div>
      </div>
    </div>
  );
};

export default About;
