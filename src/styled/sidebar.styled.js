import styled from "styled-components";

export const StyledSidebar = styled.div`
  z-index: 1;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;

  height: auto;
  border-color: var(--color-text);
  border-style: solid;
  border-width: 1px 1px 1px 0;

  background-color: var(--color-background);
  transition: background-color 0.4s linear;

  animation-duration: 0.5s;
  animation-name: "slideIn";

  ul {
    margin: 0 auto;
    padding: 0;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow-x: hidden;

    a {
      text-align: center;
      color: var(--color-text);
      font-size: 20px;
      padding: 10px 0;
      max-width: 100%;
      width: 100%;
      overflow: hidden;

      :hover {
        opacity: 0.7;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(-50%);
    }
  }
`;
