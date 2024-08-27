// src/pages/Education.js
import React from 'react';
import '../styles/Education.scss'; // Import the CSS file for styling
import coachingImage from '../assets/logo.png'; // Adjust the image path
import coachingCallImage from '../assets/logo.png'; // Adjust the image path
import liveMentorshipImage from '../assets/logo.png'; // Adjust the image path
import presetsImage from '../assets/logo.png'; // Adjust the image path

const Education = () => {
  return (
    <div className="education-page">
      {/* 1st Block */}
      <div className="block block-1">
        <div className="block-content">
          <div className="block-text">
            <h2>Coaching & Mentorship</h2>
            <p>
              I have been exactly where you currently are and want to help you avoid the mistakes that I made along the way.
            </p>
          </div>
          <div className="block-image">
            <img src={coachingImage} alt="Coaching" />
          </div>
        </div>
      </div>

      {/* 2nd Block */}
      <div className="block block-2">
        <div className="block-image">
          <img src={coachingCallImage} alt="Coaching Call" />
        </div>
        <div className="block-text">
          <h2>1:1 Coaching Call</h2>
          <p>$350 — 1.5 HOURS ZOOM CALL</p>
          <p>
            We can chat for over zoom call for 60-90 minutes BUT, the more the better! I'll answer any questions you have, literally ANYTHING!!
            Nothing is off the table! It's the simplest of mentorships, but it's a great way to get you on your feet and in the right direction, 
            ESPECIALLY if you're in need of some specific help with your specific situation. The topic could be weddings, editing, bookings, travel 
            page or we could just geek about cameras.
          </p>
          <a href="https://www.example.com" className="book-now">
            BOOK NOW <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* 3rd Block */}
      <div className="block block-3">
        <div className="block-text">
          <h2>Coming Soon: Live Mentorship</h2>
          <p>$1500 — 2 HR COACHING SESSION + 1 HR PHOTOSHOOT</p>
          <p>
            These sessions are offered in the Vancouver area and are a way for you to get practical advice and experience with how I shoot weddings 
            as well as addressing any questions or roadblocks you are having yourself. I will cater this experience to address your specific goals 
            and needs as a professional with practical advice and guidance along the way.
          </p>
        </div>
        <div className="block-image">
          <img src={liveMentorshipImage} alt="Live Mentorship" />
        </div>
      </div>

      {/* 4th Block */}
      <div className="block block-4">
        <div className="block-text">
          <h2>SHOP PRESETS</h2>
          <a href="/presets" className="view-all">
            VIEW ALL <span className="arrow">→</span>
          </a>
          <div className="preset-images">
            <div className="preset-item">
              <img src={presetsImage} alt="Earthy Tone" />
              <p>EARTHY TONE</p>
            </div>
            <div className="preset-item">
              <img src={presetsImage} alt="Soul Tone" />
              <p>SOUL TONE</p>
            </div>
            <div className="preset-item">
              <img src={presetsImage} alt="Film Pack" />
              <p>FILMIC PACK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
