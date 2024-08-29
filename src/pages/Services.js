// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import parallaxImage1 from '../assets/para1.jpg';
import '../styles/Services.scss';
import Homepic from '../assets/Homepic.jpg';
import Home1 from '../assets/Home1.jpg';
import Home4 from '../assets/Home4.jpg';
import Event from '../assets/Event.jpg';
import adfilm from '../assets/Adfilm.jpg';
import others from '../assets/Others.png';

const serviceItems = [
  { name: 'Weddings', image: Homepic, path: '/services/weddings' },
  { name: 'Pre & Post Weddings', image: Home1, path: '/services/pre-post-weddings' },
  { name: 'Event Coverage', image: Event, path: '/services/event-coverage' },
  { name: 'Fashion Shoots', image: Home4, path: '/services/fashion-shoots' },
  { name: 'Ad Films', image: adfilm, path: '/services/ad-films' },
];

const Services = () => {
  const mainServices = serviceItems.filter(item => 
    ['Weddings', 'Pre & Post Weddings', 'Event Coverage', 'Fashion Shoots', 'Ad Films'].includes(item.name)
  );

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      
      <div className="services-grid">
        {mainServices.map((item) => (
          <Link to={item.path} key={item.name} className="service-item">
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
          </Link>
        ))}

        {/* Display 'Others' category */}
        <Link to="/services/others" className="service-item">
          <div
            className="service-image"
            style={{ backgroundImage: `url(${others})` }}
          ></div>
          <div className="service-overlay">
            <h3>Others</h3>
          </div>
          <div className="service-content">
            <h4>Others</h4>
          </div>
        </Link>
        
      </div>
      <div>
      <Parallax className="parallax-container" bgImage={parallaxImage1} strength={500}>
      <div className="about-content">
        <div className="about-text">
          <h3>
            text <br/>
           . <br/>
            .
          </h3>
          <p>
            . <br/>
            . <br/>
            .
          </p>
        
        </div>
      </div>
    </Parallax>
      </div>
    </div>
    
    
  );
 
};

export default Services;

