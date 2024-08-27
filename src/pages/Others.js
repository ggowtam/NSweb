// src/pages/Others.js
import React from 'react';
import '../styles/Services.scss';
import Home6 from '../assets/Home6.jpg';
import Home3 from '../assets/Home3.jpg';
import films from '../assets/Films.jpg';
import Onlinepromotion from '../assets/Onlinepromotion.jpeg';
import corporatephoto from '../assets/corporatephoto.jpg';
import Baby from '../assets/Baby.jpg';

const otherServices = [
  { name: 'Engagements', image: Home6 },
  { name: 'Family/Couple Portraits', image: Home3 },
  { name: 'Feature Films', image: films },
  { name: 'Online Promotions', image: Onlinepromotion },
  { name: 'Corporate Shoots', image: corporatephoto },
  { name: 'New Born Shot', image: Baby },
];

const Others = () => (
  <div className="services-container">
    <h2 className="services-title">Other Services</h2>
    <div className="services-grid">
      {otherServices.map((item, index) => (
        <div key={index} className="service-item non-clickable">
          <div
            className="service-image"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="service-overlay">
            <h3>{item.name}</h3>
          </div>
          <div className="service-content">
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Others;
