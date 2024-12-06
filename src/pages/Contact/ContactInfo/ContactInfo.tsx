import ContactCard from '../ContactCard/ContactCard'
import contactData from '../../../data/contactData'
import {
  ContactContainer,
  Title,
  Content,
  Heading,
  Paragraph,
  Card,
} from './ContactInfoStyled'

export default function ContactInfo() {
  return (
    <ContactContainer>
      <Content>
        <Title>Get in Touch</Title>
        <Heading>Get direct handling by us</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Paragraph>
      </Content>

      <Card>
        {contactData.map(item => (
          <ContactCard
            key={item.id}
            image={item.image}
            title={item.title}
            content={item.content}
            subText={item.subText}
            hasShadow={item.hasShadow}
          />
        ))}
      </Card>
    </ContactContainer>
  )
}
