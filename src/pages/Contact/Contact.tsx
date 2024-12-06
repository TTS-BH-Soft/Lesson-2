import { Footer } from '../../layouts/Footer/Footer'
import { NavBar } from '../../layouts/NavBar/NarBar'
import ContactBox from './ContactBox/ContactBox'
import ContactInfo from './ContactInfo/ContactInfo'

import ContactMap from '../../assets/Contact/map.svg'

export default function Contact() {
  return (
    <>
      <NavBar />
      <ContactBox />
      <img src={ContactMap} alt="" />
      <ContactInfo />
      <Footer />
    </>
  )
}
