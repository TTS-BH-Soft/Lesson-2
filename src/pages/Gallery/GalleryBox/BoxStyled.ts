import styled from 'styled-components'
import tw from 'twin.macro'

export const GalleryContainer = tw.div`
  p-8
  max-w-[1200px]
  my-[3.1rem] mx-auto
`

export const Title = tw.h5`
  mb-[0.8rem] ml-[0.08rem] mt-[0.1rem]
  leading-[20px]
  font-semibold
`

export const HeaderBox = tw.div`
  flex justify-between
`

export const Heading = tw.h2`
  mb-[1.2rem]
  font-semibold
  max-w-[610px]
  max-h-[104px]
  tracking-[0.3px]
`

export const Subtitle = tw.p`
  text-[#8b8b8b]
  font-normal text-[16px] leading-[24px]
  mb-[2rem] mr-[1rem]
  tracking-[2px]
  max-w-[407px] h-[72px]
`

export const ImageGrid = tw.div`
  grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[1.6rem]
  my-[4.3rem]
`

export const ImageCard = styled.div`
  ${tw`rounded-[20px] overflow-hidden`}

  img {
    ${tw`transition-transform duration-300`}
    max-width: 356px;
    max-height: 210px;
    object-fit: cover;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const FooterText = styled.p`
  ${tw`text-[#6c6c6c] text-[16px] max-w-[660px] leading-[24px]`}

  a {
    ${tw`text-[#091156] no-underline font-semibold`}

    &:hover {
      text-decoration: underline;
    }
  }
`
