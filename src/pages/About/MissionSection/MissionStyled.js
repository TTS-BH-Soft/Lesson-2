import styled from "styled-components";

export const MissionContainer = styled.div`
  max-width: 1137px;
  margin: 0 auto;
`;

export const MissionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  margin-bottom: 2rem;
`;

export const ContentBox = styled.div`
  max-width: 475px;
`;
