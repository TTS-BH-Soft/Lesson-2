import { NavBar } from '../../layouts/NavBar/NarBar'
import Services from '../Service/Services/Services'
import { Footer } from '../../layouts/Footer/Footer'
import Banner from './Banner/Banner'
import Gallery from './Gallery/Gallery'
import FAQ from './FAQ/FAQ'

export default function Service() {
  return (
    <>
      <NavBar />
      <Gallery />
      <Services />
      <Banner />
      <FAQ />
      <Footer />
    </>
  )
}
