import React, { useState, useEffect } from 'react';
import '../styles/ImageTextSection.scss';
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.jpg';
import Home3 from '../assets/Home3.jpg';
import Home4 from '../assets/Home4.jpg';
import Home5 from '../assets/Home5.jpg';
import Home6 from '../assets/Home6.jpg';
import Home7 from '../assets/Home7.jpg';
import Home8 from '../assets/Home8.jpg';
import Home9 from '../assets/Home9.jpg';
import Home10 from '../assets/Home10.jpg';
import Home11 from '../assets/Home11.jpg';
import Home12 from '../assets/Home12.jpg';
import Home13 from '../assets/Home13.jpg';
import Home14 from '../assets/Home14.jpg';
import Home15 from '../assets/Home15.jpg';
import Home16 from '../assets/Home16.jpg';
import Home17 from '../assets/Home17.jpg';


const imgArray = [
  Home7,
  Home8,
  Home9,
  Home16,
  Home10,
  Home11,
  Home12,
  Home1,
  Home2,
  Home3,
  Home4,
  Home14,
  Home5,
  Home6,
  Home13,
  Home15,
  Home17,
];

const ImageSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => {
        if (prevIndex === imgArray.length - 4) {
          setTimeout(() => {
            setIsTransitioning(false);
            setActiveIndex(0);
          }, 500); // Set the transition duration in ms
          return prevIndex + 1;
        }
        return prevIndex + 1;
      });
    }, 2000); // Auto slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

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

      <div className="gallery-box1">
        <div
          className={`gallery-display ${isTransitioning ? 'transition' : ''}`}
          style={{
            transform: `translateX(-${activeIndex * 25}%)`,
          }}
        >
          {imgArray.concat(imgArray.slice(0, 4)).map((img, idx) => (
            <img src={img} alt={`Gallery ${idx}`} key={idx} className="gallery-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
