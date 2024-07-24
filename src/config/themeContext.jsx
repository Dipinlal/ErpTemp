import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import WarningMessage from '../components/Warning/Warnings';

const themes = window.themes; // Access the themes object from the global window object

const ThemeContext = createContext();

const getStoredTheme = () => {
  const themeName = localStorage.getItem('theme') || 'default';
  const colorMode = localStorage.getItem('color') === 'true';
  return { themeName, colorMode };
};

export const ThemeProvider = ({ children }) => {
  const { themeName: storedThemeName, colorMode: storedColorMode } = getStoredTheme();
  const [themeName, setThemeName] = useState(storedThemeName);
  const [isDarkMode, setIsDarkMode] = useState(storedColorMode);
  const [openWarning, setOpenWarning] = useState(false);

  useEffect(() => {
    // Ensure the themeName exists in the themes object
    if (!themes[themeName]) {
      const fallbackTheme = themes.default ? 'default' : Object.keys(themes)[0];
      setThemeName(fallbackTheme);
    }
  }, [themeName]);

  const currentTheme = themes[themeName] || themes.default;

  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  useEffect(() => {
    localStorage.setItem('color', isDarkMode);
    if (isDarkMode) {
      setThemeName('dark'); // Set the theme to dark if isDarkMode is true
    }
  }, [isDarkMode]);

  const switchTheme = (newThemeName) => {
    if (isDarkMode) {
      // Show warning if trying to switch theme while in dark mode
      setOpenWarning(true);
    } else if (themes[newThemeName]) {
      setThemeName(newThemeName);
    }
  };

  const switchColorMode = (color) => {
    setIsDarkMode(color);
  };

  const appliedTheme = createTheme({
    ...(currentTheme || themes.default),
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(currentTheme ? currentTheme.palette : themes.default.palette),
    },
  });

  const handleWarningClose = () => {
    setOpenWarning(false);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, switchColorMode, isDarkMode }}>
      <MUIThemeProvider theme={appliedTheme}>
        <CssBaseline />
        {children}
        <WarningMessage
          open={openWarning}
          handleClose={handleWarningClose}
          message="Switching themes is disabled in dark mode."
          type="warning"
        />
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
