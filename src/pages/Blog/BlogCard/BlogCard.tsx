import {
  CardContainer,
  CardHeader,
  CardContent,
  CategoryTag,
  Category,
  Title,
  Description,
  ReadMoreButton,
} from './CardStyled'

interface BlogCardProps {
  category: string
  title: string
  description: string
  buttonText: string
  imageSrc?: string
  onClick?: () => void
}

export default function BlogCard({
  category,
  title,
  description,
  buttonText,
  imageSrc,
  onClick = () => {},
}: BlogCardProps) {
  return (
    <CardContainer>
      {imageSrc && (
        <CardHeader>
          <img src={imageSrc} alt={title} tw="w-full h-48 object-cover" />
        </CardHeader>
      )}

      <CardContent>
        <Category>
          <CategoryTag>{category}</CategoryTag>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Category>
        <ReadMoreButton onClick={onClick} className="btn">
          {buttonText}
        </ReadMoreButton>
      </CardContent>
    </CardContainer>
  )
}
