import styled from "styled-components";

export const StyledProjectPreviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 600px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
  }
`;
