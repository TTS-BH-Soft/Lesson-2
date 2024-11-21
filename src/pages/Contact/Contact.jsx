import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/NavBar/NavBar";
import ContactBox from "./ContactBox/ContactBox";

import ContactMap from "../../assets/Contact/map.svg";
import ContactInfo from "./ContactInfo/ContactInfo";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactBox />
      <img src={ContactMap} alt="" />
      <ContactInfo />
      <Footer />
    </>
  );
}
