import AssisCard from '../AssisCard/AssisCard'
import {
  AssisContainer,
  ContentBox,
  SectionTitle,
  MainTitle,
  Description,
} from './SectionStyled'

export default function AssisSection() {
  return (
    <AssisContainer>
      <ContentBox>
        <SectionTitle>Assistance Team</SectionTitle>
        <MainTitle>Meet the pro assistance</MainTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Description>
      </ContentBox>

      <AssisCard />
    </AssisContainer>
  )
}
