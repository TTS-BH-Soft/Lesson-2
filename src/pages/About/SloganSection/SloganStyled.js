import styled from "styled-components";
import SloganBg from "../../../assets/About/slogan-image.svg";

export const SloganContainer = styled.div`
  background: url(${SloganBg});
  height: 529px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`;

export const ContentBox = styled.div`
  max-width: 732px;
  text-align: center;
`;

export const Title = styled.h5`
  color: #abb4ff;
`;

export const Heading = styled.h2`
  color: #ffffff;
`;

export const Description = styled.p`
  color: #cacaca;
  max-width: 680px;
`;
