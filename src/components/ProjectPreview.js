import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledProjectPreview } from "../styled/projectPreview.styled";

const ProjectPreview = ({
  html,
  repo,
  githubPages,
  slug,
  stack,
  thumb,
  title,
}) => {
  const data = useStaticQuery(graphql`
    query Selfie {
      file(relativePath: { eq: "selfie1.jpg" }) {
        childImageSharp {
          gatsbyImageData(transformOptions: { fit: FILL }, placeholder: BLURRED)
        }
      }
    }
  `);

  const imagePreview = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <StyledProjectPreview>
      <section>
        <h4>{title}</h4>
        <GatsbyImage image={thumb} alt="" />

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <h5>{stack}</h5>
        <div>
          <a target="_blank" rel="noreferrer" href={repo}>
            Github Repo
          </a>
          <a target="_blank" rel="noreferrer" href={githubPages}>
            Live Link
          </a>
        </div>
      </section>
    </StyledProjectPreview>
  );
};

export default ProjectPreview;
