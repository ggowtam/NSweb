import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS

import fashion11 from '../../../assets//fashion/fashion11.jpg';
import fashion12 from '../../../assets//fashion/fashion12.jpg';
import fashion13 from '../../../assets//fashion/fashion13.jpg';
import fashion14 from '../../../assets//fashion/fashion14.jpg';
import fashion15 from '../../../assets//fashion/fashion15.jpg';
import fashion16 from '../../../assets//fashion/fashion16.jpg';
import fashion17 from '../../../assets//fashion/fashion17.jpg';
import fashion18 from '../../../assets//fashion/fashion18.jpg';
import fashion19 from '../../../assets//fashion/fashion19.jpg';
import fashion20 from '../../../assets//fashion/fashion20.jpg';
import fashion21 from '../../../assets//fashion/fashion21.jpg';
import fashion22 from '../../../assets//fashion/fashion22.jpg';
import fashion23 from '../../../assets//fashion/fashion23.jpg';
import fashion24 from '../../../assets//fashion/fashion24.jpg';
import fashion25 from '../../../assets//fashion/fashion25.jpg';

const fashionShowImages = [
   
    fashion11,
    fashion12,
    fashion13,
    fashion14,
    fashion15,
    fashion16,
    fashion17,
    fashion18,
    fashion19,
    fashion20,
    fashion21,
    fashion22,
    fashion23,
    fashion24,
    fashion25,
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
      <h1 className="hero-title">Haritage Collection</h1>
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
