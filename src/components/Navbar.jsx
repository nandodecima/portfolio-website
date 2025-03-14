import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="fade-in">
      
      {/* <a href="/home" className="cta-button">Home</a>
      <a href="/about" className="cta-button">About</a>
      <a href="/projects" className="cta-button">Projects</a>
      <a href="/contact" className="cta-button">Contact</a> */}
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link> 
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;