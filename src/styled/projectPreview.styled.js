import styled from "styled-components";

export const StyledProjectPreview = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 10px 5px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 70%;
    min-width: 150px;
    max-width: 70%;
    margin: 0 auto;
    object-position: top;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  h4 {
    margin: 10px 0;
    letter-spacing: 1px;
    text-decoration: underline;
  }

  p {
    text-align: start;
    letter-spacing: 0.3px;
    font-size: 10px;
    margin: 5px 0;
  }

  a {
    padding: 0 10px;
    font-size: 12px;
    text-decoration: none;
    color: var(--color-button);

    :hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 768px) {
    height: 300px;
  }
`;
