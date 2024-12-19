import {
  CardContainer,
  CardHeader,
  CardContent,
  CategoryTag,
  Title,
  Description,
  ReadMoreButton,
} from './CardStyled'

interface BlogCardProps {
  category: string
  title: string
  description: string
  buttonText: string
  imageSrc?: string // Optional image source
  onClick?: () => void // Optional click handler
}

export default function BlogCard({
  category,
  title,
  description,
  buttonText,
  imageSrc,
  onClick,
}: BlogCardProps) {
  return (
    <CardContainer>
      {imageSrc && (
        <CardHeader>
          <img src={imageSrc} alt={title} tw="w-full h-48 object-cover" />
        </CardHeader>
      )}

      <CardContent>
        <CategoryTag>{category}</CategoryTag>
        <Title>{title}</Title>
        <Description>
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </Description>
        <ReadMoreButton onClick={onClick}>{buttonText}</ReadMoreButton>
      </CardContent>
    </CardContainer>
  )
}
