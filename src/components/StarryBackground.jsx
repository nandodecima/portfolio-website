import React, { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);

    // Generate stars
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }

    // Cleanup
    return () => {
      document.body.removeChild(starsContainer);
    };
  }, []);

  return null;
};

export default StarryBackground;