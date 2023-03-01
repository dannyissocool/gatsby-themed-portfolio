import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layout/Layout";
import { StyledAboutPage } from "../styled/about.styled";

const about = ({ data }) => {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <StyledAboutPage>
        <p>
          I'm Danny Meuse. I am a Front-End Web Developer focused on React. I
          help clients build modern interactive and responsive websites. Contact
          me for more info.
        </p>
        <GatsbyImage image={image} alt="" />
      </StyledAboutPage>
    </Layout>
  );
};

export default about;

export const query = graphql`
  query remySelfie {
    file(relativePath: { eq: "remySelfie.jpg" }) {
      childImageSharp {
        gatsbyImageData(transformOptions: { fit: FILL }, placeholder: BLURRED)
      }
    }
  }
`;
