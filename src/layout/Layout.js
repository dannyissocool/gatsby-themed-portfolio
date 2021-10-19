import React, { useState } from "react";
import { StyledLayout, StyledWrapper } from "../styled/layout.styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import GlobalStyle from "../themes/globalStyles";
import ThemeProvider from "../context/ThemeProvider";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <StyledLayout>
        <StyledWrapper>
          <GlobalStyle />
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} />}
          {children}
          <Footer>Copyright 2021 Dan Meuse</Footer>
        </StyledWrapper>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
