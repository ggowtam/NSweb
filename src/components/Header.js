import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.scss'; // Assuming your header styles are in Header.scss

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);       // Close the main menu if it's open
    setDropdownOpen(false);   // Close the dropdown menu
  };

  // Add scroll effect for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <img src={logo} alt="The N.S. Creation Films Logo" className="logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <nav className={`nav-menu ${menuOpen ? 'mobile active' : 'mobile'}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        {/* <Link to="/lovenotes" onClick={handleLinkClick}>Love Notes</Link> */}
        <div className="dropdown">
          <span onClick={toggleDropdown}>For Photographers</span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/education" onClick={handleLinkClick}>Education</Link>
            <Link to="/presets" onClick={handleLinkClick}>Presets</Link>
          </div>
        </div>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        <Link to="/book" className="book-button" onClick={handleLinkClick}>Book Appointment</Link>
      </nav>
    </header>
  );
};

export default Header;
