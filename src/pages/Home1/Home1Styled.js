import styled from "styled-components";
import HeaderBg from "../../assets/background/bg-header.svg";

export const MainContainer = styled.div`
  background: url(${HeaderBg}) no-repeat;
  background-size: 88%;

  height: 805px;

  margin-bottom: 30px;

  @media (max-width: 1024px) {
    background: none;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;
