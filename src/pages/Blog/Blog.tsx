import { Footer } from '../../layouts/Footer/Footer'
import { NavBar } from '../../layouts/NavBar/NarBar'
import HeroSection from './HeroSection/HeroSection'
import MainContent from './MainContent/MainContent'

export default function Blog() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MainContent />
      <Footer />
    </>
  )
}
