import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 424px;
  height: 402px;
  padding: 20px;

  background-color: ${(props) => (props.hasShadow ? "#fff" : "none")};
  border-radius: 42px;
  ${(props) =>
    props.hasShadow
      ? "box-shadow: 0px 25px 50px 25px rgba(246, 247, 255, 1);"
      : "box-shadow: none;"}
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Image = styled.img`
  font-size: 40px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #ff64ae;
  margin: 5px 0;
`;

export const Content = styled.p`
  font-size: 24px;
  color: #091156;
  font-weight: 600;
`;

export const SubText = styled.p`
  max-width: 270px;
  font-size: 14px;
  color: #8b8b8b;
  margin-top: 10px;
  line-height: 1.5;

  text-align: center;
`;
