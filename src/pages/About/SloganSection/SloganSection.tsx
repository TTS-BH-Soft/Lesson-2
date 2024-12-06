import {
  SloganContainer,
  ContentBox,
  Title,
  Heading,
  Description,
} from './SloganStyled'

export default function SloganSection() {
  return (
    <SloganContainer>
      <ContentBox>
        <Title>Business Slogan</Title>
        <Heading>Best responsibility and service for our customers</Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Description>
      </ContentBox>
    </SloganContainer>
  )
}
