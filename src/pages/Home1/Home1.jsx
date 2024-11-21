import { Navbar } from "../../layouts/NavBar/NavBar";
import { Slider } from "../../component/Slider/Slider";
import { MainContent } from "../../component/MainContent/MainContent";
import { Footer } from "../../layouts/Footer/Footer";
import { ContactUs } from "./ContactUs/ContactUs";
import { Teams } from "../../component/Teams/Teams";
import { MainContainer } from "./Home1Styled";

export default function Home1() {
  <>
    <MainContainer>
      <Navbar />
      <Slider />
    </MainContainer>

    <main>
      <MainContent />
      <Teams />
      <ContactUs />
    </main>

    <Footer />
  </>;
}
