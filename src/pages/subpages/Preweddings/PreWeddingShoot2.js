import React from 'react';
import '../../../styles/FashionShoots1.scss'; // Import SCSS
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here

import pre15 from '../../../assets/pre2/pre15.jpg';
import pre16 from '../../../assets/pre2/pre16.jpg';
import pre17 from '../../../assets/pre2/pre17.jpg';
import pre18 from '../../../assets/pre2/pre18.jpg';
import pre19 from '../../../assets/pre2/pre19.jpg';
import pre20 from '../../../assets/pre2/pre20.jpg';
import pre21 from '../../../assets/pre2/pre21.jpg';
import pre22 from '../../../assets/pre2/pre22.jpg';
import pre23 from '../../../assets/pre2/pre23.jpg';
import pre24 from '../../../assets/pre2/pre24.jpg';
import pre25 from '../../../assets/pre2/pre25.jpg';
import pre26 from '../../../assets/pre2/pre26.jpg';
import pre27 from '../../../assets/pre2/pre27.jpg';
import pre28 from '../../../assets/pre2/pre28.jpg';
import pre29 from '../../../assets/pre2/pre29.jpg';
import pre30 from '../../../assets/pre2/pre30.jpg';
import pre31 from '../../../assets/pre2/pre31.jpg';
import pre32 from '../../../assets/pre2/pre32.jpg';
import pre33 from '../../../assets/pre2/pre33.jpg';
import pre34 from '../../../assets/pre2/pre34.jpg';
import pre35 from '../../../assets/pre2/pre35.jpg';
import pre36 from '../../../assets/pre2/pre36.jpg';
import pre37 from '../../../assets/pre2/pre37.jpg';
import pre38 from '../../../assets/pre2/pre38.jpg';
import pre39 from '../../../assets/pre2/pre39.jpg';
import pre40 from '../../../assets/pre2/pre40.jpg';
import pre41 from '../../../assets/pre2/pre41.jpg';
import pre42 from '../../../assets/pre2/pre42.jpg';
import pre43 from '../../../assets/pre2/pre43.jpg';
import pre44 from '../../../assets/pre2/pre44.jpg';
import pre45 from '../../../assets/pre2/pre45.jpg';
import pre46 from '../../../assets/pre2/pre46.jpg';

const fashionShowImages = [
    pre15,
    pre16,
    pre17,
    pre18,
    pre19,
    pre20,
    pre21,
    pre22,
    pre23,
    pre24,
    pre25,
    pre26,
    pre27,
    pre28,
    pre29,
    pre30,
    pre31,
    pre32,
    pre33,
    pre34,
    pre35,
    pre36,
    pre37,
    pre38,
    pre39,
    pre40,
    pre41,
    pre42,
    pre43,
    pre44,
    pre45,
    pre46,
  
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
      <h1 className="hero-title">Dinesh + Veenu</h1>
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
