import {
  CardContainer,
  Image,
  Title,
  Content,
  SubText,
} from './ContactCardStyled'

type ContactCardProps = {
  key: number
  image: string
  title: string
  content: string
  subText?: string
  hasShadow?: boolean
}

export default function ContactCard({
  image,
  title,
  content,
  subText,
  hasShadow = false,
}: ContactCardProps) {
  return (
    <CardContainer hasShadow={hasShadow}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      {subText && <SubText>{subText}</SubText>}
    </CardContainer>
  )
}
