import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState('Jeric Palaca');

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const theme = {
    isDarkMode,
    toggleTheme,
    userName,
    setUserName,
    colors: {
      background: isDarkMode ? '#121212' : '#F8F9FA',
      cardBackground: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      text: isDarkMode ? '#FFFFFF' : '#212529',
      subText: isDarkMode ? '#AAAAAA' : '#6C757D',
      primary: '#0D6EFD',
      border: isDarkMode ? '#2C2C2C' : '#DEE2E6',
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);