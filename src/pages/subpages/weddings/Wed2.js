import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import wed13 from '../../../assets/wed/wed13.jpg';
import wed14 from '../../../assets/wed/wed14.jpg';
import wed15 from '../../../assets/wed/wed15.jpg';
import wed16 from '../../../assets/wed/wed16.jpg';
import wed17 from '../../../assets/wed/wed17.jpg';
import wed18 from '../../../assets/wed/wed18.jpg';
import wed19 from '../../../assets/wed/wed19.jpg';
import wed20 from '../../../assets/wed/wed20.jpg';
import wed21 from '../../../assets/wed/wed21.jpg';

const fashionShowImages = [
    wed13,
    wed14,
    wed15,
    wed16,
    wed17,
    wed18,
    wed19,
    wed20,
    wed21,
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
