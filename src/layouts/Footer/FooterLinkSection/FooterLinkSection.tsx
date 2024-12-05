import { ReactNode } from 'react'
import { LinkSection, FooterLinkTitle, FooterLinkList } from './FooterSection'

interface FooterLinkSectionProps {
  title: string
  children: ReactNode
}

export default function FooterLinkSection({
  title,
  children,
}: FooterLinkSectionProps) {
  return (
    <LinkSection>
      <FooterLinkTitle>{title}</FooterLinkTitle>

      <FooterLinkList>{children}</FooterLinkList>
    </LinkSection>
  )
}
