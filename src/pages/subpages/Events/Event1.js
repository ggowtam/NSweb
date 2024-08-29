import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS

import Event1 from '../../../assets/Event/Event1.jpg';
import Event2 from '../../../assets/Event/Event2.jpg';
import Event4 from '../../../assets/Event/Event4.jpg';
import Event5 from '../../../assets/Event/Event5.jpg';
import Event6 from '../../../assets/Event/Event6.jpg';
import Event7 from '../../../assets/Event/Event7.jpg';
import Event8 from '../../../assets/Event/Event8.jpg';
import Event9 from '../../../assets/Event/Event9.jpg';
import Event10 from '../../../assets/Event/Event10.jpg';
import Event11 from '../../../assets/Event/Event11.jpg';
import Event12 from '../../../assets/Event/Event12.jpg';
import Event13 from '../../../assets/Event/Event13.jpg';

const fashionShowImages = [
    Event1,
    Event2,
    
    Event4,
    Event5,
    Event6,
    Event7,
    Event8,
    Event9,
    Event10,
    Event11,
    Event12,
    Event13,
  
];

// Fixed size classes for a consistent arrangement
const fixedSizeClasses = [
  'large',   // for the first image
  'small',   // for the second image
  'medium',  // for the third image
  'small',   // for the fourth image
  'large',   // for the fifth image
  'medium',  // for the sixth image
  'small',   // for the seventh image
  'medium',  // for the eighth image
  'large'    // for the ninth image
];

const FashionShoots = () => (
  <div className="fashion-shoots-container">
    <section className="hero-section">
      <h1 className="hero-title">Jazzy B</h1>
      <p className="hero-description">This event coverage captures the energy and professionalism of a high-profile corporate event. The images reflect the dynamic environment and interactions of the participants.</p>
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
