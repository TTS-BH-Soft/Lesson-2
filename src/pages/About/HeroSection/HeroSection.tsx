import AboutHero from '../../../assets/About/about-hero.svg'
import {
  ContentBox,
  Description,
  Heading,
  HeroBox,
  ImageBox,
  Title,
} from './HeroStyled'

export default function HeroSection() {
  return (
    <HeroBox>
      <ContentBox>
        <Title>About</Title>
        <Heading>
          We are a leading beauty clinic that has been around since 2002
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Description>
      </ContentBox>

      <ImageBox>
        <img src={AboutHero} alt="" />
      </ImageBox>
    </HeroBox>
  )
}
