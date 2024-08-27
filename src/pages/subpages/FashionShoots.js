import React from 'react';
import '../../styles/FashionShoots.scss'; // Import SCSS

// Import images
import presetImg1 from '../../assets/preset1.jpg';
import presetImg2 from '../../assets/preset2.jpg';
import presetImg3 from '../../assets/preset3.jpg';
import presetImg4 from '../../assets/preset4.jpg';
import presetImg5 from '../../assets/preset5.jpg';
import presetImg6 from '../../assets/preset6.jpg';

// Array of images
const fashionShowImages = [
  presetImg1,
  presetImg2,
  presetImg3,
  presetImg4,
  presetImg5,
  presetImg6,
];

const FashionShoots = () => (
  <div className="fashion-shoots-container">
    <section className="hero-section">
      <h1 className="hero-title">NY Fashion Show</h1>
      <p className="hero-description">Explore the highlights from the NY Fashion Show, showcasing the latest trends and stunning designs through our lens.</p>
    </section>
    <section className="gallery-section">
      <div className="gallery-grid">
        {fashionShowImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Fashion Show ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default FashionShoots;
