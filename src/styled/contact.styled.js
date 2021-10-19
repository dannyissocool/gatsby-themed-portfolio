import styled from "styled-components";

export const StyledContact = styled.div`
  text-align: start;
  max-width: 500px;
  margin: 2rem auto;

  h4 {
    text-align: center;
    text-decoration: underline;
  }

  ul {
    padding: 5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      padding: 1rem;
      font-size: 25px;
      text-decoration: none;
      color: var(--color-text);

      :hover {
        opacity: 0.3;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 0;

    label {
      margin: 5px;
    }

    input {
      margin: 5px 0;
      background-color: var(--color-background);
      color: var(--color-text);
      border: 1px solid var(--color-text);
      border-bottom: 2px solid var(--color-text);
      transition: 0.4s background-color linear;

      :hover,
      :active,
      :focus {
        background-color: var(--color-accent);
      }
    }

    textarea {
      padding: 0px;
      min-width: 100%;
      max-width: 100%;
      min-height: 100px;
      background-color: var(--color-background);
      color: var(--color-text);
      border: 1px solid var(--color-text);
      border-bottom: 2px solid var(--color-text);
      transition: 0.4s background-color linear;

      :hover,
      :active,
      :focus {
        background-color: var(--color-accent);
      }
    }

    button {
      cursor: pointer;
      margin-top: 30px;
      padding: 5px;
      outline: 2px solid var(--color-text);
      border-color: transparent;
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
  }
`;
