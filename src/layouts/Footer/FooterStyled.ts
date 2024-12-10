import styled from 'styled-components'
import tw from 'twin.macro'
import bgFooter from '../../assets/background/bg-footer.svg'

export const FooterContainer = styled.footer`
  ${tw`w-full h-[705px] bg-cover bg-no-repeat text-[#d7dbff] relative p-[49px] pt-[20px]`}

  background-image: url(${bgFooter});
`

export const FooterContent = tw.div`
  flex mt-24 ml-12
  // lg:flex-col lg:items-center lg:ml-0 lg:mt-12
  // md:flex-col md:items-center md:ml-0 md:mt-12
  sm:mt-8 sm:px-4
`

export const FooterLinks = tw.div`
  flex flex-1 justify-between my-20 mx-32 max-w-[514px]
  lg:items-start lg:my-8 lg:mx-0 lg:gap-[7rem]
  sm:my-4 sm:gap-6
`

export const FooterBottom = tw.div`
  flex justify-between items-end text-base text-[#d7dbff] mt-12 mx-32
  lg:mx-0 lg:flex-col lg:items-center
  md:flex-col md:items-center md:gap-6
  sm:mt-4
`

export const FooterSocial = tw.div`
  flex-1 max-w-[305px] flex justify-between items-center max-h-[28px]
  lg:justify-center lg:gap-6 lg:max-w-none
  sm:flex-wrap sm:gap-4
`

export const FooterCopyright = tw.div`
  ml-1
`

export const CopyrightText = tw.p`
  text-[#d7dbff] text-base leading-7 tracking-wide text-center
  lg:my-8
`

export const BackToTopButton = tw.button`
  w-[36px] h-[36px] absolute bottom-[169px] right-[65px] 
  bg-[#ff64ae] text-white border-none rounded-md cursor-pointer text-lg
  transition-colors duration-300

  sm:bottom-[130px] sm:right-4
  md:bottom-[100px] md:right-5

  hover:bg-[#d85076]

  [&>img]:(pt-1.5 mx-auto)
`
