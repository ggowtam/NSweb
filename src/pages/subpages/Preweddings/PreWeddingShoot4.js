import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import pre77 from '../../../assets/pre4/pre77.jpg';
import pre78 from '../../../assets/pre4/pre78.jpg';
import pre79 from '../../../assets/pre4/pre79.jpg';
import pre80 from '../../../assets/pre4/pre80.jpg';
import pre81 from '../../../assets/pre4/pre81.jpg';
import pre82 from '../../../assets/pre4/pre82.jpg';
import pre83 from '../../../assets/pre4/pre83.jpg';
import pre84 from '../../../assets/pre4/pre84.jpg';
import pre85 from '../../../assets/pre4/pre85.jpg';
import pre86 from '../../../assets/pre4/pre86.jpg';
import pre87 from '../../../assets/pre4/pre87.jpg';
import pre88 from '../../../assets/pre4/pre88.jpg';
import pre89 from '../../../assets/pre4/pre89.jpg';
import pre90 from '../../../assets/pre4/pre90.jpg';
import pre91 from '../../../assets/pre4/pre91.jpg';
import pre92 from '../../../assets/pre4/pre92.jpg';
import pre93 from '../../../assets/pre4/pre93.jpg';
import pre94 from '../../../assets/pre4/pre94.jpg';
import pre95 from '../../../assets/pre4/pre95.jpg';
import pre96 from '../../../assets/pre4/pre96.jpg';
import pre97 from '../../../assets/pre4/pre97.jpg';
import pre98 from '../../../assets/pre4/pre98.jpg';
import pre99 from '../../../assets/pre4/pre99.jpg';
import pre100 from '../../../assets/pre4/pre100.jpg';
import pre101 from '../../../assets/pre4/pre101.jpg';
import pre102 from '../../../assets/pre4/pre102.jpg';
import pre103 from '../../../assets/pre4/pre103.jpg';
import pre104 from '../../../assets/pre4/pre104.jpg';
import pre105 from '../../../assets/pre4/pre105.jpg';
import pre106 from '../../../assets/pre4/pre106.jpg';
import pre107 from '../../../assets/pre4/pre107.jpg';

const fashionShowImages = [
  pre77,
  pre78,
  pre79,
  pre80,
  pre81,
  pre82,
  pre83,
  pre84,
  pre85,
  pre86,
  pre87,
  pre88,
  pre89,
  pre90,
  pre91,
  pre92,
  pre93,
  pre94,
  pre95,
  pre96,
  pre97,
  pre98,
  pre99,
  pre100,
  pre101,
  pre102,
  pre103,
  pre104,
  pre105,
  pre106,
  pre107,
  
  
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
      <h1 className="hero-title">Navjot + Balvinder</h1>
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
