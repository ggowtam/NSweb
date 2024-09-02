import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS

import Event28 from '../../../assets/Event/Event28.jpg';
import Event29 from '../../../assets/Event/Event29.jpg';
import Event30 from '../../../assets/Event/Event30.jpg';
import Event31 from '../../../assets/Event/Event31.jpg';
import Event32 from '../../../assets/Event/Event32.jpg';
import Event33 from '../../../assets/Event/Event33.jpg';
import Event34 from '../../../assets/Event/Event34.jpg';
import Event35 from '../../../assets/Event/Event35.jpg';
import Event36 from '../../../assets/Event/Event36.jpg';
import Event37 from '../../../assets/Event/Event37.jpg';
import Event38 from '../../../assets/Event/Event38.jpg';
import Event39 from '../../../assets/Event/Event39.jpg';
import Event40 from '../../../assets/Event/Event40.jpg';
import Event41 from '../../../assets/Event/Event41.jpg';
import Event42 from '../../../assets/Event/Event42.jpg';
import Event43 from '../../../assets/Event/Event43.jpg';
import Event44 from '../../../assets/Event/Event44.jpg';


const fashionShowImages = [
  Event28,
  Event29,
  Event30,
  Event31,
  Event32,
  Event33,
  Event34,
  Event35,
  Event36,
  Event37,
  Event38,
  Event39,
  Event40,
  Event41,
  Event42,
  Event43,
  Event44,
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
      <h1 className="hero-title">G Sidhu</h1>
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
