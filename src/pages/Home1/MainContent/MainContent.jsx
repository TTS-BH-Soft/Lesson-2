import Services from "../../../component/Services/Services";
import AboutUs from "../../../component/AboutUs/AboutUs";

import bgAbout from "../../../assets/background/bg-about.svg";
import { AboutBackground, HeaderSection } from "./ContainerStyled";

export function MainContent() {
  return (
    <HeaderSection>
      <Services />
      <AboutUs />
      <AboutBackground src={bgAbout} alt="Background About Us" />
    </HeaderSection>
  );
}
