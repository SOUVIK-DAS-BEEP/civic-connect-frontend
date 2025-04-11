// src/ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  // Apply class for top-level div
  const themeClass = darkMode ? 'dark-theme' : 'light-theme';

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={themeClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
