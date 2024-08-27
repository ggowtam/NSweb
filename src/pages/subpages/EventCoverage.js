import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../../styles/EventCoverage.scss'; // Import SCSS
import presetImage1 from '../../assets/preset1.jpg';
import presetImage2 from '../../assets/preset2.jpg';
import presetImage3 from '../../assets/preset3.jpg';

const eventCoverageProjects = [
  {
    title: 'Corporate Event 1',
    description: 'This event coverage captures the energy and professionalism of a high-profile corporate event. The images reflect the dynamic environment and interactions of the participants.',
    image: presetImage1,
    path: '/event-coverage/corporate-event-1',
  },
  {
    title: 'Charity Gala 2023',
    description: 'A beautiful portrayal of a charity gala, capturing the elegance and generosity of the attendees. The photos highlight the joy and success of the event.',
    image: presetImage2,
    path: '/event-coverage/charity-gala-2023',
  },
  {
    title: 'Product Launch Event',
    description: 'The product launch event is showcased with vibrant and engaging photographs, reflecting the excitement and anticipation surrounding the new product.',
    image: presetImage3,
    path: '/event-coverage/product-launch',
  },
];

const EventCoverage = () => (
  <div className="event-coverage-container">
    <section className="hero-section">
      <h1 className="hero-title">Event Coverage</h1>
      <p className="hero-description">Explore our collection of event coverage, capturing the essence and excitement of various events through our lens.</p>
    </section>
    <section className="projects-section">
      <div className="projects-grid">
        {eventCoverageProjects.map((project) => (
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

export default EventCoverage;
