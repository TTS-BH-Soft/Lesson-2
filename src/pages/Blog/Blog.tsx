import { Footer } from '../../layouts/Footer/Footer'
import { NavBar } from '../../layouts/NavBar/NarBar'
import BlogCardList from './BlogCardList/BlogCardList'
import HeroSection from './HeroSection/HeroSection'

export default function Blog() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BlogCardList />
      <Footer />
    </>
  )
}
