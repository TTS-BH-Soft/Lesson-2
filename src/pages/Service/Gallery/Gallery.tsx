import galleryData from '../../../data/galleryData'
import {
  GalleryContainer,
  GridContainer,
  ImageBox,
  Title,
  Subtitle,
} from './GalleryStyled'

export default function Gallery(): JSX.Element {
  return (
    <GalleryContainer>
      <Title>Our Services</Title>
      <Subtitle>Lorem ipsum dolor sit amet</Subtitle>

      <GridContainer>
        {galleryData.map((item, index) => (
          <ImageBox key={item.id} reverse={index % 2 === 1}>
            <img src={item.image} alt={item.title} />
          </ImageBox>
        ))}
      </GridContainer>
    </GalleryContainer>
  )
}
