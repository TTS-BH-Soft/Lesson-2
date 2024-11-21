import styled from "styled-components";
import GalleryBg from "../../../assets/Gallery/gallery-bubble.svg";

export const Section = styled.section`
  height: 389.63px;
  max-width: 1289.56px;
  background: url(${GalleryBg}) no-repeat;
  background-position: left;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 208px;
`;

export const Title = styled.h5`
  margin-bottom: 1rem;
  line-height: 20px;
`;

export const Heading = styled.h2`
  max-width: 642px;
  font-weight: 600;
  line-height: 45px;
`;

export const Subtitle = styled.p`
  max-width: 561px;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 24px;
`;

export const Button = styled.button`
  max-width: 316px;
  height: 58px;
`;
