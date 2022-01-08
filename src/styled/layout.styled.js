import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const StyledLayout = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  transition: 0.4s background-color linear, 0.4s color linear;
  height: auto;
  min-height: 100vh;
  position: relative;
`;
