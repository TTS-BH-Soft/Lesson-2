import missionData from "../../../data/missionData";

export default function MissionSection() {
  return (
    <div>
      {missionData.map((item) => (
        <div key={item.id}>
          <h5>{item.title}</h5>
          <h2>{item.heading}</h2>
          {item.descriptions.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
