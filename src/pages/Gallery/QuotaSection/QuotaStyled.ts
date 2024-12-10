import styled from 'styled-components'
import tw from 'twin.macro'
import GalleryBg from '../../../assets/Gallery/gallery-bubble.svg'

export const Section = styled.section`
  ${tw`flex justify-center items-center mx-auto`}
  height: 389.63px;
  background: url(${GalleryBg}) no-repeat;
  background-position: right;
`

export const Content = tw.div`
  h-[208px]
`

export const Title = tw.h5`
  mb-[1rem] leading-[20px]
`

export const Heading = tw.h2`
  max-w-[642px] font-semibold leading-[45px]
`

export const Subtitle = tw.p`
  max-w-[561px] mb-[2rem] font-normal leading-[24px]
`

export const Button = tw.button`
  max-w-[316px] h-[58px]
`
