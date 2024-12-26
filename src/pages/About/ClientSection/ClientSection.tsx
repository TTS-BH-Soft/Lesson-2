import Logo1 from '../../../assets/About/logo-1.svg'
import Logo2 from '../../../assets/About/logo-2.svg'
import Logo3 from '../../../assets/About/logo-3.svg'
import Logo4 from '../../../assets/About/logo-4.svg'
import Logo5 from '../../../assets/About/logo-5.svg'
import {
  ClientContainer,
  ClientContent,
  ClientBox,
  Title,
  Heading,
  Description,
} from './ClientStyled'

export default function ClientSection() {
  return (
    <ClientContainer>
      <ClientContent>
        <Title>Our Clients</Title>
        <Heading>Well - known agencies</Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Description>
      </ClientContent>

      <ClientBox>
        <img src={Logo1} alt="Logo 1" />
        <img src={Logo2} alt="Logo 2" />
        <img src={Logo3} alt="Logo 3" />
        <img src={Logo4} alt="Logo 4" />
        <img src={Logo5} alt="Logo 5" />
      </ClientBox>
    </ClientContainer>
  )
}
