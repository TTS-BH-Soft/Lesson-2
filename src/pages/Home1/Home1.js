import styled from "styled-components";

export const MainContainer = styled.div`
  background: url("../../assets/background/bg-header.svg") no-repeat;
  background-size: 88%;

  height: 805px;

  padding: 41px 0;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    background: none;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;
