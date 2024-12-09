import styled from 'styled-components'
import tw from 'twin.macro'

export const TeamSection = tw.section`
  flex flex-col items-center justify-center mb-[-160px] text-center
  sm:max-w-[400px]
`
export const SectionTitle = tw.h5`
  mt-4 text-sm leading-6 tracking-wide [font-weight: 600]
`
export const MainTitle = tw.h2`
  mt-1 mb-4 text-xl tracking-wide [font-weight: 600]
`
export const Description = tw.p`
  text-gray-500 text-base mt-3 mb-6 tracking-wide font-normal
  sm:(max-w-[350px] mx-auto text-sm)
`
export const TeamBox = tw.div`
  flex flex-wrap justify-center items-center relative
  sm:flex-col
`
export const TeamItem = styled.div<{ center?: boolean }>`
  ${tw`flex flex-col items-center w-full mx-8 mb-8 transition-all duration-300`}

  ${({ center }) =>
    center
      ? `
        max-width: 424px; 
        height: 626px; 
        gap: 40px; 
        box-shadow: 0 25px 50px 25px #f6f7ff; 
        border-radius: 42px;
        justify-content: center;
      `
      : `
        max-width: 270px; 
        height: 439px;
        justify-content: space-between;

      `}

  &:hover {
    ${tw`shadow-lg`}
    max-width: 424px;
    height: 626px;
    gap: 40px;
    border-radius: 42px;
    justify-content: center;
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
  ${tw`text-center max-w-[270px] mt-2`}

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
