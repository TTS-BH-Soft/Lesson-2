import styled from 'styled-components'
import tw from 'twin.macro'
import imageBox from '../../../assets/Service/banner.svg'

export const Section = styled.section`
  ${tw`relative w-full h-[628px] flex justify-center items-center text-center`}
  background-image: url(${imageBox});
  background-size: cover;
  background-position: center;

  // &::before {
  //   ${tw`absolute top-0 left-0 w-full h-full z-10`}
  //   content: "";
  // }
`

export const Content = tw.div`
  relative z-[2] mt-[5rem]
`

export const Title = tw.h2`
  my-[1.3rem] text-[#ffffff] max-w-[480px]
`

export const Subtitle = tw.p`
  max-w-[555px] mb-[2rem] text-[#cacaca]
`
