import bgAbout from '../../../assets/background/bg-about.svg'

import AboutUsSection from '../AboutSection/AboutSection'
import ServiceSection from '../ServiceSection/ServiceSection'
import { AboutBackground, HeaderSection } from './MainStyled'

export function MainContent() {
  return (
    <HeaderSection>
      <ServiceSection />
      <AboutUsSection />
      <AboutBackground src={bgAbout} alt="Background About Us" />
    </HeaderSection>
  )
}
