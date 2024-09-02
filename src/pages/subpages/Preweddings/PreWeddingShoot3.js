import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import pre47 from '../../../assets/pre3/pre47.jpg';
import pre48 from '../../../assets/pre3/pre48.jpg';
import pre49 from '../../../assets/pre3/pre49.jpg';
import pre50 from '../../../assets/pre3/pre50.jpg';
import pre51 from '../../../assets/pre3/pre51.jpg';
import pre52 from '../../../assets/pre3/pre52.jpg';
import pre53 from '../../../assets/pre3/pre53.jpg';
import pre54 from '../../../assets/pre3/pre54.jpg';
import pre55 from '../../../assets/pre3/pre55.jpg';
import pre56 from '../../../assets/pre3/pre56.jpg';
import pre57 from '../../../assets/pre3/pre57.jpg';
import pre58 from '../../../assets/pre3/pre58.jpg';
import pre59 from '../../../assets/pre3/pre59.jpg';
import pre60 from '../../../assets/pre3/pre60.jpg';
import pre61 from '../../../assets/pre3/pre61.jpg';
import pre62 from '../../../assets/pre3/pre62.jpg';
import pre63 from '../../../assets/pre3/pre63.jpg';
import pre64 from '../../../assets/pre3/pre64.jpg';
import pre65 from '../../../assets/pre3/pre65.jpg';
import pre66 from '../../../assets/pre3/pre66.jpg';
import pre67 from '../../../assets/pre3/pre67.jpg';
import pre68 from '../../../assets/pre3/pre68.jpg';
import pre69 from '../../../assets/pre3/pre69.jpg';
import pre70 from '../../../assets/pre3/pre70.jpg';
import pre71 from '../../../assets/pre3/pre71.jpg';
import pre72 from '../../../assets/pre3/pre72.jpg';
import pre73 from '../../../assets/pre3/pre73.jpg';
import pre74 from '../../../assets/pre3/pre74.jpg';
import pre75 from '../../../assets/pre3/pre75.jpg';
import pre76 from '../../../assets/pre3/pre76.jpg';

const fashionShowImages = [
  pre47,
  pre48,
  pre49,
  pre50,
  pre51,
  pre52,
  pre53,
  pre54,
  pre55,
  pre56,
  pre57,
  pre58,
  pre59,
  pre60,
  pre61,
  pre62,
  pre63,
  pre64,
  pre65,
  pre66,
  pre67,
  pre68,
  pre69,
  pre70,
  pre71,
  pre72,
  pre73,
  pre74,
  pre75,
  pre76,
  
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
      <h1 className="hero-title">Aditya + AARTI</h1>
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
