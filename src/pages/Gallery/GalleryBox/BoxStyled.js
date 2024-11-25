import styled from "styled-components";

export const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 3.1rem auto;
`;

export const Title = styled.h5`
  margin-bottom: 0.8rem;
  margin-left: 0.08rem;
  margin-top: 0.1rem;

  line-height: 20px;
  font-weight: 600;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-right: 1rem;
`;

export const Heading = styled.h2`
  margin-bottom: 1.2rem;
  font-weight: 600;

  max-width: 615px;
  max-height: 104px;
`;

export const Subtitle = styled.p`
  color: #8b8b8b;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 2rem;
  margin-right: 1rem;
  letter-spacing: 3px;

  max-width: 407px;
  height: 72px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
  margin: 4.3rem 0;
`;

export const ImageCard = styled.div`
  border-radius: 20px;
  overflow: hidden;

  img {
    max-width: 356px;
    max-height: 210px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const FooterText = styled.p`
  color: #6c6c6c;
  font-size: 16px;
  max-width: 660px;
  line-height: 24px;

  a {
    color: #091156;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
