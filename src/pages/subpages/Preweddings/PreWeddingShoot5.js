import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import pre108 from '../../../assets/pre5/pre108.jpg';
import pre109 from '../../../assets/pre5/pre109.jpg';
import pre110 from '../../../assets/pre5/pre110.jpg';
import pre111 from '../../../assets/pre5/pre111.jpg';
import pre112 from '../../../assets/pre5/pre112.jpg';
import pre113 from '../../../assets/pre5/pre113.jpg';
import pre114 from '../../../assets/pre5/pre114.jpg';
import pre115 from '../../../assets/pre5/pre115.jpg';
import pre116 from '../../../assets/pre5/pre116.jpg';
import pre117 from '../../../assets/pre5/pre117.jpg';
import pre118 from '../../../assets/pre5/pre118.jpg';
import pre119 from '../../../assets/pre5/pre119.jpg';
import pre120 from '../../../assets/pre5/pre120.jpg';
import pre121 from '../../../assets/pre5/pre121.jpg';
import pre122 from '../../../assets/pre5/pre122.jpg';
import pre123 from '../../../assets/pre5/pre123.jpg';
import pre124 from '../../../assets/pre5/pre124.jpg';
import pre125 from '../../../assets/pre5/pre125.jpg';
import pre126 from '../../../assets/pre5/pre126.jpg';

const fashionShowImages = [
  pre108,
  pre109,
  pre110,
  pre111,
  pre112,
  pre113,
  pre114,
  pre115,
  pre116,
  pre117,
  pre118,
  pre119,
  pre120,
  pre121,
  pre122,
  pre123,
  pre124,
  pre125,
  pre126,
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
