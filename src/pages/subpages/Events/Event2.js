import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS

import Event15 from '../../../assets/Event/Event15.jpg';
import Event16 from '../../../assets/Event/Event16.jpg';
import Event17 from '../../../assets/Event/Event17.jpg';
import Event18 from '../../../assets/Event/Event18.jpg';
import Event19 from '../../../assets/Event/Event19.jpg';
import Event20 from '../../../assets/Event/Event20.jpg';
import Event21 from '../../../assets/Event/Event21.jpg';
import Event22 from '../../../assets/Event/Event22.jpg';
import Event23 from '../../../assets/Event/Event23.jpg';
import Event24 from '../../../assets/Event/Event24.jpg';
import Event25 from '../../../assets/Event/Event25.jpg';
import Event26 from '../../../assets/Event/Event26.jpg';

const fashionShowImages = [
    Event15,
    Event24,
    Event17,
   
    
    Event20,
    Event19,
    Event18,
    Event22,
    Event23,
  
    Event16,
    Event25,
    Event26,
     Event21,
  
];

// Fixed size classes for a consistent arrangement
const fixedSizeClasses = [

  'large',   // for the first image
  'small',   
  'small',   
  'small',
  'large',
];

const FashionShoots = () => (
  <div className="fashion-shoots-container">
    <section className="hero-section">
      <h1 className="hero-title">Miss Pooja</h1>
      <p className="hero-description">A beautiful portrayal of a charity gala, capturing the elegance and generosity of the attendees. The photos highlight the joy and success of the event.</p>
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
