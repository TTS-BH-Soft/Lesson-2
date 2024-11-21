import ContactCard from "../ContactCard/ContactCard";
import contactData from "../../../data/contactData";
import {
  ContactContainer,
  Title,
  Content,
  Heading,
  Paragraph,
} from "./ContactInfoStyled";

export default function ContactInfo() {
  return (
    <ContactContainer>
      <Title>Get in Touch</Title>
      <Content>
        <Heading>Get direct handling by us</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Paragraph>
      </Content>

      {contactData.map((item) => (
        <ContactCard
          key={item.id}
          image={item.image}
          title={item.title}
          content={item.content}
          subText={item.subText}
          hasShadow={item.hasShadow}
        />
      ))}
    </ContactContainer>
  );
}
