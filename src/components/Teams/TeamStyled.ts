import styled from 'styled-components'
import tw from 'twin.macro'

export const TeamSection = tw.section`
  flex justify-center flex-col text-center -mb-40
  [align-items: space-between]

  // sm:max-w-[400px]
`

export const SectionTitle = tw.h5`
  leading-6 tracking-[0.2px] mt-1 [font-weight: 600]
`
export const MainTitle = tw.h2`
  tracking-[0.19px] mx-0 my-[0.25em] [font-weight: 600]
`
export const Description = tw.p`
  text-[#8b8b8b] text-base tracking-[1.6px] font-normal mx-0 my-[0.7em]
  // sm:(max-w-[350px] mx-auto text-sm)
`
export const TeamBox = tw.div`
  flex flex-wrap justify-center items-center relative
  // sm:flex-col
`
export const TeamItem = styled.div<{ center?: boolean }>`
  ${tw`flex flex-col justify-center items-center w-full transition-all h-[626px] duration-[0.3s] ease-[ease] mx-[30px] my-[6.2rem]`}

  ${({ center }) =>
    center
      ? `
        max-width: 424px; 
        gap: 40px; 
        box-shadow: 0 25px 50px 25px #f6f7ff; 
        border-radius: 42px;
      `
      : `
        max-width: 270px; 
      `}

  &:hover {
    ${tw`shadow-[0_25px_50px_25px_#f6f7ff] max-w-[424px] gap-10 justify-center rounded-[42px]`}
  }

  @media (max-width: 640px) {
    ${tw`flex-col`}
  }
`
export const TeamImage = styled.div`
  img {
    ${tw`w-[146px] h-[146px]`};
  }
`
export const TeamContent = styled.div`
  ${tw`text-center max-w-[270px] my-[3rem]`}

  h5 {
    ${tw`leading-5`} [font-weight: 600]
  }

  h4 {
    ${tw`mt-4 mb-6 text-lg font-semibold leading-[22.5px]`}
  }

  p {
    ${tw`mt-2 leading-[21px] text-sm font-light`}
  }
`

export const TeamSocial = styled.div`
  a {
    ${tw`inline-flex items-center justify-center w-[49px] h-[49px] rounded-full p-6 mx-4 bg-white text-blue-900 shadow-md text-xl transition-transform duration-300`};

    &:hover {
      ${tw`transform scale-110`}
    }
  }
`
