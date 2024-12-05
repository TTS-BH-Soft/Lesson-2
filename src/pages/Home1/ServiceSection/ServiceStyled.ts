import tw, { styled } from 'twin.macro'

export const Section = styled.section`
  ${tw`flex flex-col items-center bg-no-repeat bg-contain pt-[100px] relative z-[88]`}
  background-image: url("../../assets/background/bg-about.svg");
  background-position: bottom right;

  @media (max-width: 768px) {
    ${tw`pt-0`}
  }

  @media (max-width: 640px) {
    ${tw`bg-center`}
  }

  @media (max-width: 480px) {
    ${tw`max-w-[390px] justify-center mx-auto`}
  }
`
export const Header = styled.div`
  ${tw`max-w-[848px] flex flex-col items-center text-center`}

  h5 {
    ${tw`text-[16.2px] leading-[23px]`}
  }

  h2 {
    ${tw`mt-[10px] font-semibold max-w-[732px] h-[97px]`}
  }

  p {
    ${tw`mt-[12.5px] ml-[1px] font-normal`}
  }

  @media (max-width: 768px) {
    ${tw`mt-[4rem]`}
    p {
      ${tw`w-[600px]`}
    }
  }

  @media (max-width: 640px) {
    ${tw`mt-0`}
  }

  @media (max-width: 480px) {
    ${tw`max-w-[390px]`}
    p {
      ${tw`w-[370px]`}
    }
  }
`
export const ServicesBox = styled.div`
  ${tw`flex justify-center gap-[3.47rem] pt-[80px] bg-white`}

  @media (max-width: 768px) {
    ${tw`flex-col gap-[1.5rem] pt-[60px]`}
  }
`
