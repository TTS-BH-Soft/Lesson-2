import ContactUsImage from '../../../assets/contact-us.svg'
import ContactUsForm from '../../../components/ContactForm/ContactForm'
import {
  Content,
  Heading,
  Section,
  Title,
  Paragraph,
  FormContainer,
  ImageContainer,
} from './ContactBoxStyled'

export default function ContactBox() {
  return (
    <Section>
      <Title>Contact Us</Title>
      <Content>
        <Heading>Contact service for our customers</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Paragraph>
      </Content>

      <FormContainer>
        <ImageContainer>
          <img src={ContactUsImage} alt="Contact Us" />
        </ImageContainer>

        <ContactUsForm />
      </FormContainer>
    </Section>
  )
}
