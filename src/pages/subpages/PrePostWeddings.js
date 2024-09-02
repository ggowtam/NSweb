import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PrePostWeddings.scss';
import prew6 from '../../assets/pre1/Prew6.jpg';
import pre20 from '../../assets/pre2/pre20.jpg'
import pre47 from '../../assets/pre3/pre47.jpg'
import pre94 from '../../assets/pre4/pre94.jpg'
import pre108 from '../../assets/pre5/pre108.jpg'



const prePostWeddingProjects = [
  {
    title: 'Gurwinder + Navneet',
    description: 'This pre-wedding shoot captures the excitement and anticipation leading up to the big day. The images reflect the genuine emotions and connection between the couple.',
    image: prew6,
    path: '/preweddings/pre-wedding-shoot-1',
  },
  {
    title: 'Dinesh + Veenu',
    description: 'This post-wedding shoot highlights the beauty and joy experienced after the wedding day. The photographs showcase the couple in a relaxed and celebratory setting.',
    image: pre20,
    path: '/preweddings/pre-wedding-shoot-2',
  },
  {
    title: 'Aditya + AARTI',
    description: 'A blend of pre and post-wedding moments, this shoot captures the essence of the couple’s journey from anticipation to celebration with candid and artistic photography.',
    image: pre47,
    path: '/preweddings/pre-wedding-shoot-3',
  },
  {
    title: 'Navjot + Balvinder',
    description: 'A blend of pre and post-wedding moments, this shoot captures the essence of the couple’s journey from anticipation to celebration with candid and artistic photography.',
    image: pre94,
    path: '/preweddings/pre-wedding-shoot-4',
  },

];

const PrePostWeddings = () => (
  <div className="pre-post-weddings-container">
    <section className="hero-section">
      <h1 className="hero-title">Pre and Post Wedding Shoots</h1>
      <p className="hero-description">Explore our collection of pre and post-wedding shoots, capturing every moment of your journey with elegance and style.</p>
    </section>
    <section className="projects-section">
      <div className="projects-grid">
        {prePostWeddingProjects.map((project) => (
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

export default PrePostWeddings;
