import React from 'react';
import PresetDetail from '../components/PresetDetail';
import presetImage1 from '../assets/preset1.jpg';
import presetImage2 from '../assets/preset2.jpg';
import presetImage3 from '../assets/preset3.jpg';
import presetImage4 from '../assets/preset4.jpg';
import presetImage5 from '../assets/preset5.jpg';
import presetImage6 from '../assets/preset6.jpg';
import presetImage7 from '../assets/preset7.jpg';
import presetImage8 from '../assets/preset8.jpg';
import presetImage9 from '../assets/preset9.jpg';
import presetImage10 from '../assets/preset10.jpg';
import presetImage11 from '../assets/preset11.jpg';
import presetImage12 from '../assets/preset12.jpg';

const images = [
  { img1: presetImage1, img2: presetImage2, label: 'STOIC 1' },
  { img1: presetImage3, img2: presetImage4, label: 'STOIC 2' },
  { img1: presetImage5, img2: presetImage6, label: 'STOIC 3' },
  { img1: presetImage7, img2: presetImage8, label: 'STOIC 4' },
  { img1: presetImage9, img2: presetImage10, label: 'STOIC 5' },
  { img1: presetImage11, img2: presetImage12, label: 'STOIC 6' },
];

const StoicPreset = () => {
  const presetName = 'Stoic Pack';
  const price = 39.99;
  const description = `
    Adobe Lightroom & Adobe Camera Raw presets working on Lightroom Classic CC, 6, 5 & 4 and Photoshop CC & CS6.
    The Earthy tone presets are perfect for wedding/portrait photography. This set is for warm and vibrant tones. Works great with both natural light photography as well as flash photography.
    Set requires Adobe Lightroom Subscription: LR Classic CC (v11+), and/or LR CC (v5+), and/or Adobe Photoshop ACR (v14+). This set is based on our own custom creative profiles and designed to work with RAW files. These Presets + Profiles were developed and extensively tested on RAW files from Canon, Nikon, Sony, Fujifilm, Pentax, and Leica. Prices in CAD Currency. The presets are in .XMP format.
  `;
  const whatsIncluded = [
    '6 colored presets + 1 B&W preset',
    'How to install preset video',
    'How to install preset pdf'
  ];

  return (
    <PresetDetail
      presetName={presetName}
      presetImages={images}
      price={price}
      description={description}
      whatsIncluded={whatsIncluded}
    />
  );
};

export default StoicPreset;
