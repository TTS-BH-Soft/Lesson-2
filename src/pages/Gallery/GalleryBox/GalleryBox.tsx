import {
  GalleryContainer,
  Title,
  HeaderBox,
  Heading,
  Subtitle,
  ImageGrid,
  ImageCard,
  FooterText,
} from './BoxStyled'
import galleryImages from '../../../data/galleryImages'

export default function GalleryBox() {
  return (
    <GalleryContainer>
      <Title>Our Gallery</Title>
      <HeaderBox>
        <Heading>Check out the collection pictures from our clinic</Heading>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Subtitle>
      </HeaderBox>

      <ImageGrid>
        {galleryImages.map(image => (
          <ImageCard key={image.id}>
            <img src={image.src} alt={image.alt} />
          </ImageCard>
        ))}
      </ImageGrid>

      <FooterText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim, <a href="/teams">our teams</a>.
      </FooterText>
    </GalleryContainer>
  )
}
