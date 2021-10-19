import styled, { css } from "styled-components";

export const StyledMenuToggle = styled.div`
  margin: 10px;
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  div {
    background-color: var(--color-text);
    width: 100%;
    height: 2px;
    transition: 0.4s transform ease, 0.4s background-color linear;

    &::before {
      content: "";
      background-color: var(--color-text);
      width: 100%;
      height: 2px;
      position: absolute;
      transform: translateY(6px);
      transition: 0.4s transform ease, 0.4s background-color linear;
    }

    &::after {
      content: "";
      background-color: var(--color-text);
      width: 100%;
      height: 2px;
      position: absolute;
      transform: translateY(-6px);
      transition: 0.4s transform ease, 0.4s background-color linear;
    }
  }

  ${({ sidebarOpen }) =>
    sidebarOpen &&
    css`
      div {
        background-color: transparent;

        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    `}
`;
