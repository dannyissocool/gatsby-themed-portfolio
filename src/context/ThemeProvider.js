import React, { useState, useEffect } from "react";
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "../../constants";

const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;

    rawSetColorMode(newValue);

    localStorage.setItem(COLOR_MODE_KEY, newValue);

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });
    root.style.setProperty(
      "--color-button",
      newValue === "light"
        ? COLORS.button.light.background
        : COLORS.button.dark.background
    );
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const ThemeContext = React.createContext();
