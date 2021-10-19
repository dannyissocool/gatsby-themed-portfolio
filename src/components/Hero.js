import { Link, graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useContext } from "react";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { StyledHero } from "../styled/hero.styled";
import { ThemeContext } from "../context/ThemeProvider";

const Hero = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

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

  const pluginImage = getImage(backgroundImage123);

  return (
    <BgImage
      image={pluginImage}
      // style={{
      //   margin: "0 auto",
      //   maxWidth: "100vw",
      //   position: "relative",
      //   width: "100vw",
      //   overflow: "none",
      // }}
    >
      <StyledHero colorMode={colorMode}>
        <div>
          <h3>DANNY MEUSE</h3>
          <p>
            I'm a US based front-end web developer focused on writing clean +
            efficient code and building smooth user experiences.
          </p>
          <AniLink
            paintDrip
            hex={colorMode == "dark" ? "0f2027" : "#fff"}
            to="/projects"
          >
            My Projects
          </AniLink>
        </div>
      </StyledHero>
    </BgImage>
  );
};

export default Hero;
