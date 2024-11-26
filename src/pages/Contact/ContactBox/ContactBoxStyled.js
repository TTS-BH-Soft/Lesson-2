import styled from "styled-components";

export const Section = styled.div`
  margin-top: 4.5rem;
  margin-inline: auto;
  max-width: 1140px;
`;

export const Title = styled.h5`
  text-align: left;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.4rem;
`;

export const Heading = styled.h2`
  width: 615px;
`;

export const Paragraph = styled.p`
  width: 407px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;

  form {
    max-width: 520px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }

  @media (max-width: 480px) {
    padding-top: 80px;
  }
`;

export const ImageContainer = styled.div`
  img {
    max-width: 520px;
    height: 614px;
    margin-top: 2.8rem;
  }

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
    img {
      width: 70%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
      margin-top: 1.5rem;
    }
  }
`;
