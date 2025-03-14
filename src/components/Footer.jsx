import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links fade-in">
        <a
          href="https://www.linkedin.com/in/nando-decima-562487151/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
        </a>
        {/* <a
          href="https://github.com/your-github-username" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;