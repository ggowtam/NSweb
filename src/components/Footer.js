import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust this path if needed
import '../styles/Footer.scss'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="The N.S. Creation Films Logo" className="logo" />
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <div className="links-grid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                {/* <li><Link to="/lovenotes">Love Notes</Link></li> */}
                <li><Link to="/education">Education</Link></li>
              </ul>
              <ul>
                <li><Link to="/presets">Presets</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/book">Book Appointment</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div> {/* Divider between Quick Links and Follow Us */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>© 2024 THE N.S.CREATION FILMS | <a href="https://ggowtam.github.io/Gowtam-s-Portfolio/" target="_blank" rel="noopener noreferrer">WEBSITE BY Gowtam</a></p>
      </div>
    </footer>
  );
};

export default Footer;
