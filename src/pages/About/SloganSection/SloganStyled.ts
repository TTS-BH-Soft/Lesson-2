import tw, { styled } from 'twin.macro'
import SloganBg from '../../../assets/About/slogan-image.svg'

export const SloganContainer = styled.div`
  ${tw`h-[529px] flex justify-center items-center my-[8rem]`}
  background-image: url(${SloganBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentBox = tw.div`
  max-w-[732px]
  text-center
`

export const Title = tw.h5`
  text-[#abb4ff]
`

export const Heading = tw.h2`
  text-white
  leading-[45px]
  max-w-[580px]
`

export const Description = tw.p`
  text-[#cacaca]
  max-w-[680px]
`
