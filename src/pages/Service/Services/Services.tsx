import serviceData from '../../../data/serviceCard'
import {
  ServiceContainer,
  ContentBox,
  ServiceBox,
  Description,
  Heading,
  Title,
} from './ServicesStyled'

interface Service {
  id: string
  image: string
  title: string
  heading: string
  descriptions: string[]
}

export default function ServiceSection(): JSX.Element {
  return (
    <ServiceContainer>
      {serviceData.map((item: Service, index) => (
        <ServiceBox key={item.id} reverse={index % 2 === 1}>
          <img src={item.image} alt={item.title} />

          <ContentBox>
            <Title>{item.title}</Title>
            <Heading>{item.heading}</Heading>
            {item.descriptions.map((desc, i) => (
              <Description key={i}>{desc}</Description>
            ))}
          </ContentBox>
        </ServiceBox>
      ))}
    </ServiceContainer>
  )
}
