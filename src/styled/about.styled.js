import styled from "styled-components";

export const StyledAboutPage = styled.div`
  min-height: 50vh;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;

  img {
    margin: 0 auto;
    border-radius: 20px;
    width: 70%;
  }

  p {
    font-size: 12px;
    margin: 30px 0 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    margin: 50px auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }

    p {
      margin: 0 30px;
    }
  }
`;
