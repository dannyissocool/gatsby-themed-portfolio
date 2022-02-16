import React from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { StyledDarkToggle } from "../styled/darktoggle.styled";

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <StyledDarkToggle>
      <input
        className="material-icons"
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={(e) => setColorMode(e.target.checked ? "dark" : "light")}
      />
      <span class="material-icons">{`${
        colorMode === "dark" ? `dark` : `light`
      }_mode`}</span>
    </StyledDarkToggle>
  );
};

export default DarkToggle;
