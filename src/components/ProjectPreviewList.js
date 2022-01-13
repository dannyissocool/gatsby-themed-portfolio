import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ProjectPreview from "./ProjectPreview";
import { StyledProjectPreviewList } from "../styled/projectPreviewList.styled";

const ProjectPreviewList = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            nodes {
              html
              frontmatter {
                githubPages
                repo
                slug
                title
                stack
                thumb {
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledProjectPreviewList>
          {data.allMarkdownRemark.nodes.map((project, id) => (
            <ProjectPreview
              id={id}
              html={project.html}
              slug={project.frontmatter.slug}
              stack={project.frontmatter.stack}
              thumb={
                project.frontmatter.thumb.childrenImageSharp[0].gatsbyImageData
              }
              title={project.frontmatter.title}
              githubPages={project.frontmatter.githubPages}
              repo={project.frontmatter.repo}
            />
          ))}
        </StyledProjectPreviewList>
      )}
    />
  );
};

export default ProjectPreviewList;
