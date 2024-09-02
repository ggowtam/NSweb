import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import pre1 from '../../../assets/pre1/pre1.jpg';
import pre2 from '../../../assets/pre1/pre2.jpg';
import pre3 from '../../../assets/pre1/pre3.jpg';
import pre4 from '../../../assets/pre1/pre4.jpg';
import pre5 from '../../../assets/pre1/pre5.jpg';
import pre6 from '../../../assets/pre1/pre6.jpg';
import pre7 from '../../../assets/pre1/pre7.jpg';
import pre8 from '../../../assets/pre1/pre8.jpg';
import pre9 from '../../../assets/pre1/pre9.jpg';
import pre10 from '../../../assets/pre1/pre10.jpg';
import pre11 from '../../../assets/pre1/pre11.jpg';
import pre12 from '../../../assets/pre1/pre12.jpg';

const fashionShowImages = [
  pre1,
  pre2,
  pre3,
  pre4,
  pre5,
  pre6,
  pre7,
  pre8,
  pre9,
  pre10,
  pre11,
  pre12,
  
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
      <h1 className="hero-title">Gurwinder + Navneet</h1>
      <p className="hero-description">This event coverage captures the energy and professionalism of a high-profile corporate event. The images reflect the dynamic environment and interactions of the participants.</p>
    </section>
    <section className="audio">
      <CustomAudioPlayer audioSrc={audioFile} />
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
