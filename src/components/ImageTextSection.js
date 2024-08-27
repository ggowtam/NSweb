import React, { useState, useEffect } from 'react';
import '../styles/ImageTextSection.scss';
import Home7 from '../assets/Home7.jpg';
import Home8 from '../assets/Home8.jpg';
import Home9 from '../assets/Home9.jpg';
import Home10 from '../assets/Home10.jpg';
import Home11 from '../assets/Home11.jpg';
import Home12 from '../assets/Home12.jpg';


const imgArray = [
  Home7,
  Home8,
  Home9,
  Home10,
  Home11,
  Home12,
];

const ImageSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 2000); // Auto slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imgArray.length) % imgArray.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
  };

  return (
    <div className="image-section">
      <div className="text-area">
        <p className="highlight">IT IS YOUR STORY,</p>
        <p className="highlight">AND WE ARE YOUR</p>
        <p className="highlight">STORYTELLERS.</p>
        <p className="description">
          Our cinematic style of storytelling produces rich, soulful, and timeless wedding photography. Our unique editing style sets a mood and atmosphere that creates magical results, transporting you right back to your wedding day.
        </p>
      </div>

      <div className="gallery-box">
        <button className="gallery-btn prev" onClick={handlePrevious}>‹</button>
        <div className="gallery-display">
          {imgArray.slice(activeIndex, activeIndex + 3).map((img, idx) => (
            <img src={img} alt={`Gallery ${idx}`} key={idx} className="gallery-img" />
          ))}
        </div>
        <button className="gallery-btn next" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default ImageSection;