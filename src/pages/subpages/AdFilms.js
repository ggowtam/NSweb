// src/pages/AdFilms.js
import React from 'react';
import '../../styles/AdFilms.scss'; // Import SCSS

const AdFilms = () => (
  <div className="ad-films-container">
    <section className="hero-section">
      <h1 className="hero-title">Our Advertisement Films</h1>
      <p className="hero-description">Watch our latest advertisement films that showcase our creativity and storytelling through engaging videos.</p>
    </section>
    <section className="videos-section">
      <div className="video-item">
        <h2 className="video-title">Video 1: Promotional Video for Swagat Indian Cuisine</h2>
        <iframe
          src="https://www.youtube.com/embed/s1XoblNxQ-A"
          title="Promotional Video for Swagat Indian Cuisine"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      <div className="video-item">
        <h2 className="video-title">Video 2: Behind-the-Scenes of Swagat Indian Cuisine</h2>
        <iframe
          src="https://www.youtube.com/embed/VckVipAiVaE"
          title="Behind-the-Scenes of Swagat Indian Cuisine"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
    </section>
  </div>
);

export default AdFilms;
