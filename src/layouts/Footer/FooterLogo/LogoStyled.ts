import tw from 'twin.macro'
import styled from 'styled-components'

export const FooterLogoContainer = tw.div`
  flex-1 max-w-[492px] ml-20 mr-0 mt-24 mb-20
`

export const LogoContent = tw.div`
  ml-[1.9rem] mt-[1.9rem]
`

export const Description = tw.p`
  text-[#d7dbff]
  text-[16px] 
  leading-[20px]
  mt-[1rem]
  tracking-[1.7px]
`

export const Address = tw.address`
  text-[#d7dbff] text-sm leading-[23px] tracking-[1.6px] ml-px mt-[1.4rem]
`

// Styled-component cho AddressBox
export const AddressBox = styled.div`
  ${tw`flex justify-start mt-[0.1rem]`};

  p {
    ${tw`max-w-[140px] text-[#d7dbff] text-sm tracking-[1.7px]`};
  }

  a {
    ${tw`text-[#d7dbff] max-w-[190px] text-sm tracking-[1.6px] ml-[2.6rem]`};
  }
`
