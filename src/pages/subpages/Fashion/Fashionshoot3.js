import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS

import fashion27 from '../../../assets/fashion/fashion27.jpg';
import fashion28 from '../../../assets/fashion/fashion28.jpg';
import fashion29 from '../../../assets/fashion/fashion29.jpg';
import fashion30 from '../../../assets/fashion/fashion30.jpg';
// import fashion5 from '../../../assets/fashion/fashion31.jpg';
// import fashion6 from '../../../assets/fashion/fashion32.jpg';
// import fashion7 from '../../../assets/fashion/fashion34.jpg';
// import fashion8 from '../../../assets/fashion/fashion35.jpg';
// import fashion9 from '../../../assets/fashion/fashion36.jpg';

const fashionShowImages = [
    fashion27,
    fashion28,
    fashion29,
    fashion30,
    // fashion31,
    // fashion32,
    // fashion33,
    // fashion34,
    // fashion35,
    // fashion36,
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
      <h1 className="hero-title">NY Fashion Show</h1>
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
