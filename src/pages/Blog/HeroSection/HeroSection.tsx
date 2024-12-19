import { HeroBox, Title, Description } from './HeroStyled'
import HeroImage from '../../../assets/Blogs/blog-hero.svg'

export default function HeroSection() {
  return (
    <HeroBox style={{ backgroundImage: `url(${HeroImage})` }}>
      <Title>Blogs</Title>
      <Description>Home • Blog</Description>
    </HeroBox>
  )
}
