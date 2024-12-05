import { SocialLinkWrapper } from './SocialLinkStyled'

type SocialLinkProps = {
  key: number
  href: string
  src: string
  alt: string
}

export default function SocialLink({ href, src, alt }: SocialLinkProps) {
  return (
    <SocialLinkWrapper href={href}>
      <img src={src} alt={alt} tw="h-full w-auto" />
    </SocialLinkWrapper>
  )
}
