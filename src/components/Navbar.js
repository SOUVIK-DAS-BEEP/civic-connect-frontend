// src/components/Navbar.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar" style={{ background: darkMode ? '#333' : '#eee' }}>
      <h3 style={{ margin: 0 }}>Civic Connect</h3>
      <button onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
