import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import wed1 from '../../../assets/wed/wed1.jpg';
import wed2 from '../../../assets/wed/wed2.jpg';
import wed3 from '../../../assets/wed/wed3.jpg';
import wed4 from '../../../assets/wed/wed4.jpg';
import wed5 from '../../../assets/wed/wed5.jpg';
import wed6 from '../../../assets/wed/wed6.jpg';
import wed7 from '../../../assets/wed/wed7.jpg';
import wed8 from '../../../assets/wed/wed8.jpg';
import wed9 from '../../../assets/wed/wed9.jpg';
import wed10 from '../../../assets/wed/wed10.jpg';
import wed11 from '../../../assets/wed/wed11.jpg';
import wed12 from '../../../assets/wed/wed12.jpg';

const fashionShowImages = [
  wed1,
  wed2,
  wed3,
  wed4,
  wed5,
  wed6,
  wed7,
  wed8,
  wed9,
  wed10,
  wed11,
  wed12,
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
