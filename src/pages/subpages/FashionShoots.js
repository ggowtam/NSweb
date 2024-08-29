import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/FashionShoots.scss'; // Import SCSS

// Import images
import fashion1 from '../../assets/fashion/fashion1.jpg';
import fashion2 from '../../assets/fashion/fashion26.jpg';
import fashion3 from '../../assets/Home4.jpg';

const fashionProjects = [
  {
    title: 'H&M',
    description: 'This fashion shoot showcases the latest trends in haute couture, capturing the elegance and flair of modern fashion through stunning photography.',
    image: fashion1,
    path: '/fashion/fashion-shoot-1',
  },
  {
    title: 'Haritage Collection',
    description: 'Featuring bold designs and avant-garde styling, this shoot pushes the boundaries of contemporary fashion, making a statement through every shot.',
    image: fashion2,
    path: '/fashion/fashion-shoot-2',
  },
  {
    title: 'NYFW 2024',
    description: 'A celebration of color and texture, this shoot blends traditional and modern elements, creating a unique and unforgettable visual experience.',
    image: fashion3,
    path: '/fashion/fashion-shoot-3',
  },

];

const FashionShoots = () => (
  <div className="fashion-shoots-container">
    <section className="hero-section">
      <h1 className="hero-title">Fashion Shoots</h1>
      <p className="hero-description">Explore our collection of fashion shoots, capturing the essence of style and elegance in every frame.</p>
    </section>
    <section className="projects-section">
      <div className="projects-grid">
        {fashionProjects.map((project) => (
          <Link to={project.path} key={project.title} className="project-card">
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

export default FashionShoots;
