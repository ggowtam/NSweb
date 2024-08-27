import React, { useState } from 'react';

import { CartProvider } from './context/CartContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Presets from './pages/Presets';
import StoicPreset from './pages/StoicPreset';
import RegalPreset from './pages/RegalPreset';
import EarthyPreset from './pages/EarthyPreset';
import SoulTonePreset from './pages/SoulTonePreset';
import FilmPackPreset from './pages/FilmPackPreset';
import AwakenPreset from './pages/AwakenPreset';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Services from './pages/Services';
import Footer from './components/Footer';
import Header from './components/Header';
import BaniKarl from './pages/subpages/weddings/BaniKarl';
import AdFilms from './pages/subpages/AdFilms';
import Others from './pages/Others';
import Weddings from './pages/subpages/Weddings';
import PrePostWeddings from './pages/subpages/PrePostWeddings';
import EventCoverage from './pages/subpages/EventCoverage';
import FashionShoots from './pages/subpages/FashionShoots';
import PreWeddingShoot1 from './pages/subpages/Preweddings/PreWeddingShoot1';
import SlideOutCart from './components/SlideOutCart';

function App() {

  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  return (
    <div>
      <Header />
      <CartProvider>
     
        <Header toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/presets" element={<Presets />} />
        <Route path="/full-item/stoic-pack" element={<StoicPreset />} />
          <Route path="/full-item/regal-tones" element={<RegalPreset />} />
          <Route path="/full-item/earthy-tone" element={<EarthyPreset />} />
          <Route path="/full-item/soul-tone" element={<SoulTonePreset />} />
          <Route path="/full-item/film-pack" element={<FilmPackPreset />} />
          <Route path="/full-item/awaken" element={<AwakenPreset />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/weddings" element={<Weddings />} />
        <Route path="/services/pre-post-weddings" element={<PrePostWeddings />} />
        <Route path="/services/event-coverage" element={<EventCoverage />} />
        <Route path="/services/ad-films" element={<AdFilms />} />
        <Route path="/services/fashion-shoots" element={<FashionShoots />} />
        <Route path="/weddings/bani-karl" element={<BaniKarl />} />
        <Route path="/services/others" element={<Others />} />
        <Route path="/preweddings/pre-wedding-shoot-1" element={<PreWeddingShoot1 />} />
      </Routes>
      <Footer />
      <SlideOutCart isOpen={isCartOpen} setOpen={setCartOpen} />
     
    </CartProvider>
    </div>
  );
}

export default App;
