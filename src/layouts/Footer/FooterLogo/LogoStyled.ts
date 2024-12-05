import tw from 'twin.macro'
import styled from 'styled-components'

export const FooterLogoContainer = tw.div`
  flex-1
  max-w-[492px]
  my-[6rem] ml-[5rem] mr-0
  md:my-[3rem] md:text-center
  sm:my-[2rem]
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
  text-[#d7dbff]
  text-[14px]
  leading-[23px]
  mt-[1.4rem]
  tracking-[1.6px]
`

// Styled-component cho AddressBox
export const AddressBox = styled.div`
  ${tw`flex justify-start mt-[0.1rem] md:justify-center`};

  p {
    ${tw`max-w-[140px] text-[#d7dbff] text-[14px] tracking-[1.7px]`};
  }

  a {
    ${tw`text-[#d7dbff] max-w-[190px] text-[14px] ml-[2.6rem] tracking-[1.6px]`};
  }
`
