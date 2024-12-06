import missionData from '../../../data/missionData'
import {
  MissionContainer,
  ContentBox,
  MissionBox,
  Description,
  Heading,
  Title,
} from './MissionStyled'

interface Mission {
  id: string
  image: string
  title: string
  heading: string
  descriptions: string[]
}

export default function MissionSection(): JSX.Element {
  return (
    <MissionContainer>
      {missionData.map((item: Mission, index) => (
        <MissionBox key={item.id} reverse={index % 2 === 1}>
          <img src={item.image} alt={item.title} />

          <ContentBox>
            <Title>{item.title}</Title>
            <Heading>{item.heading}</Heading>
            {item.descriptions.map((desc, index) => (
              <Description key={index}>{desc}</Description>
            ))}
          </ContentBox>
        </MissionBox>
      ))}
    </MissionContainer>
  )
}
