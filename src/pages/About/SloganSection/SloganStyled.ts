import tw, { styled } from 'twin.macro'
import SloganBg from '../../../assets/About/slogan-image.svg'

export const SloganContainer = styled.div`
  ${tw`h-[529px] flex justify-center items-center mt-[13.4rem] mb-[5rem]`}
  background-image: url(${SloganBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentBox = tw.div`
  // max-w-[732px]
  mx-auto
  text-center
`

export const Title = tw.h5`
  text-[#abb4ff]
  [font-weight:600]
`

export const Heading = tw.h2`
  text-white
  leading-[45px]
  max-w-[580px]
  mx-auto
  mt-[1rem]
  mb-[0.3rem]
  [font-weight:600]
`

export const Description = tw.p`
  text-[#cacaca]
  max-w-[630px]
`
