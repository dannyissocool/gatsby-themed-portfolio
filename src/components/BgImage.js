import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const StyledBgImage = styled(BgImage)`
  transform: rotate(180);
`;

export const BgHeroImage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "mountain_small.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              transformOptions: { fit: FILL }
              placeholder: BLURRED
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  );

  //   const image = getImage(backgroundImage123);
  //   const bgImage = convertToBgImage(image);
  const pluginImage = getImage(backgroundImage123);

  return (
    // <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
    //   Test
    // </BackgroundImage>
    <StyledBgImage image={pluginImage}></StyledBgImage>
  );
};
