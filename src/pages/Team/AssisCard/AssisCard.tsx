import assisTeam from '../../../data/assisTeam'
import {
  AssisContainer,
  AssisCardContainer,
  AssisImage,
  AssisInfo,
  AssisName,
  AssisRole,
  AssisDescription,
} from './AssisStyled'

export default function AssisCard() {
  return (
    <AssisContainer>
      {assisTeam.map(member => (
        <AssisCardContainer key={member.id}>
          <AssisImage src={member.image} alt={member.name} />
          <AssisInfo>
            <AssisName>
              {member.name} <AssisRole>/ {member.role}</AssisRole>
            </AssisName>
            <AssisDescription>{member.description}</AssisDescription>
          </AssisInfo>
        </AssisCardContainer>
      ))}
    </AssisContainer>
  )
}
