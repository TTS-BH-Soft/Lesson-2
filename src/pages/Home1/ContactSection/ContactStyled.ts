import tw, { styled } from 'twin.macro'
import bgContact from '../../../assets/background/bg-contact.jpg'

export const ContactBox = styled.section`
  ${tw`p-8 mb-1 bg-no-repeat`}
  // background-position: 82%;
  background-image: url(${bgContact});

  @media (max-width: 768px) {
    ${tw`bg-cover p-6`}
  }

  @media (max-width: 640px) {
    ${tw`p-4`}
  }
`

export const Wrapper = tw.div`
  pt-[175px] flex items-start max-w-[1440px] mx-auto

  // md:(flex-col items-center pt-[100px])
  // sm:(pt-[80px])
`

export const ImageContainer = styled.div`
  ${tw`m-[7.2rem 6.3rem 7.3rem 7.4rem]`}

  img {
    ${tw`max-w-[520px] h-[614px] mt-[2.8rem]`}
  }

  @media (max-width: 768px) {
    ${tw`m-0 text-center`}

    img {
      ${tw`w-[70%] h-auto`}
    }
  }

  @media (max-width: 640px) {
    img {
      ${tw`w-full mt-[1.5rem]`}
    }
  }
`

export const Content = tw.div`
  max-w-[520px]

  md:(max-w-full text-center)
  sm:px-4
`

export const Title = tw.h5`
  mb-[0.1rem]

  md:(text-[1rem] text-center)
`

export const Heading = tw.h2`
  text-[2.2rem] my-[0.6rem] leading-[45px] max-w-[404px] font-[550] tracking-[0.4px]

  md:(mx-auto text-center text-[1.8rem] leading-[38px])
  sm:(text-[1.5rem] leading-[32px])
`

export const Description = tw.p`
  my-[1.2rem] tracking-[1.65px]

  md:text-center
`
