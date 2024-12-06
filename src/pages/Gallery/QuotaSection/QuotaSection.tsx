import {
  Section,
  Content,
  Title,
  Heading,
  Subtitle,
  Button,
} from './QuotaStyled'

export default function QuotaSection() {
  return (
    <Section>
      <Content>
        <Title>Get The Quota</Title>
        <Heading>
          Want to be handled by our professional team immediately?
        </Heading>
        <Subtitle>
          Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
          cras tellus enim.
        </Subtitle>
      </Content>
      <Button className="btn">Make an Appointment</Button>
    </Section>
  )
}
