// src/pages/BaniKarl.js
import React from 'react';
import '../../../styles/BaniKarl.scss'; // Import the specific SCSS for this page
import presetImage1 from '../../../assets/preset1.jpg';
import presetImage2 from '../../../assets/preset2.jpg';
import presetImage4 from '../../../assets/preset4.jpg';
import promoBanner from '../../../assets/promo-banner.jpg'; // Add your banner image path here
import audioFile from '../../../assets/audio1.mp3'; // Add your audio file path here
import CustomAudioPlayer from '../../../components/CustomAudioPlayer';

const BaniKarl = () => (
  <div className="bani-karl-page">
    <section className="bani-karl-title">
      <div className="title-content">
        <span>Bani + Karl</span>
      </div>
    </section>
    <section className="bani-karl-description">
      <p>
        This dream wedding captures the true emotion and personalities expressed 
        through the lens of our camera. This elegant, timeless wedding truly reflects 
        our photographic style of elegant, organic, and nostalgic photography.
      </p>
    </section>
    <section className="bani-karl-audio">
      <CustomAudioPlayer audioSrc={audioFile} />
    </section>
    <section className="bani-karl-banner">
      <img src={promoBanner} alt="Promo Banner" />
    </section>
    <section className="bani-karl-gallery">
      <div className="gallery-item small">
        <img src={presetImage1} alt="Bani and Karl Wedding 1" />
      </div>
      <div className="gallery-item small">
        <img src={presetImage2} alt="Bani and Karl Wedding 2" />
      </div>
      <div className="gallery-item small">
        <img src={presetImage4} alt="Bani and Karl Wedding 3" />
      </div>
      <div className="gallery-item small">
        <img src={presetImage1} alt="Bani and Karl Wedding 4" />
      </div>
      <div className="gallery-item small">
        <img src={presetImage2} alt="Bani and Karl Wedding 5" />
      </div>
      <div className="gallery-item small">
        <img src={presetImage4} alt="Bani and Karl Wedding 6" />
      </div>
    </section>
  </div>
);

export default BaniKarl;
