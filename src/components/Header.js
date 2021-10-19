import React, { useContext } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";
import { StyledHeader } from "../styled/header.styled";

import DarkToggle from "./DarkToggle";
import MenuToggle from "./MenuToggle";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <StyledHeader>
      <div>
        <AniLink swipe direction="right" top="entry" to="/">
          Meuse
        </AniLink>
      </div>
      <DarkToggle />

      <MenuToggle sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <AniLink swipe top="entry" direction="left" to="/projects">
          Projects
        </AniLink>
        <AniLink swipe top="entry" direction="up" to="/about">
          About
        </AniLink>
        <AniLink swipe top="entry" direction="down" to="/contact">
          Contact
        </AniLink>
      </div>
    </StyledHeader>
  );
};

export default Header;
