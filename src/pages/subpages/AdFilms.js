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
        <h2 className="video-title">SWAGAT INDIAN CUISINE</h2>
        <iframe
          src="https://www.youtube.com/embed/VckVipAiVaE"
          title="Behind-the-Scenes of Swagat Indian Cuisine"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      {/* New Videos */}
      <div className="video-item">
        <h2 className="video-title">NAAN HOUSE INDIAN BISTRO </h2>
        <iframe
          src="https://www.youtube.com/embed/c1BYir7SJOM"
          title="Sample Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      <div className="video-item">
        <h2 className="video-title">PIZZA TWIST | BRAND FILM </h2>
        <iframe
          src="https://www.youtube.com/embed/F8dZ_QU2rhY?start=1"
          title="Promotional Video for Swagat Indian Cuisine"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      <div className="video-item">
        <h2 className="video-title">BREW STREET CLUB</h2>
        <iframe
          src="https://www.youtube.com/embed/u2GhgO6zsgs"
          title="Sample Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      <div className="video-item">
        <h2 className="video-title">GOLD GYM</h2>
        <iframe
          src="https://www.youtube.com/embed/F5iDYMRUzA8"
          title="Sample Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      <div className="video-item">
        <h2 className="video-title">HOTEL CLARKS INN </h2>
        <iframe
          src="https://www.youtube.com/embed/uh-Hx0gyR1M"
          title="Sample Video 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
      <div className="video-item">
        <h2 className="video-title">JAGGI CITY CENTER</h2>
        <iframe
          src="https://www.youtube.com/embed/3zLNF1fixYs"
          title="Sample Video 5"
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
