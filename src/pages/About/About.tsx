import { Footer } from '../../layouts/Footer/Footer'
import { NavBar } from '../../layouts/NavBar/NarBar'
import HeroSection from './HeroSection/HeroSection'
import Teams from '../../components/Teams/Teams'
import SloganSection from './SloganSection/SloganSection'
import ClientSection from './ClientSection/ClientSection'
import MissionSection from './MissionSection/MissionSection'

export default function About() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Teams />
      <SloganSection />
      <MissionSection />
      <ClientSection />
      <Footer />
    </>
  )
}
