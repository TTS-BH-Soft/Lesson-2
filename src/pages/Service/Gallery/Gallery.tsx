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
        {galleryData.map((item, index) => {
          // Check if we are in the second row (index 2 and 3) and reverse
          const isSecondRow = Math.floor(index / 2) === 1
          const reverse = isSecondRow ? index % 2 === 0 : index % 2 === 1

          return (
            <ImageBox key={item.id} reverse={reverse}>
              <img src={item.image} alt={item.title} />
            </ImageBox>
          )
        })}
      </GridContainer>
    </GalleryContainer>
  )
}
