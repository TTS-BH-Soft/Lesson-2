import styled from "styled-components";
import imageBox from "../../../assets/Gallery/image-box.svg";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 628px;
  background-image: url(${imageBox});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 5rem;
`;

export const Title = styled.h2`
  margin: 1.3rem 0;
  color: #ffffff;
`;

export const Subtitle = styled.p`
  max-width: 555px;
  margin-bottom: 2rem;
  color: #cacaca;
`;

export const PlayButton = styled.div`
  // display: inline-flex;
  // justify-content: center;
  // align-items: center;
  // width: 80px;
  // height: 80px;
  // background: rgba(255, 255, 255, 0.2);
  // // border: 2px solid #fff;
  // // border-radius: 50%;
  // cursor: pointer;
  // transition: background 0.3s;

  // &:hover {
  //   background: rgba(255, 255, 255, 0.5);
  // }
`;
