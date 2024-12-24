import {
  Section,
  InfoBox,
  Header,
  Title,
  Subtitle,
  Content,
  Paragraph,
  ButtonContainer,
  Button,
  Link,
  LinkText,
  ImageContainer,
  Image,
} from './AboutStyled'

import PlayBtn from '../../../assets/play-btn.svg'
import AboutPic from '../../../assets/about-us.svg'

export default function AboutUsSection() {
  return (
    <Section>
      <InfoBox>
        <Header>
          <Title>About Us</Title>
          <Subtitle>We are the best beauty clinic</Subtitle>
        </Header>
        <Content>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </Paragraph>

          <Paragraph>
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </Paragraph>
        </Content>

        <ButtonContainer>
          <Button type="button" className="btn">
            Learn More
          </Button>
          <Link href="#">
            <img src={PlayBtn} alt="Watch Video" />
            <LinkText>Watch Video</LinkText>
          </Link>
        </ButtonContainer>
      </InfoBox>

      <ImageContainer>
        <Image src={AboutPic} alt="About Us" />
      </ImageContainer>
    </Section>
  )
}
