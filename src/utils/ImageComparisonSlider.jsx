// ImageComparisonSlider.jsx
import React, { useEffect } from 'react';

const ImageComparisonSlider = ({ image1, image2, id }) => {
  useEffect(() => {
    const slider = document.querySelector(`#${id}`);
    const foregroundImg = document.querySelector(`.foreground-${id}`);
    const sliderButton = document.querySelector(`.slider-button-${id}`);

    const handleSliderInput = (e) => {
      const sliderPos = e.target.value;
      foregroundImg.style.clipPath = `inset(0 ${100 - sliderPos}% 0 0)`;
      sliderButton.style.left = `calc(${sliderPos}% - 15px)`;
    };

    slider.addEventListener('input', handleSliderInput);
    slider.addEventListener('change', handleSliderInput);

    return () => {
      slider.removeEventListener('input', handleSliderInput);
      slider.removeEventListener('change', handleSliderInput);
    };
  }, [id]);

  return (
    <div className="container">
      <div className={`img background-${id}`} style={{ backgroundImage: `url(${image1})` }}></div>
      <div className={`img foreground-${id}`} style={{ backgroundImage: `url(${image2})` }}></div>
      <input type="range" min="0" max="100" defaultValue="50" className="slider" id={id} />
      <div className={`slider-button slider-button-${id}`}></div>
    </div>
  );
};

export default ImageComparisonSlider;
