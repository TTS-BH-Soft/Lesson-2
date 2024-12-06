import { Footer } from '../../layouts/Footer/Footer'
import Teams from '../../components/Teams/Teams'
import AssisSection from './AssisSection/AssisSection'
import { NavBar } from '../../layouts/NavBar/NarBar'

export default function Team() {
  return (
    <>
      <NavBar />
      <Teams />
      <AssisSection />
      <Footer />
    </>
  )
}
