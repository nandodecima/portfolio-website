import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: 'Music Collaboration Website',
      description: 'A free platform for artists to collaborate online. Built with JavaScript, React, Node.js, and PostgreSQL.',
      link: '#',
    },
    // Add more projects here
  ];

  return (
    <div className="page projects fade-in">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Coming Soon!</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;