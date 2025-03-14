import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'I designed and developed my personal portfolio website from the ground up to showcase my work, skills, and projects. Built with modern web technologies like react.js (vite), the site features an intuitive layout, responsive design, and a clean aesthetic to provide an engaging user experience.',
      link: 'https://nandodecima-portfolio.netlify.app/',
    },
    {
      title: 'Space Battle Simulator',
      description: 'Space Battle Simulator is a simple yet fun web-based game where players and enemies exchange attacks at random with the press of a button. Each battle unfolds unpredictably, making every round a unique experience. This project highlights basic game logic, user interaction, and randomness in JavaScript. Additionally, it features interactive sound effects that I personally recorded and sampled, enhancing the immersive experience of the battle.',
      link:'https://space-battle-simulator.netlify.app/'
    },
    {
      title: 'Gloss – Music Collaboration Platform',
      description: 'Gloss is a web-based platform designed to help musicians, producers, and audio engineers connect and collaborate effortlessly. Users can upload tracks, exchange ideas, and work together in real-time, breaking down the barriers of remote music creation. With an intuitive interface and streamlined workflow, Gloss makes it easy to bring creative visions to life, whether you’re co-producing a song, giving feedback, or building something new with other artists...Coming Soon!',
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
            <a href={project.link}>Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;