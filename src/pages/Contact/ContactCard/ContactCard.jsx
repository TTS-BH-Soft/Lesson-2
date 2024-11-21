import {
  CardContainer,
  Image,
  Title,
  Content,
  SubText,
} from "./ContactCardStyled";

export default function ContactCard({
  image,
  title,
  content,
  subText,
  hasShadow,
}) {
  return (
    <CardContainer hasShadow={hasShadow}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      {subText && <SubText>{subText}</SubText>}
    </CardContainer>
  );
}
