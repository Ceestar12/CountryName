import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar">
      <h1>Where in the world?</h1>
      <button
        onClick={toggleDarkMode}
        style={{
          fontSize: '1rem',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </nav>
  );
};

export default Navbar;
