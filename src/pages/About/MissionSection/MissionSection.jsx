import missionData from "../../../data/missionData";
import { MissionContainer, ContentBox, MissionBox } from "./MissionStyled";

export default function MissionSection() {
  return (
    <MissionContainer>
      {missionData.map((item, index) => (
        <MissionBox key={item.id} reverse={index % 2 === 1}>
          <img src={item.image} alt={item.title} />

          <ContentBox>
            <h5>{item.title}</h5>
            <h2>{item.heading}</h2>
            {item.descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </ContentBox>
        </MissionBox>
      ))}
    </MissionContainer>
  );
}
