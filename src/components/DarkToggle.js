import React from "react";
import { ThemeContext } from "../context/ThemeProvider";

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={(e) => setColorMode(e.target.checked ? "dark" : "light")}
      />
      Dark
    </label>
  );
};

export default DarkToggle;
