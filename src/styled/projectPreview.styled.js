import styled from "styled-components";

export const StyledProjectPreview = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 10px 5px;
  /* height: 500px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid var(--color-text);

  section {
    padding: 10px 10px 20px 10px;
  }

  img {
    width: 90%;
    height: 100px;
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
    background: rgba(0, 0, 0, 0.7);

    :hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 768px) {
    /* height: 300px; */
  }
`;
