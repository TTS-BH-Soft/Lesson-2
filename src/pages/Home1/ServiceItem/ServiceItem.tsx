import { StyleItem, ServiceContent } from './ItemStyled'

type ServiceItemProps = {
  image: string
  alt: string
  title: string
  description: string
}

export default function ServiceItem({
  image,
  alt,
  title,
  description,
}: ServiceItemProps) {
  return (
    <StyleItem>
      <img src={image} alt={alt} />
      <ServiceContent>
        <h4>{title}</h4>
        <p>{description}</p>
      </ServiceContent>
    </StyleItem>
  )
}
