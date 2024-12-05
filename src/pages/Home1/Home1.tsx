import Teams from '../../components/Teams/Teams'
import { Footer } from '../../layouts/Footer/Footer'
import { NavBar } from '../../layouts/NavBar/NarBar'
import ContactSection from './ContactSection/ContactSection'
import { MainContainer } from './Home1Styled'
import { MainContent } from './MainContent/MainContent'
import { Slider } from './Slider/Slider'

export default function Home1() {
  return (
    <>
      <MainContainer>
        <NavBar />
        <Slider />
      </MainContainer>

      <main>
        <MainContent />
        <Teams />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
