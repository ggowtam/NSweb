import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../../styles/Weddings.scss'; // Import SCSS
import wed1 from '../../assets/wed/wed1.jpg';
import wed13 from '../../assets/wed/wed13.jpg';
import presetImage3 from '../../assets/preset3.jpg';

const weddingProjects = [
  {
    title: 'Gurwinder + Navneet',
    description: 'This dream wedding captures the true emotion and personalities expressed through the lens of our camera. This elegant, timeless wedding truly reflects our photographic style of elegant, organic and nostalgic photography.',
    image: wed1,
    path: '/Weddings/wed1',
  },
  {
    title: 'Rupin + Samriti',
    description: 'Capturing the essence of this elegant and timeless wedding was a seamless endeavor, as it effortlessly evoked genuine emotions and true love. We skillfully preserved the fleeting yet priceless moments of the ceremony, reflecting our signature style of timeless cinematic photography.',
    image: wed13,
    path: '/Weddings/wed2',
  },
  {
    title: 'Annie + Ripan',
    description: 'A captivating portrayal of affection that truly honors the bond between Annie and Ripan, showcasing a blend of candid and expertly captured photographs that encapsulate their unique personalities.',
    image: presetImage3,
    path: '/weddings/annie-ripan',
  }
];

const Weddings = () => (
  <div className="weddings-container">
    <section className="hero-section">
      <h1 className="hero-title">Our Wedding Projects</h1>
      <p className="hero-description">Explore our curated selection of wedding projects, each capturing the essence of love and elegance through our lens.</p>
    </section>
    <section className="projects-section">
      <div className="projects-grid">
        {weddingProjects.map((project, index) => (
          <Link to={project.path} key={index} className="project-card">
<div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
<div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Weddings;
