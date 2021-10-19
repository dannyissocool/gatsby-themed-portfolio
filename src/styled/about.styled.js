import styled from "styled-components";

export const StyledAboutPage = styled.div`
  min-height: 50vh;
  max-width: 600px;
  margin: 0 auto;

  img {
    margin: 0 auto;
    width: 50%;
    max-width: 100%;
    border-radius: 20px;

    :hover {
    }
  }

  p {
    font-size: 12px;
    margin: 30px 0 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0 10px;
    }
  }
`;
