import { HeroBox } from './HeroStyled'
import HeroImage from '../../../assets/Blogs/blog-hero.svg'

export default function HeroSection() {
  return (
    <HeroBox style={{ backgroundImage: `url(${HeroImage})` }}>
      <h2>Blogs</h2>
      <p>Home • Blog</p>
    </HeroBox>
  )
}
