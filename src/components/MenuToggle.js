import React, { useContext } from "react";
import { StyledMenuToggle } from "../styled/menutoggle.styled";
import { ThemeContext } from "../context/ThemeProvider";

const MenuToggle = ({ setSidebarOpen, sidebarOpen }) => {
  const { colorMode } = React.useContext(ThemeContext);

  console.log(colorMode);
  const localTheme = localStorage.getItem("color-mode");
  console.log(localTheme);
  return (
    <StyledMenuToggle
      onClick={() => setSidebarOpen(!sidebarOpen)}
      sidebarOpen={sidebarOpen}
      colorMode={localTheme || colorMode}
    >
      <div />
    </StyledMenuToggle>
  );
};

export default MenuToggle;
