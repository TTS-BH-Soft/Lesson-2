import ContactUsImage from '../../../assets/contact-us.svg'
import {
  ContactBox,
  Wrapper,
  ImageContainer,
  Content,
  Title,
  Heading,
  Description,
} from './ContactStyled'

import ContactUsForm from '../../../components/ContactForm/ContactForm'

export default function ContactSection() {
  return (
    <ContactBox id="contact-us">
      <Wrapper>
        <ImageContainer>
          <img src={ContactUsImage} alt="Contact Us" />
        </ImageContainer>

        <Content>
          <Title>Contact Us</Title>
          <Heading>Send your inquiry to our expert team</Heading>
          <Description>
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </Description>
          <ContactUsForm />
        </Content>
      </Wrapper>
    </ContactBox>
  )
}
