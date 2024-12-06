import { Section, Content, Title, Subtitle, PlayButton } from './VideoStyled'
import BtnImage from '../../../assets/Gallery/btn-play.svg'

export default function VideoSection() {
  return (
    <Section>
      <Content>
        <Title>Watch the video tour</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Subtitle>
        <PlayButton>
          <img src={BtnImage} alt="" />
        </PlayButton>
      </Content>
    </Section>
  )
}
