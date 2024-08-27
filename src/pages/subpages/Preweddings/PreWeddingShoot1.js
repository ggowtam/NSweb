// src/pages/subpages/preweddings/PreWeddingShoot1.js
import React from 'react';
import '../../../styles/PreWeddingShoot1.scss';
import prew1 from '../../../assets/pre1/Prew1.jpg';
import prew2 from '../../../assets/pre1/Prew2.jpg';
import prew3 from '../../../assets/pre1/Prew3.jpg';
import prew4 from '../../../assets/pre1/Prew4.jpg';
import prew5 from '../../../assets/pre1/Prew5.jpg';
import prew6 from '../../../assets/pre1/Prew6.jpg';
import prew7 from '../../../assets/pre1/Prew7.jpg';

const PreWeddingShoot1 = () => (
  <div className="pre-wedding-shoot-container">
    <section className="shoot-hero-section">
      <h1 className="shoot-title">Pre Wedding Shoot 1</h1>
      <p className="shoot-description">
        This pre-wedding shoot captures the excitement and anticipation leading up to the big day. 
        The images reflect the genuine emotions and connection between the couple.
      </p>
    </section>
    <section className="shoot-banner">
      <img src={prew6} alt="Couple posing in a beautiful landscape" />
    </section>
    <section className="shoot-gallery">
      <div className="gallery-item">
        <img src={prew4} alt="Candid moment of the couple walking" />
      </div>
      <div className="gallery-item">
        <img src={prew5} alt="Close-up of the couple holding hands" />
      </div>
      <div className="gallery-item">
        <img src={prew7} alt="Couple sharing a laugh" />
      </div>
      <div className="gallery-item">
        <img src={prew1} alt="Couple sharing a laugh" />
      </div>
      <div className="gallery-item">
        <img src={prew2} alt="Couple sharing a laugh" />
      </div>
      <div className="gallery-item">
        <img src={prew3} alt="Couple sharing a laugh" />
      </div>
    </section>
  </div>
);

export default PreWeddingShoot1;
