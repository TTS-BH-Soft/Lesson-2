import { useState } from 'react'
import {
  TeamSection,
  SectionTitle,
  MainTitle,
  Description,
  TeamBox,
  TeamItem,
  TeamImage,
  TeamContent,
  TeamSocial,
} from './TeamStyled'
import teamMembers from '../../data/teamMembers'
import SocialIcon from '../SocialIcon/SocialIcon'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  center?: boolean
}

export default function Teams() {
  const [teamState, setTeamState] = useState<TeamMember[]>(teamMembers)

  const handleHover = (hoveredIndex: number) => {
    const updatedState = teamMembers.map((member, index) => ({
      ...member,
      center: index === hoveredIndex,
    }))
    setTeamState(updatedState)
  }

  const handleMouseLeave = () => {
    setTeamState(teamMembers)
  }

  return (
    <TeamSection id="team">
      <SectionTitle>Professional Teams</SectionTitle>
      <MainTitle>The Professional Expert</MainTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Description>

      <TeamBox>
        {teamState.map((member, index) => (
          <TeamItem
            key={index}
            center={member.center}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
          >
            <TeamImage>
              <img src={member.image} alt={member.name} />
            </TeamImage>
            <TeamContent>
              <h5>{member.role}</h5>
              <h4>{member.name}</h4>
              <p>{member.description}</p>
            </TeamContent>
            <TeamSocial>
              <SocialIcon />
            </TeamSocial>
          </TeamItem>
        ))}
      </TeamBox>
    </TeamSection>
  )
}
