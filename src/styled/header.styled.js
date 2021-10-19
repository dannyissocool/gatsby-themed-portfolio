import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  font-family: "Poppins";
  font-display: fallback;

  div {
    // Logo
    a {
      font-display: fallback;
      padding: 0;
      text-decoration: none;
      color: var(--color-text);
      transition: opacity 0.4s linear, color 0.4s linear,
        background-color 0.4s linear;

      &:hover {
        opacity: 0.85;
        text-decoration: underline;
      }
    }
  }

  button {
    outline: none;
    border: 1px solid;
    border-color: var(--color-text);
    border-radius: 2px;
    background-color: var(--color-button);
    color: var(--color-background);
    padding: 10px 20px;
    font-size: 1rem;
    letter-spacing: 0.7px;
    cursor: pointer;
    transition: opacity 0.4s linear, color 0.4s linear,
      background-color 0.4s linear;
    &:hover {
      opacity: 0.85;
    }
  }

  label {
    // Dark mode switch
    font-display: fallback;
    white-space: nowrap;
    input {
      margin: 0 5px;
    }
  }

  label + div {
    // sidebar toggle
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  div + div {
    // Links
    display: flex;

    a {
      font-display: fallback;
      padding: 0 20px;
      text-decoration: none;
      transition: opacity 0.4s linear, color 0.4s linear,
        background-color 0.4s linear;
      color: var(--color-text);

      &:hover {
        opacity: 0.85;
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      display: none;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;
