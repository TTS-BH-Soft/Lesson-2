import assisTeam from '../../../data/assisTeam'

export default function AssisCard() {
  return (
    <div>
      {assisTeam.map(member => (
        <div key={member.id} className="team-card">
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="team-info">
            <h3 className="team-name">
              {member.name} <span className="team-role">/ {member.role}</span>
            </h3>
            <p className="team-description">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
