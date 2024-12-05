import { Link, LinkItem } from './FooterLinkStyled'
import Vector from '../../../assets/vector.svg'

interface FooterLinkItemProps {
  alt: string
  link: string
}

export default function FooterLinkItem({ alt, link }: FooterLinkItemProps) {
  return (
    <LinkItem>
      <img src={Vector} alt={alt} />
      <Link href="#">{link}</Link>
    </LinkItem>
  )
}
