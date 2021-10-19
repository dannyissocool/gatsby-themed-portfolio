export const COLORS = {
  text: {
    light: "#000", // black
    dark: "#fff", // white
  },
  background: {
    light: "#fff", // white
    dark: "#0f2027", // dark blue
  },
  accent: {
    light: "rgba(0,0,0,0.1)",
    dark: "rgba(255,255,255,0.1)",
  },
  button: {
    light: {
      background: "#1a94ff",
      border: "1px solid #fff",
      color: "#fff",
    },
    dark: {
      background: "#1a94ff",
      border: "1px solid #1a94ff",
      color: "#1a94ff",
    },
  },
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";

export const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) {
    return persistedColorPreference; // If user has preference saved, use that
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light"; // If user has browser preference saved, use that
  }

  return "light"; // Else, use light theme
};
