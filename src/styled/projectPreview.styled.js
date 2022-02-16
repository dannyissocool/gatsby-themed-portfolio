import styled from "styled-components";

export const StyledProjectPreview = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 10px 5px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  img {
    width: 70%;
    min-width: 150px;
    max-width: 70%;
    margin: 5px auto;
    object-position: top;
    border: 1px solid var(--color-text);

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
    padding: 10px 0;
    letter-spacing: 1.3px;
    text-decoration: underline;
  }

  p {
    text-align: center;
    letter-spacing: 0.3px;
    font-size: 10px;
    margin: 5px 0;
  }

  a {
    margin: 0 5px;
    padding: 5px 10px;
    font-size: 12px;
    text-decoration: none;
    color: var(--color-button);
    background: rgba(0, 0, 0, 0.3);

    :hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 768px) {
    height: 300px;
  }
`;
