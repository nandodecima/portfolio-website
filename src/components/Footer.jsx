import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links fade-in">
        <a
          href="https://www.linkedin.com/in/nando-decima-562487151/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
        </a>
        <a href="https://github.com/nandodecima" target="_blank">
    <i class="fab fa-github"></i> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;