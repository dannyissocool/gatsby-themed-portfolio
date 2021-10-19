import styled from "styled-components";

export const StyledHero = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.colorMode === "dark"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)"};
  transition: 0.4s background-color linear;

  div {
    padding: 20px;
  }

  h3 {
    color: ${(props) => (props.colorMode === "dark" ? "#000" : "#fff")};
  }

  p {
    margin: 30px 20px;
    color: ${(props) => (props.colorMode === "dark" ? "#000" : "#fff")};
  }

  a {
    // My Projects Button (Gatsby Link)
    margin: 20px;
    padding: 0.5em 1em;
    outline: 2px solid var(--color-text);
    color: var(--color-text);
    font-weight: 600;
    white-space: nowrap;
    letter-spacing: 1px;
    background-color: var(--color-background);

    transition: 0.4s background-color linear, 0.4s color linear,
      0.4s outline linear, 0.1s outline-offset linear;

    &:hover {
      outline-offset: -4px;
    }
  }
`;
