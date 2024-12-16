import { Footer } from '../../layouts/Footer/Footer'
import Teams from '../../components/Teams/Teams'
import AssisSection from './AssisSection/AssisSection'
import { NavBar } from '../../layouts/NavBar/NarBar'
import BannerSection from './BannerSection/BannerSection'
import Testimonials from './Testimonials/Testimonials'

export default function Team() {
  return (
    <>
      <NavBar />
      <Teams />
      <AssisSection />
      <BannerSection />
      <Testimonials />
      <Footer />
    </>
  )
}
