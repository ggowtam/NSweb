import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS

import fashion1 from '../../../assets/fashion/fashion1.jpg';
import fashion2 from '../../../assets/fashion/fashion2.jpg';
import fashion3 from '../../../assets/fashion/fashion3.jpg';
import fashion4 from '../../../assets/fashion/fashion4.jpg';
import fashion6 from '../../../assets/fashion/fashion6.jpg';
import fashion7 from '../../../assets/fashion/fashion7.jpg';
import fashion8 from '../../../assets/fashion/fashion8.jpg';
import fashion9 from '../../../assets/fashion/fashion9.jpg';
import fashion10 from '../../../assets//fashion/fashion10.jpg';


const fashionShowImages = [
  
  fashion1,
  fashion2,
  fashion3,
  fashion4,
  
  fashion6,
  fashion7,
  fashion8,
  fashion9,
  fashion10,
];

// Fixed size classes for a consistent arrangement
const fixedSizeClasses = [
  'large',   // for the first image
  'small',   // for the second image
  'medium',  // for the third image
  'small',   // for the fourth image
  'large',   // for the fifth image
  'small',  // for the sixth image
  'small',   // for the seventh image
  'small',  // for the eighth image
  'large',    // for the ninth image
  'large',   // for the first image
  'small',   // for the second image
  'medium',  // for the third image
  'small',   // for the fourth image
  'large',   // for the fifth image
  'small',  // for the sixth image
  'small',   // for the seventh image
  'small',  // for the eighth image
  'large',
];

const FashionShoots = () => (
  <div className="fashion-shoots-container">
    <section className="hero-section">
      <h1 className="hero-title">H&M</h1>
      <p className="hero-description">Explore the highlights from the NY Fashion Show, showcasing the latest trends and stunning designs through our lens.</p>
    </section>
    <section className="gallery-section">
      <div className="gallery-grid">
        {fashionShowImages.map((image, index) => {
          const sizeClass = fixedSizeClasses[index];
          return (
            <div key={index} className={`gallery-item ${sizeClass}`}>
              <img src={image} alt={`Fashion Show ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </section>
  </div>
);

export default FashionShoots;
