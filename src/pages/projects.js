import React from "react";
import Layout from "../layout/Layout";
import ProjectPreviewList from "../components/ProjectPreviewList";
import styled from "styled-components";

const StyledH4 = styled.h4`
  /* width: 100%;
  margin: 0 auto; */
  display: block;
  text-align: center;
  padding: 30px 0;
  text-decoration: underline;
`;

const projects = () => {
  return (
    <Layout>
      <StyledH4>Projects</StyledH4>
      <ProjectPreviewList />
    </Layout>
  );
};

export default projects;
