import React, { useContext } from "react";
import { StyledMenuToggle } from "../styled/menutoggle.styled";
import { ThemeContext } from "../context/ThemeProvider";

const MenuToggle = ({ setSidebarOpen, sidebarOpen }) => {
  const { colorMode } = React.useContext(ThemeContext);

  return (
    <StyledMenuToggle
      onClick={() => setSidebarOpen(!sidebarOpen)}
      sidebarOpen={sidebarOpen}
      colorMode={colorMode}
    >
      <div />
    </StyledMenuToggle>
  );
};

export default MenuToggle;
