import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import Teams from "../../component/Teams/Teams";
import SloganSection from "./SloganSection/SloganSection";
import ClientSection from "./ClientSection/ClientSection";

export default function About() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Teams />
      <SloganSection />
      <ClientSection />
      <Footer />
    </>
  );
}
