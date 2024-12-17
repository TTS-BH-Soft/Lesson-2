import styled from 'styled-components'
import tw from 'twin.macro'

interface ServiceBoxProps {
  reverse?: boolean
}

export const ServiceContainer = tw.div`
  max-w-[1137px] mx-auto flex flex-col
`

export const ServiceBox = styled.div<ServiceBoxProps>`
  ${tw`flex justify-between items-center mb-8 mt-[7rem]`}
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`

export const ContentBox = tw.div`
  max-w-[475px] px-4
`

export const Title = tw.h5`
  [font-weight:600] text-pink-500
`

export const Heading = tw.h2`
  [font-weight:600] text-gray-800 text-2xl mb-2
`

export const Description = tw.p`
  mt-4 text-gray-600 text-sm leading-relaxed
`
