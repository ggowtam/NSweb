// src/components/PresetDetail.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageComparisonSlider from '../utils/ImageComparisonSlider';
import { useCart } from '../context/CartContext';
import '../styles/presets.css';

const PresetDetail = ({ presetName, presetImages, price, description, whatsIncluded }) => {
  const navigate = useNavigate();
  const { addItemToCart, cartItems, removeItemFromCart, isCartOpen, setCartOpen } = useCart();
  const [mainImage, setMainImage] = useState(presetImages[0].img1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleAddToCart = () => {
    const preset = { id: presetName, name: presetName, price, image: presetImages[0].img1 };
    addItemToCart(preset);
  };

  const handleThumbnailClick = (index) => {
    setMainImage(presetImages[index].img1);
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    setScrollPosition(prev => Math.max(prev - 100, 0));
  };

  const scrollRight = () => {
    setScrollPosition(prev => Math.min(prev + 100, (presetImages.length - 4) * 100));
  };

  const goToShop = () => {
    navigate('/presets');
  };

  return (
    <div className="preset-detail-page">
      <div className="info-and-image">
        <div className="preset-image-section">
          <div className="image-container">
            <button
              className="nav-arrow left"
              onClick={() =>
                setMainImage(
                  presetImages[(currentIndex - 1 + presetImages.length) % presetImages.length].img1
                )
              }
            >
              &lt;
            </button>
            <img src={mainImage} alt={`${presetName} Preset`} className="main-image" />
            <button
              className="nav-arrow right"
              onClick={() =>
                setMainImage(
                  presetImages[(currentIndex + 1) % presetImages.length].img1
                )
              }
            >
              &gt;
            </button>
          </div>
          <div className="thumbnail-images" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {presetImages.map((imagePair, index) => (
              <img
                key={index}
                src={imagePair.img1}
                alt={`${presetName} Preset Thumbnail ${index + 1}`}
                className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
            <button onClick={scrollLeft} className="scroll-btn left">‹</button>
            <button onClick={scrollRight} className="scroll-btn right">›</button>
          </div>
        </div>
        <div className="preset-info-section">
          <div className="navigation-buttons">
            <button className="shop-button" onClick={goToShop}>SHOP</button>
            <button className="stoic-button" disabled>{presetName.toUpperCase()} PRESET</button>
          </div>
          <h1>{presetName} Lightroom Preset</h1>
          <button className="add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
          <div className="preset-details">
            <h3>WHAT'S INCLUDED:</h3>
            <ul>
              {whatsIncluded.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>DESCRIPTION:</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="comparison-images-section">
        <div className="grid-container">
          {presetImages.map((imagePair, index) => (
            <div key={index} className="slider-wrapper">
              <h3>{imagePair.label}</h3>
              <ImageComparisonSlider
                image1={imagePair.img1}
                image2={imagePair.img2}
                id={`slider${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      {isCartOpen && (
        <div className="cart-container show">
          <div className="cart-content">
            <button className="close-cart" onClick={() => setCartOpen(false)}>×</button>
            <h2>Cart</h2>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-details">
                    <img src={item.image} alt="Preset Thumbnail" className="cart-item-image" />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
              <p>Subtotal: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
              <p>Shipping and discount codes are added at checkout.</p>
              <button 
                className="checkout" 
                onClick={() => navigate('/checkout')}
                disabled={cartItems.length === 0}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresetDetail;
