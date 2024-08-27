import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax'; // Import Parallax from react-parallax
import '../styles/Shoppresets.scss'; // Import your styles
import Prew6 from '../assets/pre1/Prew6.jpg'; // Import the parallax image

// Import images
import presetImage1 from '../assets/preset1.jpg';
import presetImage2 from '../assets/preset2.jpg';
import presetImage3 from '../assets/preset3.jpg';
import presetImage4 from '../assets/preset4.jpg';
import presetImage5 from '../assets/preset5.jpg';
import presetImage6 from '../assets/preset6.jpg';

const Presets = () => {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [category, setCategory] = useState('ALL');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = (preset) => {
    setSelectedPreset(preset);
    setShowOverlay(true);
  };

  const handleCloseCard = () => {
    setSelectedPreset(null);
    setShowOverlay(false);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  const presets = {
    ALL: [
      { name: 'Stoic Pack', image: presetImage1, price: 39.99, description: 'A classic preset pack for timeless looks.', link: '/stoic-preset' },
      { name: 'Regal Tones', image: presetImage2, price: 39.99, description: 'Rich and luxurious tones for a regal feel.', link: '/regal-preset' },
      { name: 'Earthy Tone', image: presetImage3, price: 34.99, description: 'Warm, earthy tones to enhance natural beauty.', link: '/earthy-preset' },
      { name: 'Soul Tone', image: presetImage4, price: 34.99, description: 'Soulful presets for emotive and atmospheric shots.', link: '/soul-tone-preset' },
      { name: 'Film Pack', image: presetImage5, price: 34.99, description: 'Authentic film looks for a vintage touch.', link: '/film-pack-preset' },
      { name: 'Awaken', image: presetImage6, price: 34.99, description: 'Bright and fresh presets to awaken your photos.', link: '/awaken-preset' }
    ],
  
    WEDDINGS: [
      { name: 'Stoic Pack', image: presetImage1, link: '/stoic-preset' },
      { name: 'Regal Tones', image: presetImage2, link: '/regal-preset' },
      { name: 'Earthy Tone', image: presetImage3, link: '/earthy-preset' }
    ],
    FILM: [
      { name: 'Film Pack', image: presetImage5, link: '/film-pack-preset' }
    ],
    TRAVEL: [
      { name: 'Soul Tone', image: presetImage4, link: '/soul-tone-preset' },
      { name: 'Awaken', image: presetImage6, link: '/awaken-preset' }
    ]
  };

  const bundles = {
    ALL: [
      { name: 'Weddings Pack Bundle', image: presetImage1, link: '/weddings-bundle' },
      { name: 'Portrait Pack Bundle', image: presetImage2, link: '/portrait-bundle' },
      { name: 'Bundle & Save All Presets', image: presetImage3, link: '/bundle-save-all-presets' }
    ],
    WEDDINGS: [
      { name: 'Weddings Pack Bundle', image: presetImage1, link: '/weddings-bundle' },
    ],
    FILM: [
      { name: 'Bundle & Save All Presets', image: presetImage3, link: '/bundle-save-all-presets' }
    ],
    TRAVEL: [
      { name: 'Bundle & Save All Presets', image: presetImage3, link: '/bundle-save-all-presets' }
    ]
  };

  return (
    <div className="presets-page">
      {showOverlay && <div className="overlay show" onClick={handleCloseCard}></div>}

      <div className="shop-header">
        <h1>SHOP THE COLLECTION</h1>
      </div>
      
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('ALL')}>ALL</button>
        <button onClick={() => handleCategoryChange('WEDDINGS')}>WEDDINGS</button>
        <button onClick={() => handleCategoryChange('FILM')}>FILM</button>
        <button onClick={() => handleCategoryChange('TRAVEL')}>TRAVEL</button>
      </div>

      <div className="preset-gallery">
        <div className="preset-row">
          {(presets[category] || []).map((preset) => (
            <div
              key={preset.name}
              className="preset-item"
              onClick={() => handleImageClick(preset.name)}
            >
              <img src={preset.image} alt={preset.name} />
              <p>{preset.name} PRESET</p>
              <div className="quick-view">Quick View</div>
              <Link to={preset.link} className="view-full-item">
                
              </Link>
            </div>
          ))}
        </div>

        <div className="additional-items">
          {(bundles[category] || []).map((bundle) => (
            <div key={bundle.name} className="additional-item">
              <img src={bundle.image} alt={bundle.name} />
              <p>{bundle.name}</p>
              <div className="quick-view">Quick View</div>
              <Link to={bundle.link} className="view-full-item">
              
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Parallax className="parallax-containerp" bgImage={Prew6} strength={500}>
  <div className="parallax-text">
    <span>BRING YOUR</span>
    <span>PHOTOS TO LIFE</span>
  </div>
</Parallax>


      {selectedPreset && (
        <div className={`detail-card ${showOverlay ? 'show' : ''}`}>
          <button className="close-card" onClick={handleCloseCard}>✕</button>
          <div className="card-content">
            <img
              src={presets[category]?.find(p => p.name === selectedPreset)?.image}
              alt={selectedPreset}
            />
            <div className="card-details">
              <h2>{selectedPreset} LIGHTROOM PRESET</h2>
              <p>${presets[category]?.find(p => p.name === selectedPreset)?.price.toFixed(2)}</p>
              <p>{presets[category]?.find(p => p.name === selectedPreset)?.description}</p>
              <Link to={`/full-item/${selectedPreset.toLowerCase().replace(' ', '-')}`}>
                <button>VIEW FULL ITEM</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presets;
