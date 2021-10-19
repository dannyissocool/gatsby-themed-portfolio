import React from "react";
import { StyledSidebar } from "../styled/sidebar.styled";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <StyledSidebar className="active">
      <ul>
        <AniLink swipe top="entry" direction="right" to="/">
          Home
        </AniLink>
        <AniLink swipe top="entry" direction="left" to="/projects">
          Projects
        </AniLink>
        <AniLink swipe top="entry" direction="up" to="/about">
          About
        </AniLink>
        <AniLink swipe top="entry" direction="down" to="/contact">
          Contact
        </AniLink>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
