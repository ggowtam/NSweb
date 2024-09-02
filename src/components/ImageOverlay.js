import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ImageOverlay.css'; // We'll add styling here

const ImageOverlay = ({ imageSrc, altText, overlayText, overlayTitle, linkText, linkTo }) => {
  const navigate = useNavigate();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <div className="image-overlay-container">
      <img src={imageSrc} alt={altText} className="preset-image" />
      <div className="overlay-box">
        <p className="adobe-jenson">
          Relive all of the beautiful, touching,<br /> 
          & emotional moments of your special day
        </p>
        <p className="fs-rome">
          LOVE FROM<br />
          THE SOUL
        </p>
        <p className="read-more" onClick={() => { navigate("/services"); scrollToTop(); }}>
        {linkText}
        </p>
      </div>
    </div>
  );
};

export default ImageOverlay;
